import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgFJ-2Nf86c34DO08Mr6D3N-88e0nWkTI",
  authDomain: "flouby-chermanusprime.firebaseapp.com",
  projectId: "flouby-chermanusprime",
  storageBucket: "flouby-chermanusprime.firebasestorage.app",
  messagingSenderId: "710583685873",
  appId: "1:710583685873:web:13cffad84e6d1e047c0f50",
  measurementId: "G-6KD6VNED5R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let uid = null;
signInAnonymously(auth).catch(e => console.error("Auth:", e));
onAuthStateChanged(auth, u => { uid = u ? u.uid : null; });

window.flouby = {
  async guardarProgreso(curso, lecciones) {
    if (!uid) return;
    await setDoc(doc(db, "usuarios", uid, "progreso", curso), { lecciones });
  },
  async leerProgreso(curso) {
    if (!uid) return null;
    const snap = await getDoc(doc(db, "usuarios", uid, "progreso", curso));
    return snap.exists() ? snap.data() : null;
  }
};
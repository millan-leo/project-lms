
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBgFJ-2Nf86c34DO08Mr6D3N-88e0nWkTI",
    authDomain: "flouby-chermanusprime.firebaseapp.com",
    projectId: "flouby-chermanusprime",
    storageBucket: "flouby-chermanusprime.firebasestorage.app",
    messagingSenderId: "710583685873",
    appId: "1:710583685873:web:13cffad84e6d1e047c0f50",
    measurementId: "G-6KD6VNED5R"
};

// INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let uid = null;

// Promesa para esperar a que Firebase identifique al usuario
let resolverAutenticacion;

const usuarioListo = new Promise((resolve) => {
    resolverAutenticacion = resolve;
});

// INICIAR SESIÓN ANÓNIMA
signInAnonymously(auth).catch((error) => {
    console.error("Error al iniciar sesión:", error);
});

// DETECTAR AL USUARIO
onAuthStateChanged(auth, (usuario) => {
    uid = usuario ? usuario.uid : null;
    resolverAutenticacion(uid);
    console.log(
        uid
            ? "Flouby: usuario conectado a Firebase."
            : "Flouby: no hay usuario autenticado."
    );
});

// GUARDAR Y LEER EL PROGRESO
window.flouby = {
    async esperarUsuario() {
        return await usuarioListo;
    },

    async guardarProgreso(curso, progreso) {
        await usuarioListo;

        if (!uid) {
            throw new Error("No se pudo identificar al usuario.");
        }

        try {
            await setDoc(
                doc(db, "usuarios", uid, "progreso", String(curso)),
                {
                    curso: String(curso),
                    progreso: progreso,
                    actualizado: new Date().toISOString()
                },
                { merge: true }
            );

            console.log("Progreso guardado:", curso);
            return true;
        } catch (error) {
            console.error("Error al guardar el progreso:", error);
            throw error;
        }
    },

    async leerProgreso(curso) {
        await usuarioListo;

        if (!uid) {
            throw new Error("No se pudo identificar al usuario.");
        }

        try {
            const referencia = doc(
                db,
                "usuarios",
                uid,
                "progreso",
                String(curso)
            );

            const documento = await getDoc(referencia);

            if (documento.exists()) {
                return documento.data();
            }

            return null;
        } catch (error) {
            console.error("Error al leer el progreso:", error);
            throw error;
        }
    }
};

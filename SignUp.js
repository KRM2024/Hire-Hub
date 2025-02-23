import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5Fu3PaIPLlo2RSfJuWa99E3dg1PO4UaM",
    authDomain: "hire-hub-3d8cb.firebaseapp.com",
    databaseURL: "https://hire-hub-3d8cb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hire-hub-3d8cb",
    storageBucket: "hire-hub-3d8cb.appspot.com",
    messagingSenderId: "150244514653",
    appId: "1:150244514653:web:aec0c09a62d8f9a2f9a6b4",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getElementVal('name');
    const emailId = getElementVal('email');
    const phone = getElementVal('number');
    const password = getElementVal('password');
    const confirmPassword = getElementVal('confirmpassword');

    if (password !== confirmPassword) {
        document.getElementById('feedback').textContent = 'Passwords do not match!';
        return;
    }

    saveForm(name, emailId, phone, password);
}

const getElementVal = (id) => document.getElementById(id).value;

const saveForm = (name, emailId, phone, password) => {
    set(ref(database, 'form/' + emailId.replace('.', '_')), {
        name: name,
        email: emailId,
        phone: phone,
        password: password
    }).then(() => {
        document.getElementById('feedback').textContent = 'Registration successful!';
    }).catch((error) => {
        let errorMessage = 'Error occurred: ';
        errorMessage += error.message;

        document.getElementById('feedback').textContent = errorMessage;
    });
};
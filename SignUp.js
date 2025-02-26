const firebaseConfig = {
    apiKey: "AIzaSyCwY-nXXvXpdIJl9MP1XGmYTxCucFG_roI",
    authDomain: "hire-hub-1d86d.firebaseapp.com",
    databaseURL: "https://hire-hub-1d86d-default-rtdb.firebaseio.com",
    projectId: "hire-hub-1d86d",
    storageBucket: "hire-hub-1d86d.firebasestorage.app",
    messagingSenderId: "1077634909348",
    appId: "1:1077634909348:web:4fc0fb8594d7be0b181231",
    measurementId: "G-Q9LGEYQ35G"
};
firebase.initializeApp(firebaseConfig);
var RegistrationFormDB = firebase.database().ref('RegistrationForm');
document.getElementById('RegistrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    console.log(name, email, password);
    saveData(name, email, password);
    document.getElementById('RegistrationForm').reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const saveData = (name, email, password) => {
    var newRegistrationForm = RegistrationFormDB.push();
    newRegistrationForm.set({
        name: name,
        email: email,
        password: password
    })
    .then(() => {
        alert("Registered Successfully.");
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
        alert("Error saving data. Please try again.");
    });
};
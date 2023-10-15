
//button visibility Funcionality
var singinVisible = false;

function openSingin() {
    var loginInnerSingin = document.getElementById("login-inner-singin");

    if (singinVisible) {
        loginInnerSingin.style.animation = "fadeOut 1s";
        setTimeout(function () {
            loginInnerSingin.style.display = "none";
        }, 500);
    } else {
        loginInnerSingin.style.display = "block";
        loginInnerSingin.style.animation = "fadeIn 1s";
    }


    singinVisible = !singinVisible;
}

//Simulation of registry and login

var loginUsersData = []; 

// Loading data from local storage in browser
function loadUsersData() {
    var storedData = localStorage.getItem("userData");

    if (storedData) {
        loginUsersData = JSON.parse(storedData);
    } else {
        // inicialize if theres none
        loginUsersData = [];
    }
}

loadUsersData();

//Login function that verify the correct data
function loginUser() {
    event.preventDefault();
    console.log("Consultando usuario")
    var nombre = document.getElementById("nameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    if (!nombre || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // find by name
    var user = loginUsersData.find(function (user) {
        return user.nombre === nombre;
    });

    if (user) {
        // Usuario encontrado, verificar la contraseña
        if (user.password === password) {


            // here goes the logic to change the pageeeeee TODO
            sessionStorage.setItem("username", nombre);
            window.location.href = "index.html";

        } else {
            alert("La contraseña es incorrecta. Inténtelo de nuevo.");
        }
    } else {
        alert("El usuario no existe. Por favor, intentelo de nuevo.");
    }
}

//register user function 
function registerUser() {
    event.preventDefault();
    console.log("registro usuario")
    var nombre = document.getElementById("nameSingin").value;
    var password = document.getElementById("passwordSingin").value;


    if (!nombre || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var userExists = loginUsersData.find(function (user) {
        return user.nombre === nombre;
    });

    if (userExists) {
        alert("El usuario ya existe. Por favor, elija otro nombre de usuario.");
    } else {
        loginUsersData.push({ nombre: nombre, password: password, edad:"", pais:"", genero:"" });
        localStorage.setItem("userData", JSON.stringify(loginUsersData));


        
        // here goes the logic to change the pageeeeee TODO
        sessionStorage.setItem("username", nombre);
        document.getElementById("nameSingin").value = "";
        document.getElementById("passwordSingin").value = "";
        alert("Usuario registrado exitosamente.");
        window.location.href = "index.html";
    }
}

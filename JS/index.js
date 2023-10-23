//logic for the current session user
function findUser() {
    // session storage username
    var username = sessionStorage.getItem("username");
    if (username) {
        // Envía una solicitud al servidor para obtener los datos del usuario
        $.ajax({
            type: 'POST',  // Puedes usar GET o POST según tus preferencias y necesidades
            url: '../PHP/getuserdata.php',
            data: { username: username },  // Envía el nombre de usuario al servidor
            success: function(response) {
                if (response && response.name) {
                    console.log("Datos del usuario:");
                    console.log("Nombre: " + response.name);
                    document.getElementById("profile-name").textContent = response.name;

                    if (response.age) {
                        console.log("Edad: " + response.age);
                        document.getElementById("profile-age").textContent = response.age;
                    } else {
                        console.log("Edad: AUN NO HAY EDAD REGISTRADA");
                        document.getElementById("profile-age").textContent = "";
                    }

                    if (response.gender) {
                        console.log("Genero: " + response.gender);
                        document.getElementById("profile-gender").textContent = response.gender;
                    } else {
                        console.log("Genero: AUN NO HAY GENERO REGISTRADO");
                        document.getElementById("profile-gender").textContent = "";
                    }

                    if (response.country) {
                        console.log("País: " + response.country);
                        document.getElementById("profile-country").textContent = response.country;
                    } else {
                        console.log("País: AUN NO HAY PAIS REGISTRADO");
                        document.getElementById("profile-country").textContent = "";
                    }
                } else {
                    console.log("Ningún usuario ha iniciado sesión o no se encontró el usuario.");
                    noLogin();
                }
            }
        });
    } else {
        console.log("Ningún usuario ha iniciado sesión.");
        noLogin();
    }
    // if (username) {
    //     // Busca al usuario por nombre en los datos almacenados en localStorage
    //     var storedData = localStorage.getItem("userData");
    //     if (storedData) {
    //         var loginUsersData = JSON.parse(storedData);
    //         var user = loginUsersData.find(function (user) {
    //             return user.nombre === username;
    //         });

    //         if (user) {
    //             console.log("Datos del usuario:");


    //             console.log("Nombre: " + user.nombre);
    //             document.getElementById("profile-name").textContent = user.nombre;

    //             if(user.edad){
    //                 console.log("Edad: " + user.edad);
    //                 document.getElementById("profile-age").textContent = user.edad;
    //             }else{
    //                 console.log("Edad: AUN NO HAY EDAD REGISTRADA");
    //                 document.getElementById("profile-age").textContent = "";
    //             }

    //             if(user.genero){
    //                 console.log("Genero: " + user.genero);
    //                 document.getElementById("profile-gender").textContent = user.genero;
    //             }
    //             else{
    //                 console.log("País: AUN NO HAY GENERO REGISTRADO");
    //                 document.getElementById("profile-gender").textContent = "";
    //             }

    //             if(user.pais){
    //                 console.log("País: " + user.pais);
    //                 document.getElementById("profile-country").textContent = user.pais;
    //             }
    //             else{
    //                 console.log("País: AUN NO HAY PAIS REGISTRADO");
    //                 document.getElementById("profile-country").textContent = "";
    //             }
    //         } else {
    //             console.log("Usuario no encontrado en localStorage.");
    //         }
    //     } else {
    //         console.log("No hay datos de usuario en localStorage.");
    //     }
    // } else {
    //     console.log("Ningún usuario ha iniciado sesión.");
    //     noLogin();
    // }
    // return user;
}
findUser();

function updateUserData(){
    event.preventDefault();
    console.log("actualizando usuario")
    var age = $('#ageUpdate').val();
    var gender = $('#genderUpdate').val();
    var country = $('#countryUpdate').val();

    var user_id = sessionStorage.getItem("username");
    $.ajax({
        type: 'POST',
        url: '../PHP/updatedata.php',
        data: {
            age: age,
            gender: gender,
            country: country,
            user_id: user_id
        },
        success: function(response) {
            if (response.success) {
                // Datos actualizados con éxito
                alert(response.message);
                location.reload();
            } else {
                // Error al actualizar los datos
                alert(response.message);
            }
        }
    });
    // var age = document.getElementById("ageUpdate").value;
    // var gender = document.getElementById("genderUpdate").value;
    // var country = document.getElementById("countryUpdate").value;

    // user.edad = age;
    // user.genero = gender;
    // user.pais = country;

    // var storedData = JSON.parse(localStorage.getItem("userData"));
    // if (storedData) {
    //     // Encuentra el índice del usuario actual en el arreglo
    //     var index = storedData.findIndex(function (u) {
    //         return u.nombre === user.nombre;
    //     });

    //     // Actualiza los datos en el arreglo
    //     if (index !== -1) {
    //         storedData[index] = user;
    //     }

    //     // Guarda el arreglo actualizado en localStorage
    //     localStorage.setItem("userData", JSON.stringify(storedData));
    // }

    // location.reload();
    
}



//calling the update modal
const modalContactContainer = document.getElementById("update-data-box-container");
fetch("updateData.html")
    .then(response => response.text())
    .then(data => {
        modalContactContainer.innerHTML = data;
});

//managging the modal
function openModal(){
    document.querySelector('.update-data-box').style.display ="flex";
    document.querySelector('.bg-update-data-box').style.display = 'block';
}
function closeModal(){
    document.querySelector('.update-data-box').style.display = 'none';
    document.querySelector('.bg-update-data-box').style.display = 'none';
}

//No login funcioon
function noLogin(){
    document.querySelector('.noLogin').style.display ="flex";
    logOut();

}

//Log out
function logOut(){
    
    sessionStorage.removeItem("username");
    setTimeout(function () {
        window.location.href = "Login.html";
      }, 1500);
}

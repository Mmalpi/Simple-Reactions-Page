  // Recupera la variable de sesión 'publicaciones' o crea una nueva si no existe.
  var publicaciones = JSON.parse(sessionStorage.getItem('publicaciones')) || [
        {
            id: 1,
            titulo: "BORN PINK",
            imagen: "../IMG/bornpink.jpg",
            descripcion: "El álbum aborda temas como el amor, la confianza en uno mismo, el autoestima, la lucha contra la fama y los detractores, etc.",
            likes: 0,
            dislikes: 0
        },
        {
            id: 2,
            titulo: "BORN TO DIE",
            imagen: "../IMG/borntodie.jpg",
            descripcion: '"these will be the last words you ever say to me, this is the last time we ever see each other. Because after this, you will be dead."',
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            titulo: "DISCOVERY",
            imagen: "../IMG/discovery.jpg",
            descripcion: " La música de 'Discovery' se caracteriza por su fusión de elementos de música electrónica con influencias del funk, disco y pop, creando un sonido distintivo que ha sido muy influyente en la música electrónica contemporánea.",
            likes: 0,
            dislikes: 0
        },
        {
            id: 4,
            titulo: "BE",
            imagen: "../IMG/dynamite.png",
            descripcion: "Este álbum es notable porque refleja las experiencias y emociones del grupo durante la pandemia de COVID-19. Contiene canciones que exploran temas relacionados con la conexión, la esperanza y la resiliencia en un momento difícil.",
            likes: 0,
            dislikes: 0
        },
        {
            id: 5,
            titulo: "1989",
            imagen: "../IMG/1989.jpg",
            descripcion: "Este álbum marcó un punto de inflexión en la carrera de Taylor Swift y la consolidó como una de las artistas más influyentes de la música pop contemporánea. Su transición del country al pop en '1989' demostró su versatilidad como cantante y compositora.",
            likes: 0,
            dislikes: 0
        },
        {
            id: 6,
            titulo: "GRADUATION",
            imagen: "../IMG/graduation.jpg",
            descripcion: "EL MEJOR ALBUM DEL MEJOR ARTISTA DEL MUNDO KANYE > TS",
            likes: 0,
            dislikes: 0
        },
       
];



//Setting the likes
function updateSessionStorage() {
    // Guarda la variable 'publicaciones' en la sesión.
    sessionStorage.setItem('publicaciones', JSON.stringify(publicaciones));
}


function renderPublicaciones() {
    // Borra cualquier contenido previo en el contenedor.
    container.innerHTML = '';

    publicaciones.forEach(function(publicacion) {
        var article = document.createElement("article");
        var header = document.createElement("header");
        var h3 = document.createElement("h3");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");
        var p = document.createElement("p");
        var buttonDiv = document.createElement("div");
        var likeButton = document.createElement("button");
        var dislikeButton = document.createElement("button");

        h3.textContent = publicacion.titulo;
        img.src = publicacion.imagen;
        img.alt = publicacion.descripcion;
        figcaption.textContent = publicacion.descripcion;
        p.textContent = "Likes: " + publicacion.likes + " | Dislikes: " + publicacion.dislikes;
        likeButton.textContent = "Like";
        dislikeButton.textContent = "Dislike";

        likeButton.addEventListener("click", function() {
            publicacion.likes++;
            p.textContent = "Likes: " + publicacion.likes + " | Dislikes: " + publicacion.dislikes;
            updateSessionStorage(); // Actualiza el almacenamiento en sesión
        });

        dislikeButton.addEventListener("click", function() {
            publicacion.dislikes++;
            p.textContent = "Likes: " + publicacion.likes + " | Dislikes: " + publicacion.dislikes;
            updateSessionStorage(); // Actualiza el almacenamiento en sesión
        });

        header.appendChild(h3);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(header);
        article.appendChild(figure);
        article.appendChild(p);
        buttonDiv.appendChild(likeButton);
        buttonDiv.appendChild(dislikeButton);
        article.appendChild(buttonDiv);
        container.appendChild(article);
    });
}

// Renderiza las publicaciones al cargar la página.
var container = document.getElementById("publicaciones-container");
renderPublicaciones();
  // Recupera la variable de sesión 'publicaciones' o crea una nueva si no existe.
  var publicaciones = JSON.parse(sessionStorage.getItem('publicaciones')) || [
        {
            id: 1,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
        {
            id: 2,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
        {
            id: 4,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
        {
            id: 5,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
        {
            id: 6,
            titulo: "Título de la Publicación 1",
            imagen: "imagen1.jpg",
            descripcion: "Descripción de la Publicación 1",
            likes: 0,
            dislikes: 0
        },
       
];

var container = document.getElementById("publicaciones-container");

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
renderPublicaciones();
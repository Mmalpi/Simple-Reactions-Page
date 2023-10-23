<?php
// Conexión a la base de datos
$servername = "localhost";  
$username = "root";         
$password = "";            
$database = "foromusical";  
$conn = new mysqli($servername, $username, $password, $database);

// Verifica si la conexión a la base de datos es exitosa
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$username = $_POST["username"];

if ($username) {
    // Realiza una consulta para obtener los datos del usuario por nombre de usuario
    $sql = "SELECT * FROM users WHERE name = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Obtiene los datos del usuario
        $user = $result->fetch_assoc();
        // Devuelve los datos como JSON
        header('Content-Type: application/json');
        echo json_encode($user);
    } else {
        // Usuario no encontrado en la base de datos
        echo "Usuario no encontrado en la base de datos.";
    }
} else {
    // No se proporcionó un nombre de usuario válido
    echo "Ningún nombre de usuario válido proporcionado.";
}

?>

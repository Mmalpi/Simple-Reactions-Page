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

// Obtén los valores del nuevo usuario desde la solicitud POST
$name = $_POST['name'];
$password = $_POST['password'];

// Verifica si el nombre de usuario ya existe en la base de datos
$checkIfExistsSQL = "SELECT * FROM users WHERE name = '$name'";
$checkResult = $conn->query($checkIfExistsSQL);

if ($checkResult->num_rows > 0) {
    $response = array(
        'success' => false,
        'message' => 'El nombre de usuario ya está en uso'
    );
} else {
    // Inserta el nuevo usuario en la base de datos
    $insertSQL = "INSERT INTO users (name, password) VALUES ('$name', '$password')";

    if ($conn->query($insertSQL) === TRUE) {
        $response = array(
            'success' => true,
            'message' => 'Usuario registrado con éxito'
        );
    } else {
        $response = array(
            'success' => false,
            'message' => 'Error al registrar el usuario: ' . $conn->error
        );
    }
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cierra la conexión a la base de datos
$conn->close();

?>
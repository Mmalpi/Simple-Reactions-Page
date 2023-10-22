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

// Obtiene los valores enviados desde el formulario
$name = $_POST['name'];
$password = $_POST['password'];

// Consulta la base de datos para verificar las credenciales
$sql = "SELECT * FROM users WHERE name = '$name'";
$result = $conn->query($sql);

$response = array(); // Crear un array para la respuesta

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if ($row['password'] == $password) {
        $response['success'] = true;
        $response['message'] = "Acceso concedido";
        $response['user'] = $row;
    } else {
        $response['success'] = false;
        $response['message'] = "Contraseña incorrecta";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Usuario no encontrado";
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cierra la conexión a la base de datos
$conn->close();
?>
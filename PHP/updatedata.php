<?php
$servername = "localhost";  
$username = "root";         
$password = "";            
$database = "foromusical";  
$conn = new mysqli($servername, $username, $password, $database);

// Verifica si la conexión a la base de datos es exitosa
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Obtén los valores de edad, género y país desde la solicitud POST
$age = $_POST['age'];
$gender = $_POST['gender'];
$country = $_POST['country'];
$user_id = $_POST['user_id']; 

// Actualiza los campos en la base de datos
$updateSQL = "UPDATE users SET age = '$age', gender = '$gender', country = '$country' WHERE name = '$user_id'";

if ($conn->query($updateSQL) === TRUE) {
    $response = array(
        'success' => true,
        'message' => 'Datos actualizados con éxito'
    );
} else {
    $response = array(
        'success' => false,
        'message' => 'Error al actualizar los datos: ' . $conn->error
    );
}

// Devuelve la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cierra la conexión a la base de datos
$conn->close();
?>

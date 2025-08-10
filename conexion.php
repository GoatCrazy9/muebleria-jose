<?php
$servername = "tu servidor";
$username = "tu usuario";
$password = "tu contraseña";
$dbname = "nombre de tu bd";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>

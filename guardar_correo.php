<?php
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['correo'])) {
    $correo = trim($_POST['correo']);

    if (!empty($correo) && filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $stmt = $conn->prepare("INSERT INTO usuarios (correo) VALUES (?)");
        $stmt->bind_param("s", $correo);

        if ($stmt->execute()) {
            // Guardado correctamente
        }
        $stmt->close();
    }
}

$conn->close();

// Redirigir a la página principal
header("Location: index.html");
exit();
?>

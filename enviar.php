<?php

// Importar clases necesarias de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluir los archivos fuente de PHPMailer
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Solo procesar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nombre'])) {
    $nombre   = htmlspecialchars($_POST['nombre']);
    $email    = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $asunto   = htmlspecialchars($_POST['asunto']);
    $mensaje  = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Cambia si usas otro proveedor
        $mail->SMTPAuth   = true;
        $mail->Username   = 'tu correo'; // Tu correo
        $mail->Password   = 'tu contraseña'; // Contraseña de aplicación
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Remitente y destinatario
        $mail->setFrom($email, $nombre);
        $mail->addAddress('tu correo', 'Mueblería José');

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = $asunto ?: 'Nuevo mensaje de la web';
        $mail->Body    = "
            <h3>Nuevo mensaje desde el formulario de contacto</h3>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> {$telefono}</p>
            <p><strong>Mensaje:</strong> {$mensaje}</p>
        ";
        $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\nTeléfono: {$telefono}\nMensaje: {$mensaje}";

       if ($mail->send()) {
            header("Location: index.html?status=ok");
            exit;
        } else {
            header("Location: index.html?status=error");
            exit;
        }

    } catch (Exception $e) {
        header("Location: index.html?status=error");
        exit;
    }
} else {
    echo "Método no permitido.";
}


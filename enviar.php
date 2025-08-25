<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nombre'])) {
    $nombre   = htmlspecialchars($_POST['nombre']);
    $email    = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $asunto   = htmlspecialchars($_POST['asunto']);
    $mensaje  = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mauriciourquiza0@gmail.com';
        $mail->Password   = 'untiuxvavyjrhamq';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('mauriciourquiza0@gmail.com', $nombre);
        $mail->addAddress('mauriciourquiza0@gmail.com', 'Mueblería José');

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
            echo "ok";
        } else {
            echo "error";
        }
    } catch (Exception $e) {
        echo "error";
    }
} else {
    echo "error";
}
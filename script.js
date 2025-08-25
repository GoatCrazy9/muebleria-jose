document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[action="enviar.php"]');
    const btnEnviar = document.getElementById('btn-enviar');
    const btnEnviando = document.getElementById('btn-enviando');

    // Crear contenedor para el mensaje
    let mensajeDiv = document.createElement('div');
    mensajeDiv.id = 'mensaje-resultado';
    mensajeDiv.style.marginTop = '16px';
    form.appendChild(mensajeDiv);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        btnEnviar.style.display = 'none';
        btnEnviando.style.display = 'inline-flex';
        mensajeDiv.textContent = '';

        const formData = new FormData(form);

        fetch('enviar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(text => {
            btnEnviando.style.display = 'none';
            btnEnviar.style.display = 'inline-block';
            if (text.includes('ok') || text.includes('Mensaje enviado correctamente')) {
                mensajeDiv.textContent = '¡Mensaje enviado con éxito!';
                mensajeDiv.style.color = 'green';
                form.reset();
            } else {
                mensajeDiv.textContent = 'Hubo un error al enviar el mensaje.';
                mensajeDiv.style.color = 'red';
            }
        })
        .catch(() => {
            btnEnviando.style.display = 'none';
            btnEnviar.style.display = 'inline-block';
            mensajeDiv.textContent = 'Hubo un error al enviar el mensaje.';
            mensajeDiv.style.color = 'red';
        });
    });
});
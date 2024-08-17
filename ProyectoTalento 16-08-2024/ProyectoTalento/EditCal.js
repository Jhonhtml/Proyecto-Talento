document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-btn');
    const saveButtons = document.querySelectorAll('.save-btn');
    const customAlert = document.getElementById('customAlert');
    const closeAlertButton = document.querySelector('.close-alert-btn');

    // Función para mostrar la alerta
    function showAlert(message) {
        const alertText = document.querySelector('.custom-alert-text');
        alertText.textContent = message;
        customAlert.classList.remove('hidden');
    }

    // Función para ocultar la alerta
    function hideAlert() {
        customAlert.classList.add('hidden');
    }

    // Manejar eventos para botones de editar y guardar
    editButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const editableCells = row.querySelectorAll('td');
            editableCells.forEach(cell => cell.setAttribute('contenteditable', 'true'));
            btn.style.display = 'none'; // Ocultar botón de editar
            saveButtons[index].style.display = 'inline-block'; // Mostrar botón de guardar
        });
    });

    saveButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const editableCells = row.querySelectorAll('td[contenteditable="true"]');
            editableCells.forEach(cell => cell.setAttribute('contenteditable', 'false'));
            btn.style.display = 'none'; // Ocultar botón de guardar
            editButtons[index].style.display = 'inline-block'; // Mostrar botón de editar
            showAlert('¡Guardado exitosamente!'); // Mostrar alerta de éxito
        });
    });

    // Evento de clic para el botón de cerrar la alerta
    closeAlertButton.addEventListener('click', hideAlert);

    // Ocultar alerta cuando se hace clic fuera de ella
    window.addEventListener('click', function (event) {
        if (event.target === customAlert) {
            hideAlert();
        }
    });
});
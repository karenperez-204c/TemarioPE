document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleIndex');
    const indexNav = document.getElementById('indice');

    toggleButton.addEventListener('click', function() {
        indexNav.classList.toggle('show');
    });
});

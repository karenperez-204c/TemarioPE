document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleIndex');
    const indexNav = document.getElementById('indice');

    toggleButton.addEventListener('click', function() {
        indexNav.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideButton = toggleButton.contains(event.target);
        if (!isClickInsideButton) {
            indexNav.classList.remove('show');
        }
    });
    
    indexNav.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

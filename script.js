// script.js
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('clickable-image');
    const sound = document.getElementById('sound');

    image.addEventListener('click', function() {
        sound.play();
    });
});

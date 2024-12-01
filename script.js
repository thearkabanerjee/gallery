function enterGallery() {
    document.getElementById('front-page').classList.add('hidden');
    document.getElementById('gallery-page').classList.remove('hidden');

    // Start playing the background music
    const music = document.getElementById('background-music');
    music.play();
}

function goBack() {
    document.getElementById('gallery-page').classList.add('hidden');
    document.getElementById('front-page').classList.remove('hidden');

    // Stop the background music
    const music = document.getElementById('background-music');
    music.pause();
    music.currentTime = 0;
}

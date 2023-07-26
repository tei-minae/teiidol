window.onload = function() {
    const firstMovie = document.getElementById('firstMovie');
    const introMovie = document.getElementById('introMovie');
    const mainContent = document.getElementById('mainContent');
    const topImageMovie = document.getElementById('topImageMovie');

    firstMovie.onended = function() {
        // Remove first movie from the DOM
        introMovie.parentNode.removeChild(introMovie);

        // Show and play top image movie
        mainContent.style.display = 'block';
        topImageMovie.play();
    };
};

document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffccff', '#ccffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
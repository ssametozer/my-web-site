const target = document.getElementById('target');
const scoreElement = document.getElementById('scoreNumber');
let score = 0;

function randomMove() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * (maxY - 200)) + 200; 
    
    target.style.left = newX + 'px';
    target.style.top = newY + 'px';
}

target.addEventListener('mouseover', function() {
    score++;
    scoreElement.textContent = score;
    randomMove();
});


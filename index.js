score = 0;
cross = true;

game = new Audio('GameOver.wav');

document.onkeydown = function(e){
    console.log("Key code is : ",e.keyCode);
    if (e.keyCode == 38)
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700);
    }
    if (e.keyCode == 39)
    {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";

    }
    if (e.keyCode == 37)
    {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    dragon = document.querySelector('.dragon');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);
    if (offsetX < 70 && offsetY < 40)
    {
        gameOver.innerHTML = "Game Over!!"
        dragon.classList.remove('dragonAnimation');
        
        game.play();
        setTimeout(() => {
            game.pause();
        }, 1000);
    }
    else if (offsetX < 110 && cross)
    {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = ox = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        dragon.style.animationDuration = newDur + 's';
        }, 500);
        
    }

}, 100);

function updatescore(score){
    scoreContainer.innerHTML = "Your Score : " + score;
}
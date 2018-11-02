window.onload = init;
var score;
var gameSection, scoreSection, btnToScore,introSection,btnToGame;
var balloon1, balloon2, balloon3, balloon4, ballon5, balloon6, balloon7, balloon8, balloon9,btnRestart;
var hiddenBalloon;
var partialScore = 0;
var finalScore;
var theBalloon;

function init() {
    // introSection=document.getElementById('balloonIntro');
    // btnToGame=document.getElementById('toGame');
    score = document.getElementById('balloonsScore');
    btnRestart=document.getElementById('restartGame');
    finalScore=document.getElementById('finalScore');
    gameSection = document.getElementById('balloonGame');
    scoreSection = document.getElementById('balloonsScoreSection');
    btnToScore = document.getElementById('toScore');
    btnToScore.addEventListener('click', changeToScore);
    btnRestart.addEventListener('click', init);

    // btnToGame.addEventListener('click', changeToGame);
    
    var i = 0;
    
    var ancho = screen.height;
    for (i = 0; i < 2; i++) {

        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon1' src='img/balloons/balMorado.png' style='right:" + (Math.floor(Math.random() * ancho / 100 * 25) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon1", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon2' src='img/balloons/balRosa.png'style='right:" + (Math.floor(Math.random() * ancho / 100 * 35) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon2", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon3' src='img/balloons/balVerde.png'style='right:" + (Math.floor(Math.random() * ancho / 100 * 45) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon3", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon4' src='img/balloons/balAzul.png'style='right:" + (Math.floor(Math.random() * ancho / 100 * 55) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon4", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon5' src='img/balloons/balLila.png'style='left:" + (Math.floor(Math.random() * ancho / 100 * 65) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon5", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon6' src='img/balloons/balNaranja.png'style='left:" + (Math.floor(Math.random() * ancho / 100 * 75) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon6", 1 + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon7' src='img/balloons/balRojo.png'style='left:" + (Math.floor(Math.random() * ancho / 100 * 85) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon7", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon8' src='img/balloons/balSalmon.png'style='left:" + (Math.floor(Math.random() * ancho / 100 * 95) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon8", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });
        document.getElementById("theBalloon").insertAdjacentHTML('beforeend', "<img class='balloon' id='balloon9' src='img/balloons/balMenta.png'style='left:" + (Math.floor(Math.random() * ancho / 100 * 105) + (Math.floor(Math.random() * ancho))) + "px '/>");
        TweenMax.to("#balloon9", i + ((Math.floor(Math.random() * ancho)) * 0.01 + 20), { y: -1000 });


    }
    theBalloon=document.getElementById('theBalloon');
    hiddenBalloon = theBalloon.getElementsByClassName('hidden');
    //TweenMax.to(".balloon", 10, { y: -1000});
    var balloons = document.querySelector("#theBalloon");
    var manager = new Hammer.Manager(balloons);
    var Tap = new Hammer.Tap({
        taps: 1
    });
    manager.add(Tap);
    manager.on('tap', tap);
    function tap(e) {
        e.target.classList.toggle('hidden');
        // console.log(hidenBalloon.length);
        partialScore=hiddenBalloon.length;
        score.innerHTML=partialScore;
        finalScore.innerHTML=partialScore;
    }
    
    
    function changeToScore(event) {
        gameSection.classList.remove('animationIn');
        gameSection.classList.add('animationOut');
        scoreSection.style.display = "block";
        scoreSection.classList.add('animationIn');
    }
    // function changeToGame(event) {
    //     introSection.classList.remove('animationIn');
    //     introSection.classList.add('animationOut');
    //     gameSection.style.display = "block";
    //     gameSection.classList.add('animationIn');
    // }

    function dissapear(event) {
        var element = event.target;
        if (element.classList.contains('animationOut')) {
            element.style.display = "none";
            element.classList.remove('animationOut');
            element.classList.remove('animationIn');
        }
    }

    
        
}

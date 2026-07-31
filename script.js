/* ==========================================================
   HAPPY BIRTHDAY ANKITA ❤️
   Version 3.0
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const screens = document.querySelectorAll(".screen");

const landingScreen = document.getElementById("landing");
const countdownScreen = document.getElementById("countdownScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const letterScreen = document.getElementById("letterScreen");
const cakeScreen = document.getElementById("cakeScreen");
const finalScreen = document.getElementById("finalScreen");

const typingText = document.getElementById("typingText");

const surpriseBtn = document.getElementById("surpriseBtn");
const nextBtn = document.getElementById("nextBtn");
const cakeBtn = document.getElementById("cakeBtn");
const restartBtn = document.getElementById("restartBtn");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const countNumber = document.getElementById("countNumber");
const letterText = document.getElementById("letterText");

/* ==========================================================
   WELCOME TEXT
========================================================== */

const welcomeMessages = [

    "Hello Ankita 😊",

    "Kem Cho? 🌸",

    "Aaje Tamara Mate ❤️",

    "Ek Nanu Surprise Chhe... ✨"

];

let messageIndex = 0;
let charIndex = 0;

/* ==========================================================
   LETTER
========================================================== */

const letter = `Hi Ankita 😊

Happy Birthday!

Aaje tamaro special divas chhe.

Hu bas etlu j kahish...

Bhagwan kare tamari life ma hamesha happiness, success ane peace rahe.

Tamara face par je smile chhe...
e hamesha evij rahe. 😊

Aa nanu surprise specially tamara mate banavyu chhe.

Mane kharekhar aasha chhe ke aa joi ne tamne thodu saru lage.

Stay Happy 🌸

Take Care ❤️

— Kishan`;

let letterIndex = 0;

/* ==========================================================
   TYPEWRITER
========================================================== */

function typeWelcome(){

    if(charIndex < welcomeMessages[messageIndex].length){

        typingText.innerHTML +=
        welcomeMessages[messageIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWelcome,70);

    }

    else{

        if(messageIndex === welcomeMessages.length-1){

            return;

        }

        setTimeout(()=>{

            typingText.innerHTML="";

            charIndex=0;

            messageIndex++;

            typeWelcome();

        },1500);

    }

}

/* ==========================================================
   START
========================================================== */

window.onload=()=>{

    createStars();

    typeWelcome();

};

/* ==========================================================
   BACKGROUND ANIMATIONS
========================================================== */

/* ---------- Stars ---------- */

function createStars(){

    const background = document.getElementById("background");

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*2+"s";

        star.style.animationDuration=(2+Math.random()*3)+"s";

        background.appendChild(star);

    }

}

/* ---------- Hearts ---------- */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.animationDuration=(7+Math.random()*4)+"s";

    document.getElementById("background").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,900);

/* ---------- Petals ---------- */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-40px";

    petal.style.animationDuration=(8+Math.random()*4)+"s";

    document.getElementById("background").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,1200);

/* ---------- Shooting Star ---------- */

function shootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=(70+Math.random()*30)+"vw";

    star.style.top=(Math.random()*20)+"vh";

    document.getElementById("background").appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

setInterval(shootingStar,7000);

/* ==========================================================
   MUSIC
========================================================== */

let musicPlaying=false;

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play();

        musicBtn.innerHTML="🔊";

        musicPlaying=true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML="🎵";

        musicPlaying=false;

    }

});

/* ==========================================================
   SCREEN SWITCHING
========================================================== */

function showScreen(screen){

    screens.forEach(s=>{

        s.classList.remove("active");

    });

    screen.classList.add("active");

}

/* ==========================================================
   SURPRISE BUTTON
========================================================== */

surpriseBtn.addEventListener("click", () => {

    // Start music automatically
    if (!musicPlaying) {

        bgMusic.play();

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

    }

    showScreen(countdownScreen);

    startCountdown();

});

/* ==========================================================
   COUNTDOWN
========================================================== */

function startCountdown(){

    let count = 3;

    countNumber.innerHTML = count;

    const timer = setInterval(() => {

        count--;

        if(count > 0){

            countNumber.innerHTML = count;

        }

        else{

            clearInterval(timer);

            countNumber.innerHTML = "✨";

            setTimeout(() => {

                showBirthdayScreen();

            },1000);

        }

    },1000);

}

/* ==========================================================
   BIRTHDAY SCREEN
========================================================== */

function showBirthdayScreen(){

    showScreen(birthdayScreen);

    setTimeout(() => {

        showLetterScreen();

    },10000);

}

/* ==========================================================
   LETTER SCREEN
========================================================== */

function showLetterScreen(){

    showScreen(letterScreen);

    letterText.innerHTML="";

    letterIndex=0;

    typeLetter();

}

/* ==========================================================
   LETTER TYPING
========================================================== */

function typeLetter(){

    if(letterIndex < letter.length){

        letterText.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        letterText.scrollTop = letterText.scrollHeight;

        setTimeout(typeLetter,35);

    }

    else{

        nextBtn.style.display="inline-block";

    }

}

/* ==========================================================
   CONTINUE BUTTON
========================================================== */

nextBtn.addEventListener("click",()=>{

    showScreen(cakeScreen);

});

/* ==========================================================
   CAKE BUTTON
========================================================== */

cakeBtn.addEventListener("click", () => {

    /* Blow out candles */

    document.querySelectorAll(".flame").forEach(flame => {

        flame.style.display = "none";

    });

    cakeBtn.disabled = true;
    cakeBtn.innerHTML = "✨ Wish Made ✨";

    createConfetti();

    setTimeout(() => {

        createFireworks();

    },1200);

    setTimeout(() => {

        showScreen(finalScreen);

    },4500);

});


/* ==========================================================
   CONFETTI
========================================================== */

function createConfetti(){

    const colours = [

        "#ff4d88",
        "#FFD700",
        "#00E5FF",
        "#7CFC00",
        "#FFFFFF",
        "#FF914D"

    ];

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=

            colours[Math.floor(Math.random()*colours.length)];

        confetti.style.animationDuration=

            (3+Math.random()*2)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}


/* ==========================================================
   FIREWORKS
========================================================== */

function createFireworks(){

    const colours=[

        "#ff4d88",
        "#FFD700",
        "#00E5FF",
        "#7CFC00",
        "#FFFFFF",
        "#FF914D"

    ];

    let total=30;

    let interval=setInterval(()=>{

        const fire=document.createElement("div");

        fire.className="firework";

        fire.style.left=

            Math.random()*90+5+"vw";

        fire.style.top=

            Math.random()*60+10+"vh";

        fire.style.color=

            colours[Math.floor(Math.random()*colours.length)];

        document.body.appendChild(fire);

        setTimeout(()=>{

            fire.remove();

        },1000);

        total--;

        if(total<=0){

            clearInterval(interval);

        }

    },180);

}


/* ==========================================================
   RESTART
========================================================== */

restartBtn.addEventListener("click",()=>{

    location.reload();

});
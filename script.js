let clickCount = 0;
let swaps = 0; 
const targetClicks = 50;
const button = document.querySelector('.nav-btn');

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === targetClicks) {
        triggerRandomChaos();
        clickCount = 0; 
        swaps++;
    }
    if (swaps === 4) {
        tooMuch();
        clickCount = 51;
        swaps = 5;
    }
});

function playClickSound() {
    const sound = document.getElementById("clickSound");
    
    sound.currentTime = 0;   
    sound.play();
}


function triggerRandomChaos() {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const elements = document.querySelectorAll('h2, h3, p, #update-text');
    const choice = Math.floor(Math.random() * 4) + 1;
    
    if (choice === 1) {
        const currentHeaderBg = window.getComputedStyle(header).backgroundColor;
        header.style.backgroundImage = "url('bg.png')";
        header.style.backgroundSize = "cover";
        body.style.backgroundImage = "none";
        body.style.backgroundColor = currentHeaderBg;
    } 
    else if (choice === 2) {
        elements.forEach(el => {
            let originalText = el.innerText;
            let scrambled = originalText.split('').sort(() => 0.5 - Math.random()).join('');
            el.innerText = scrambled;
        });
    } 
    else if (choice === 3) {
        body.style.filter = "invert(1)";
    } 
    else if (choice === 4) {
        body.style.transition = "transform 1s ease";
        body.style.transform = "rotate(180deg)";
    }
}

function tooMuch() {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const contentBox = document.querySelector('.content-box');
    body.style.filter = "none";
    body.style.transform = "none";
    body.style.transition = "none";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "";
    
    if (header) {
        header.style.backgroundImage = "none";
        header.style.backgroundColor = "";
    }

    if (contentBox) {
        contentBox.innerHTML = "<h1 style='font-family: monospace; text-align: center; margin-top: 100px; font-size: 3rem;'>Stop.</h1>";
    }

    // bro is hacker
    /*
    plz go out of devtools

    plzzz

    [image](data:image/jpeg;base64,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)
  
    */

    if (button) {
        button.style.display = "none"; 
    }
}

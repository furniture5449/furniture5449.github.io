let clickCount = 0;
let swaps = 0; 
const targetClicks = 50;
const button = document.querySelector('.nav-btn');

function playClickSound() {
    const sound = document.getElementById("clickSound");
    if (sound) {
        sound.currentTime = 0;   
        sound.play().catch(err => console.log(err));
    }
}

function handlePress(e) {
    if (e.type === 'touchstart') e.preventDefault(); 
    button.classList.add('is-pressed');
    playClickSound();
}

function handleRelease() {
    button.classList.remove('is-pressed');
}

button.addEventListener('mousedown', handlePress);
button.addEventListener('touchstart', handlePress);
window.addEventListener('mouseup', handleRelease);
window.addEventListener('touchend', handleRelease);

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

    if (button) {
        button.style.display = "none"; 
    }
}

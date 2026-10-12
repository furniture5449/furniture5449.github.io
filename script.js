let clickCount = 0;
const targetClicks = 50;
const button = document.querySelector('.nav-btn');

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === targetClicks) {
        triggerRandomChaos();
        clickCount = 0; 
    }
});

function playClickSound() {
    const sound = document.getElementById("clickSound");
    
    // Reset the audio to the beginning so it plays instantly on rapid clicks
    sound.currentTime = 0; 
    
    // Play the audio track
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

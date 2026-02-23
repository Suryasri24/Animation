// 1. Typewriter Effect for Hero Section
const textElement = document.getElementById('typewriter-text');
const text = textElement.innerText;
textElement.innerText = ''; // Clear text initially

let i = 0;
function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Typing speed
    }
}
// Start typing when page loads
window.onload = typeWriter;


// 2. Playground Logic
const box = document.getElementById('moving-box');

function moveBox(direction) {
    // Reset animations first
    box.className = 'box'; 
    
    if (direction === 'left') {
        box.classList.add('move-left');
    } else if (direction === 'right') {
        box.classList.add('move-right');
    } 
    // If reset, class stays 'box' (no extra class)
}

function bounceBox() {
    // Remove movement classes, add bounce
    box.classList.remove('move-left', 'move-right');
    box.classList.add('bounce-anim');
}


// 3. Quiz Logic
const resultMsg = document.getElementById('result-msg');

function checkAnswer(btn, status) {
    // Reset buttons
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(b => {
        b.classList.remove('correct-ans', 'wrong-ans');
        b.disabled = true; // Disable after selection
    });

    if (status === 'correct') {
        btn.classList.add('correct-ans');
        resultMsg.innerText = "Correct! The 'animation-duration' property controls speed.";
        resultMsg.style.color = "green";
    } else {
        btn.classList.add('wrong-ans');
        resultMsg.innerText = "Wrong! Try again.";
        resultMsg.style.color = "red";
        // Re-enable buttons if wrong
        buttons.forEach(b => b.disabled = false);
    }
}
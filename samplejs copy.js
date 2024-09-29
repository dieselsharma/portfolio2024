// // Typing effect for the text "Ojasvi Sharma 20 Designing since 2021 CS Undergrad" with line breaks
// window.addEventListener('load', function () {
//     const loading = document.getElementById('loading');
//     const content = document.getElementById('content');

//     // Hide loading screen and show content
//     loading.style.display = 'none';
//     content.style.display = 'block';
// });



var loader =  document.getElementById("preloader");
window.addEventListener("load", function(){
loader.style.display =  "none";})

document.addEventListener("DOMContentLoaded", function() {
    const typingText = "Ojasvi Sharma\n\n20\n\nDesigning since 2021\n\nCS Undergrad";
    const typingElement = document.getElementById('typing-text');
    let index = 0;

    function typeWriter() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);  // Adjust typing speed here
        }
    }

    typeWriter();  // Start the typing effect
});

// Glass window 3D rotation effect on mouse movement
const glassWindow = document.querySelector('.glass-window');

glassWindow.addEventListener('mousemove', (event) => {
    // Get the dimensions of the glass window
    const { offsetWidth: width, offsetHeight: height } = glassWindow;

    // Calculate the center of the window
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate the position of the mouse relative to the window
    const mouseX = event.clientX - glassWindow.getBoundingClientRect().left;
    const mouseY = event.clientY - glassWindow.getBoundingClientRect().top;

    // Calculate the rotation values based on the mouse position
    const deltaX = (mouseX - centerX) / centerX; // Range between -1 and 1
    const deltaY = (mouseY - centerY) / centerY; // Range between -1 and 1

    // Apply 3D rotation based on the mouse movement
    glassWindow.style.transform = `translateX(-50%) perspective(600px) rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
});

glassWindow.addEventListener('mouseleave', () => {
    // Reset the transformation when the mouse leaves the window
    glassWindow.style.transform = 'translateX(-50%) perspective(600px) rotateY(0deg) rotateX(0deg)';
});

// Slider functionality
// Slider functionality encapsulated in a function
function createSlider(itemSelector, nextButtonId, prevButtonId) {
    const items = document.querySelectorAll(itemSelector);
    let active = 0; // Start with the first image

    function loadShow() {
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        let stt = 0;
        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = (active - 1); i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    loadShow(); // Load the initial view of the slider

    // Next button functionality
    function nextSlide() {
        active = (active + 1) % items.length; // Wrap around
        loadShow();
    }

    // Previous button functionality
    function prevSlide() {
        active = (active - 1 + items.length) % items.length; // Wrap around
        loadShow();
    }

    // Attach event listeners to the buttons
    document.getElementById(nextButtonId).onclick = nextSlide;
    document.getElementById(prevButtonId).onclick = prevSlide;
}

// Usage example for the first slider
createSlider('.slider1 .item', 'next', 'prev');
createSlider('.slider2 .item2', 'next2', 'prev2');
createSlider('.slider3 .item3', 'next3', 'prev3');
createSlider('.slider4 .item4', 'next4', 'prev4');


const video = document.getElementById('reels');
    const muteButton = document.getElementById('muteButton');

    muteButton.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    function showNumber() {
        const infoBox = document.getElementById('info-box');
        const infoContent = document.getElementById('info-content');
        infoContent.innerText = 'Call me on: +91 8839836983';
        infoBox.style.display = 'block';
    }
    
    function showEmail() {
        const infoBox = document.getElementById('info-box');
        const infoContent = document.getElementById('info-content');
        infoContent.innerText = 'Email me at: ojasvisharmacs@gmail.com';
        infoBox.style.display = 'block';
    }
    
    function closeBox() {
        const infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none';
    }
    
    function openWhatsApp() {
        window.open('https://wa.me/+918839836983/', '_blank');
    }
    
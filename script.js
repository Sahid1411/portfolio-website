// 1. Typing Effect Logic
const typingTextSpan = document.querySelector(".typing-text");

// SAHID: These are YOUR specific skills cycling through
const roles = [
    "Full Stack Developer.", 
    "Flutter App Developer.", 
    "React & PHP Expert.",
    "Database Manager."
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentRole = roles[roleIndex];
    
    // Determine the substring to display
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingTextSpan.textContent = currentRole.substring(0, charIndex);

    // Speed Control
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing after initial load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// 2. Mouse Parallax Effect (The "Alive" Feeling)
document.addEventListener("mousemove", (e) => {
    const avatar = document.querySelector(".parallax-target");
    
    // Calculate mouse position from center
    const x = (window.innerWidth - e.pageX * 2) / 50;
    const y = (window.innerHeight - e.pageY * 2) / 50;

    // Apply movement
    avatar.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
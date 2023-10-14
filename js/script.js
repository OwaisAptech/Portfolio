// script.js
document.addEventListener("DOMContentLoaded", function () {
    const textElements = ["Web Developer", "Web Designer", "Youtuber", "Graphic Designer"];
    const textElement = document.querySelector(".typing-text");
    let index = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeText() {
        if (isTyping) {
            textElement.textContent += textElements[index][charIndex];
            charIndex++;
            if (charIndex === textElements[index].length) {
                isTyping = false;
                setTimeout(eraseText, 1000); // Delay before erasing text
            } else {
                setTimeout(typeText, 100); // Typing speed (adjust as needed)
            }
        }
    }

    function eraseText() {
        if (!isTyping) {
            if (charIndex > 0) {
                textElement.textContent = textElement.textContent.slice(0, -1);
                charIndex--;
                setTimeout(eraseText, 50); // Erasing speed (adjust as needed)
            } else {
                isTyping = true;
                index = (index + 1) % textElements.length; // Loop through professions
                setTimeout(typeText, 1000); // Delay before typing next text
            }
        }
    }

    typeText(); // Start the animation
});
``

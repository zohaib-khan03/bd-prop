
const welcomePage = document.getElementById("welcomePage");
const birthdayPage = document.getElementById("birthdayPage");

const openButton = document.getElementById("openButton");
const surpriseButton = document.getElementById("surpriseButton");
const extraSurprise = document.getElementById("extraSurprise");

const floatingHearts = document.getElementById("floatingHearts");

// OPEN BIRTHDAY SURPRISE
openButton.addEventListener("click", function () {
    welcomePage.classList.add("hidden");
    birthdayPage.classList.remove("hidden");

    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Create a celebration
    createHeartBurst();
});

// EXTRA SURPRISE BUTTON
surpriseButton.addEventListener("click", function () {
    extraSurprise.classList.remove("hidden");

    surpriseButton.textContent = "You Are Special! 💗";
    surpriseButton.disabled = true;

    createHeartBurst();

    // Scroll to the revealed message
    setTimeout(() => {
        extraSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});

// CREATE FLOATING HEARTS
function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    const heartSymbols = ["♥", "♡", "💗", "💕", "✦"];

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    floatingHearts.appendChild(heart);

    // Remove hearts after the animation
    heart.addEventListener("animationend", function () {
        heart.remove();
    });
}

// HEART BURST CELEBRATION
function createHeartBurst() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 90);
    }
}

// CONTINUOUS BACKGROUND HEARTS
setInterval(() => {
    createFloatingHeart();
}, 650);

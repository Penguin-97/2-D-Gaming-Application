// script.js

// Player element
const player = document.getElementById('player');

// Initial position
let posX = window.innerWidth / 2 - 25;
let posY = window.innerHeight - 70;

// Update player position
function movePlayer() {
  player.style.left = `${posX}px`;
  player.style.bottom = `${posY}px`;
}

// Gesture Detection: Detect swipe or touch events
function detectSwipe(e) {
  const touchStart = e.touches[0].clientX;
  const touchEnd = e.changedTouches[0].clientX;

  if (touchStart > touchEnd) {
    // Swipe Left
    posX -= 10;
  } else {
    // Swipe Right
    posX += 10;
  }
  movePlayer();
}

document.getElementById("gameArea").addEventListener("touchstart", detectSwipe, false);

// For mouse-based gestures (or dragging)
let isDragging = false;
let initialX, initialY;

player.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = e.clientX - posX;
  initialY = e.clientY - posY;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    posX = e.clientX - initialX;
    posY = e.clientY - initialY;
    movePlayer();
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Key gestures for desktop (arrow keys)
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      posX -= 10; // Move player left
    } else if (e.key === "ArrowRight") {
      posX += 10; // Move player right
    } else if (e.key === "ArrowUp") {
      posY += 10; // Move player up
    } else if (e.key === "ArrowDown") {
      posY -= 10; // Move player down
    }
    movePlayer();
  });

  

  document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      player.classList.add("jump");
      setTimeout(() => player.classList.remove("jump"), 500); // Remove jump animation after 0.5s
    }
  });

  
  let score = 0;

function increaseScore() {
  score++;
  console.log(`Score: ${score}`);
}

setInterval(increaseScore, 1000); // Increase score every second


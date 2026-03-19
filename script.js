const logo = document.getElementById('logo');
const retard = document.getElementById('retard');

let x = 0;
let y = 0;
let dx = 2; // delta x (movement speed in x direction)
let dy = 2; // delta y (movement speed in y direction)
const speed = 2; // pixels per frame
dx *= speed;
dy *= speed;

function updatePosition() {
    const retardWidth = retard.clientWidth;
    const retardHeight = retard.clientHeight;
    const logoWidth = logo.clientWidth;
    const logoHeight = logo.clientHeight;

    // Check for collision with right/left walls
    if (x + logoWidth > retardWidth || x < 0) {
        dx *= -1; // Reverse horizontal direction
        // Optional: Call a function here to change the logo's color
    }

    // Check for collision with bottom/top walls
    if (y + logoHeight > retardHeight || y < 0) {
        dy *= -1; // Reverse vertical direction
        // Optional: Call a function here to change the logo's color
    }

    // Update position
    x += dx;
    y += dy;

    // Apply new position
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    // Request the next animation frame
    requestAnimationFrame(updatePosition);
}

// Start the animation loop
requestAnimationFrame(updatePosition);
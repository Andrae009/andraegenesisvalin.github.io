// Code Typing Animation
const canvas = document.getElementById('code-canvas');
const ctx = canvas.getContext('2d');
const toggleButton = document.getElementById('code-toggle');

let isCodeAnimationOn = true; // Default: Animation is on
let animationFrame;

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Code characters to display
const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/`~";
const fontSize = 14;
const columns = canvas.width / fontSize;

// Create an array of drops (one per column)
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Draw the code typing animation
function drawCode() {
  if (!isCodeAnimationOn) return; // Stop animation if toggled off

  // Set the background color and opacity
  ctx.fillStyle = 'rgba(30, 30, 30, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the text color and font
  ctx.fillStyle = '#00ff00'; // Green text
  ctx.font = `${fontSize}px monospace`;

  // Draw characters
  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop if it reaches the bottom
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  animationFrame = requestAnimationFrame(drawCode);
}

// Start the animation
drawCode();

// Toggle Code Animation
toggleButton.addEventListener('click', () => {
  isCodeAnimationOn = !isCodeAnimationOn; // Toggle state
  toggleButton.innerHTML = `<i class="fas fa-code"></i> ${isCodeAnimationOn ? 'Turn Off Code Animation' : 'Turn On Code Animation'}`;

  if (isCodeAnimationOn) {
    drawCode(); // Restart animation
  } else {
    cancelAnimationFrame(animationFrame); // Stop animation
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  }
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

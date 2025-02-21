// Get all panel links and panels
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const skillsLink = document.getElementById('skills-link');
const contactLink = document.getElementById('contact-link');

const homePanel = document.getElementById('home-panel');
const aboutPanel = document.getElementById('about-panel');
const projectsPanel = document.getElementById('projects-panel');
const skillsPanel = document.getElementById('skills-panel');
const contactPanel = document.getElementById('contact-panel');

const closeButtons = document.querySelectorAll('.close-panel');

// Function to open a panel
function openPanel(panel) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  panel.classList.add('active');
}

// Event listeners for navigation links
homeLink.addEventListener('click', () => openPanel(homePanel));
aboutLink.addEventListener('click', () => openPanel(aboutPanel));
projectsLink.addEventListener('click', () => openPanel(projectsPanel));
skillsLink.addEventListener('click', () => openPanel(skillsPanel));
contactLink.addEventListener('click', () => openPanel(contactPanel));

// Event listeners for close buttons
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.panel').classList.remove('active');
  });
});

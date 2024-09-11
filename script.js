const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Toggle between crescent moon and sun icons
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';  // Sun icon for light mode
    } else {
        toggleButton.textContent = '🌙';  // Moon icon for dark mode
    }
});

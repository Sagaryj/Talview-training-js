// Dark Mode / Light Mode Toggle

// Get or create toggle button
const toggleBtn = document.getElementById('themeToggle') || createToggleButton();

function createToggleButton() {
    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.textContent = '🌙 Dark Mode';
    btn.style.cssText = 'padding: 10px 15px; cursor: pointer; border-radius: 5px; border: none; background: #333; color: white;';
    document.body.insertBefore(btn, document.body.firstChild);
    return btn;
}

// Check saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButtonText(savedTheme);

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    toggleBtn.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Add CSS styles for theme switching
const style = document.createElement('style');
style.textContent = `
    :root[data-theme="light"] {
        background-color: #ffffff;
        color: #000000;
    }
    :root[data-theme="dark"] {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    body {
        transition: background-color 0.3s ease, color 0.3s ease;
    }
`;
document.head.appendChild(style);
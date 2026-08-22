// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update icon
  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// ===== (Optional) Console greeting =====
console.log('🚀 Rohini R · Portfolio loaded successfully!');
console.log('💡 Toggle dark mode with the 🌙/☀️ button in the header.');
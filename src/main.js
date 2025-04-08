
// Main JavaScript entry point for the VCE website
import './styles.css';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initializeNavbar();
  initializeLanguageSwitcher();
  
  // Scroll to hash on load
  handleInitialScroll();
  
  // Set direction based on saved language
  setDirectionBasedOnLanguage();
});

// Initialize the navbar
function initializeNavbar() {
  // This function will be implemented to replace the React Navbar component
  console.log('Navbar initialized');
  
  // Mobile menu toggle functionality will go here
}

// Initialize language switcher
function initializeLanguageSwitcher() {
  // This function will be implemented to replace the React LanguageSwitcher component
  console.log('Language switcher initialized');
  
  // We'll need to implement the language switching logic in plain JS
}

// Handle scrolling to section based on URL hash
function handleInitialScroll() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

// Set the document direction based on language
function setDirectionBasedOnLanguage() {
  const language = localStorage.getItem('language') || 'ar';
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
}

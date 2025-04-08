// Main JavaScript entry point for the VCE website
import './styles.css';

// Global state for language
let currentLanguage = localStorage.getItem('language') || 'ar';

// Translations
const translations = {
  ar: {
    'language.switch': 'English',
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.equipment': 'معداتنا',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معنا',
    'hero.title': 'شركة فيفيان للإنشاءات والأعمال الهندسية',
    'hero.workers': 'عامل',
    'hero.machines': 'آلة',
    'hero.projects': 'مشروع',
    'hero.location': 'مصراتة',
    'hero.country': 'ليبيا',
    'hero.services': 'خدماتنا',
    'hero.viewProjects': 'مشاريعنا',
    'hero.scrollDown': 'اسحب للأسفل',
    'about.title': 'من نحن',
    'about.paragraph1': 'شركة فيفيان للإنشاءات والأعمال الهندسية تضم نخبة من المهندسين والفنيين ذوي الخبرة في مجال الإنشاءات والمقاولات. نستخدم أحدث التقنيات لتقديم أفضل الخدمات لعملائنا.',
    'about.paragraph2': 'نسعى لتقديم حلول هندسية متكاملة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع التركيز على الجودة وتحقيق أعلى معايير السلامة.',
    'about.paragraph3': 'منذ تأسيسها في عام 2019، لدينا سجل حافل من المشاريع الناجحة في جميع أنحاء ليبيا، مع التركيز الرئيسي على مصراتة والمناطق المحيطة بها.',
    'about.stats.title': 'إحصائيات الشركة',
    'about.stats.founded': 'تأسست',
    'about.stats.location': 'موقعنا',
    'about.stats.projects': 'المشاريع',
    'about.stats.team': 'فريقنا',
    'services.title': 'خدماتنا',
    'services.construction': 'خدمات البناء',
    'services.construction.desc': 'خدمات بناء شاملة للمشاريع التجارية والسكنية والصناعية، مع التركيز على الجودة وكفاءة التكلفة.',
    'services.engineering': 'خدمات هندسية',
    'services.engineering.desc': 'خدمات هندسية احترافية تشمل التصميم الهندسي والاستشارات الفنية والإشراف على المشاريع.',
    'services.projectManagement': 'إدارة المشاريع',
    'services.projectManagement.desc': 'إدارة مشاريع متكاملة من التخطيط إلى التنفيذ، مع ضمان الالتزام بالجداول الزمنية والميزانيات.',
    'services.maintenance': 'خدمات الصيانة',
    'services.maintenance.desc': 'خدمات صيانة شاملة للمباني والمرافق، للحفاظ على استثماراتك في حالة ممتازة.',
    'projects.title': 'مشاريعنا',
    'projects.viewProject': 'عرض المشروع',
    'projects.category': 'الفئة',
    'projects.year': 'السنة',
    'projects.location': 'الموقع',
    'projects.description': 'الوصف',
    'projects.close': 'إغلاق',
    'projects.contactUs': 'تواصل معنا',
    'contact.title': 'تواصل معنا',
    'contact.info': 'معلومات الاتصال',
    'footer.tagline': 'نبني مستقبل ليبيا بهندسة دقيقة وبناء عالي الجودة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'اتصل بنا',
    'footer.address': 'فيفيان للإنشاءات والأعمال الهندسية',
    'footer.city': 'مصراتة، ليبيا',
    'footer.phone': 'هاتف: +218 91-555-5555',
    'footer.email': 'البريد الإلكتروني: info@vce-co.com',
    'footer.copyright': 'جميع الحقوق محفوظة © {year} شركة فيفيان للإنشاءات والأعمال الهندسية',
    'testimonials.title': 'اخبرنا',
    'testimonials.viewOnFacebook': 'عرض على فيسبوك',
  },
  en: {
    'language.switch': 'العربية',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.equipment': 'Equipment',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Vivian Construction & Engineering Services',
    'hero.workers': 'Workers',
    'hero.machines': 'Machines',
    'hero.projects': 'Projects',
    'hero.location': 'Misurata',
    'hero.country': 'Libya',
    'hero.services': 'Our Services',
    'hero.viewProjects': 'View Projects',
    'hero.scrollDown': 'Scroll Down',
    'about.title': 'About Us',
    'about.paragraph1': 'Vivian Construction & Engineering Services brings together experienced engineers and technicians in the field of construction and contracting. We use the latest technologies to provide the best services to our clients.',
    'about.paragraph2': 'We strive to provide integrated engineering solutions that meet our clients\' needs and exceed their expectations, focusing on quality and achieving the highest safety standards.',
    'about.paragraph3': 'Since its establishment in 2019, we have an impressive record of successful projects throughout Libya, with a primary focus on Misurata and the surrounding areas.',
    'about.stats.title': 'Company Statistics',
    'about.stats.founded': 'Founded',
    'about.stats.location': 'Location',
    'about.stats.projects': 'Projects',
    'about.stats.team': 'Team',
    'services.title': 'Our Services',
    'services.construction': 'Construction Services',
    'services.construction.desc': 'Comprehensive construction services for commercial, residential, and industrial projects, focusing on quality and cost efficiency.',
    'services.engineering': 'Engineering Services',
    'services.engineering.desc': 'Professional engineering services including engineering design, technical consultations, and project supervision.',
    'services.projectManagement': 'Project Management',
    'services.projectManagement.desc': 'Integrated project management from planning to execution, ensuring adherence to schedules and budgets.',
    'services.maintenance': 'Maintenance Services',
    'services.maintenance.desc': 'Comprehensive maintenance services for buildings and facilities, to keep your investments in excellent condition.',
    'projects.title': 'Our Projects',
    'projects.viewProject': 'View Project',
    'projects.category': 'Category',
    'projects.year': 'Year',
    'projects.location': 'Location',
    'projects.description': 'Description',
    'projects.close': 'Close',
    'projects.contactUs': 'Contact Us',
    'contact.title': 'Contact Us',
    'contact.info': 'Contact Information',
    'footer.tagline': 'Building the future of Libya with precision engineering and quality construction',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.address': 'Vivian Construction & Engineering',
    'footer.city': 'Misurata, Libya',
    'footer.phone': 'Phone: +218 91-555-5555',
    'footer.email': 'Email: info@vce-co.com',
    'footer.copyright': 'All rights reserved © {year} Vivian Construction & Engineering Services',
    'testimonials.title': 'Testimonials',
    'testimonials.viewOnFacebook': 'View on Facebook',
  }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initializeNavbar();
  initializeHeroSection();
  initializeAboutSection();
  initializeServicesSection();
  initializeEquipmentServicesSection();
  initializeProjectsSection();
  initializeTestimonialsSection();
  initializeContactSection();
  initializeFooter();
  initializeLanguageSwitcher();
  
  // Scroll to hash on load
  handleInitialScroll();
  
  // Set direction based on saved language
  setDirectionBasedOnLanguage();
});

// Initialize the navbar
function initializeNavbar() {
  const navbar = document.getElementById('navbar');
  const desktopNavLinks = document.getElementById('desktop-nav-links');
  const mobileNavLinks = document.getElementById('mobile-nav-links');
  const mobileMenu = document.getElementById('mobile-nav');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navbarTitle = document.getElementById('navbar-title');
  
  // Set navbar title based on language
  navbarTitle.textContent = currentLanguage === 'ar' ? 'شركة فيفيان للإنشاءات والاعمال الهندسية' : 'Vivian Construction & Engineering Services';
  
  // Create nav links
  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.equipment'), href: "#equipment-services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];
  
  // Set direction
  const textDirection = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  desktopNavLinks.dir = textDirection;
  mobileNavLinks.dir = textDirection;
  
  // Clear existing nav links
  desktopNavLinks.innerHTML = '';
  mobileNavLinks.innerHTML = '';
  
  // Add desktop nav links
  navLinks.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.name;
    linkElement.className = "text-vce-blue hover:text-vce-red transition-colors duration-300 mx-3";
    
    desktopNavLinks.appendChild(linkElement);
  });
  
  // Add mobile nav links
  navLinks.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.name;
    linkElement.className = "text-xl font-medium text-vce-blue hover:text-vce-red";
    linkElement.onclick = () => toggleMobileMenu();
    
    mobileNavLinks.appendChild(linkElement);
  });
  
  // Add class to desktop nav links container based on language
  if (currentLanguage === 'ar') {
    desktopNavLinks.classList.add('flex-row-reverse', 'space-x-reverse');
  } else {
    desktopNavLinks.classList.remove('flex-row-reverse', 'space-x-reverse');
  }
  
  // Mobile menu toggle
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    
    if (isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add(currentLanguage === 'ar' ? 'translate-x-full' : 'translate-x-full');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.add('translate-x-0');
      mobileMenu.classList.remove(currentLanguage === 'ar' ? 'translate-x-full' : 'translate-x-full');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }
  
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-white', 'shadow-lg');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-white', 'shadow-lg');
      navbar.classList.add('bg-transparent');
    }
  });
}

// Initialize language switcher
function initializeLanguageSwitcher() {
  const languageSwitcher = document.getElementById('language-switcher');
  const mobileLanguageSwitcher = document.getElementById('mobile-language-switcher');
  const languageText = document.getElementById('language-text');
  
  // Set initial language text
  languageText.textContent = t('language.switch');
  
  // Switch language function
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    setDirectionBasedOnLanguage();
    
    // Re-initialize all sections
    initializeNavbar();
    initializeHeroSection();
    initializeAboutSection();
    initializeServicesSection();
    initializeEquipmentServicesSection();
    initializeProjectsSection();
    initializeContactSection();
    initializeFooter();
    initializeLanguageSwitcher();
  }
  
  // Add event listeners
  languageSwitcher.addEventListener('click', toggleLanguage);
  mobileLanguageSwitcher.addEventListener('click', toggleLanguage);
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

// Initialize hero section
function initializeHeroSection() {
  const heroTitle = document.querySelector('#home h2');
  const heroStats = document.getElementById('hero-stats');
  const heroButtons = document.getElementById('hero-buttons');
  const scrollText = document.getElementById('scroll-text');
  
  heroTitle.textContent = t('hero.title');
  scrollText.textContent = t('hero.scrollDown');
  
  // Clear and set hero stats
  heroStats.innerHTML = '';
  
  // Stats content
  const stats = [
    { value: '+20', label: t('hero.workers') },
    { value: '+20', label: t('hero.machines') },
    { value: '+20', label: t('hero.projects') },
    { label: t('hero.location'), value: t('hero.country') },
  ];
  
  // Add stats
  stats.forEach((stat, index) => {
    const statContainer = document.createElement('span');
    statContainer.className = `flex items-center ${currentLanguage === 'ar' ? 'mr-4' : 'mr-4'} mb-2`;
    
    const valueSpan = document.createElement('span');
    valueSpan.className = "text-vce-red font-bold mr-2";
    valueSpan.textContent = stat.value;
    
    statContainer.appendChild(valueSpan);
    statContainer.appendChild(document.createTextNode(stat.label));
    
    if (index < stats.length - 1) {
      const separator = document.createElement('span');
      separator.className = "w-2 h-2 rounded-full bg-vce-red mx-2 hidden md:block";
      heroStats.appendChild(statContainer);
      heroStats.appendChild(separator);
    } else {
      heroStats.appendChild(statContainer);
    }
  });
  
  // Clear and set hero buttons
  heroButtons.innerHTML = '';
  
  // Create services button
  const servicesButton = document.createElement('a');
  servicesButton.href = "#equipment-services";
  servicesButton.className = "vce-btn vce-btn-primary";
  servicesButton.textContent = t('hero.services');
  heroButtons.appendChild(servicesButton);
  
  // Create projects button
  const projectsButton = document.createElement('a');
  projectsButton.href = "#projects";
  projectsButton.className = "vce-btn bg-transparent border-2 border-white hover:bg-white hover:text-vce-blue transition-all duration-300";
  projectsButton.textContent = t('hero.viewProjects');
  heroButtons.appendChild(projectsButton);
  
  // Set hero content direction
  const heroContent = document.getElementById('hero-content');
  heroContent.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  if (currentLanguage === 'en') {
    heroContent.classList.add('text-left');
  } else {
    heroContent.classList.remove('text-left');
  }
  
  // Restart animations
  heroTitle.style.animation = 'none';
  heroStats.style.animation = 'none';
  heroButtons.style.animation = 'none';
  
  setTimeout(() => {
    heroTitle.style.animation = '';
    heroStats.style.animation = '';
    heroButtons.style.animation = '';
  }, 10);
}

// Initialize about section
function initializeAboutSection() {
  const aboutTitle = document.querySelector('#about h2');
  const aboutContent = document.getElementById('about-content');
  
  aboutTitle.textContent = t('about.title');
  
  // Set direction
  aboutContent.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Clear about content
  aboutContent.innerHTML = '';
  
  // Create about text content
  const textContent = document.createElement('div');
  
  const paragraph1 = document.createElement('p');
  paragraph1.className = "text-lg mb-6";
  paragraph1.textContent = t('about.paragraph1');
  
  const paragraph2 = document.createElement('p');
  paragraph2.className = "text-lg mb-6";
  paragraph2.textContent = t('about.paragraph2');
  
  const paragraph3 = document.createElement('p');
  paragraph3.className = "text-lg";
  paragraph3.textContent = t('about.paragraph3');
  
  textContent.appendChild(paragraph1);
  textContent.appendChild(paragraph2);
  textContent.appendChild(paragraph3);
  
  // Create stats content
  const statsContent = document.createElement('div');
  statsContent.className = "bg-vce-red text-white rounded-lg p-8 shadow-xl";
  
  const statsTitle = document.createElement('h3');
  statsTitle.className = "text-2xl font-bold mb-6";
  statsTitle.textContent = t('about.stats.title');
  
  const statsGrid = document.createElement('div');
  statsGrid.className = "grid grid-cols-2 gap-6";
  
  // Stats data
  const stats = [
    { label: t('about.stats.founded'), value: "2019" },
    { label: t('about.stats.location'), value: currentLanguage === 'ar' ? "مصراتة" : "Misurata" },
    { label: t('about.stats.projects'), value: "+20" },
    { label: t('about.stats.team'), value: "+20" },
  ];
  
  // Add stats to grid
  stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = "text-center";
    
    const statValue = document.createElement('p');
    statValue.className = "text-3xl md:text-4xl font-bold mb-2";
    statValue.textContent = stat.value;
    
    const statLabel = document.createElement('p');
    statLabel.className = "text-sm md:text-base uppercase tracking-wider";
    statLabel.textContent = stat.label;
    
    statItem.appendChild(statValue);
    statItem.appendChild(statLabel);
    statsGrid.appendChild(statItem);
  });
  
  statsContent.appendChild(statsTitle);
  statsContent.appendChild(statsGrid);
  
  // Append content to about section
  aboutContent.appendChild(textContent);
  aboutContent.appendChild(statsContent);
}

// Initialize services section
function initializeServicesSection() {
  const servicesTitle = document.querySelector('#services h2');
  const servicesGrid = document.getElementById('services-grid');
  
  servicesTitle.textContent = t('services.title');
  
  // Set direction
  servicesGrid.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Clear services grid
  servicesGrid.innerHTML = '';
  
  // Services data
  const services = [
    {
      title: t('services.construction'),
      description: t('services.construction.desc'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>`,
    },
    {
      title: t('services.engineering'),
      description: t('services.engineering.desc'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>`,
    },
    {
      title: t('services.projectManagement'),
      description: t('services.projectManagement.desc'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>`,
    },
    {
      title: t('services.maintenance'),
      description: t('services.maintenance.desc'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>`,
    },
  ];
  
  // Add services to grid
  services.forEach(service => {
    const serviceItem = document.createElement('div');
    serviceItem.className = "bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-vce-blue transition-all duration-300 shadow-sm hover:shadow-md";
    
    const iconContainer = document.createElement('div');
    iconContainer.className = "flex justify-center mb-4 text-vce-blue";
    iconContainer.innerHTML = service.icon;
    
    const title = document.createElement('h3');
    title.className = "text-xl font-bold mb-3 text-center text-vce-blue";
    title.textContent = service.title;
    
    const description = document.createElement('p');
    description.className = "text-gray-600 text-center";
    description.textContent = service.description;
    
    serviceItem.appendChild(iconContainer);
    serviceItem.appendChild(title);
    serviceItem.appendChild(description);
    
    servicesGrid.appendChild(serviceItem);
  });
}

// Initialize equipment services section
function initializeEquipmentServicesSection() {
  const equipmentTitle = document.getElementById('equipment-title');
  const equipmentGrid = document.getElementById('equipment-grid');
  
  equipmentTitle.textContent = currentLanguage === 'ar' ? 'خدماتنا الإضافية' : 'Our Services';
  
  // Set direction
  equipmentGrid.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Clear equipment grid
  equipmentGrid.innerHTML = '';
  
  // Equipment services data
  const services = [
    {
      title: "Vivian Exports Company",
      image: "/lovable-uploads/ef14481f-0c89-41f6-a79f-c954677721aa.png",
      description: currentLanguage === 'ar' 
        ? 'فيفيان للإنشاءات والأعمال الهندسية، نوفر لك خدمة شراء الآلات الثقيلة لتلبية احتياجات مشاريعك الإنشائية والصناعية. سواء كنت تبحث عن حفارات، جرافات، رافعات، أو أي معدات أخرى، نساعدك في اختيار أفضل الحلول بأعلى جودة وأفضل الأسعار'
        : 'Vivian Construction & Engineering provides heavy machinery procurement services to meet the needs of your construction and industrial projects. Whether you are looking for excavators, bulldozers, cranes, or any other equipment, we help you choose the best solutions with the highest quality and best prices.',
      link: "https://www.facebook.com/share/1A9p7MFpdQ/?mibextid=wwXIfr",
      linkText: currentLanguage === 'ar' ? 'زيارة صفحة الفيسبوك' : 'Visit Facebook Page'
    },
    {
      title: "Vivian Petroleum Company",
      image: "/lovable-uploads/df44bc3a-9a03-420c-a8e2-678a63496d43.png",
      description: currentLanguage === 'ar' 
        ? 'شركة فيفيان للخدمات النفطية المتخصصة في جميع الأعمال النفطية المتنوعة من صيانة وتطوير و إنشاء و تشغيل'
        : 'Vivian Petroleum Company specializes in various petroleum services including maintenance, development, construction, and operations.',
      link: "https://www.facebook.com/share/12KftC3tVoz/?mibextid=wwXIfr",
      linkText: currentLanguage === 'ar' ? 'زيارة صفحة الفيسبوك' : 'Visit Facebook Page'
    }
  ];
  
  // Add services to grid
  services.forEach(service => {
    const serviceItem = document.createElement('div');
    serviceItem.className = "flex flex-col items-center";
    
    const title = document.createElement('h3');
    title.className = "text-2xl font-bold mb-4 text-vce-blue";
    title.textContent = service.title;
    
    const image = document.createElement('img');
    image.src = service.image;
    image.alt = service.title;
    image.className = "rounded-lg shadow-lg w-full max-h-64 object-contain mb-6";
    image.onerror = function() {
      this.src = "/placeholder.svg";
      this.classList.add("border", "border-gray-200");
    };
    
    const description = document.createElement('p');
    description.className = "text-lg text-gray-700 mb-4";
    description.textContent = service.description;
    
    const link = document.createElement('a');
    link.href = service.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "vce-btn vce-btn-primary flex items-center justify-center gap-2 w-full md:w-auto";
    
    link.textContent = service.linkText;
    
    const linkIcon = document.createElement('span');
    linkIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 00-2 2H5a2 2 0 00-2-2V8a2 2 0 002-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    
    link.appendChild(linkIcon);
    
    serviceItem.appendChild(title);
    serviceItem.appendChild(image);
    serviceItem.appendChild(description);
    serviceItem.appendChild(link);
    
    equipmentGrid.appendChild(serviceItem);
  });
}

// Initialize projects section
function initializeProjectsSection() {
  const projectsTitle = document.querySelector('#projects h2');
  const projectsGrid = document.getElementById('projects-grid');
  const projectsLoading = document.getElementById('projects-loading');
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-content');
  
  projectsTitle.textContent = t('projects.title');
  
  // Set direction for projects section
  projectsGrid.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Fallback projects data
  const fallbackProjects = [
    {
      id: '1',
      title: currentLanguage === 'ar' ? "مشروع تعبيد الطريق بالقرب من شارع السعدون" : "Implementation of the road paving project near Saadoun Street",
      category: currentLanguage === 'ar' ? "البنية التحتية" : "Infrastructure",
      location: currentLanguage === 'ar' ? "شارع السعدون، مصراتة" : "Saadoun Street, Misurata",
      year: "2024",
      main_image: "/lovable-uploads/764e4493-158f-464c-b2a7-0bb4c167c626.png",
      image_urls: [
        "/lovable-uploads/764e4493-158f-464c-b2a7-0bb4c167c626.png",
        "/lovable-uploads/58819374-01be-4ebd-a520-5680cf78f10f.png",
        "/lovable-uploads/47f3dc8c-3817-48b0-80d1-10826321dcd6.png"
      ],
      description: currentLanguage === 'ar' ? "مشروع رصف طر�� رئيسي لتحسين البنية التحتية للنقل في منطقة شارع السعدون بمصراتة." : "A major road paving project to improve transportation infrastructure in the Saadoun Street area of Misurata.",
      language: currentLanguage
    },
    {
      id: '2',
      title: currentLanguage === 'ar' ? "تنفيذ مشروع رصف الطرق في منتجع مصراتة" : "Implementation of the road paving project in Misurata Resort",
      category: currentLanguage === 'ar' ? "البنية التحتية" : "Infrastructure",
      location: currentLanguage === 'ar' ? "منتجع مصراتة" : "Misurata Resort",
      year: "2023",
      main_image: "/lovable-uploads/2d2f73f8-6966-4742-9824-8fe7857287de.png",
      image_urls: [
        "/lovable-uploads/2d2f73f8-6966-4742-9824-8fe7857287de.png",
        "/lovable-uploads/eeb56569-810c-4bc9-9069-c1c8f094329e.png",
        "/lovable-uploads/bd310ad2-71e1-4ace-86e8-a2621b68a29e.png"
      ],
      description: currentLanguage === 'ar' ? "مشروع تطوير البنية التحتية لرصف الطرق في منتجع مصراتة السياحي، مع تركيز على جودة الطرق والمناظر الطبيعية المحيطة." : "Infrastructure development project for road paving in Misurata Resort, with a focus on road quality and surrounding landscapes.",
      language: currentLanguage
    },
    {
      id: '3',
      title: currentLanguage === 'ar' ? "اعمال الحفر و الردم لبعض المشاريع المنفذة" : "Excavation and backfilling works for various implemented projects",
      category: currentLanguage === 'ar' ? "اعمال الطرق" : "Road works",
      location: currentLanguage === 'ar' ? "مصراتة" : "Misurata",
      year: "2025",
      main_image: "/lovable-uploads/e3c4f0f2-39e2-4c28-8d27-ce5ded87826a.png",
      image_urls: [
        "/lovable-uploads/e3c4f0f2-39e2-4c28-8d27-ce5ded87826a.png",
        "/lovable-uploads/1e2862f3-0439-48ba-97c6-d87f36a6942d.png",
        "/lovable-uploads/fd57dbaf-61e1-4423-b004-661fdfb41fda.png"
      ],
      description: currentLanguage === 'ar' ? "مشروع متخصص في أعمال الحفر والردم باستخدام معدات ثقيلة متطورة لتحضير مواقع البناء والطرق." : "Specialized project in excavation and backfilling using advanced heavy machinery to prepare construction sites and roads.",
      language: currentLanguage
    },
    {
      id: '4',
      title: currentLanguage === 'ar' ? "أعمال تنفيذ رصف طرق مقسم زراعي في منطقة طمينة/مصراتة" : "Road paving works for agricultural subdivision in Tmeina/Misurata area",
      category: currentLanguage === 'ar' ? "اعمال الطرق" : "Road works",
      location: currentLanguage === 'ar' ? "طمينة، مصراتة" : "Tmeina, Misurata",
      year: "2021",
      main_image: "/lovable-uploads/41158a6b-decb-4bb0-be94-59ab27125f05.png",
      image_urls: [
        "/lovable-uploads/41158a6b-decb-4bb0-be94-59ab27125f05.png",
        "/lovable-uploads/cc9f227b-5166-47ad-b98b-c92e9a722a34.png",
        "/lovable-uploads/a0545a7a-04c6-4ba2-9bcd-fe33fc0e8b97.png"
      ],
      description: currentLanguage === 'ar' ? "مشروع تطوير البنية التحتية للطرق في منطقة زراعية بطمينة/مصراتة لتحسين إمكانية الوصول وتعزيز التنمية المحلية." : "Road infrastructure development project in an agricultural area of Tmeina/Misurata to improve accessibility and enhance local development.",
      language: currentLanguage
    },
    {
      id: '5',
      title: currentLanguage === 'ar' ? "تنفيذ أعمال رش طبقة M.C.O" : "Implementation of M.C.O Layer Spraying Works",
      category: currentLanguage === 'ar' ? "أعمال الطرق" : "Road Works",
      location: currentLanguage === 'ar' ? "مصراتة" : "Misurata",
      year: "2024",
      main_image: "/lovable-uploads/42dbda78-0b0b-42f6-97e2-791ac668ad22.png",
      image_urls: [
        "/lovable-uploads/42dbda78-0b0b-42f6-97e2-791ac668ad22.png",
        "/lovable-uploads/30eed758-6079-4c7b-a37e-3051a66eee3c.png",
        "/lovable-uploads/8565d59c-768a-4dd7-b61d-266c66f6c3ed.png"
      ],
      description: currentLanguage === 'ar' ? "تنفيذ أعمال رش طبقة M.C.O للطرق لتحسين جودتها ومتانتها وتعزيز البنية التحتية للطرق." : "Implementation of M.C.O layer spraying works for roads to improve quality, durability and enhance road infrastructure.",
      language: currentLanguage
    },
    {
      id: '6',
      title: currentLanguage === 'ar' ? "عمل خاص في منطقه الشواهده" : "Special work in Al-Shawahdeh area",
      category: currentLanguage === 'ar' ? "أعمال الطرق" : "Road Works",
      location: currentLanguage === 'ar' ? "منطقة الشواهده" : "Al-Shawahdeh area",
      year: "2024",
      main_image: "/lovable-uploads/47ba2542-ff4e-409b-aa2f-8e0c3e0414c8.png",
      image_urls: [
        "/lovable-uploads/47ba2542-ff4e-409b-aa2f-8e0c3e0414c8.png",
        "/lovable-uploads/597ba30c-3457-424b-bc06-cb63d3405443.png",
        "/lovable-uploads/c0c12c3e-7832-489f-9bea-37d3e38cbdf5.png"
      ],
      description: currentLanguage === 'ar' 
        ? "أعمال تنفيذ مجموعة طرق بالرابط بين شارع بنغازي وساحات مسجد بن رمضان، تنفيذ شركة فيفيـان، وإشراف جهاز تنفيذ مشروعات المواصلات مصراتة.\n📍الشواهده\n🗓️ الأحد 11 فبراير 2024م" 
        : "Implementation of a group of roads linking Benghazi Street and Ben Ramadan Mosque squares, executed by Vivian Company, and supervised by the Misurata Transportation Projects Implementation Agency.\n📍Al-Shawahda\n🗓️ Sunday, February 11, 2024",
      language: currentLanguage
    }
  ];
  
  // Function to render projects
  function renderProjects(projects) {
    // First show loading
    projectsLoading.style.display = 'flex';
    projectsGrid.querySelectorAll(':not(#projects-loading)').forEach(el => el.remove());
    
    setTimeout(() => {
      // Hide loading and show projects
      projectsLoading.style.display = 'none';
      
      // Add projects to grid
      projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300";
        
        const imageContainer = document.createElement('div');
        imageContainer.className = "h-56 bg-cover bg-center relative";
        
        const image = document.createElement('img');
        image.src = project.main_image;
        image.alt = project.title;
        image.className = "w-full h-full object-cover";
        image.onerror = function() {
          this.src = "/placeholder.svg";
          this.classList.add("border", "border-gray-200");
        };
        
        imageContainer.appendChild(image);
        
        const contentContainer = document.createElement('div');
        contentContainer.className = "p-6";
        
        const title = document.createElement('h3');
        title.className = "text-xl font-bold mb-2 text-vce-blue";
        title.textContent = project.title;
        
        const metaContainer = document.createElement('div');
        metaContainer.className = "flex justify-between mb-3";
        
        const category = document.createElement('span');
        category.className = "text-gray-600";
        category.textContent = project.category;
        
        const year = document.createElement('span');
        year.className = "text-gray-600";
        year.textContent = project.year;
        
        metaContainer.appendChild(category);
        metaContainer.appendChild(year);
        
        const viewButton = document.createElement('button');
        viewButton.className = "vce-btn vce-btn-primary w-full";
        viewButton.textContent = t('projects.viewProject');
        viewButton.onclick = () => openProjectDetails(project.id);
        
        contentContainer.appendChild(title);
        contentContainer.appendChild(metaContainer);
        contentContainer.appendChild(viewButton);
        
        projectItem.appendChild(imageContainer);
        projectItem.appendChild(contentContainer);
        
        projectsGrid.appendChild(projectItem);
      });
    }, 1000); // Simulate loading delay
  }
  
  // Function to open project details
  function openProjectDetails(projectId) {
    const project = fallbackProjects.find(p => p.id === projectId);
    
    if (!project) return;
    
    projectModalContent.innerHTML = '';
    
    // Image grid
    const imageGrid = document.createElement('div');
    imageGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-2 p-2";
    
    project.image_urls.forEach((img, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.alt = `${project.title} - image ${index + 1}`;
      imgElement.className = `w-full h-auto rounded ${index === 2 ? 'md:col-span-2' : ''}`;
      imgElement.onerror = function() {
        this.src = "/placeholder.svg";
        this.classList.add("border", "border-gray-200");
      };
      
      imageGrid.appendChild(imgElement);
    });
    
    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.className = "p-6";
    
    // Header with title and close button
    const header = document.createElement('div');
    header.className = "flex justify-between items-center mb-4";
    
    const title = document.createElement('h3');
    title.className = "text-2xl font-bold text-vce-blue";
    title.textContent = project.title;
    
    const closeButton = document.createElement('button');
    closeButton.className = "text-gray-500 hover:text-gray-800";
    closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>`;
    closeButton.onclick = closeProjectDetails;
    
    header.appendChild(title);
    header.appendChild(closeButton);
    
    // Project details grid
    const detailsGrid = document.createElement('div');
    detailsGrid.className = "grid md:grid-cols-2 gap-4 mb-4";
    
    // Category
    const categoryContainer = document.createElement('div');
    const categoryLabel = document.createElement('p');
    categoryLabel.className = "text-gray-600 font-semibold";
    categoryLabel.textContent = t('projects.category');
    const categoryValue = document.createElement('p');
    categoryValue.textContent = project.category;
    categoryContainer.appendChild(categoryLabel);
    categoryContainer.appendChild(categoryValue);
    
    // Year
    const yearContainer = document.createElement('div');
    const yearLabel = document.createElement('p');
    yearLabel.className = "text-gray-600 font-semibold";
    yearLabel.textContent = t('projects.year');
    const yearValue = document.createElement('p');
    yearValue.textContent = project.year;
    yearContainer.appendChild(yearLabel);
    yearContainer.appendChild(yearValue);
    
    // Location
    const locationContainer = document.createElement('div');
    const locationLabel = document.createElement('p');
    locationLabel.className = "text-gray-600 font-semibold";
    locationLabel.textContent = t('projects.location');
    const locationValue = document.createElement('p');
    locationValue.textContent = project.location;
    locationContainer.appendChild(locationLabel);
    locationContainer.appendChild(locationValue);
    
    detailsGrid.appendChild(categoryContainer);
    detailsGrid.appendChild(yearContainer);
    detailsGrid.appendChild(locationContainer);
    
    // Description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = "mb-6";
    
    const descriptionLabel = document.createElement('p');
    descriptionLabel.className = "text-gray-600 font-semibold";
    descriptionLabel.textContent = t('projects.description');
    
    const descriptionValue = document.createElement('p');
    descriptionValue.className = "mt-2";
    descriptionValue.textContent = project.description;
    
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionValue);
    
    // Footer buttons
    const footer = document.createElement('div');
    footer.className = "flex justify-end";
    
    const closeBtn = document.createElement('button');
    closeBtn.className = "vce-btn bg-gray-200 text-gray-800 hover:bg-gray-300 ml-4";
    closeBtn.textContent = t('projects.close');
    closeBtn.onclick = closeProjectDetails;
    
    const contactBtn = document.createElement('a');
    contactBtn.href = "#contact";
    contactBtn.className = "vce-btn vce-btn-primary";
    contactBtn.textContent = t('projects.contactUs');
    contactBtn.onclick = closeProjectDetails;
    
    footer.appendChild(closeBtn);
    footer.appendChild(contactBtn);
    
    // Append all elements to content container
    contentContainer.appendChild(header);
    contentContainer.appendChild(detailsGrid);
    contentContainer.appendChild(descriptionContainer);
    contentContainer.appendChild(footer);
    
    // Append to modal content
    projectModalContent.appendChild(imageGrid);
    projectModalContent.appendChild(contentContainer);
    
    // Show modal
    projectModal.classList.remove('hidden');
    projectModal.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Close modal when clicking outside content
    projectModal.onclick = (e) => {
      if (e.target === projectModal) {
        closeProjectDetails();
      }
    };
  }
  
  // Function to close project details
  function closeProjectDetails() {
    projectModal.classList.add('hidden');
  }
  
  // Render projects
  renderProjects(fallbackProjects);
}

// Initialize testimonials section
function initializeTestimonialsSection() {
  const testimonialsTitle = document.getElementById('testimonials-title');
  const testimonialCarousel = document.getElementById('testimonials-carousel');
  const regularTestimonials = document.getElementById('regular-testimonials');
  
  // Set title
  testimonialsTitle.textContent = currentLanguage === 'ar' ? 'اخبرنا' : 'Testimonials';
  
  // Set direction
  testimonialCarousel.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  regularTestimonials.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Clear containers
  testimonialCarousel.innerHTML = '';
  regularTestimonials.innerHTML = '';
  
  // Government testimonials data
  const governmentTestimonials = [
    {
      id: 'gov-1',
      author: 'جهاز تنفيذ مشروعات المواصلات مصراتة',
      company: 'حكومة الوحدة الوطنية الليبية',
      content: currentLanguage === 'ar' 
        ? 'أعمال تنفيذ مجموعة طرق بالرابط بين شارع بنغازي وساحات مسجد بن رمضان، تنفيذ شركة فيفيـان، وإشراف جهاز تنفيذ مشروعات المواصلات مصراتة.\n📍الرويسـات\n🗓️ الأحد 11 فبراير 2024م' 
        : 'Implementation of a group of roads linking Benghazi Street and Ben Ramadan Mosque squares, executed by Vivian Company, and supervised by the Misurata Transportation Projects Implementation Agency.\n📍Al-Ruwisat\n🗓️ Sunday, February 11, 2024',
      location: currentLanguage === 'ar' ? 'الرويسـات، مصراتة' : 'Al-Ruwisat, Misurata',
      images: [
        "/lovable-uploads/e1d923a0-2e74-4a50-8fd4-72848946d1ba.png",
        "/lovable-uploads/318cdbb4-7767-4d90-a851-0699250cefd0.png",
        "/lovable-uploads/0f2be7a5-d88e-4b0b-93ba-79b0ca9127b5.png",
        "/lovable-uploads/16a007e5-6451-4392-967e-eeb396e40f48.png"
      ],
      socialLink: "https://www.facebook.com/share/p/16UjuPuATY/"
    },
    {
      id: 'gov-2',
      author: 'مصلحة الطرق و الجسور',
      company: 'وزارة المواصلات',
      content: currentLanguage === 'ar' 
        ? 'حضور مدير عام الشركة السيد/ إسماعيل إبراهيم أبوزهو لاجتماع أقيم في موقع مصلحة الطرق و الجسور فرع مصراتة مع وزير المواصلات السيد/ محمد الشهوبي.' 
        : 'Attendance of the company\'s general manager, Mr. Ismail Ibrahim Abu Zaho, at a meeting held at the Roads and Bridges Authority, Misurata branch, with the Minister of Transportation, Mr. Muhammad Al-Shahoubi.',
      location: currentLanguage === 'ar' ? 'مصراتة' : 'Misurata',
      images: [
        "/lovable-uploads/7718579f-007a-4f4c-baab-607497a6465a.png",
        "/lovable-uploads/bc2d0966-2e45-4ba9-8683-df283705b1b7.png"
      ]
    }
  ];
  
  // Regular testimonials data
  const regularTestimonialsData = [
    // You can add regular testimonials here if needed
  ];
  
  // Render government testimonials
  governmentTestimonials.forEach(testimonial => {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = "flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4";
    
    testimonialItem.innerHTML = `
      <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 h-full flex flex-col">
        ${testimonial.images && testimonial.images.length > 0 ? `
          <div class="mb-4 h-48 overflow-hidden rounded-md">
            <img 
              src="${testimonial.images[0]}" 
              alt="${testimonial.author}"
              class="w-full h-full object-cover"
            />
          </div>
        ` : ''}
        
        <p class="text-white mb-4 italic whitespace-pre-line flex-grow">
          "${testimonial.content}"
        </p>
        
        <div>
          <p class="font-bold text-white">${testimonial.author}</p>
          ${testimonial.company ? `<p class="text-vce-red">${testimonial.company}</p>` : ''}
          ${testimonial.location ? `<p class="text-white/80 text-sm mt-1">${testimonial.location}</p>` : ''}
          ${testimonial.socialLink ? `
            <button 
              class="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded flex items-center"
              onclick="window.open('${testimonial.socialLink}', '_blank')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              ${currentLanguage === 'ar' ? 'عرض على فيسبوك' : 'View on Facebook'}
            </button>
          ` : ''}
        </div>
      </div>
    `;
    
    testimonialCarousel.appendChild(testimonialItem);
  });
  
  // Render regular testimonials
  regularTestimonialsData.forEach(testimonial => {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = "bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20";
    
    testimonialItem.innerHTML = `
      <div class="mb-6">
        <svg class="h-8 w-8 text-vce-red" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8v12h12v-12h-12zM8 6h16v16h-16v-16z"></path>
          <path d="M16 0v2h-16v16h2v-14h14v-4z"></path>
        </svg>
      </div>
      
      <p class="text-white mb-6 italic">"${testimonial.content}"</p>
      
      <div>
        <p class="font-bold text-white">${testimonial.author}</p>
        ${testimonial.role && testimonial.company ? `
          <p class="text-vce-red">${testimonial.role}, ${testimonial.company}</p>
        ` : ''}
      </div>
    `;
    
    regularTestimonials.appendChild(testimonialItem);
  });
  
  // If there are no regular testimonials, hide the container
  if (regularTestimonialsData.length === 0) {
    regularTestimonials.style.display = 'none';
  }
  
  // Carousel functionality
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');
  let currentSlide = 0;
  const slideCount = governmentTestimonials.length;
  
  function updateCarousel() {
    const slideWidth = testimonialCarousel.querySelector('div').offsetWidth;
    testimonialCarousel.style.transform = `translateX(${currentLanguage === 'ar' ? '' : '-'}${currentSlide * slideWidth}px)`;
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  }
  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Initial update
  setTimeout(updateCarousel, 100); // Short delay to ensure layout is complete
  
  // Auto-rotate every 5 seconds
  setInterval(nextSlide, 5000);
}

// Initialize contact section
function initializeContactSection() {
  const contactTitle = document.querySelector('#contact h2');
  const contactInfoTitle = document.getElementById('contact-info-title');
  const contactInfoLoading = document.getElementById('contact-info-loading');
  const contactInfoContent = document.getElementById('contact-info-content');
  const mapLinkText = document.getElementById('map-link-text');
  
  contactTitle.textContent = t('contact.title');
  contactInfoTitle.textContent = t('contact.info');
  mapLinkText.textContent = currentLanguage === 'ar' ? 'عرض الموقع على الخريطة' : 'View Location on Map';
  
  // Set direction
  const contactInfoContainer = document.getElementById('contact-info-container');
  contactInfoContainer.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Mock contact data
  const contactInfo = [
    {
      id: '1',
      type: 'address',
      label: currentLanguage === 'ar' ? 'العنوان' : 'Address',
      value: currentLanguage === 'ar' ? 'شارع طرابلس، مصراتة، ليبيا' : 'Tripoli Street, Misurata, Libya',
      icon: 'MapPin',
      order_index: 1,
    },
    {
      id: '2',
      type: 'phone',
      label: currentLanguage === 'ar' ? 'الهاتف' : 'Phone',
      value: '+218 91-123-4567',
      icon: 'Phone',
      order_index: 2,
    },
    {
      id: '3',
      type: 'email',
      label: currentLanguage === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'info@vce-co.com',
      icon: 'Mail',
      order_index: 3,
    }
  ];
  
  // Function to get icon HTML
  function getIconHtml(iconName) {
    switch (iconName) {
      case 'MapPin':
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`;
      case 'Phone':
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>`;
      case 'Mail':
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`;
    }
  }
  
  // Function to render contact info
  function renderContactInfo() {
    // Show loading
    contactInfoLoading.style.display = 'block';
    contactInfoContent.style.display = 'none';
    
    // Simulate loading
    setTimeout(() => {
      // Hide loading and show content
      contactInfoLoading.style.display = 'none';
      contactInfoContent.style.display = 'block';
      
      // Clear existing content
      contactInfoContent.innerHTML = '';
      
      // Add contact items
      contactInfo.forEach(info => {
        const infoItem = document.createElement('div');
        infoItem.className = "flex items-start";
        
        const iconContainer = document.createElement('div');
        iconContainer.className = "flex-shrink-0 mt-1 text-vce-blue";
        iconContainer.innerHTML = getIconHtml(info.icon);
        
        const textContainer = document.createElement('div');
        textContainer.className = currentLanguage === 'ar' ? 'mr-4' : 'ml-4';
        
        const label = document.createElement('p');
        label.className = "font-medium text-lg";
        label.textContent = info.label;
        
        const value = document.createElement('p');
        value.className = "text-gray-600 text-lg";
        value.textContent = info.value;
        
        textContainer.appendChild(label);
        textContainer.appendChild(value);
        
        infoItem.appendChild(iconContainer);
        infoItem.appendChild(textContainer);
        
        contactInfoContent.appendChild(infoItem);
      });
    }, 1000); // Simulate loading delay
  }
  
  // Render contact info
  renderContactInfo();
}

// Initialize footer
function initializeFooter() {
  const footerContent = document.getElementById('footer-content');
  const copyrightText = document.getElementById('copyright-text');
  
  // Set direction
  footerContent.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Clear footer content
  footerContent.innerHTML = '';
  
  // Company Info
  const companyInfo = document.createElement('div');
  
  const companyHeader = document.createElement('div');
  companyHeader.className = "mb-4";
  
  const companyName = document.createElement('h2');
  companyName.className = "text-3xl font-bold mb-1";
  companyName.textContent = "VCE";
  
  const companyFullName = document.createElement('p');
  companyFullName.className = "text-sm";
  companyFullName.textContent = currentLanguage === 'ar' ? "شركة فيفيان للإنشاءات والاعمال الهندسية" : "Vivian Construction & Engineering Services";
  
  companyHeader.appendChild(companyName);
  companyHeader.appendChild(companyFullName);
  
  const companyTagline = document.createElement('p');
  companyTagline.className = "mb-4 text-gray-300";
  companyTagline.textContent = t('footer.tagline');
  
  const socialLinks = document.createElement('div');
  socialLinks.className = `flex ${currentLanguage === 'ar' ? 'space-x-reverse' : 'space-x-3'}`;
  
  const facebookLink = document.createElement('a');
  facebookLink.href = "https://www.facebook.com/share/1DznPR5Q8D/?mibextid=wwXIfr";
  facebookLink.target = "_blank";
  facebookLink.rel = "noopener noreferrer";
  facebookLink.className = `bg-white/10 hover:bg-vce-red transition-colors duration-300 p-2 rounded ${currentLanguage === 'ar' ? 'ml-3' : ''}`;
  facebookLink.setAttribute('aria-label', 'Facebook');
  facebookLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`;
  
  socialLinks.appendChild(facebookLink);
  
  companyInfo.appendChild(companyHeader);
  companyInfo.appendChild(companyTagline);
  companyInfo.appendChild(socialLinks);
  
  // Quick Links
  const quickLinks = document.createElement('div');
  
  const quickLinksTitle = document.createElement('h3');
  quickLinksTitle.className = "text-xl font-bold mb-4";
  quickLinksTitle.textContent = t('footer.quickLinks');
  
  const linksList = document.createElement('ul');
  linksList.className = "space-y-2";
  
  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];
  
  navLinks.forEach(link => {
    const listItem = document.createElement('li');
    
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.className = "text-gray-300 hover:text-white transition-colors duration-300";
    linkElement.textContent = link.name;
    
    listItem.appendChild(linkElement);
    linksList.appendChild(listItem);
  });
  
  quickLinks.appendChild(quickLinksTitle);
  quickLinks.appendChild(linksList);
  
  // Contact
  const contactSection = document.createElement('div');
  
  const contactTitle = document.createElement('h3');
  contactTitle.className = "text-xl font-bold mb-4";
  contactTitle.textContent = t('footer.contact');
  
  const address = document.createElement('address');
  address.className = "not-italic text-gray-300 space-y-3";
  
  const addressLine = document.createElement('p');
  addressLine.textContent = t('footer.address');
  
  const cityLine = document.createElement('p');
  cityLine.textContent = t('footer.city');
  
  const phoneLine = document.createElement('p');
  phoneLine.textContent = t('footer.phone');
  
  const emailLine = document.createElement('p');
  emailLine.textContent = t('footer.email');
  
  address.appendChild(addressLine);
  address.appendChild(cityLine);
  address.appendChild(phoneLine);
  address.appendChild(emailLine);
  
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(address);
  
  // Add all sections to footer
  footerContent.appendChild(companyInfo);
  footerContent.appendChild(quickLinks);
  footerContent.appendChild(contactSection);
  
  // Set copyright text
  const currentYear = new Date().getFullYear();
  copyrightText.textContent = t('footer.copyright').replace('{year}', currentYear.toString());
}

// Set the document direction based on language
function setDirectionBasedOnLanguage() {
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
}

// Translation helper function
function t(key) {
  return translations[currentLanguage][key] || key;
}

// Toast notification function
function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = `p-4 mb-4 rounded-lg shadow-lg text-white transition-all transform translate-y-0 opacity-0 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' :
    'bg-blue-500'
  }`;
  
  toast.textContent = message;
  toastContainer.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.add('translate-y-0', 'opacity-100');
    toast.classList.remove('opacity-0');
  }, 10);
  
  // Remove after duration
  setTimeout(() => {
    toast.classList.add('opacity-0');
    toast.classList.remove('opacity-100');
    
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, duration);
}

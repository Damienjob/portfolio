// Advanced particle system
function createParticleSystem() {
    const particleSystem = document.getElementById("particleSystem");
    const particleCount = 80;
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
  
      const size = Math.random() * 4 + 1;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 15 + 10 + "s";
  
      // Random colors
      const colors = [
        "rgba(99, 102, 241, 0.3)",
        "rgba(236, 72, 153, 0.3)",
        "rgba(6, 182, 212, 0.3)",
      ];
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
  
      particleSystem.appendChild(particle);
    }
  }
  
  // Advanced scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
  
        // Special animations for specific sections
        if (entry.target.id === "skills") {
          animateSkills();
        } else if (entry.target.id === "projects") {
          animateProjects();
        } else if (entry.target.id === "languages") {
          animateLanguageBars();
        }
      }
    });
  }, observerOptions);
  
  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
  
  // Skills animation
  function animateSkills() {
    const skillCards = document.querySelectorAll(".skill-category");
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.opacity = "1";
      }, index * 200);
    });
  }
  
  // Projects animation
  function animateProjects() {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "rotateY(0deg) scale(1)";
        card.style.opacity = "1";
      }, index * 150);
    });
  }
  
  // Language bars animation
  function animateLanguageBars() {
    const languageBars = document.querySelectorAll(".level-fill");
    languageBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }, index * 300);
    });
  }
  
  // Enhanced navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const scrollIndicator = document.getElementById("scrollIndicator");
  
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
      scrollIndicator.style.opacity = "0";
    } else {
      navbar.classList.remove("scrolled");
      scrollIndicator.style.opacity = "1";
    }
  });
  
  // Smooth scrolling with easing
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Advanced form handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector(".submit-btn");
      const originalHTML = btn.innerHTML;
  
      // Loading animation
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmission...';
      btn.style.background = "linear-gradient(45deg, #f59e0b, #d97706)";
      btn.disabled = true;
  
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message envoyé avec succès !';
        btn.style.background = "linear-gradient(45deg, #10b981, #059669)";
  
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background =
            "linear-gradient(45deg, var(--primary), var(--secondary))";
          btn.disabled = false;
          this.reset();
        }, 3000);
      }, 2000);
    });
  }
  
  // Dynamic cursor effect
  let cursor = document.createElement("div");
  cursor.style.cssText = `
              position: fixed;
              width: 20px;
              height: 20px;
              background: radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent);
              border-radius: 50%;
              pointer-events: none;
              z-index: 9999;
              transition: transform 0.1s ease;
          `;
  document.body.appendChild(cursor);
  
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
  });
  
  // Interactive hover effects
  document
    .querySelectorAll(".project-card, .skill-category, .stat-card, .education-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", function () {
        cursor.style.transform = "scale(2)";
        cursor.style.background =
          "radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)";
      });
  
      card.addEventListener("mouseleave", function () {
        cursor.style.transform = "scale(1)";
        cursor.style.background =
          "radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent)";
      });
    });
  
  // Typewriter effect for hero subtitle
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.style.width = "0";
    element.innerHTML = "";
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          element.style.borderRight = "none";
        }, 1000);
      }
    }
  
    setTimeout(type, 1000);
  }
  
  // Advanced parallax for orbs
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll(".orb");
  
    orbs.forEach((orb, index) => {
      const speed = 0.2 + index * 0.1;
      const yPos = -(scrolled * speed);
      const rotation = scrolled * 0.05;
      orb.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
    });
  });
  
  // Initialize everything
  window.addEventListener("load", () => {
    createParticleSystem();
  
    // Remove loading screen
    setTimeout(() => {
      const loadingScreen = document.querySelector(".loading-screen");
      if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
          loadingScreen.remove();
        }, 1000);
      }
    }, 3000);
  
    // Initialize typewriter
    const subtitle = document.querySelector(".hero-subtitle");
    if (subtitle) {
      typeWriter(subtitle, "DÉVELOPPEUR D'ÉLITE & INNOVATEUR");
    }
  });
  
  // Performance optimization
  let ticking = false;
  
  function updateOnScroll() {
    // Scroll-dependent animations here
    ticking = false;
  }
  
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });
  
  // Advanced 3D tilt effect
  document.querySelectorAll(".project-card, .skill-category, .education-card").forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
  
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
  
    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  });
  
  // Easter egg - Konami code
  let konamiCode = [];
  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
  
  document.addEventListener("keydown", (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
      konamiCode.shift();
    }
  
    if (
      konamiCode.length === konami.length &&
      konamiCode.every((val, i) => val === konami[i])
    ) {
      // Easter egg activated!
      document.body.style.filter = "hue-rotate(180deg)";
      setTimeout(() => {
        document.body.style.filter = "none";
      }, 3000);
      konamiCode = [];
    }
  });
  
  // Advanced mobile responsiveness
  function handleResize() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".orb").forEach((orb) => {
        orb.style.display = "none";
      });
    } else {
      document.querySelectorAll(".orb").forEach((orb) => {
        orb.style.display = "block";
      });
    }
  }
  
  window.addEventListener("resize", handleResize);
  handleResize(); // Initial call
  
  // Page visibility API for performance
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Pause animations when tab is not visible
      document.querySelectorAll("*").forEach((el) => {
        el.style.animationPlayState = "paused";
      });
    } else {
      // Resume animations
      document.querySelectorAll("*").forEach((el) => {
        el.style.animationPlayState = "running";
      });
    }
  });
  
  // Auto-scroll to sections on page load if hash exists
  window.addEventListener("load", () => {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 1000);
    }
  });
  
  // Add dynamic statistics counter animation
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = counter.textContent;
      if (!target.includes('+') && !target.includes('%') && target !== '∞') return;
      
      const numericTarget = parseInt(target);
      if (isNaN(numericTarget)) return;
      
      let current = 0;
      const increment = numericTarget / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current) + (target.includes('+') ? '+' : target.includes('%') ? '%' : '');
        }
      }, 50);
    });
  }
  
  // Trigger counter animation when stats section is visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

// --- Burger menu mobile ---
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerMenu");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("mobile-active");
      burger.classList.toggle("active");
    });
    // Ferme le menu mobile au clic sur un lien
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("mobile-active");
        burger.classList.remove("active");
      });
    });
  }
});
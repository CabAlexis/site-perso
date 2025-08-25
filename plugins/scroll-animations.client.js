export default defineNuxtPlugin(() => {
  if (process.client) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    // Observer unique pour toutes les animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Pour scroll-reveal
          if (element.classList.contains('scroll-reveal')) {
            element.classList.add('revealed');
          }
          
          // Animations spécifiques
          if (element.classList.contains('scroll-animate-zoom')) {
            element.style.animation = 'zoomIn 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-left')) {
            element.style.animation = 'slideInLeft 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-right')) {
            element.style.animation = 'slideInRight 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-up')) {
            element.style.animation = 'slideInUp 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-bounce')) {
            element.style.animation = 'slideInBounce 1s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-flip')) {
            element.style.animation = 'flipIn 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-rotate')) {
            element.style.animation = 'slideInRotate 0.8s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-glitch')) {
            element.style.animation = 'glitchIn 1.2s ease-out forwards';
          } else if (element.classList.contains('scroll-animate-scale')) {
            element.style.animation = 'fadeInScale 0.8s ease-out forwards';
          }
          
          // Pour les cards individuelles
          if (element.classList.contains('cyber-card')) {
            const delay = element.style.animationDelay || '0s';
            setTimeout(() => {
              element.style.animation = 'cardSlideUp 0.6s ease-out forwards';
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, parseFloat(delay) * 1000);
          }
          
          // Finaliser l'état après animation
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'none';
          }, 1000);
          
          // Ne plus observer après animation
          observer.unobserve(element);
        }
      })
    }, observerOptions);

    // Initialiser les animations
    const initAnimations = () => {
      // Observer tous les éléments animés
      const elements = document.querySelectorAll(`
        .scroll-reveal, 
        .scroll-animate-zoom, 
        .scroll-animate-left, 
        .scroll-animate-right, 
        .scroll-animate-up, 
        .scroll-animate-bounce, 
        .scroll-animate-flip, 
        .scroll-animate-rotate, 
        .scroll-animate-glitch, 
        .scroll-animate-scale, 
        .cyber-card
      `);
      
      elements.forEach(el => {
        // Préparer l'état initial selon le type d'animation
        if (el.classList.contains('scroll-animate-zoom') || el.classList.contains('scroll-animate-scale')) {
          el.style.opacity = '0';
          el.style.transform = 'scale(0.8)';
        } else if (el.classList.contains('scroll-animate-left')) {
          el.style.opacity = '0';
          el.style.transform = 'translateX(-50px)';
        } else if (el.classList.contains('scroll-animate-right')) {
          el.style.opacity = '0';
          el.style.transform = 'translateX(50px)';
        } else if (el.classList.contains('scroll-animate-up')) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
        } else if (el.classList.contains('scroll-animate-bounce')) {
          el.style.opacity = '0';
          el.style.transform = 'translateX(-100px)';
        } else if (el.classList.contains('scroll-animate-flip')) {
          el.style.opacity = '0';
          el.style.transform = 'rotateX(-90deg) translateY(20px)';
        } else if (el.classList.contains('scroll-animate-rotate')) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px) rotate(5deg) scale(0.9)';
        } else if (el.classList.contains('scroll-animate-glitch')) {
          el.style.opacity = '0';
          el.style.transform = 'translateX(-20px) skew(-5deg)';
        } else if (el.classList.contains('cyber-card')) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
        }
        
        // Observer l'élément
        observer.observe(el);
      });
    };

    // Lancer après le DOM
    setTimeout(initAnimations, 200);
    
    // Relancer sur changement de route
    const router = useRouter();
    router.afterEach(() => {
      setTimeout(initAnimations, 200);
    });
  }
})
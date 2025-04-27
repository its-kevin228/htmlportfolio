
    document.addEventListener('DOMContentLoaded', function () {
      // Loader
      setTimeout(function () {
        document.getElementById('loader').classList.add('hidden');
      }, 1500);
      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }
          }
        });
      });
      // Back to top button
      const backToTopButton = document.getElementById('back-to-top');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }
      });
      backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      // Custom cursor
      const cursor = document.getElementById('custom-cursor');
      document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
      document.addEventListener('mousedown', function () {
        cursor.classList.add('active');
      });
      document.addEventListener('mouseup', function () {
        cursor.classList.remove('active');
      });
      // Animate progress bars on scroll
      const progressBars = document.querySelectorAll('.progress-bar');
      function animateProgressBars() {
        progressBars.forEach(bar => {
          const rect = bar.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.classList.add('animate');
          }
        });
      }
      // Animate sections on scroll
      const sections = document.querySelectorAll('.section');
      function animateSections() {
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
          }
        });
      }
      // Initialize animations
      animateProgressBars();
      animateSections();
      window.addEventListener('scroll', function () {
        animateProgressBars();
        animateSections();
      });
      // Project filter
      const filterButtons = document.querySelectorAll('.filter-button');
      const projectCards = document.querySelectorAll('.project-card');
      filterButtons.forEach(button => {
        button.addEventListener('click', function () {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
          const filter = this.getAttribute('data-filter');
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
      // Project modal
      const modal = document.getElementById('project-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalImage = document.getElementById('modal-image');
      const modalDescription = document.getElementById('modal-description');
      const modalTechnologies = document.getElementById('modal-technologies');
      const modalFeatures = document.getElementById('modal-features');
      const modalLiveLink = document.getElementById('modal-live-link');
      const modalGithubLink = document.getElementById('modal-github-link');
      const closeModalButton = document.getElementById('close-modal');
      const viewProjectButtons = document.querySelectorAll('.view-project-btn');
      const projectsData = [
        {
          id: 1,
          title: "E-commerce Platform",
          image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20listings%2C%20shopping%20cart%2C%20payment%20options%2C%20responsive%20layout%2C%20professional%20UI%2FUX%20design%2C%20website%20mockup%20on%20desktop%20screen&width=600&height=400&seq=portfolio2&orientation=landscape",
          description: "Une plateforme e-commerce complète permettant aux entreprises de vendre leurs produits en ligne. Le système comprend un catalogue de produits, un panier d'achat, un processus de paiement sécurisé et un tableau de bord d'administration pour gérer les commandes et les produits.",
          technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS S3"],
          features: [
            "Catalogue de produits avec filtres avancés",
            "Système de panier d'achat persistant",
            "Passerelle de paiement sécurisée",
            "Gestion des commandes et des retours",
            "Tableau de bord administrateur complet",
            "Optimisation SEO intégrée"
          ],
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 2,
          title: "Fitness Tracking App",
          image: "https://readdy.ai/api/search-image?query=fitness%20tracking%20mobile%20app%20interface%20showing%20workout%20tracking%2C%20nutrition%20logging%2C%20progress%20charts%2C%20user%20profile%2C%20clean%20modern%20UI%20design%2C%20mobile%20app%20mockup%20on%20smartphone%20screen&width=600&height=400&seq=portfolio3&orientation=landscape",
          description: "Application mobile permettant aux utilisateurs de suivre leurs entraînements, leur nutrition et leurs progrès fitness. L'application offre des visualisations de données personnalisées et des recommandations basées sur les objectifs de l'utilisateur.",
          technologies: ["React Native", "Firebase", "Redux", "D3.js", "Google Fit API", "Apple HealthKit"],
          features: [
            "Suivi des entraînements avec plus de 100 exercices",
            "Journal nutritionnel avec base de données d'aliments",
            "Graphiques de progression personnalisés",
            "Plans d'entraînement adaptatifs",
            "Synchronisation avec les appareils connectés",
            "Mode hors ligne"
          ],
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 3,
          title: "Dashboard UI Design",
          image: "https://readdy.ai/api/search-image?query=dashboard%20UI%20design%20with%20data%20visualization%2C%20analytics%20charts%2C%20user%20statistics%2C%20modern%20admin%20panel%2C%20dark%20theme%2C%20professional%20interface%20design%2C%20clean%20layout%20with%20graphs%20and%20metrics&width=600&height=400&seq=portfolio4&orientation=landscape",
          description: "Design d'interface utilisateur pour un tableau de bord d'analyse de données. Le design met l'accent sur la lisibilité des données complexes et l'accessibilité des fonctionnalités clés pour les utilisateurs professionnels.",
          technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Principle", "Zeplin"],
          features: [
            "Thèmes clair et sombre personnalisables",
            "Visualisations de données interactives",
            "Interface adaptative pour tous les appareils",
            "Système de design complet avec composants réutilisables",
            "Prototypes interactifs haute fidélité",
            "Documentation d'implémentation détaillée"
          ],
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 4,
          title: "Real Estate Platform",
          image: "https://readdy.ai/api/search-image?query=real%20estate%20property%20listing%20website%20with%20property%20search%2C%20map%20integration%2C%20virtual%20tours%2C%20contact%20forms%2C%20modern%20web%20design%2C%20responsive%20layout%2C%20professional%20real%20estate%20website%20interface&width=600&height=400&seq=portfolio5&orientation=landscape",
          description: "Plateforme immobilière permettant aux utilisateurs de rechercher, comparer et contacter des agents pour des propriétés. Le système intègre des cartes interactives et des visites virtuelles pour une expérience utilisateur immersive.",
          technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "Three.js", "AWS"],
          features: [
            "Recherche avancée avec filtres géographiques",
            "Cartes interactives avec clusters de propriétés",
            "Visites virtuelles 3D des propriétés",
            "Système de messagerie intégré entre acheteurs et agents",
            "Alertes personnalisées pour les nouvelles propriétés",
            "Tableau de bord pour les agents immobiliers"
          ],
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 5,
          title: "Food Delivery App",
          image: "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20menu%20browsing%2C%20order%20tracking%2C%20payment%20options%2C%20modern%20UI%20design%2C%20food%20delivery%20app%20mockup%20on%20smartphone&width=600&height=400&seq=portfolio6&orientation=landscape",
          description: "Application mobile de livraison de nourriture permettant aux utilisateurs de commander des repas auprès de restaurants locaux. L'application offre un suivi en temps réel des commandes et plusieurs options de paiement.",
          technologies: ["Flutter", "Firebase", "Google Maps", "Stripe", "GetX", "Cloud Functions"],
          features: [
            "Géolocalisation pour trouver les restaurants à proximité",
            "Menus personnalisables avec options et extras",
            "Suivi en temps réel des livreurs sur la carte",
            "Système de paiement sécurisé multi-méthodes",
            "Programme de fidélité et récompenses",
            "Historique et récommande facile"
          ],
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 6,
          title: "Brand Identity Design",
          image: "https://readdy.ai/api/search-image?query=brand%20identity%20design%20for%20a%20tech%20startup%20showing%20logo%20variations%2C%20color%20palette%2C%20typography%2C%20business%20cards%2C%20letterhead%2C%20website%20mockup%2C%20cohesive%20brand%20design%20system&width=600&height=400&seq=portfolio7&orientation=landscape",
          description: "Création d'une identité visuelle complète pour une startup technologique. Le projet comprend la conception du logo, la palette de couleurs, la typographie et les applications sur différents supports.",
          technologies: ["Illustrator", "Photoshop", "InDesign", "After Effects", "Procreate", "Mockup Pro"],
          features: [
            "Logo principal et variations pour différents contextes",
            "Palette de couleurs primaires et secondaires",
            "Système typographique complet",
            "Papeterie d'entreprise (cartes de visite, en-têtes, etc.)",
            "Maquettes de site web et applications mobiles",
            "Guide de style complet et règles d'utilisation"
          ],
          liveLink: "#",
          githubLink: "#"
        }
      ];
      function openModal(projectId) {
        const project = projectsData.find(p => p.id === parseInt(projectId));
        if (project) {
          modalTitle.textContent = project.title;
          modalImage.src = project.image;
          modalImage.alt = project.title;
          modalDescription.textContent = project.description;
          // Clear and add technologies
          modalTechnologies.innerHTML = '';
          project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'text-sm bg-gray-100 py-1 px-3 rounded-full';
            span.textContent = tech;
            modalTechnologies.appendChild(span);
          });
          // Clear and add features
          modalFeatures.innerHTML = '';
          project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
          });
          modalLiveLink.href = project.liveLink;
          modalGithubLink.href = project.githubLink;
          modal.classList.add('active');
        }
      }
      viewProjectButtons.forEach(button => {
        button.addEventListener('click', function () {
          const projectId = this.getAttribute('data-id');
          openModal(projectId);
        });
      });
      closeModalButton.addEventListener('click', function () {
        modal.classList.remove('active');
      });
      // Close modal when clicking outside
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
      // Contact form submission
      const contactForm = document.getElementById('contact-form');
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        setTimeout(function () {
          submitButton.textContent = 'Message envoyé !';
          submitButton.classList.add('bg-green-500');
          // Reset form
          contactForm.reset();
          // Reset button after 3 seconds
          setTimeout(function () {
            submitButton.textContent = originalText;
            submitButton.classList.remove('bg-green-500');
            submitButton.disabled = false;
          }, 3000);
        }, 1500);
      });
      // Navbar animation on scroll
      const header = document.getElementById('main-header');
      let lastScrollTop = 0;
      let isAnimating = false;
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
          if (!isAnimating) {
            isAnimating = true;
            header.classList.add('header-scrolled');
            const icons = header.querySelectorAll('.nav-icon');
            icons.forEach((icon, index) => {
              setTimeout(() => {
                icon.style.animation = 'none';
                icon.offsetHeight;
                icon.style.animation = 'bounce 0.6s ease-in-out';
              }, index * 100);
            });
            setTimeout(() => {
              isAnimating = false;
            }, 600);
          }
        } else {
          header.classList.remove('header-scrolled');
        }
        lastScrollTop = scrollTop;
      });
      // Theme switch
      const themeSwitch = document.getElementById('theme-switch');
      const html = document.documentElement;
      function setTheme(isDark) {
        if (isDark) {
          document.documentElement.classList.add('dark');
          themeSwitch.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          themeSwitch.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
      themeSwitch.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        setTheme(isDark);
      });
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme === 'dark');
      }
      // Initialize particles.js
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#6366f1"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6366f1",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      // Skills chart
      const skillsChart = echarts.init(document.getElementById('skills-chart'));
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          textStyle: {
            color: '#1f2937'
          }
        },
        radar: {
          indicator: [
            { name: 'Frontend', max: 100 },
            { name: 'Backend', max: 100 },
            { name: 'UI/UX', max: 100 },
            { name: 'Databases', max: 100 },
            { name: 'DevOps', max: 100 },
            { name: 'Mobile', max: 100 }
          ],
          radius: '65%',
          axisName: {
            color: '#1f2937',
            fontSize: 12
          }
        },
        series: [{
          name: 'Compétences',
          type: 'radar',
          data: [{
            value: [90, 85, 78, 83, 75, 80],
            name: 'Niveau de compétence',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(87, 181, 231, 0.1)' },
                { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
              ])
            },
            lineStyle: {
              color: 'rgba(87, 181, 231, 1)',
              width: 2
            },
            itemStyle: {
              color: 'rgba(87, 181, 231, 1)'
            }
          }]
        }]
      };
      skillsChart.setOption(option);
      // Responsive chart
      window.addEventListener('resize', function () {
        skillsChart.resize();
      });
    });
  
/**
 * Muneeswaran Portfolio
 * Theme: Netflix Cinematic Dark Interface
 * Vanilla JavaScript (No jQuery / No external frameworks required)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  // ===================================================================
  // 1. PROJECT DATA REPOSITORY (Preserving all genuine project information)
  // ===================================================================
  const projectsData = [
    {
      id: 'peeyem-traders',
      title: 'Peeyem Traders',
      category: 'web',
      categoryLabel: 'Business Website',
      role: 'Lead Web Developer',
      matchScore: '99% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #1',
      featured: true,
      image: 'img/peeyem-traders.jpg',
      demoUrl: 'https://www.peeyemtraders.com/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'Industrial conveyor belt business website for Peeyem Traders, based in Coimbatore.',
      fullDesc: 'Industrial conveyor belt business website for Peeyem Traders, based in Coimbatore. Engineered with modern responsive web architecture, comprehensive product catalogs for heavy-duty multi-ply belts (NN/EP), chevron cleated belts, and industrial rubber sheets, technical specifications, and direct quotation inquiry workflows.',
      features: [
        'Comprehensive Product Catalog for Conveyor Belts & Industrial Rubber',
        'Direct Quotation & Technical Inquiry Routing System',
        'Detailed Engineering Specifications for NN/EP & Chevron Belts',
        'High-Performance Responsive B2B Interface',
        'SEO-Optimized Architecture for Industrial Search Visibility'
      ],
      techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel', 'SEO Optimization']
    },
    {
      id: 'gopika-beauty-care',
      title: 'Gopika Beauty Care',
      category: 'web',
      categoryLabel: 'Beauty & Lifestyle',
      role: 'Lead Web Developer',
      matchScore: '98% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #2',
      featured: true,
      image: 'img/gopika-beauty.jpg',
      demoUrl: 'https://gopikabeautycare.vercel.app/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A professional website showcasing bridal makeovers, saree draping and beauty services, combining traditional elegance with modern styling.',
      fullDesc: 'A professional website showcasing bridal makeovers, saree draping and beauty services, combining traditional elegance with modern styling. Features interactive bridal portfolios, service packages, client testimonials, and direct WhatsApp and online appointment scheduling.',
      features: [
        'Curated Bridal Makeover & Traditional Saree Draping Gallery',
        'Interactive Beauty & Styling Services Menu with Package Details',
        'Direct WhatsApp Consultation & Appointment Booking Integration',
        'Mobile-First Responsive Layout with Smooth Visual Transitions',
        'Elegant Luxury Visual Identity Designed for High Engagement'
      ],
      techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel', 'Framer Motion']
    },
    {
      id: 'aswathy-psychologist',
      title: 'Aswathy Jeyarajasekar',
      category: 'web',
      categoryLabel: 'Healthcare & Psychology',
      role: 'Lead Web Developer & UI Designer',
      matchScore: '97% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #3',
      featured: true,
      image: 'img/aswathy-psychologist.jpg',
      demoUrl: 'https://www.aswathypsychologist.com/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A professional psychology and counselling website designed to provide an empathetic digital space for clients to explore mental wellness and access professional support.',
      fullDesc: 'A professional psychology and counselling website designed to provide an empathetic digital space for clients to explore mental wellness and access professional support. Built with a calm, accessible user interface offering telehealth session scheduling, therapy specialization details, and client intake guidance.',
      features: [
        'Empathetic Digital Space Designed for Psychological Safety',
        'Confidential Online Telehealth Session Scheduling',
        'Specialized Counseling Areas (Anxiety, Transitions, Personal Growth)',
        'Client-Centered Practice Philosophy & Ethics Presentation',
        'Clean, Accessible & Responsive Modern Architecture'
      ],
      techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel', 'Responsive UI']
    },
    {
      id: 'whatnew-live',
      title: 'WhatNew',
      category: 'commerce',
      categoryLabel: 'Live Commerce Platform',
      role: 'Lead Full Stack Developer',
      matchScore: '99% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #4',
      featured: true,
      image: 'img/whatnew.jpg',
      demoUrl: 'https://www.whatnew.live/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A live commerce platform that enables users to discover products, participate in live bidding and purchase from verified sellers worldwide.',
      fullDesc: 'A live commerce platform that enables users to discover products, participate in live bidding and purchase from verified sellers worldwide. Bridges social video streaming with digital commerce through ultra-low latency WebRTC broadcasts, bidirectional Socket.IO chat, live auctioning, and instant payment settlement.',
      features: [
        'Real-Time Video Livestreaming via WebRTC',
        'Bidirectional Interactive Live Chat via Socket.IO',
        'Live Product Auctioning with Instant Bidding Engine',
        'Direct Checkout & Secure Payment Integration (Razorpay)',
        'Merchant Management Dashboard & Sales Analytics'
      ],
      techStack: ['Next.js', 'Socket.IO', 'WebRTC', 'PostgreSQL', 'Razorpay', 'Tailwind CSS'],
      credentials: [
        { role: 'Demo Buyer / Bidder', email: 'demo@whatnew.live', pass: 'Demo@123' }
      ]
    },
    {
      id: 'retrostylings',
      title: 'RetroStylings',
      category: 'commerce',
      categoryLabel: 'E-commerce',
      role: 'Lead Full Stack Developer',
      matchScore: '98% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #5',
      featured: true,
      image: 'img/retrostylings.jpg',
      demoUrl: 'https://retrostylings.in/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A modern fashion e-commerce platform combining timeless retro-inspired styles with contemporary fashion trends and a seamless online shopping experience.',
      fullDesc: 'A modern fashion e-commerce platform combining timeless retro-inspired styles with contemporary fashion trends and a seamless online shopping experience. Features categorized product navigation, real-time cart and wishlist calculations, secure checkout supporting UPI, cards, and COD, and high-conversion UX.',
      features: [
        'Dynamic Apparel Catalog with Multi-Filter Navigation',
        'Instant Shopping Cart & Animated Wishlist System',
        'Multi-Gateway Secure Checkout (UPI, Cards, NetBanking, COD)',
        'Automated Order Confirmation & Dispatch Tracking',
        'Mobile-First Responsive UX with Fluid Micro-Interactions'
      ],
      techStack: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Razorpay']
    },
    {
      id: 'averqon-billing',
      title: 'Averqon Billing',
      category: 'saas',
      categoryLabel: 'SaaS / POS & Business Management',
      role: 'Lead Full Stack Architect',
      matchScore: '99% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #6',
      featured: true,
      image: 'img/averqon-billing.jpg',
      demoUrl: 'http://billing.averqon.in/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A multi-business billing and POS platform offering business-specific interfaces, dashboards, branding, billing workflows and management features.',
      fullDesc: 'A multi-business billing and POS platform offering business-specific interfaces, dashboards, branding, billing workflows and management features. Provides high-speed POS invoicing, GST-compliant billing, multi-store inventory synchronization, supplier ledger tracking, and real-time financial reporting.',
      features: [
        'Multi-Business Isolated Workspaces & Custom Branding',
        'Instant Point-of-Sale (POS) & GST-Compliant Billing Workflows',
        'Automated Low-Stock Notifications & Real-Time Inventory Control',
        'Supplier Ledger, Purchase Orders & Expense Tracking',
        'Comprehensive Financial Analytics & Profit & Loss Reporting',
        'Role-Based Access Control (Admin, Manager, Cashier)'
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind CSS'],
      credentials: [
        { role: 'Demo Business Account', email: 'muneeswaran@averqon.in', pass: 'Munees@2004' },
        { role: 'Demo Sandbox Account', email: 'demo@averqon.in', pass: 'Demo@123' }
      ]
    },
    {
      id: 'maxx-joy',
      title: 'MAXX JOY',
      category: 'web',
      categoryLabel: 'Travel & Tourism',
      role: 'Lead Web Developer & Designer',
      matchScore: '97% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #7',
      featured: true,
      image: 'img/maxxjoy.jpg',
      demoUrl: 'https://maxxjoytours.com/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A travel and tourism website designed to showcase destinations and help customers explore travel experiences.',
      fullDesc: 'A travel and tourism website designed to showcase destinations and help customers explore travel experiences. Engineered with captivating destination showcases, customized holiday package builders, interactive travel itineraries, customer review highlights, and direct inquiry capture pipelines.',
      features: [
        'Interactive Destination Showcases & Global Tour Spotlights',
        'Customized Holiday Package & Itinerary Inquiry System',
        'Domestic & International Travel Experience Highlights',
        'Direct WhatsApp & Instant Lead Capture Integration',
        'Fast-Loading Responsive Architecture with Modern Media Layouts'
      ],
      techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel', 'Responsive UI']
    }
  ];

  // ===================================================================
  // 2. NAVBAR SCROLL INTERACTION
  // ===================================================================
  const navbar = document.querySelector('.netflix-navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Back to top click
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================================================================
  // 3. MOBILE MENU TOGGLE
  // ===================================================================
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });

    // Close mobile menu on clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa fa-bars"></i>';
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa fa-bars"></i>';
      }
    });
  }

  // ===================================================================
  // 4. NAVBAR SEARCH TOGGLE (Netflix style)
  // ===================================================================
  const searchToggle = document.getElementById('searchToggle');
  const navSearchWrapper = document.getElementById('navSearchWrapper');
  const navSearchInput = document.getElementById('navSearchInput');
  const navSearchClear = document.getElementById('navSearchClear');
  const mainSearchInput = document.getElementById('mainSearchInput');

  if (searchToggle && navSearchWrapper && navSearchInput) {
    searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      navSearchWrapper.classList.toggle('open');
      if (navSearchWrapper.classList.contains('open')) {
        navSearchInput.focus();
      }
    });

    navSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (navSearchClear) {
        navSearchClear.classList.toggle('show', query.length > 0);
      }
      if (mainSearchInput) {
        mainSearchInput.value = query;
      }
      executeProjectFilter();
    });

    if (navSearchClear) {
      navSearchClear.addEventListener('click', () => {
        navSearchInput.value = '';
        navSearchClear.classList.remove('show');
        if (mainSearchInput) mainSearchInput.value = '';
        executeProjectFilter();
      });
    }
  }

  // Keyboard shortcut: Pressing '/' focuses search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (mainSearchInput) {
        mainSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        mainSearchInput.focus();
      } else if (navSearchInput) {
        navSearchWrapper.classList.add('open');
        navSearchInput.focus();
      }
    }
  });

  // ===================================================================
  // 5. CAROUSEL HORIZONTAL SCROLL CONTROLS
  // ===================================================================
  const carouselButtons = document.querySelectorAll('.carousel-btn');
  carouselButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const track = document.getElementById(targetId);
      if (!track) return;

      const direction = btn.classList.contains('btn-prev') ? -1 : 1;
      const scrollAmount = track.clientWidth * 0.75;
      track.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    });
  });

  // Mouse wheel, touch, and pointer-drag horizontal scroll on tracks
  const tracks = document.querySelectorAll('.carousel-track');
  tracks.forEach(track => {
    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    track.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;
      event.preventDefault();
      track.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    }, { passive: false });

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (event.target.closest('button, a')) return;
      isDown = true;
      startX = event.clientX;
      startScrollLeft = track.scrollLeft;
      track.classList.add('is-dragging');
      track.setPointerCapture?.(event.pointerId);
    });

    track.addEventListener('pointermove', (event) => {
      if (!isDown) return;
      const distance = event.clientX - startX;
      if (Math.abs(distance) > 4) event.preventDefault();
      track.scrollLeft = startScrollLeft - distance;
    });

    const stopDragging = () => {
      isDown = false;
      track.classList.remove('is-dragging');
    };

    track.addEventListener('pointerup', stopDragging);
    track.addEventListener('pointercancel', stopDragging);
    track.addEventListener('pointerleave', stopDragging);

    track.setAttribute('tabindex', '0');
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Scrollable project carousel');
    track.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      track.scrollBy({
        left: event.key === 'ArrowRight' ? track.clientWidth * 0.7 : -track.clientWidth * 0.7,
        behavior: 'smooth'
      });
    });
  });

  // Lightweight card tilt on fine pointers only.
  if (hasFinePointer.matches && !isReducedMotion.matches) {
    document.querySelectorAll('.netflix-card').forEach(card => {
      card.addEventListener('pointermove', (event) => {
        if (event.pointerType && event.pointerType !== 'mouse') return;
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        const rotateX = Math.max(-4, Math.min(4, y * -8));
        const rotateY = Math.max(-5, Math.min(5, x * 10));
        card.style.setProperty('--card-rotate-x', `${rotateX}deg`);
        card.style.setProperty('--card-rotate-y', `${rotateY}deg`);
      }, { passive: true });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--card-rotate-x', '0deg');
        card.style.setProperty('--card-rotate-y', '0deg');
      }, { passive: true });
    });
  }

  // Reveal sections and project rows once as they enter the viewport.
  const revealTargets = document.querySelectorAll(
    '.browse-section, .projects-section-header, .featured-project-spotlight, .netflix-row, .netflix-card, .section-title-wrap, .skill-category-card, .cert-card-item, .timeline-item, .contact-layout'
  );
  revealTargets.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index * 45, 240)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach(element => revealObserver.observe(element));

  // ===================================================================
  // 6. SEARCH & CATEGORY FILTER ENGINE
  // ===================================================================
  let currentCategory = 'all';
  const filterPills = document.querySelectorAll('.filter-pill');
  const mainSearchClear = document.getElementById('mainSearchClear');
  const searchFeedback = document.getElementById('searchResultsFeedback');
  const emptyState = document.getElementById('searchEmptyState');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');

  if (mainSearchInput) {
    mainSearchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (mainSearchClear) mainSearchClear.classList.toggle('visible', val.length > 0);
      if (navSearchInput) navSearchInput.value = val;
      executeProjectFilter();
    });

    if (mainSearchClear) {
      mainSearchClear.addEventListener('click', () => {
        mainSearchInput.value = '';
        mainSearchClear.classList.remove('visible');
        if (navSearchInput) navSearchInput.value = '';
        executeProjectFilter();
      });
    }
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      if (mainSearchInput) mainSearchInput.value = '';
      if (navSearchInput) navSearchInput.value = '';
      if (mainSearchClear) mainSearchClear.classList.remove('visible');
      currentCategory = 'all';
      filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
      executeProjectFilter();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-filter') || 'all';
      executeProjectFilter();
    });
  });

  function executeProjectFilter() {
    const query = (mainSearchInput ? mainSearchInput.value : '').toLowerCase().trim();
    const allCards = document.querySelectorAll('.netflix-card');
    let visibleCount = 0;

    allCards.forEach(card => {
      const pid = card.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === pid);
      if (!project) return;

      // Check category match
      let matchesCategory = true;
      if (currentCategory === 'featured') {
        matchesCategory = project.featured;
      } else if (currentCategory !== 'all') {
        matchesCategory = project.category === currentCategory;
      }

      // Check query match (title, categoryLabel, role, techStack, description)
      let matchesQuery = true;
      if (query.length > 0) {
        const textToSearch = [
          project.title,
          project.categoryLabel,
          project.role,
          project.shortDesc,
          project.fullDesc,
          ...project.techStack
        ].join(' ').toLowerCase();

        matchesQuery = textToSearch.includes(query);
      }
   
      const shouldShow = matchesCategory && matchesQuery;
      card.style.display = shouldShow ? 'flex' : 'none';
      if (shouldShow) visibleCount++;
    });

    // Check visibility for each carousel row
    document.querySelectorAll('.netflix-row').forEach(row => {
      const cardsInRow = row.querySelectorAll('.netflix-card');
      const hasVisibleCard = Array.from(cardsInRow).some(c => c.style.display !== 'none');
      row.style.display = hasVisibleCard ? 'block' : 'none';
    });

    // Feedback message
    if (searchFeedback) {
      if (query.length > 0 || currentCategory !== 'all') {
        searchFeedback.classList.add('show');
        searchFeedback.innerHTML = `Showing <strong>${visibleCount}</strong> project${visibleCount === 1 ? '' : 's'} matching criteria.`;
      } else {
        searchFeedback.classList.remove('show');
      }
    }

    // Empty state
    if (emptyState) {
      emptyState.classList.toggle('show', visibleCount === 0);
    }
  }

  // ===================================================================
  // 7. PROJECT DETAILS MODAL (NETFLIX TITLE PREVIEW)
  // ===================================================================
  const modalBackdrop = document.getElementById('projectDetailsModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Trigger modal when clicking card details or anywhere on card
  document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('[data-action="view-details"]') || e.target.closest('.netflix-card');
    if (!viewBtn) return;

    // Prevent modal if user clicked an external direct link inside the card
    if (e.target.closest('a') && !e.target.closest('[data-action="view-details"]')) {
      return;
    }

    const projectContainer = viewBtn.closest('[data-project-id]') || viewBtn;
    const projectId = projectContainer.getAttribute('data-project-id');
    if (!projectId) return;

    openProjectModal(projectId);
  });

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    // Populate modal contents
    const heroImg = modalBackdrop.querySelector('.modal-hero-img');
    const floatingTitle = modalBackdrop.querySelector('.modal-floating-title');
    const metaMatch = modalBackdrop.querySelector('.modal-match-score');
    const metaRole = modalBackdrop.querySelector('.modal-role-pill');
    const metaCategory = modalBackdrop.querySelector('.modal-category-pill');
    const descFull = modalBackdrop.querySelector('.modal-desc-full');
    const featuresList = modalBackdrop.querySelector('.features-bullets');
    const techStackList = modalBackdrop.querySelector('.modal-tech-list');
    const credentialsBox = modalBackdrop.querySelector('.modal-credentials-box');
    const liveDemoBtn = modalBackdrop.querySelector('.modal-live-demo-btn');
    const subdomainBtn = modalBackdrop.querySelector('.modal-subdomain-btn');

    if (heroImg) {
      heroImg.src = project.image;
      heroImg.alt = project.title;
    }
    if (floatingTitle) floatingTitle.textContent = project.title;
    if (metaMatch) metaMatch.textContent = project.matchScore;
    if (metaRole) metaRole.textContent = project.role;
    if (metaCategory) metaCategory.textContent = project.categoryLabel;
    if (descFull) descFull.textContent = project.fullDesc || project.shortDesc;

    // Features
    if (featuresList) {
      featuresList.innerHTML = '';
      if (project.features && project.features.length) {
        project.features.forEach(feat => {
          const li = document.createElement('li');
          li.innerHTML = `<i class="fa fa-check-circle"></i><span>${feat}</span>`;
          featuresList.appendChild(li);
        });
      }
    }

    // Tech Stack
    if (techStackList) {
      techStackList.innerHTML = '';
      project.techStack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = tech;
        techStackList.appendChild(span);
      });
    }

    // Credentials Box (Averqon Billing, WhatNew)
    if (credentialsBox) {
      if (project.credentials && project.credentials.length > 0) {
        credentialsBox.style.display = 'block';
        const tbody = credentialsBox.querySelector('.cred-table tbody');
        if (tbody) {
          tbody.innerHTML = '';
          project.credentials.forEach(cred => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td><strong>${cred.role}</strong></td>
              <td>
                <div class="cred-copy-cell">
                  <span>${cred.email}</span>
                  <button class="cred-copy-btn" data-copy="${cred.email}" title="Copy email">
                    <i class="fa fa-copy"></i> Copy
                  </button>
                </div>
              </td>
              <td>
                <div class="cred-copy-cell">
                  <span>${cred.pass}</span>
                  <button class="cred-copy-btn" data-copy="${cred.pass}" title="Copy password">
                    <i class="fa fa-copy"></i> Copy
                  </button>
                </div>
              </td>
            `;
            tbody.appendChild(tr);
          });
        }
      } else {
        credentialsBox.style.display = 'none';
      }
    }

    // Action buttons in modal
    if (liveDemoBtn) {
      if (project.demoUrl) {
        liveDemoBtn.href = project.demoUrl;
        const btnLabel = (project.category === 'saas' || project.category === 'commerce') ? 'Live Platform' : 'Live Website';
        liveDemoBtn.innerHTML = `<i class="fa fa-arrow-up-right-from-square"></i> ${btnLabel}`;
        liveDemoBtn.style.display = 'inline-flex';
      } else {
        liveDemoBtn.style.display = 'none';
      }
    }

    if (subdomainBtn) {
      if (project.subdomainUrl) {
        subdomainBtn.href = project.subdomainUrl;
        subdomainBtn.style.display = 'inline-flex';
      } else {
        subdomainBtn.style.display = 'none';
      }
    }

    // Show modal & prevent background body scroll
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // ===================================================================
  // 8. ONE-CLICK COPY TO CLIPBOARD HANDLER
  // ===================================================================
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.cred-copy-btn');
    if (!copyBtn) return;

    e.preventDefault();
    const textToCopy = copyBtn.getAttribute('data-copy');
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa fa-check"></i> Copied!';
      copyBtn.classList.add('copied');

      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
        copyBtn.classList.remove('copied');
      }, 1500);
    }).catch(err => {
      console.warn('Clipboard copy fallback', err);
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = textToCopy;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyBtn.innerHTML = '<i class="fa fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy';
      }, 1500);
    });
  });

  // ===================================================================
  // 9. ACTIVE NAV SCROLLSPY (INTERSECTION OBSERVER)
  // ===================================================================
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // ===================================================================
  // 10. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION (Web3Forms)
  // ===================================================================
  const contactForm = document.getElementById('netflixContactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const alertSuccess = document.getElementById('contactAlertSuccess');
  const alertError = document.getElementById('contactAlertError');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const projectType = document.getElementById('contactProjectType')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      // Basic client validation
      if (!name || !email || !message) {
        showFormAlert('error', 'Please fill in all required fields.');
        return;
      }

      // Email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFormAlert('error', 'Please provide a valid email address.');
        return;
      }

      // UI pending state
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending message...';

      // Web3Forms payload
      const formData = new FormData(contactForm);
      if (!formData.has('access_key')) {
        formData.append('access_key', 'e6432705-6d00-4155-a88d-3e432a533f60');
      }
      formData.set('name', name);
      formData.set('email', email);
      formData.set('subject', projectType ? `[${projectType}] ${subject || 'New Inquiry'}` : (subject || 'New Portfolio Message'));
      formData.set('message', message);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
          showFormAlert('success', `Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
          contactForm.reset();
        } else {
          showFormAlert('error', data.message || 'Unable to send message. Please try again or email muneeswaranmd2004@gmail.com directly.');
        }
      } catch (err) {
        showFormAlert('error', 'Network error. Please try again or reach out directly at muneeswaranmd2004@gmail.com.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // ===================================================================
  // 10B. CINEMATIC HERO PORTRAIT TILT
  // ===================================================================
  const portraitStage = document.querySelector('[data-portrait-stage]');
  const portraitCard = document.querySelector('[data-portrait-card]');
  const reducedMotion = isReducedMotion;
  const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)');

  if (portraitStage && portraitCard && !reducedMotion.matches && !touchDevice.matches) {
    let frameId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const renderTilt = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      portraitCard.style.setProperty('--portrait-rotate-x', `${currentX}deg`);
      portraitCard.style.setProperty('--portrait-rotate-y', `${currentY}deg`);

      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        frameId = requestAnimationFrame(renderTilt);
      } else {
        frameId = null;
      }
    };

    const queueTilt = () => {
      if (frameId === null) frameId = requestAnimationFrame(renderTilt);
    };

    const handlePointerMove = (event) => {
      const bounds = portraitStage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetY = Math.max(-7, Math.min(7, x * 12));
      targetX = Math.max(-6, Math.min(6, y * -10));
      queueTilt();
    };

    const resetTilt = () => {
      targetX = 0;
      targetY = 0;
      queueTilt();
    };

    portraitStage.addEventListener('pointermove', handlePointerMove, { passive: true });
    portraitStage.addEventListener('pointerleave', resetTilt, { passive: true });
    reducedMotion.addEventListener?.('change', () => {
      if (reducedMotion.matches) {
        portraitStage.removeEventListener('pointermove', handlePointerMove);
        portraitStage.removeEventListener('pointerleave', resetTilt);
        resetTilt();
      }
    });
  }

  function showFormAlert(type, message) {
    if (alertSuccess) {
      alertSuccess.textContent = '';
      alertSuccess.classList.remove('success');
      alertSuccess.style.display = 'none';
    }
    if (alertError) {
      alertError.textContent = '';
      alertError.classList.remove('error');
      alertError.style.display = 'none';
    }

    if (type === 'success' && alertSuccess) {
      alertSuccess.classList.add('success');
      alertSuccess.innerHTML = `<i class="fa fa-check-circle" style="font-size: 1.1rem; flex-shrink: 0;"></i><span>${message}</span>`;
      alertSuccess.style.display = 'flex';
    } else if (type === 'error' && alertError) {
      alertError.classList.add('error');
      alertError.innerHTML = `<i class="fa fa-triangle-exclamation" style="font-size: 1.1rem; flex-shrink: 0;"></i><span>${message}</span>`;
      alertError.style.display = 'flex';
    }
  }

  // ===================================================================
  // 11. SERVICE CODE POPUP
  // ===================================================================
  const serviceCodeBtn = document.getElementById('serviceCodeBtn');
  if (serviceCodeBtn) {
    serviceCodeBtn.addEventListener('click', () => {
      serviceCodeBtn.textContent = 'DEV-2026-PORTFOLIO-DEPLOYED';
      setTimeout(() => {
        serviceCodeBtn.textContent = 'Service Code: DEV-2026';
      }, 3000);
    });
  }

});

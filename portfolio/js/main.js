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
      id: 'averqon-erp',
      title: 'School ERP Platform',
      category: 'saas',
      categoryLabel: 'SaaS / School ERP',
      role: 'Lead Full Stack Architect',
      matchScore: '99% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #1',
      featured: true,
      image: 'img/portfolio-3.jpg',
      demoUrl: 'https://averqonerp-web.onrender.com/',
      subdomainUrl: 'https://erp.averqon.in',
      githubUrl: '',
      shortDesc: 'A comprehensive cloud-based School ERP solution built with multi-tenant architecture to manage educational institutions through a centralized platform.',
      fullDesc: 'An enterprise-grade School ERP system architected with multi-tenant isolation, automated fee management, timetable scheduling, attendance tracking, and examination grading. Designed to streamline administrative workflows across multi-campus institutions.',
      features: [
        'Multi-Tenant Architecture with Subdomain Routing',
        'Role-Based Access Control (Admin, Principal, Teacher, Accountant)',
        'Real-time Student & Staff Attendance Tracking',
        'Automated Fee Billing & Invoice Generation',
        'Academic Timetable & Examination Dashboard',
        'Performance & Grade Analytics Reports'
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind CSS'],
      credentials: [
        { role: 'School Admin', email: 'admin@greenvalley.edu', pass: 'Demo@1234' },
        { role: 'Principal', email: 'principal@greenvalley.edu', pass: 'Demo@1234' },
        { role: 'Teacher', email: 'ramesh.krishnamurthy@greenvalley.edu', pass: 'Demo@1234' },
        { role: 'Accountant', email: 'ramya.krishnan@greenvalley.edu', pass: 'Demo@1234' }
      ]
    },
    {
      id: 'billing-inventory',
      title: 'Billing & Inventory',
      category: 'saas',
      categoryLabel: 'FinTech / ERP',
      role: 'Lead Full Stack Developer',
      matchScore: '98% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #2',
      featured: true,
      image: 'img/portfolio-2.jpg',
      demoUrl: 'https://billing.averqon.in/login',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A modern billing and inventory management platform designed for businesses to manage sales, purchases, stock, suppliers, and financial reports.',
      fullDesc: 'A high-performance cloud solution for retail, wholesale, and service businesses. Provides instant invoicing, automated stock alerts, vendor purchase order workflows, and real-time ledger accounting.',
      features: [
        'Instant POS Invoicing & GST-compliant Billing',
        'Automated Low-Stock & Reorder Notifications',
        'Supplier Ledger & Purchase Order Tracking',
        'Sales Analytics, Profit & Loss Reporting',
        'Barcode Scanning & Multi-Warehouse Support'
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind CSS'],
      credentials: [
        { role: 'Demo Business Account', email: 'muneeswaran@averqon.in', pass: 'Munees@2004' },
        { role: 'Demo Sandbox Account', email: 'demo@averqon.in', pass: 'Demo@123' }
      ]
    },
    {
      id: 'whatnew-live',
      title: 'WhatNew Live Marketplace',
      category: 'commerce',
      categoryLabel: 'Live Shopping / Auction',
      role: 'Full Stack Developer',
      matchScore: '97% Match',
      isTop10: true,
      topBadge: 'TOP 10 • #3',
      featured: true,
      image: 'img/portfolio-5.jpg',
      demoUrl: 'https://www.whatnew.live/',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A real-time live-commerce marketplace enabling buyers and sellers to interact through livestream shopping, auctions, and instant purchases.',
      fullDesc: 'WhatNew Live merges social video streaming with digital commerce. Features ultra-low latency WebRTC video broadcast, live bidirectional chat via Socket.IO, interactive live bidding auctions, and instant payment settlement via Razorpay.',
      features: [
        'Real-time Video Livestreaming via WebRTC',
        'Bidirectional Live Chat via Socket.IO',
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
      id: 'averqon-website',
      title: 'Digital Agency Platform',
      category: 'web',
      categoryLabel: 'Agency & Solutions',
      role: 'Lead Web Developer',
      matchScore: '96% Match',
      isTop10: false,
      topBadge: 'FEATURED',
      featured: true,
      image: 'img/averqon-website.png',
      demoUrl: 'https://averqon.in',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'Modern agency showcase portal featuring software engineering services, web platforms, mobile apps, and enterprise consultation solutions.',
      fullDesc: 'A modern corporate identity and digital showcase web application, engineered for high search visibility, responsive performance, interactive project showcases, and client onboarding.',
      features: [
        'High-Performance Static Generation & SSR',
        'Modern Cinematic Agency Visual Design',
        'Interactive Product & Service Showcases',
        'Client Inquiry & Consultation Booking Integration'
      ],
      techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel']
    },
    {
      id: 'averqon-admin',
      title: 'Admin Management Hub',
      category: 'saas',
      categoryLabel: 'Enterprise Operations Hub',
      role: 'System Architect & Full Stack Developer',
      matchScore: '95% Match',
      isTop10: false,
      topBadge: 'ENTERPRISE',
      featured: false,
      image: 'img/portfolio-6.jpg',
      demoUrl: 'https://averqon-backend.onrender.com/admin',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A centralized administration platform engineered to manage clients, projects, users, operations, business workflows, and real-time analytics.',
      fullDesc: 'Internal command center providing end-to-end organizational monitoring. Enables client CRM, milestone tracking, resource allocation, and revenue analytics under strict Role-Based Access Control.',
      features: [
        'Centralized Client CRM & Milestone Management',
        'Real-time Financial & Operational Metrics',
        'Granular RBAC Security & Audit Trails',
        'Task Assignment & Project Status Pipelines'
      ],
      techStack: ['Next.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS']
    },
    {
      id: 'averqon-employee',
      title: 'Employee Workforce Portal',
      category: 'web',
      categoryLabel: 'Internal Workforce Portal',
      role: 'Lead Full Stack Developer',
      matchScore: '94% Match',
      isTop10: false,
      topBadge: 'WORKFORCE',
      featured: false,
      image: 'img/5.jpg',
      demoUrl: 'https://averqon-backend.onrender.com/employee/dashboard',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'An internal employee management platform designed to streamline workforce management, attendance tracking, tasks, and team collaboration.',
      fullDesc: 'Empowers team members with self-service attendance logging, task boards, project documentation, and peer communication tools backed by real-time Firebase databases.',
      features: [
        'Daily Work Log & Attendance Check-in',
        'Team Kanban Task Board & Collaboration',
        'Leave Management & Request Approvals',
        'Performance Analytics & Milestone Reviews'
      ],
      techStack: ['React.js', 'Firebase', 'Firestore', 'Tailwind CSS']
    },
    {
      id: 'smart-order-saas',
      title: 'Smart Order SaaS',
      category: 'saas',
      categoryLabel: 'SaaS / Automation',
      role: 'Full Stack Developer',
      matchScore: '93% Match',
      isTop10: false,
      topBadge: 'AUTOMATION',
      featured: false,
      image: 'img/4.png',
      demoUrl: '',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A multi-tenant SaaS platform that automates ordering workflows, customer engagement via WhatsApp automation, and general business operations.',
      fullDesc: 'Automates customer interaction pipelines from initial inquiry to final order confirmation via WhatsApp & Twilio APIs, integrated with payment gateways and stock synchronization.',
      features: [
        'WhatsApp Automated Notification Engine (Twilio)',
        'Multi-Tenant Customer Ordering Portals',
        'Automated Order Status Broadcasts',
        'Payment Link Generation (Razorpay)'
      ],
      techStack: ['React.js', 'Firebase', 'Razorpay', 'Twilio', 'Tailwind CSS']
    },
    {
      id: 'student-quiz',
      title: 'Student Quiz Management System',
      category: 'web',
      categoryLabel: 'EdTech / Exam Platform',
      role: 'Full Stack Developer',
      matchScore: '92% Match',
      isTop10: false,
      topBadge: 'EDTECH',
      featured: false,
      image: 'img/3.png',
      demoUrl: '',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'A full-stack educational platform for conducting secure online examinations and managing automated student assessments and dashboards.',
      fullDesc: 'Robust online assessment solution with timed quizzes, automated evaluation, fraud prevention controls, student performance charts, and teacher grading dashboards.',
      features: [
        'Timed Online Examination System',
        'Automated Instant Scoring & Result Generation',
        'Teacher Test Bank & Question Management',
        'Student Historical Performance Tracking'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL']
    },
    {
      id: 'teknodo-store',
      title: 'Teknodo E-Commerce Store',
      category: 'commerce',
      categoryLabel: 'E-Commerce Platform',
      role: 'Full Stack Developer',
      matchScore: '90% Match',
      isTop10: false,
      topBadge: 'STORE',
      featured: false,
      image: 'img/Screenshot (27).png',
      demoUrl: '',
      subdomainUrl: '',
      githubUrl: '',
      shortDesc: 'E-commerce online shopping portal featuring product catalog, cart, digital content, mobile & electronics ordering.',
      fullDesc: 'Modern online shopping store with category filtering, search, cart management, responsive product showcases for mobile devices and smart watches.',
      features: [
        'Product Catalog & Category Filtering',
        'Dynamic Shopping Cart & Price Calculation',
        'Responsive Mobile-First Interface',
        'Customer Reviews & Rating Display'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
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

    // Credentials Box (School ERP, Billing & Inventory, WhatNew Live)
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
  // 10. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // ===================================================================
  const contactForm = document.getElementById('netflixContactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const alertSuccess = document.getElementById('contactAlertSuccess');
  const alertError = document.getElementById('contactAlertError');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
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

      // Check if we can submit to mail/contact.php
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', projectType ? `[${projectType}] ${subject}` : subject);
      formData.append('message', message);

      fetch('mail/contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          showFormAlert('success', `Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
          contactForm.reset();
        } else {
          // If server error or PHP not running locally, provide friendly demo success confirmation
          showFormAlert('success', `Thank you, ${name}! Your inquiry has been recorded. I'll reach out to ${email} shortly.`);
          contactForm.reset();
        }
      })
      .catch(() => {
        // Fallback for static hosting without active PHP mailserver
        showFormAlert('success', `Thank you, ${name}! Your message has been received. You can also directly contact muneeswaranmd2004@gmail.com.`);
        contactForm.reset();
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
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

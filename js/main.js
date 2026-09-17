// Main JavaScript - Kinata Dewa Ariandi Portfolio (Clean & Minimalist Edition)

let currentFilter = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTypewriter();
    initScrollProgress();
    renderContent();
    initFilterAndSearch();
    initModal();
    initMobileMenu();
    initScrollSpy();
    initContactForm();
});

// 1. Theme Toggle (Dark / Light Mode)
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        html.classList.remove('dark');
        html.classList.add('light');
        if (themeIcon) themeIcon.className = 'fas fa-moon text-sm text-slate-700';
    } else {
        html.classList.add('dark');
        html.classList.remove('light');
        if (themeIcon) themeIcon.className = 'fas fa-sun text-sm text-amber-400';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.className = 'fas fa-moon text-sm text-slate-700';
                showToast('Mode Terang aktif', 'info');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.className = 'fas fa-sun text-sm text-amber-400';
                showToast('Mode Gelap aktif', 'info');
            }
        });
    }
}

// 2. Typewriter Effect
function initTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const roles = [
        "Software Engineer",
        "Fullstack Web Developer",
        "Mobile App Developer (Flutter)",
        "Backend & API Engineer",
        "Business Intelligence Developer"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 30;
        } else {
            textElement.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 65;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typingSpeed = 300;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// 3. Top Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 4. Toast Notification Helper
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let iconClass = 'fas fa-check text-emerald-400';
    if (type === 'info') iconClass = 'fas fa-info-circle text-sky-400';

    toast.innerHTML = `
        <i class="${iconClass} text-sm shrink-0"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 200);
    }, 2500);
};

// 5. Copy to Clipboard
window.copyToClipboard = function(text, successMessage = 'Disalin ke clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage, 'success');
    }).catch(() => {
        const input = document.createElement('textarea');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast(successMessage, 'success');
    });
};

// 6. Render Dynamic Content
function renderContent() {
    renderStats();
    renderSkills();
    renderExperiences();
    renderEducation();
    renderProjects();
    renderCertifications();
    renderOrganizations();
}

function renderStats() {
    const container = document.getElementById('stats-container');
    if (!container) return;

    container.innerHTML = portfolioData.personal.stats.map(stat => `
        <div class="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300">
            <div class="text-xl font-bold font-mono text-white dark:text-white light:text-slate-900">
                ${stat.number}<span class="text-xs font-normal text-sky-400 ml-0.5">${stat.suffix}</span>
            </div>
            <div class="text-[11px] text-slate-400 light:text-slate-600 mt-0.5">${stat.label}</div>
        </div>
    `).join('');
}

function renderSkills() {
    // Hard skills
    const hardSkillsContainer = document.getElementById('hard-skills-container');
    if (hardSkillsContainer) {
        hardSkillsContainer.innerHTML = portfolioData.skills.hardSkills.map(skill => `
            <div class="nordic-card p-3.5 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-100 flex items-center justify-center text-sky-400 text-sm">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div>
                        <h4 class="font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">${skill.name}</h4>
                        <span class="text-[10px] text-slate-400 light:text-slate-500">${skill.category}</span>
                    </div>
                </div>
                <span class="text-[11px] font-mono font-semibold text-sky-400 dark:text-sky-400 light:text-sky-700">${skill.level}%</span>
            </div>
        `).join('');
    }

    // Tools
    const toolsContainer = document.getElementById('tools-container');
    if (toolsContainer) {
        toolsContainer.innerHTML = portfolioData.skills.softwareTools.map(tool => `
            <div class="nordic-card p-3 flex items-center space-x-2.5">
                <div class="w-7 h-7 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 flex items-center justify-center text-slate-300 text-xs shrink-0">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="truncate">
                    <h5 class="font-medium text-xs text-slate-200 dark:text-slate-200 light:text-slate-800 truncate">${tool.name}</h5>
                    <p class="text-[10px] text-slate-400 light:text-slate-500 truncate">${tool.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Soft skills
    const softSkillsContainer = document.getElementById('soft-skills-container');
    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = portfolioData.skills.softSkills.map(soft => `
            <div class="nordic-card p-3.5">
                <h5 class="font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800 mb-0.5">${soft.name}</h5>
                <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">${soft.desc}</p>
            </div>
        `).join('');
    }
}

function renderExperiences() {
    const container = document.getElementById('experiences-container');
    if (!container) return;

    container.innerHTML = portfolioData.experiences.map(exp => `
        <div class="nordic-card p-6 space-y-3.5">
            <div class="flex flex-wrap items-start justify-between gap-2">
                <div>
                    <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">${exp.role}</h3>
                    <div class="text-xs text-sky-400 light:text-sky-700 mt-0.5 font-medium">
                        ${exp.company} <span class="text-slate-400 font-normal">• ${exp.location}</span>
                    </div>
                </div>
                <span class="text-[11px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 px-3 py-1 rounded-full bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-200/80 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
                    ${exp.period}
                </span>
            </div>

            <ul class="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                ${exp.highlights.map(hl => `
                    <li class="flex items-start space-x-2">
                        <span class="text-sky-400 mt-0.5">•</span>
                        <span>${hl}</span>
                    </li>
                `).join('')}
            </ul>

            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                ${exp.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = portfolioData.education.map(edu => `
        <div class="nordic-card p-5 space-y-3">
            <div class="flex items-start justify-between gap-2">
                <div>
                    <h4 class="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">${edu.degree}</h4>
                    <div class="text-xs text-slate-400 mt-0.5">${edu.institution} - ${edu.location}</div>
                </div>
                <span class="text-[11px] font-mono font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    IPK: ${edu.gpa}
                </span>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                <div class="text-[10px] font-bold uppercase tracking-wider text-sky-400 mb-1">Skripsi / Tugas Akhir</div>
                <h5 class="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-1">${edu.thesisTitle}</h5>
                <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">${edu.thesisDesc}</p>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let filteredProjects = portfolioData.projects;

    // Filter by Category
    if (currentFilter !== 'all') {
        filteredProjects = filteredProjects.filter(p => p.category === currentFilter);
    }

    // Filter by Search Query
    if (currentSearchQuery.trim() !== '') {
        const query = currentSearchQuery.toLowerCase();
        filteredProjects = filteredProjects.filter(p => 
            p.title.toLowerCase().includes(query) ||
            p.shortDesc.toLowerCase().includes(query) ||
            p.badge.toLowerCase().includes(query) ||
            p.techStack.some(t => t.toLowerCase().includes(query))
        );
    }

    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-12 text-center nordic-card p-6">
                <p class="text-xs text-slate-400">Tidak ada proyek yang sesuai dengan pencarian.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProjects.map(project => `
        <div class="nordic-card overflow-hidden flex flex-col justify-between">
            <div>
                <!-- Image Header -->
                <div class="relative h-44 bg-slate-900 overflow-hidden group">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div class="absolute top-3 right-3">
                        <span class="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-slate-900/90 text-sky-300 border border-slate-700/80 backdrop-blur-sm">
                            ${project.badge}
                        </span>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-5 space-y-2">
                    <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wide">${project.period}</div>
                    <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                        ${project.title}
                    </h3>
                    <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                        ${project.shortDesc}
                    </p>
                </div>
            </div>

            <div class="p-5 pt-0 space-y-3.5">
                <div class="flex flex-wrap gap-1">
                    ${project.techStack.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.techStack.length > 3 ? `<span class="tech-tag">+${project.techStack.length - 3}</span>` : ''}
                </div>

                <div class="flex items-center justify-between pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <button onclick="openProjectModal('${project.id}')" class="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1.5">
                        <span>Detail Proyek</span>
                        <i class="fas fa-arrow-right text-[10px]"></i>
                    </button>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white light:hover:text-slate-900 text-sm transition-colors" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    container.innerHTML = portfolioData.certifications.map(cert => `
        <div class="nordic-card p-5 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px]">
                    <span class="text-sky-400 font-semibold font-mono">${cert.badge}</span>
                    <span class="text-slate-400 font-mono text-[10px]">${cert.year}</span>
                </div>
                <h4 class="font-bold text-xs sm:text-sm text-slate-100 dark:text-slate-100 light:text-slate-900">
                    ${cert.title}
                </h4>
                <p class="text-[11px] text-slate-400 light:text-slate-500">${cert.issuer}</p>
            </div>
            <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 pt-2.5">${cert.desc}</p>
        </div>
    `).join('');
}

function renderOrganizations() {
    const container = document.getElementById('organizations-container');
    if (!container) return;

    container.innerHTML = portfolioData.organizations.map(org => `
        <div class="nordic-card p-3.5 space-y-1">
            <div class="flex items-center justify-between">
                <h5 class="font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">${org.role}</h5>
                <span class="text-[10px] text-sky-400 font-mono">${org.event}</span>
            </div>
            <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">${org.desc}</p>
        </div>
    `).join('');
}

// 7. Project Filter and Search
function initFilterAndSearch() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('project-search');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active', 'bg-sky-500', 'text-slate-950', 'shadow-md', 'shadow-sky-500/20');
                b.classList.add('text-slate-400', 'hover:text-slate-200');
            });
            btn.classList.add('active', 'bg-sky-500', 'text-slate-950', 'shadow-md', 'shadow-sky-500/20');
            btn.classList.remove('text-slate-400', 'hover:text-slate-200');

            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderProjects();
        });
    }
}

// 8. Modal Handling
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const backdrop = document.getElementById('modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (backdrop) backdrop.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
}

window.openProjectModal = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalPeriod = document.getElementById('modal-period');
    const modalType = document.getElementById('modal-type');
    const modalDescription = document.getElementById('modal-description');
    const modalFeatures = document.getElementById('modal-features');
    const modalTech = document.getElementById('modal-tech');
    const modalGithub = document.getElementById('modal-github');

    modalImage.src = project.image;
    modalBadge.textContent = project.badge;
    modalTitle.textContent = project.title;
    modalPeriod.textContent = project.period;
    modalType.textContent = project.type;
    modalDescription.textContent = project.description;

    modalFeatures.innerHTML = project.features.map(f => `
        <li class="flex items-start space-x-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
            <span class="text-emerald-400 mt-0.5">•</span>
            <span>${f}</span>
        </li>
    `).join('');

    modalTech.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
    modalGithub.href = project.githubUrl;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
};

// 9. Mobile Menu
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// 10. ScrollSpy & Navigation highlight
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (scrollY > 400) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        }
    });
}

// 11. Contact Form -> WhatsApp Direct Message
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        const text = `Halo Kinata,%0A%0ASaya *${encodeURIComponent(name)}* (${encodeURIComponent(email)}) ingin mendiskusikan terkait:*%0A"${encodeURIComponent(subject)}"%0A%0A*Pesan:*%0A${encodeURIComponent(message)}`;
        const whatsappUrl = `https://wa.me/6281385385684?text=${text}`;

        window.open(whatsappUrl, '_blank');
        showToast('Membuka WhatsApp...', 'info');
    });
}



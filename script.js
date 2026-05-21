/* LANGUAGE TOGGLE LOGIC */
const translations = {
    en: {
        logo_suffix: "Cleaning Company",
        nav_home: "Home",
        nav_services: "Services",
        nav_workers: "Workers",
        nav_process: "Process",
        nav_contact: "Contact",
        hero_badge: "150+ Workers Available Today In Qatar",
        hero_title: "African Cleaning & <span>Recruitment Experts</span>",
        hero_desc: "Premium African workforce recruitment company based in Qatar and proudly owned by Ugandan professionals. We provide verified African maids, office cleaners, hospitality staff, villa cleaners, manpower solutions, and freelance visa support across Doha and Qatar.",
        btn_hire: "Hire Workers",
        btn_apply: "Apply For Jobs",
        top_banner: "🇶🇦 Qatar Premium Cleaning & Recruitment Company | Proudly Ugandan-Owned | African Workforce Specialists",
        services_title: "Premium Services",
        services_subtitle: "Modern African recruitment and luxury cleaning solutions across Qatar.",
        cleaning_title: "Cleaning Services",
        cleaning_desc: "Professional residential, office, villa, and commercial cleaning solutions across Qatar.",
        hospitality_title: "Hospitality Staff",
        hospitality_desc: "Expert hotel cleaners, catering staff, and hospitality professionals from across Africa.",
        domestic_title: "Domestic Workers",
        domestic_desc: "Verified African maids, nannies, and housekeepers for homes and luxury villas.",
        service_res_title: "Residential Cleaning Services",
        service_res_std_title: "Standard Cleaning",
        service_res_std_desc: "Regular dusting, vacuuming, mopping, and surface wiping for Qatari villas and apartments.",
        service_res_deep_title: "Deep Cleaning",
        service_res_deep_desc: "Detailed scrubbing of grout, baseboards, and inside kitchen appliances.",
        service_res_move_title: "Move-In / Move-Out",
        service_res_move_desc: "Full sanitization of empty properties for new occupants or landlords.",
        service_res_sofa_title: "Sofa & Upholstery Care",
        service_res_sofa_desc: "Deep steam cleaning for majlis seating, couches, mattresses, and heavy curtains.",
        service_res_win_title: "Window Cleaning",
        service_res_win_desc: "Interior and exterior glass washing to remove desert dust and sand streaks.",
        service_com_title: "Commercial & Office Cleaning",
        service_com_off_title: "Office Janitorial",
        service_com_off_desc: "Daily or weekly workspace cleaning, desk sanitization, and trash removal.",
        service_com_ret_title: "Retail & Showroom",
        service_com_ret_desc: "Floor polishing and high-gloss window cleaning for malls and storefronts.",
        service_com_med_title: "Clinic & Medical Disinfection",
        service_com_med_desc: "Specialized, high-level sanitization meeting Qatar Ministry of Public Health standards.",
        service_com_ind_title: "Industrial & Warehouse",
        service_com_ind_desc: "Heavy-duty floor scrubbing, pressure washing, and degreasing.",
        service_hosp_title: "Hospitality Services",
        service_hosp_short_title: "Airbnb & Short-Term Rental",
        service_hosp_short_desc: "Fast-turnaround cleaning, restocking, and laundry between guests.",
        service_hosp_hotel_title: "Hotel Housekeeping Staffing",
        service_hosp_hotel_desc: "Outsourced, well-trained room cleaning and turndown service staff.",
        service_hosp_event_title: "Event & Party Cleanup",
        service_hosp_event_desc: "Pre-event setup, during-event maintenance, and post-party cleanup for large gatherings.",
        service_hosp_kitch_title: "Kitchen Stewarding",
        service_hosp_kitch_desc: "Professional stewards for commercial kitchens, dishwashing, and food prep cleanup.",
        service_staff_title: "Hospitality & Domestic Staffing",
        service_staff_maid_title: "Hourly/Monthly Maids",
        service_staff_maid_desc: "Professionally trained, vetted female maids for domestic help on flexible schedules.",
        service_staff_office_title: "Office Boys/Girls",
        service_staff_office_desc: "Dedicated staff for serving Arabic coffee, tea, and managing office hospitality.",
        service_staff_host_title: "Event Hostesses & Waiters",
        service_staff_host_desc: "Premium hospitality staff for corporate events, weddings, and private VIP gatherings.",
        btn_inquire: "Inquire Now",
        btn_book: "Book Service",
        btn_hire_staff: "Hire Staff",
        quick_quote: "Quick Quote",
        workers_title: "Professional African Workforce",
        workers_subtitle: "Verified African workers available for immediate deployment in Qatar.",
        filter_label: "Search by Workforce Nationality:",
        stats_registered: "Registered Workers",
        stats_satisfaction: "Client Satisfaction",
        stats_projects: "Completed Projects",
        stats_support: "24/7 Support Service",
        process_title: "Recruitment Process",
        process_subtitle: "Fast and secure manpower recruitment process.",
        process_step1_title: "Worker Screening",
        process_step1_desc: "Professional interviews and background verification.",
        process_step2_title: "Visa Processing",
        process_step2_desc: "Fast legal documentation and relocation support.",
        process_step3_title: "Deployment",
        process_step3_desc: "Immediate workforce deployment across Qatar.",
        process_step4_title: "Customer Support",
        process_step4_desc: "Continuous management and customer assistance.",
        testimonials_title: "Client Testimonials",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How long does the recruitment process take? <i class=\"fas fa-chevron-down\"></i>",
        faq_a1: "Typically, the process from selection to deployment in Qatar takes between 2 to 4 weeks, depending on visa processing times.",
        faq_q2: "Are your workers trained? <i class=\"fas fa-chevron-down\"></i>",
        faq_a2: "Yes, all our workers undergo rigorous screening and specific training for the Qatar market, including hospitality standards and modern cleaning techniques.",
        faq_q3: "Do you provide freelance visa support? <i class=\"fas fa-chevron-down\"></i>",
        faq_a3: "Medrich specializes in providing legal manpower solutions and documentation support for African professionals entering the Qatar workforce.",
        cta_title: "Hire Professional African Workers In Qatar",
        cta_desc: "Trusted recruitment agency for African cleaners, maids, hospitality staff, and manpower solutions.",
        cta_btn: "Contact Us Today",
        footer_title: "Medrich Qatar Recruitment & Cleaning Services",
        footer_desc: "Proudly Ugandan-Owned | African Workforce Specialists",
        footer_rights: "© 2026 CleanPro Qatar. All Rights Reserved."
    },
    ar: {
        logo_suffix: "شركة تنظيف",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_workers: "الموظفون",
        nav_process: "العملية",
        nav_contact: "اتصل بنا",
        hero_badge: "أكثر من 150 عامل متاح اليوم في قطر",
        hero_title: "خبراء التنظيف <span>والتوظيف الأفارقة</span>",
        hero_desc: "شركة توظيف رائدة للقوى العاملة الأفريقية مقرها قطر وتعود ملكيتها لمهنيين أوغنديين. نحن نوفر خادمات أفريقيات، وعمال تنظيف مكاتب، وموظفي ضيافة، وحلول قوى عاملة، ودعم تأشيرات العمل الحر في الدوحة وجميع أنحاء قطر.",
        btn_hire: "توظيف عمال",
        btn_apply: "التقديم للوظائف",
        top_banner: "🇶🇦 شركة قطر المتميزة للتنظيف والتوظيف | مملوكة بفخر لأوغنديين | متخصصون في القوى العاملة الأفريقية",
        services_title: "خدمات متميزة",
        services_subtitle: "حلول توظيف أفريقية حديثة وخدمات تنظيف فاخرة في جميع أنحاء قطر.",
        cleaning_title: "خدمات التنظيف",
        cleaning_desc: "حلول تنظيف احترافية سكنية ومكتبية وفيلات وتجارية في جميع أنحاء قطر.",
        hospitality_title: "موظفي الضيافة",
        hospitality_desc: "عمال تنظيف فنادق خبراء، وموظفي تموين، ومحترفي ضيافة من جميع أنحاء أفريقيا.",
        domestic_title: "العمالة المنزلية",
        domestic_desc: "خادمات أفريقيات ومربيات ومدبرات منزل معتمدات للمنازل والفيلات الفاخرة.",
        service_res_title: "خدمات التنظيف السكني",
        service_res_std_title: "التنظيف القياسي",
        service_res_std_desc: "نفض الغبار الدوري، والكنس، ومسح الأرضيات، ومسح الأسطح للفيلات والشقق القطرية.",
        service_res_deep_title: "التنظيف العميق",
        service_res_deep_desc: "فرك دقيق للفواصل، والألواح الأرضية، وتنظيف الأجهزة المطبخية من الداخل.",
        service_res_move_title: "تنظيف الانتقال (دخول/خروج)",
        service_res_move_desc: "تعقيم كامل للعقارات الفارغة للمستأجرين الجدد أو الملاك.",
        service_res_sofa_title: "العناية بالكنب والمفروشات",
        service_res_sofa_desc: "تنظيف عميق بالبخار لجلسات المجالس، والكنب، والمراتب، والستائر الثقيلة.",
        service_res_win_title: "تنظيف النوافذ",
        service_res_win_desc: "غسيل الزجاج الداخلي والخارجي لإزالة غبار الصحراء وآثار الرمال.",
        service_com_title: "تنظيف المكاتب والمنشآت التجارية",
        service_com_off_title: "خدمات التنظيف المكتبية",
        service_com_off_desc: "تنظيف يومي أو أسبوعي لمساحات العمل، وتعقيم المكاتب، وإزالة النفايات.",
        service_com_ret_title: "البيع بالتجزئة وصالات العرض",
        service_com_ret_desc: "تلميع الأرضيات وتنظيف النوافذ عالي اللمعان للمولات وواجهات المحلات.",
        service_com_med_title: "تطهير العيادات والمنشآت الطبية",
        service_com_med_desc: "تعقيم متخصص وعالي المستوى يلبي معايير وزارة الصحة العامة القطرية.",
        service_com_ind_title: "التنظيف الصناعي والمستودعات",
        service_com_ind_desc: "فرك الأرضيات للأعمال الشاقة، والغسيل بالضغط، وإزالة الشحوم.",
        service_hosp_title: "خدمات الضيافة",
        service_hosp_short_title: "تجهيز وحدات الإيجار قصير الأمد",
        service_hosp_short_desc: "تنظيف سريع، وإعادة تعبئة المستلزمات، والغسيل بين الضيوف.",
        service_hosp_hotel_title: "توفير موظفي التدبير المنزلي للفنادق",
        service_hosp_hotel_desc: "موظفون مدربون جيداً لتنظيف الغرف وخدمة تحضير الأسرّة.",
        service_hosp_event_title: "تنظيف الفعاليات والحفلات",
        service_hosp_event_desc: "تجهيز ما قبل الفعالية، والصيانة أثناء الفعالية، والتنظيف بعد الحفل للتجمعات.",
        service_hosp_kitch_title: "خدمات غسيل الأواني والمطبخ",
        service_hosp_kitch_desc: "عمال مطبخ محترفون للمطابخ التجارية، وغسيل الصحون، وتنظيف تحضير الطعام.",
        service_staff_title: "خدمات الضيافة والعمالة المنزلية",
        service_staff_maid_title: "خادمات بالساعة أو بالشهر",
        service_staff_maid_desc: "خادمات مدربات ومعتمدات للمساعدة المنزلية بجداول زمنية مرنة.",
        service_staff_office_title: "موظفو خدمات المكاتب",
        service_staff_office_desc: "موظفون مخصصون لتقديم القهوة العربية والشاي وإدارة ضيافة المكاتب.",
        service_staff_host_title: "مضيفات ونادلين للفعاليات",
        service_staff_host_desc: "موظفو ضيافة متميزون للفعاليات الشركات، وحفلات الزفاف، والتجمعات الخاصة.",
        btn_inquire: "استفسر الآن",
        btn_book: "احجز الخدمة",
        btn_hire_staff: "توظيف موظفين",
        quick_quote: "اقتباس سريع",
        workers_title: "القوى العاملة الأفريقية المهنية",
        workers_subtitle: "عمال أفارقة معتمدون متاحون للنشر الفوري في قطر.",
        filter_label: "البحث حسب جنسية القوى العاملة:",
        stats_registered: "عمال مسجلون",
        stats_satisfaction: "رضا العملاء",
        stats_projects: "مشاريع مكتملة",
        stats_support: "خدمة دعم 24/7",
        process_title: "عملية التوظيف",
        process_subtitle: "عملية توظيف سريعة وآمنة للقوى العاملة.",
        process_step1_title: "فحص العمال",
        process_step1_desc: "مقابلات مهنية والتحقق من الخلفية.",
        process_step2_title: "معالجة التأشيرات",
        process_step2_desc: "توثيق قانوني سريع ودعم الانتقال.",
        process_step3_title: "النشر",
        process_step3_desc: "نشر القوى العاملة الفوري في جميع أنحاء قطر.",
        process_step4_title: "دعم العملاء",
        process_step4_desc: "إدارة مستمرة ومساعدة العملاء.",
        testimonials_title: "شهادات العملاء",
        faq_title: "الأسئلة الشائعة",
        faq_q1: "كم تستغرق عملية التوظيف؟ <i class=\"fas fa-chevron-down\"></i>",
        faq_a1: "عادةً ما تستغرق العملية من الاختيار إلى النشر في قطر ما بين 2 إلى 4 أسابيع، اعتماداً على أوقات معالجة التأشيرة.",
        faq_q2: "هل عمالكم مدربون؟ <i class=\"fas fa-chevron-down\"></i>",
        faq_a2: "نعم، يخضع جميع عمالنا لفحص صارم وتدريب محدد لسوق قطر، بما في ذلك معايير الضيافة وتقنيات التنظيف الحديثة.",
        faq_q3: "هل تقدمون دعم تأشيرة العمل الحر؟ <i class=\"fas fa-chevron-down\"></i>",
        faq_a3: "تتخصص ميدريتش في توفير حلول القوى العاملة القانونية ودعم التوثيق للمهنيين الأفارقة الذين يدخلون سوق العمل القطري.",
        cta_title: "وظف عمالاً أفارقة محترفين في قطر",
        cta_desc: "وكالة توظيف موثوقة لعمال التنظيف والخادمات وموظفي الضيافة وحلول القوى العاملة الأفريقية.",
        cta_btn: "اتصل بنا اليوم",
        footer_title: "ميدريتش قطر لخدمات التوظيف والتنظيف",
        footer_desc: "مملوكة بفخر لأوغنديين | متخصصون في القوى العاملة الأفريقية",
        footer_rights: "© 2026 CleanPro قطر. جميع الحقوق محفوظة."
    }
};

const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const mainHtml = document.getElementById('mainHtml');

function setLanguage(lang) {
    mainHtml.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    mainHtml.setAttribute('lang', lang);
    langText.textContent = lang === 'ar' ? 'English' : 'العربية';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    localStorage.setItem('language', lang);
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = mainHtml.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });
}

/* MOBILE MENU */

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
    };
}

/* DARK MODE TOGGLE */

const themeBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}

/* SCROLL REVEAL */

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Performance optimization: stop observing once revealed
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

/* REAL-TIME JOB SEARCH */

const searchInput = document.getElementById('jobSearch');
const jobCards = document.querySelectorAll('.job-card');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        jobCards.forEach(card => {
            const isVisible = 
                card.dataset.title.toLowerCase().includes(value) || 
                card.dataset.company.toLowerCase().includes(value);
            card.classList.toggle('hide', !isVisible);
        });
    });
}

/* APPLICATION MODAL */
const applicationModalOverlay = document.getElementById('applicationModalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalJobTitleSpan = document.getElementById('modalJobTitle');
const jobApplicationForm = document.getElementById('jobApplicationForm');

let currentApplicationStep = 0;
const applicationSteps = document.querySelectorAll('#jobApplicationForm .form-step');
const applicationStepDots = document.querySelectorAll('#applicationStepIndicator .step-dot');

/* HIRING MODAL */
const hiringModalOverlay = document.getElementById('hiringModalOverlay');
const closeHiringModalBtn = document.getElementById('closeHiringModalBtn');
const hiringForm = document.getElementById('hiringForm');

let currentHiringStep = 0;
const hiringSteps = document.querySelectorAll('#hiringForm .form-step');
const stepDots = document.querySelectorAll('.step-indicator .step-dot');
const submitHiringBtn = document.getElementById('submitHiringBtn');

function populateHiringSummary() {
    const summaryDiv = document.getElementById('hiringSummary');
    const workforceType = document.getElementById('workforceType');
    const categoryName = workforceType.options[workforceType.selectedIndex].text;

    const data = {
        "Company/Name": document.getElementById('clientName').value,
        "Work Email": document.getElementById('clientEmail').value,
        "Staff Category": categoryName,
        "Quantity": document.getElementById('staffQuantity').value,
        "Start Date": document.getElementById('expectedDate').value
    };

    summaryDiv.innerHTML = `
        <h4 style="margin-bottom: 15px; color: var(--primary);">Review Details</h4>
        ${Object.entries(data).map(([key, value]) => `
            <div class="summary-item">
                <span style="color: var(--gray);">${key}</span>
                <span style="font-weight: 500;">${value}</span>
            </div>
        `).join('')}
        <div class="step-buttons" style="justify-content: flex-end; margin-top: 20px;">
            <button type="button" class="btn print-btn" id="printHiringSummaryBtn"><i class="fas fa-print"></i> Print Summary</button>
        </div>
    `;
}

function showHiringStep(n) {
    if (n === 3) populateHiringSummary();
    
    hiringSteps.forEach((step, index) => {
        step.classList.toggle('active', index === n);
    });
    stepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentHiringStep = n;
}

function validateHiringStep(n) {
    const inputs = hiringSteps[n].querySelectorAll('input, select, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff4d4d';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    return valid;
}

// Event listener for next/prev buttons in Hiring Modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next-step') && e.target.closest('#hiringForm')) {
        if (validateHiringStep(currentHiringStep)) {
            showHiringStep(currentHiringStep + 1);
        }
    } else if (e.target.classList.contains('prev-step') && e.target.closest('#hiringForm')) {
        showHiringStep(currentHiringStep - 1);
    }
});

/* APPLICATION MODAL MULTI-STEP LOGIC */
function populateApplicationSummary() {
    const summaryDiv = document.getElementById('applicationSummary');
    const availabilitySelect = document.getElementById('availability');
    const availabilityText = availabilitySelect.options[availabilitySelect.selectedIndex].text;

    const data = {
        "Full Name": document.getElementById('applicantName').value,
        "Email Address": document.getElementById('applicantEmail').value,
        "Phone Number": document.getElementById('applicantPhone').value || 'N/A',
        "LinkedIn Profile": document.getElementById('applicantLinkedIn').value || 'N/A',
        "Resume": document.getElementById('applicantResume').files[0] ? document.getElementById('applicantResume').files[0].name : 'Not uploaded',
        "Cover Letter": document.getElementById('applicantCoverLetter').value || 'N/A',
        "Desired Salary (QAR)": document.getElementById('desiredSalary').value || 'N/A',
        "Availability": availabilityText
    };

    summaryDiv.innerHTML = `
        <h4 style="margin-bottom: 15px; color: var(--primary);">Review Your Application</h4>
        ${Object.entries(data).map(([key, value]) => `
            <div class="summary-item">
                <span style="color: var(--gray);">${key}</span>
                <span style="font-weight: 500;">${value}</span>
            </div>
        `).join('')}
    `;
}

function showApplicationStep(n) {
    if (n === 2) populateApplicationSummary(); // Populate summary on the last step

    applicationSteps.forEach((step, index) => {
        step.classList.toggle('active', index === n);
    });
    applicationStepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentApplicationStep = n;
}

function validateApplicationStep(n) {
    const inputs = applicationSteps[n].querySelectorAll('input, select, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff4d4d';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    return valid;
}

// Event listener for next/prev buttons in Application Modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next-step') && e.target.closest('#jobApplicationForm')) {
        if (validateApplicationStep(currentApplicationStep)) {
            showApplicationStep(currentApplicationStep + 1);
        }
    } else if (e.target.classList.contains('prev-step') && e.target.closest('#jobApplicationForm')) {
        showApplicationStep(currentApplicationStep - 1);
    }
});

let previewUrl = null;

// Field mapping for Drafts
const DRAFT_FIELDS = ['applicantName', 'applicantEmail', 'applicantPhone', 'applicantLinkedIn', 'applicantCoverLetter', 'desiredSalary', 'availability'];

function openApplicationModal(jobTitle) {
    modalJobTitleSpan.textContent = jobTitle;
    applicationModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    showApplicationStep(0); // Reset to first step
}

function closeApplicationModal() {
    applicationModalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    const progressContainer = document.getElementById('uploadProgressContainer');
    if (progressContainer) progressContainer.style.display = 'none';
    
    // Cleanup Preview
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    document.getElementById('resumePreview').style.display = 'none';
    document.getElementById('resumeDropZone').style.display = 'flex';
    
    jobApplicationForm.reset(); // Clear form fields
    showApplicationStep(0); // Reset to first step
}

// Close modal when clicking the close button
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeApplicationModal);
}

// Close modal when clicking outside the modal content
if (applicationModalOverlay) {
    applicationModalOverlay.addEventListener('click', (e) => {
        if (e.target === applicationModalOverlay) {
                closeApplicationModal();
            }
        });
    }

// Close modal when clicking outside the modal content for Hiring Modal
if (hiringModalOverlay) {
    hiringModalOverlay.addEventListener('click', (e) => {
        if (e.target === hiringModalOverlay) {
            closeHiringModal();
        }
    });
}

/* DRAFT SAVING LOGIC */
function initDrafts() {
    DRAFT_FIELDS.forEach(fieldId => {
        const el = document.getElementById(fieldId);
        if (el) {
            // Load existing draft
            const savedValue = localStorage.getItem(`draft_${fieldId}`);
            if (savedValue) {
                el.value = savedValue;
                // Update char counter if it's the cover letter
                if (fieldId === 'applicantCoverLetter') updateCharCount(savedValue.length);
            }

            // Save on input
            el.addEventListener('input', () => {
                localStorage.setItem(`draft_${fieldId}`, el.value);
            });
        }
    });
}

function clearDrafts() {
    DRAFT_FIELDS.forEach(fieldId => localStorage.removeItem(`draft_${fieldId}`));
}

/* CHARACTER COUNTER */
const coverLetterTextarea = document.getElementById('applicantCoverLetter');
const currentCharSpan = document.getElementById('currentChar');

function updateCharCount(count) {
    if (currentCharSpan) currentCharSpan.textContent = count;
}

if (coverLetterTextarea) {
    coverLetterTextarea.addEventListener('input', (e) => {
        updateCharCount(e.target.value.length);
    });
}

/* HIRE WORKERS INTEGRATION */
function openHiringModal(serviceName = null) {
    hiringModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalSubTitle = document.querySelector('#hiringModalContent p');
    const workforceSelect = document.getElementById('workforceType');
    
    if (serviceName) {
        // Update modal text to show specific service
        const currentLang = mainHtml.getAttribute('lang');
        const prefix = currentLang === 'ar' ? 'طلب خدمة: ' : 'Requesting: ';
        modalSubTitle.innerHTML = `${prefix}<strong style="color: var(--primary);">${serviceName}</strong>`;
        
        // Smart auto-selection of category
        const nameLower = serviceName.toLowerCase();
        if (nameLower.includes('cleaning') || nameLower.includes('janitorial') || nameLower.includes('scrubbing')) {
            workforceSelect.value = 'cleaning';
        } else if (nameLower.includes('hospitality') || nameLower.includes('hotel') || nameLower.includes('event') || nameLower.includes('steward')) {
            workforceSelect.value = 'hospitality';
        } else if (nameLower.includes('maid') || nameLower.includes('domestic') || nameLower.includes('nanny')) {
            workforceSelect.value = 'domestic';
        }
        
        // Trigger change event to update any dependent UI (like category descriptions)
        workforceSelect.dispatchEvent(new Event('change'));
    } else {
        // Fallback for general hire buttons
        const currentLang = mainHtml.getAttribute('lang');
        modalSubTitle.textContent = currentLang === 'ar' ? 'أخبرنا عن متطلبات القوى العاملة لديك.' : 'Tell us about your workforce requirements.';
    }
}

function closeHiringModal() {
    hiringModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hiringForm.reset();
    submitHiringBtn.disabled = false; // Ensure button is re-enabled
    showHiringStep(0); // Reset to first step
}

if (closeHiringModalBtn) closeHiringModalBtn.onclick = closeHiringModal;

document.addEventListener('click', (e) => {
    const hireBtn = e.target.closest('.hire-btn');
    if (hireBtn) {
        e.preventDefault();
        // Find the service title relative to the button clicked
        const serviceCard = hireBtn.closest('.qatar-service-card, .service-card');
        const serviceTitle = serviceCard ? (serviceCard.querySelector('h4') || serviceCard.querySelector('h3')).textContent : null;
        
        openHiringModal(serviceTitle);
    }
});

/* REMOVE RESUME HANDLER */
const removeResumeBtn = document.getElementById('removeResumeBtn');
if (removeResumeBtn) {
    removeResumeBtn.addEventListener('click', () => {
        const fileInput = document.getElementById('applicantResume');
        const dropZone = document.getElementById('resumeDropZone');
        const resumePreview = document.getElementById('resumePreview');
        
        fileInput.value = ""; // Clear file
        resumePreview.style.display = 'none';
        dropZone.style.display = 'flex';
    });
}

/* DRAG AND DROP HANDLER */
const dropZone = document.getElementById('resumeDropZone');
const fileInput = document.getElementById('applicantResume');

if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            updateThumbnail(dropZone, fileInput.files[0]);
        }
    });

    ['dragover', 'dragleave', 'dragend', 'drop'].forEach(type => {
        dropZone.addEventListener(type, e => e.preventDefault());
    });

    dropZone.addEventListener('dragover', () => dropZone.classList.add('drop-zone--over'));
    ['dragleave', 'dragend'].forEach(type => {
        dropZone.addEventListener(type, () => dropZone.classList.remove('drop-zone--over'));
    });

    dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateThumbnail(dropZone, e.dataTransfer.files[0]);
        }
        dropZone.classList.remove('drop-zone--over');
    });
}

function updateThumbnail(dropZoneElement, file) {
    let prompt = dropZoneElement.querySelector('.drop-zone__prompt');
    if (prompt) {
        prompt.textContent = `Selected: ${file.name}`;
        prompt.style.color = 'var(--secondary)';
    }

    // PDF Preview Logic
    if (file && file.type === "application/pdf") {
        const resumePreview = document.getElementById('resumePreview');
        const pdfFrame = document.getElementById('pdfFrame');
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        previewUrl = URL.createObjectURL(file);
        pdfFrame.src = previewUrl;
        resumePreview.style.display = 'block';
        dropZoneElement.style.display = 'none';
    }
}

// Handle form submission (client-side simulation)
if (jobApplicationForm) {
    jobApplicationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Final validation for the last step
        if (!validateApplicationStep(currentApplicationStep)) {
            return;
        }

        const fileInput = document.getElementById('applicantResume');
        const errorDiv = document.getElementById('formError');
        const progressContainer = document.getElementById('uploadProgressContainer');
        const progressFill = document.getElementById('uploadProgressFill');
        const file = fileInput.files[0];
        const submitApplicationBtn = document.getElementById('submitApplicationBtn');

        // Check if resume is required and not uploaded
        if (fileInput.hasAttribute('required') && !file) {
            errorDiv.textContent = "Error: Please upload your resume.";
            errorDiv.style.display = "block";
            // Highlight drop zone or file input
            const dropZone = document.getElementById('resumeDropZone');
            if (dropZone) {
                dropZone.style.borderColor = '#ff4d4d';
                setTimeout(() => dropZone.style.borderColor = '', 2000); // Revert after 2s
            }
            return;
        } else {
            errorDiv.style.display = "none";
            const dropZone = document.getElementById('resumeDropZone');
            if (dropZone) {
                dropZone.style.borderColor = '';
            }
        }


        // Custom Validation: Check File Size (Max 2MB)
        if (file && file.size > 2 * 1024 * 1024) {
            errorDiv.textContent = "Error: Resume file size must be less than 2MB.";
            errorDiv.style.display = "block";
            fileInput.style.borderColor = "#ff4d4d";
            return;
        }

        // If valid, simulate success
        errorDiv.style.display = "none";
        progressContainer.style.display = "block";
        progressFill.style.width = "0%";
        submitApplicationBtn.disabled = true;
        submitApplicationBtn.textContent = "Uploading...";
        submitApplicationBtn.querySelector('.loading-spinner').style.display = 'inline-block';

        let progress = 0;
        const uploadSimulation = setInterval(() => {
            progress += Math.floor(Math.random() * 20) + 5; 
            if (progress >= 100) {
                progress = 100;
                clearInterval(uploadSimulation);
                
                setTimeout(() => {
                    closeApplicationModal();
                    clearDrafts();
                    
                    // Email Simulation Toast
                    const toast = document.getElementById('emailToast');
                    toast.classList.add('show');
                    
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 4000);
                    
                    // Reset button state
                    submitApplicationBtn.disabled = false;
                    submitApplicationBtn.textContent = "Submit Application";
                    submitApplicationBtn.querySelector('.loading-spinner').style.display = 'none';
                }, 400);
            }
            progressFill.style.width = progress + "%";
        }, 300);
    });
}

// Handle hiring form
if (hiringForm) {
    hiringForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Final validation for the last step
        if (!validateHiringStep(currentHiringStep)) {
            return;
        }

        const spinner = submitHiringBtn.querySelector('.loading-spinner');
        submitHiringBtn.disabled = true;
        submitHiringBtn.textContent = "Sending Request...";
        spinner.style.display = 'inline-block';

        // Simulate network request
        setTimeout(() => {
            alert("Hiring request sent! Our recruitment team will contact you shortly.");
            closeHiringModal();
            submitHiringBtn.textContent = "Confirm & Send Request";
            spinner.style.display = 'none';
            submitHiringBtn.disabled = false;
        }, 2000);
    });
}

// Print Hiring Summary
document.addEventListener('click', (e) => {
    if (e.target.id === 'printHiringSummaryBtn') {
        const summaryContent = document.getElementById('hiringSummary').outerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Hiring Request Summary</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">'); // Include your CSS for styling
        printWindow.document.write('</head><body>');
        printWindow.document.write(summaryContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
});

/* FAQ ACCORDION */
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        const icon = question.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

/* WORKER PROFILE MODAL LOGIC */
const profileModalOverlay = document.getElementById('profileModalOverlay');
const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-profile-btn')) {
        const btn = e.target;
        const name = btn.dataset.workerName;
        const bio = btn.dataset.bio;
        const nationality = btn.dataset.nationality;
        const skills = btn.dataset.skills.split(',');

        document.getElementById('profileName').textContent = name;
        document.getElementById('profileBio').textContent = bio;
        document.getElementById('profileNationality').textContent = nationality;
        
        const skillsContainer = document.getElementById('profileSkills');
        skillsContainer.innerHTML = '';
        skills.forEach(skill => {
            const span = document.createElement('span');
            span.textContent = skill.trim();
            skillsContainer.appendChild(span);
        });

        profileModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

if (closeProfileModalBtn) {
    closeProfileModalBtn.onclick = () => {
        profileModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
}

/* APPLY FOR JOB */

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.apply-btn');
    if (btn) {
        e.preventDefault();
        
        // Get title from data attribute or fallback to parent card title
        const jobCard = btn.closest('.job-card');
        const jobTitle = btn.dataset.title || (jobCard ? jobCard.dataset.title : 'this position');

        openApplicationModal(jobTitle);
    }
});

/* BACK TO TOP BUTTON */

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    backToTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

/* PROGRESS BAR */

window.addEventListener('scroll', () => {

    let winScroll =
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById("progressBar");
    if (progressBar) progressBar.style.width = scrolled + "%";

    // Show/Hide Back to Top button
    if (backToTopBtn) {
        if (winScroll > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Initialize everything
function init() {
    initDrafts();
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

init();
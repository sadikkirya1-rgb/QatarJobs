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
            // Optional: stop observing after reveal
            // revealObserver.unobserve(entry.target);
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

let successTimerInterval = null;

function startSuccessTimer(callback) {
    let timeLeft = 5;
    const timerDisplays = document.querySelectorAll('.timer-count');
    
    // Reset displays
    timerDisplays.forEach(el => el.textContent = timeLeft);
    
    if (successTimerInterval) clearInterval(successTimerInterval);

    successTimerInterval = setInterval(() => {
        timeLeft--;
        timerDisplays.forEach(el => el.textContent = timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(successTimerInterval);
            callback();
        }
    }, 1000);
}

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
    const nationalityEl = document.getElementById('preferredNationality');
    const nationalityText = nationalityEl.options[nationalityEl.selectedIndex].text;
    const isDomestic = workforceType.value === 'domestic';

    const data = {
        "Company/Name": document.getElementById('clientName').value,
        "Work Email": document.getElementById('clientEmail').value,
        "Staff Category": categoryName,
        ...(isDomestic && { "Nationality": nationalityText }),
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

/* CATEGORY DESCRIPTION LOGIC */
const workforceSelect = document.getElementById('workforceType');
const categoryDesc = document.getElementById('categoryDescription');
const nationalityField = document.getElementById('nationalityField');

const descriptions = {
    cleaning: "Includes professional cleaners for offices, luxury villas, and deep-cleaning projects.",
    hospitality: "Expert staff for hotels, catering companies, and event management teams.",
    domestic: "Verified housemaids, nannies, and housekeepers primarily from Uganda, Kenya, and Rwanda."
};

if (workforceSelect) {
    workforceSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (descriptions[val]) {
            categoryDesc.textContent = descriptions[val];
            categoryDesc.style.display = 'block';
        }

        // Show nationality field only for domestic workers
        if (val === 'domestic') {
            nationalityField.style.display = 'block';
        } else {
            nationalityField.style.display = 'none';
        }
    });
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
    
    // Reset View
    document.getElementById('applicationModalContent').style.display = 'block';
    document.getElementById('applicationSuccess').style.display = 'none';
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
    if (successTimerInterval) clearInterval(successTimerInterval);
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
function openHiringModal() {
    hiringModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset View
    document.getElementById('hiringModalContent').style.display = 'block';
    document.getElementById('hiringSuccess').style.display = 'none';
}

function closeHiringModal() {
    hiringModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hiringForm.reset();
    submitHiringBtn.disabled = false; // Ensure button is re-enabled
    if (successTimerInterval) clearInterval(successTimerInterval);
    showHiringStep(0); // Reset to first step
}

if (closeHiringModalBtn) closeHiringModalBtn.onclick = closeHiringModal;

document.addEventListener('click', (e) => {
    if (e.target.closest('.hire-btn')) {
        e.preventDefault();
        openHiringModal();
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
                    document.getElementById('applicationModalContent').style.display = 'none';
                    document.getElementById('applicationSuccess').style.display = 'block';
                    startSuccessTimer(closeApplicationModal);
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
            document.getElementById('hiringModalContent').style.display = 'none';
            document.getElementById('hiringSuccess').style.display = 'block';
            startSuccessTimer(closeHiringModal);
            
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

/* APPLY FOR JOB */

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.apply-btn');
    if (btn) {
        e.preventDefault();
        
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
initDrafts();
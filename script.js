// Password Protection
const PASSWORD = 'GeniusLD';
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordError = document.getElementById('passwordError');
const mainContainer = document.getElementById('mainContainer');

// Check if user is already authenticated (session storage)
if (sessionStorage.getItem('portalAuthenticated') === 'true') {
    // User is authenticated, hide password modal and show main content
    if (passwordModal) passwordModal.style.display = 'none';
    if (mainContainer) mainContainer.style.display = 'block';
} else {
    // User not authenticated, show password modal
    if (passwordModal) passwordModal.style.display = 'block';
    if (mainContainer) mainContainer.style.display = 'none';
}

// Handle password submission
function checkPassword() {
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === PASSWORD) {
        // Correct password
        sessionStorage.setItem('portalAuthenticated', 'true');
        if (passwordModal) passwordModal.style.display = 'none';
        if (mainContainer) mainContainer.style.display = 'block';
        if (passwordError) passwordError.style.display = 'none';
        passwordInput.value = '';
    } else {
        // Incorrect password
        if (passwordError) passwordError.style.display = 'block';
        passwordInput.value = '';
        passwordInput.focus();
        // Shake animation
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Submit on button click
if (passwordSubmit) {
    passwordSubmit.addEventListener('click', checkPassword);
}

// Submit on Enter key
if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// Add shake animation to CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Administration Modal functionality
const adminBtn = document.getElementById('adminBtn');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.getElementById('closeAdmin');

// Open modal when clicking on Administration button
if (adminBtn && adminModal) {
    adminBtn.addEventListener('click', function() {
        adminModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Administration modal when clicking the X
if (closeAdminModal) {
    closeAdminModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Assessments Modal functionality
const assessmentsSection = document.getElementById('assessments');
const assessmentsModal = document.getElementById('assessmentsModal');
const closeAssessmentsModal = document.querySelector('#assessmentsModal .close');

// Open modal when clicking on Assessments section
if (assessmentsSection && assessmentsModal) {
    assessmentsSection.addEventListener('click', function() {
        assessmentsModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Assessments modal when clicking the X
if (closeAssessmentsModal) {
    closeAssessmentsModal.addEventListener('click', function() {
        assessmentsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Inductions Modal functionality
const inductionsSection = document.getElementById('inductions');
const inductionsModal = document.getElementById('inductionsModal');
const closeInductionsModal = document.getElementById('closeInductions');

// Open modal when clicking on Inductions section
if (inductionsSection && inductionsModal) {
    inductionsSection.addEventListener('click', function() {
        inductionsModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Inductions modal when clicking the X
if (closeInductionsModal) {
    closeInductionsModal.addEventListener('click', function() {
        inductionsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Behaviour Modal functionality
const behaviourSection = document.getElementById('behaviour');
const behaviourModal = document.getElementById('behaviourModal');
const closeBehaviourModal = document.getElementById('closeBehaviour');

// Open modal when clicking on Behaviour section
if (behaviourSection && behaviourModal) {
    behaviourSection.addEventListener('click', function() {
        behaviourModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Behaviour modal when clicking the X
if (closeBehaviourModal) {
    closeBehaviourModal.addEventListener('click', function() {
        behaviourModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Reports & Reviews Modal functionality
const reportsSection = document.getElementById('reports');
const reportsModal = document.getElementById('reportsModal');
const closeReportsModal = document.getElementById('closeReports');

// Open modal when clicking on Reports & Reviews section
if (reportsSection && reportsModal) {
    reportsSection.addEventListener('click', function() {
        reportsModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Reports & Reviews modal when clicking the X
if (closeReportsModal) {
    closeReportsModal.addEventListener('click', function() {
        reportsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Mentoring Modal functionality
const mentoringSection = document.getElementById('mentoring');
const mentoringModal = document.getElementById('mentoringModal');
const closeMentoringModal = document.getElementById('closeMentoring');

// Open modal when clicking on Mentoring section
if (mentoringSection && mentoringModal) {
    mentoringSection.addEventListener('click', function() {
        mentoringModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Mentoring modal when clicking the X
if (closeMentoringModal) {
    closeMentoringModal.addEventListener('click', function() {
        mentoringModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Pathways Modal functionality
const pathwaysSection = document.getElementById('pathways');
const pathwaysModal = document.getElementById('pathwaysModal');
const closePathwaysModal = document.getElementById('closePathways');

// Open modal when clicking on Pathways section
if (pathwaysSection && pathwaysModal) {
    pathwaysSection.addEventListener('click', function() {
        pathwaysModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Pathways modal when clicking the X
if (closePathwaysModal) {
    closePathwaysModal.addEventListener('click', function() {
        pathwaysModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Schedules and Rotas Modal functionality
const schedulesSection = document.getElementById('schedules');
const schedulesModal = document.getElementById('schedulesModal');
const closeSchedulesModal = document.getElementById('closeSchedules');

// Open modal when clicking on Schedules section
if (schedulesSection && schedulesModal) {
    schedulesSection.addEventListener('click', function() {
        schedulesModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Schedules modal when clicking the X
if (closeSchedulesModal) {
    closeSchedulesModal.addEventListener('click', function() {
        schedulesModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Teaching and Learning Modal functionality
const teachingSection = document.getElementById('teaching');
const teachingModal = document.getElementById('teachingModal');
const closeTeachingModal = document.getElementById('closeTeaching');

// Open modal when clicking on Teaching section
if (teachingSection && teachingModal) {
    teachingSection.addEventListener('click', function() {
        teachingModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Teaching modal when clicking the X
if (closeTeachingModal) {
    closeTeachingModal.addEventListener('click', function() {
        teachingModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Trackers Modal functionality
const trackersSection = document.getElementById('trackers');
const trackersModal = document.getElementById('trackersModal');
const closeTrackersModal = document.getElementById('closeTrackers');

// Open modal when clicking on Trackers section
if (trackersSection && trackersModal) {
    trackersSection.addEventListener('click', function() {
        trackersModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

// Close Trackers modal when clicking the X
if (closeTrackersModal) {
    closeTrackersModal.addEventListener('click', function() {
        trackersModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === adminModal) {
        adminModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === assessmentsModal) {
        assessmentsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === inductionsModal) {
        inductionsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === behaviourModal) {
        behaviourModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === reportsModal) {
        reportsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === mentoringModal) {
        mentoringModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === pathwaysModal) {
        pathwaysModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === schedulesModal) {
        schedulesModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === teachingModal) {
        teachingModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    if (event.target === trackersModal) {
        trackersModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (adminModal && adminModal.style.display === 'block') {
            adminModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (assessmentsModal && assessmentsModal.style.display === 'block') {
            assessmentsModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (inductionsModal && inductionsModal.style.display === 'block') {
            inductionsModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (behaviourModal && behaviourModal.style.display === 'block') {
            behaviourModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (reportsModal && reportsModal.style.display === 'block') {
            reportsModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (mentoringModal && mentoringModal.style.display === 'block') {
            mentoringModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (pathwaysModal && pathwaysModal.style.display === 'block') {
            pathwaysModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (schedulesModal && schedulesModal.style.display === 'block') {
            schedulesModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (teachingModal && teachingModal.style.display === 'block') {
            teachingModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (trackersModal && trackersModal.style.display === 'block') {
            trackersModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (searchModal && searchModal.style.display === 'block') {
            closeSearchModal();
        }
        // Close preload popup with Escape
        const preloadPopup = document.getElementById('preloadPopup');
        if (preloadPopup && preloadPopup.classList.contains('show')) {
            closePreloadPopup();
        }
    }
});

// Preload Popup functionality
const preloadPopup = document.getElementById('preloadPopup');
const closePreloadBtn = document.getElementById('closePreload');
const dismissPreloadBtn = document.getElementById('dismissPreload');

function showPreloadPopup() {
    // Check if user has dismissed it in this session (using sessionStorage)
    const hasSeenPopup = sessionStorage.getItem('preloadPopupDismissed');
    if (!hasSeenPopup && preloadPopup) {
        preloadPopup.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Focus search input after popup opens
        setTimeout(() => {
            const preloadSearchInput = document.getElementById('preloadSearchInput');
            if (preloadSearchInput) {
                preloadSearchInput.focus();
            }
        }, 400);
    }
}

function closePreloadPopup() {
    if (preloadPopup) {
        preloadPopup.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
        sessionStorage.setItem('preloadPopupDismissed', 'true');
    }
}

// Close preload popup when clicking X
if (closePreloadBtn) {
    closePreloadBtn.addEventListener('click', closePreloadPopup);
}

// Close preload popup when clicking "Continue to Dashboard"
if (dismissPreloadBtn) {
    dismissPreloadBtn.addEventListener('click', closePreloadPopup);
}

// Close preload popup when clicking outside
if (preloadPopup) {
    preloadPopup.addEventListener('click', function(event) {
        if (event.target === preloadPopup) {
            closePreloadPopup();
        }
    });
}

// Show preload popup when page loads
window.addEventListener('load', function() {
    // Small delay for better UX
    setTimeout(showPreloadPopup, 300);
});

// Preload popup search functionality
const preloadSearchInput = document.getElementById('preloadSearchInput');
const preloadSearchResults = document.getElementById('preloadSearchResults');
const preloadQuickLinks = document.getElementById('preloadQuickLinks');

// Enhanced search function with better matching
function performPreloadSearch(query) {
    if (!query || query.trim().length === 0) {
        preloadSearchResults.classList.remove('show');
        if (preloadQuickLinks) preloadQuickLinks.classList.remove('hidden');
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const matches = [];
    
    // Search through database with improved matching
    searchDatabase.forEach(item => {
        // Check title match (highest priority)
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        
        // Check keyword matches
        const keywordMatches = item.keywords.filter(keyword => {
            const keywordLower = keyword.toLowerCase();
            return keywordLower.includes(searchTerm) || 
                   searchTerm.includes(keywordLower) ||
                   keywordLower.split(' ').some(word => word.startsWith(searchTerm)) ||
                   searchTerm.split(' ').some(word => keywordLower.includes(word));
        });
        
        // Check description match
        const descMatch = item.description.toLowerCase().includes(searchTerm);
        
        if (titleMatch || keywordMatches.length > 0 || descMatch) {
            let relevance = 0;
            if (titleMatch) relevance += 10;
            if (keywordMatches.length > 0) relevance += keywordMatches.length * 3;
            if (descMatch) relevance += 1;
            
            matches.push({
                ...item,
                relevance: relevance,
                matchedKeywords: keywordMatches
            });
        }
    });
    
    // Sort by relevance
    matches.sort((a, b) => b.relevance - a.relevance);
    
    // Show top 5 results
    displayPreloadSearchResults(matches.slice(0, 5), searchTerm);
}

// Display preload search results
function displayPreloadSearchResults(results, query) {
    if (results.length === 0) {
        preloadSearchResults.innerHTML = `
            <div class="preload-search-result-item" style="padding: 20px; text-align: center; color: #999;">
                <p>No results found for "${query}"</p>
                <p style="font-size: 0.85rem; margin-top: 5px;">Try different keywords</p>
            </div>
        `;
        preloadSearchResults.classList.add('show');
        if (preloadQuickLinks) preloadQuickLinks.classList.add('hidden');
        return;
    }
    
    const resultsHTML = results.map((result, index) => `
        <div class="preload-search-result-item" onclick="handlePreloadSearchResult(${index}, ${results.length})">
            <h5>${result.title}</h5>
            <p>${result.description}</p>
            <span class="result-type-badge">${result.type}</span>
        </div>
    `).join('');
    
    preloadSearchResults.innerHTML = resultsHTML;
    preloadSearchResults.classList.add('show');
    if (preloadQuickLinks) preloadQuickLinks.classList.add('hidden');
    
    // Store current results
    window.currentPreloadResults = results;
}

// Handle preload search result click
window.handlePreloadSearchResult = function(index, totalResults) {
    if (window.currentPreloadResults && window.currentPreloadResults[index]) {
        const result = window.currentPreloadResults[index];
        closePreloadPopup();
        setTimeout(() => {
            if (result.action) {
                result.action();
            }
        }, 200);
    }
};

// Preload search input handler
if (preloadSearchInput) {
    let searchTimeout;
    
    preloadSearchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value;
        
        // Debounce search
        searchTimeout = setTimeout(() => {
            performPreloadSearch(query);
        }, 200);
    });
    
    preloadSearchInput.addEventListener('focus', function() {
        if (preloadSearchInput.value.trim().length > 0) {
            performPreloadSearch(preloadSearchInput.value);
        }
    });
    
    // Close results when clicking outside
    document.addEventListener('click', function(e) {
        if (!preloadSearchInput.contains(e.target) && !preloadSearchResults.contains(e.target)) {
            preloadSearchResults.classList.remove('show');
            if (preloadSearchInput.value.trim().length === 0 && preloadQuickLinks) {
                preloadQuickLinks.classList.remove('hidden');
            }
        }
    });
}

// Copy to Clipboard function for login details
function copyToClipboard(button, text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        // Visual feedback
        const originalText = button.textContent;
        button.classList.add('copied');
        button.textContent = 'Copied!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            button.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please select and copy manually.');
    } finally {
        document.body.removeChild(textarea);
    }
}

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResults = document.getElementById('searchResults');
const searchSuggestions = document.getElementById('searchSuggestions');

// Search database - maps keywords to resources
const searchDatabase = [
    {
        keywords: ['report', 'reports', 'review', 'reviews', 'half-term', 'half term', 'progress report', 'student report'],
        title: 'Reports & Reviews Generator',
        description: 'Generate half-termly student behaviour and progress reports (School & Parent versions)',
        type: 'Page',
        action: () => window.location.href = 'reports-reviews.html',
        section: 'reports'
    },
    {
        keywords: ['calendar', 'review calendar', 'dates', 'deadline', 'deadlines', 'schedule'],
        title: 'Review Calendar 2025–26',
        description: 'View the academic year review calendar and key dates',
        type: 'Page',
        action: () => window.location.href = 'review-calendar.html',
        section: 'reports'
    },
    {
        keywords: ['email', 'template', 'communication', 'review email', 'parent email', 'school email', 'induction email'],
        title: 'Review Communication Templates',
        description: 'Email templates for school and parent review communications',
        type: 'Page',
        action: () => window.location.href = 'review-communication-templates.html',
        section: 'reports'
    },
    {
        keywords: ['induction', 'inductions', 'onboarding', 'new student', 'admission', 'settling'],
        title: 'Inductions',
        description: 'Manage student inductions and onboarding processes',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('inductions').click(), 300);
        },
        section: 'inductions'
    },
    {
        keywords: ['induction email', 'induction template', 'arrange induction', 'post induction', 'induction follow up'],
        title: 'Induction Communication Templates',
        description: 'Email templates for arranging inductions and post-induction follow-ups',
        type: 'Page',
        action: () => window.location.href = 'induction-communication-templates.html',
        section: 'inductions'
    },
    {
        keywords: ['day 1', 'week 1', 'day one', 'week one', 'admission', 'settling procedure', 'admissions procedure'],
        title: 'Day 1 & Week 1 Admissions & Settling Procedure',
        description: 'Complete procedure guide for new KS3 and KS4 placements',
        type: 'Page',
        action: () => window.location.href = 'day1-week1-procedure.html',
        section: 'inductions'
    },
    {
        keywords: ['induction meeting', 'induction portal'],
        title: 'Induction Meeting Portal',
        description: 'Access the induction meeting portal',
        type: 'Link',
        action: () => window.open('https://Inductions.evolution-sportsgroup.com', '_blank'),
        section: 'inductions'
    },
    {
        keywords: ['behaviour', 'behavior', 'contract', 'level 2', 'level 3', 'framework', 'behaviour contract'],
        title: 'Behaviour Management',
        description: 'Behaviour contracts, framework, and communication templates',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('behaviour').click(), 300);
        },
        section: 'behaviour'
    },
    {
        keywords: ['behaviour reintegration', 'reintegration', 'reflection', 'tier', 'behaviour policy', 'b4l', 'behaviour for learning'],
        title: 'Behaviour & Reintegration Policy Guide',
        description: 'Step-by-step reference for managing behaviour incidents (Ofsted-Aligned)',
        type: 'Link',
        action: () => window.open('https://behaviourandreintegration.netlify.app', '_blank'),
        section: 'behaviour'
    },
    {
        keywords: ['behaviour contract level 2', 'level 2 contract', 'l2 contract', 'intervention stage'],
        title: 'Behaviour Contract – Level 2',
        description: 'Level 2 behaviour contract form (Intervention Stage)',
        type: 'Page',
        action: () => window.location.href = 'behaviour-contract-l2.html',
        section: 'behaviour'
    },
    {
        keywords: ['behaviour contract level 3', 'level 3 contract', 'l3 contract', 'final warning'],
        title: 'Behaviour Contract – Level 3',
        description: 'Level 3 final warning contract form',
        type: 'Page',
        action: () => window.location.href = 'behaviour-contract-l3.html',
        section: 'behaviour'
    },
    {
        keywords: ['behaviour communication', 'behaviour template', 'behaviour email', 'behaviour letter'],
        title: 'Communication Templates',
        description: 'Level 2 & Level 3 email and letter templates',
        type: 'Page',
        action: () => window.location.href = 'communication.html',
        section: 'behaviour'
    },
    {
        keywords: ['mentoring', 'mentor', 'student support', 'mentoring session', 'mentoring form'],
        title: 'Mentoring',
        description: 'Record student support and mentoring sessions',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('mentoring').click(), 300);
        },
        section: 'mentoring'
    },
    {
        keywords: ['mentoring session form', 'individual mentoring', 'mentoring log', 'mentoring record'],
        title: 'Individual Mentoring Session Form',
        description: 'Record individual mentoring and student support sessions. Generate formatted entry for direct upload to Bromcom.',
        type: 'Page',
        action: () => window.location.href = 'student-support-mentoring.html',
        section: 'mentoring'
    },
    {
        keywords: ['mentoring induction', 'mentor induction'],
        title: 'Mentoring Induction',
        description: 'Induction document to be read to students before starting mentoring',
        type: 'Page',
        action: () => window.location.href = 'mentoring-induction.html',
        section: 'mentoring'
    },
    {
        keywords: ['mentoring review', 'mentor review'],
        title: 'Mentoring Review',
        description: 'Student review form to identify if mentoring has helped and what improvements can be made',
        type: 'Page',
        action: () => window.location.href = 'mentoring-review.html',
        section: 'mentoring'
    },
    {
        keywords: ['aqa unit 70147', 'aqa mentoring unit', 'mentoring aqa'],
        title: 'AQA Unit 70147 — Progress and Review with a Learning Mentor',
        description: 'AQA unit details and requirements for mentoring interventions',
        type: 'Link',
        action: () => window.open('https://www.aqa.org.uk/programmes/unit-award-scheme/unit-details?unit=70147', '_blank'),
        section: 'mentoring'
    },
    {
        keywords: ['ILP', 'individual learning plan', 'learning plan', 'individual plan'],
        title: 'ILP Generator',
        description: 'Generate comprehensive Individual Learning Plans with minimal input. Auto-generates all 10 sections based on behaviour tiers.',
        type: 'Page',
        action: () => window.location.href = 'individual-learning-plans.html',
        section: 'administration'
    },
    {
        keywords: ['parent meeting', 'carer meeting', 'parent carer meeting', 'meeting note', 'bromcom note', 'parent meeting generator', 'meeting record', 'parent conference'],
        title: 'Parent / Carer Meeting – Bromcom Note Generator',
        description: 'Generate formatted meeting notes ready to paste into Bromcom. One-click copy functionality.',
        type: 'Page',
        action: () => window.location.href = 'parent-meeting-generator.html',
        section: 'administration'
    },
    {
        keywords: ['risk assessment', 'risk', 'safeguarding risk', 'behaviour risk', 'wellbeing risk', 'student risk', 'risk evaluation', 'risk management'],
        title: 'Student Risk Assessment Generator',
        description: 'Generate comprehensive safeguarding, behaviour & wellbeing risk assessments. DfE & Ofsted 2025 compliant.',
        type: 'Page',
        action: () => window.location.href = 'risk-assessment-generator.html',
        section: 'safeguarding'
    },
    {
        keywords: ['assessment', 'assessments', 'evaluate', 'evaluation', 'baseline', 'baselines'],
        title: 'Assessments',
        description: 'View and manage assessments and evaluations',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('assessments').click(), 300);
        },
        section: 'assessments'
    },
    {
        keywords: ['year 7 english', 'y7 english', 'year 7 assessment', 'y7 assessment', 'year seven english'],
        title: 'Year 7 English Assessment',
        description: 'Year 7 English assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgSr91kADM1GFHKtTMIaiSmf', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 7 maths', 'y7 maths', 'year 7 math', 'y7 math', 'year seven maths', 'year seven math'],
        title: 'Year 7 Maths Assessment',
        description: 'Year 7 Maths assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgaB5q4WIK8Iyf6AtpD1vwzb', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 8 english', 'y8 english', 'year 8 assessment', 'y8 assessment', 'year eight english'],
        title: 'Year 8 English Assessment',
        description: 'Year 8 English assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlg2o7XS254cTvqvMkkumqZYF', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 8 maths', 'y8 maths', 'year 8 math', 'y8 math', 'year eight maths', 'year eight math'],
        title: 'Year 8 Maths Assessment',
        description: 'Year 8 Maths assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgI3lndXUaLt9XwXvOYmXrze', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 9 english', 'y9 english', 'year 9 assessment', 'y9 assessment', 'year nine english'],
        title: 'Year 9 English Assessment',
        description: 'Year 9 English assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgT0n48xzVizfLfDeZD2MYth', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 9 maths', 'y9 maths', 'year 9 math', 'y9 math', 'year nine maths', 'year nine math'],
        title: 'Year 9 Maths Assessment',
        description: 'Year 9 Maths assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgV0TqhKC8VQhEcwD3HfsBgd', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 10 english', 'y10 english', 'year 10 assessment', 'y10 assessment', 'year ten english'],
        title: 'Year 10 English Assessment',
        description: 'Year 10 English assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgZmQOVXexA3K4jA2OesCZdg', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 10 maths', 'y10 maths', 'year 10 math', 'y10 math', 'year ten maths', 'year ten math'],
        title: 'Year 10 Maths Assessment',
        description: 'Year 10 Maths assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgrYRqnVz0i0SZoFAE2cne0e', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 11 english', 'y11 english', 'year 11 assessment', 'y11 assessment', 'year eleven english'],
        title: 'Year 11 English Assessment',
        description: 'Year 11 English assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlg7VRvF9sP8sjz7ET3M5zVnc', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['year 11 maths', 'y11 maths', 'year 11 math', 'y11 math', 'year eleven maths', 'year eleven math'],
        title: 'Year 11 Maths Assessment',
        description: 'Year 11 Maths assessment form',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgAPbKtc0uha8SgUfMCXIGuf', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['boxall', 'boxhall', 'semh', 'semh assessment', 'boxall profile', 'boxhall profile'],
        title: 'SEMH Assessment (Boxall)',
        description: 'SEMH Assessment using Boxall Profile',
        type: 'Link',
        action: () => window.open('https://boxhall.evolution-sportsgroup.com', '_blank'),
        section: 'assessments'
    },
    {
        keywords: ['pathway', 'pathways', 'outcome', 'expectation', 'year group'],
        title: 'Pathways',
        description: 'View pathway outcomes and expectations by year group',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('pathways').click(), 300);
        },
        section: 'pathways'
    },
    {
        keywords: ['pathways overview', 'pathway overview'],
        title: 'Pathways Overview',
        description: 'View pathway outcomes and expectations for KS3, Year 10, and Year 11 students',
        type: 'Page',
        action: () => window.location.href = 'pathways.html',
        section: 'pathways'
    },
    {
        keywords: ['timetable', 'schedule', 'rota', 'rotas', 'wednesday', 'lunch', 'door duty', 'detention'],
        title: 'Schedules and Rotas',
        description: 'View timetables, schedules, and staff rotas',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('schedules').click(), 300);
        },
        section: 'schedules'
    },
    {
        keywords: ['wednesday schedule', 'line management', 'wet weather contingency'],
        title: 'JRCS Wednesday Timetable',
        description: 'Wednesday operational timetable with staffing, line management & provision. Includes Period 5 weather contingency.',
        type: 'Page',
        action: () => window.location.href = 'jrcs-wednesday-timetable.html',
        section: 'schedules'
    },
    {
        keywords: ['lunch rota', 'lunch time rota', 'lunch duty'],
        title: 'Lunch Time Rota',
        description: 'Lunch time rota (11:50am - 12:00pm)',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('schedules').click(), 300);
        },
        section: 'schedules'
    },
    {
        keywords: ['door duty', 'door rota'],
        title: 'Door Duty Rota',
        description: 'Daily door duty assignments',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('schedules').click(), 300);
        },
        section: 'schedules'
    },
    {
        keywords: ['detention rota', 'detention duty'],
        title: 'Detention Rota',
        description: 'Detention assignments and lunch time detentions',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('schedules').click(), 300);
        },
        section: 'schedules'
    },
    {
        keywords: ['teaching', 'learning', 'teaching and learning', 'curriculum', 'observation', 'teaching observation', 'observation form'],
        title: 'Teaching and Learning',
        description: 'Access curriculum maps and teaching observation forms',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('teaching').click(), 300);
        },
        section: 'teaching'
    },
    {
        keywords: ['curriculum map', 'whole school curriculum', 'curriculum', 'scheme of work', 'sow', '2026 curriculum', 'curriculum delivery', '2026 curriculum delivery'],
        title: '2026 Curriculum Delivery',
        description: 'Access the 2026 curriculum delivery plan',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('teaching').click(), 300);
        },
        section: 'teaching'
    },
    {
        keywords: ['headstart', 'head start', 'weekly themes', 'spring themes', 'summer themes', 'health safety risk', 'safeguarding identity relationships', 'work skills life skills', 'life after school', 'integrated curriculum', 'curriculum plan', 'assembly schedule', 'pshe themes', 'dofe', 'sports leaders', 'kings trust'],
        title: 'Headstart / Integrated Curriculum Plan',
        description: 'Access Headstart weekly themes, assembly schedules, PSHE themes, and vocational delivery mapping (DofE, Sports Leaders, King\'s Trust)',
        type: 'Page',
        action: () => window.location.href = 'integrated-curriculum-plan.html',
        section: 'teaching'
    },
    {
        keywords: ['teaching observation', 'observation form', 'lesson observation', 'classroom observation', 'teacher observation', 'observation', 'teaching feedback'],
        title: 'Teaching Observation Form',
        description: 'Complete and submit teaching observation forms. Automatically emailed to edwaah@evolution-sportsgroup.com',
        type: 'Page',
        action: () => window.location.href = 'teaching-observation-form.html',
        section: 'teaching'
    },
    {
        keywords: ['purple ruler observation', 'purple ruler observations', 'pr observation', 'ks3 observation', 'ks4 observation', 'maths observation', 'english observation', 'focused learning', 'lesson observation', 'student observation'],
        title: 'Lesson Observations',
        description: 'Purple Ruler & Focused Learning observations with per-student tracking',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('teaching').click(), 300);
        },
        section: 'teaching'
    },
    {
        keywords: ['student lesson observation form', 'observation form', 'purple ruler form', 'focused learning form', 'lesson observation form'],
        title: 'Student & Lesson Observation Form',
        description: 'Purple Ruler (Maths/English) & Focused Learning observations with per-student tracking',
        type: 'Page',
        action: () => window.location.href = 'student-lesson-observation.html',
        section: 'teaching'
    },
    {
        keywords: ['upload observation', 'observation upload', 'upload to drive'],
        title: 'Upload Observations to Drive',
        description: 'Upload completed Purple Ruler & Focused Learning observations to Google Drive',
        type: 'Link',
        action: () => window.open('https://drive.google.com/drive/folders/1b1It7iwMxjlcbXcqhpx_CkTLCohw1atJ', '_blank'),
        section: 'teaching'
    },
    {
        keywords: ['trackers', 'progress tracker', 'ks3 tracker', 'ks4 tracker', 'student tracker', 'achievement tracker', 'term tracker', 'spring tracker', 'summer tracker', 'centre director'],
        title: 'Student Progress Trackers',
        description: 'KS3 & KS4 progress trackers for each term (Spring 1, Spring 2, Summer 1, Summer 2)',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('trackers').click(), 300);
        },
        section: 'trackers'
    },
    {
        keywords: ['ks3 progress', 'ks3 spring 1', 'ks3 tracker spring'],
        title: 'KS3 Progress Tracker – Spring 1',
        description: 'Foundations: Self & Regulation progress tracker for Spring 1',
        type: 'Page',
        action: () => window.location.href = 'trackers/ks3-progress-tracker-spring1.html',
        section: 'trackers'
    },
    {
        keywords: ['ks4 progress', 'ks4 spring 1', 'ks4 tracker spring', 'flexi pathway'],
        title: 'KS4 Progress Tracker – Spring 1',
        description: 'Flexi Pathway progress tracker for Spring 1',
        type: 'Page',
        action: () => window.location.href = 'trackers/ks4-progress-tracker-spring1.html',
        section: 'trackers'
    },
    {
        keywords: ['sports delivery', 'sports', 'pe', 'physical education', 'basketball', 'football', 'tennis', 'netball', 'athletics', 'rugby', 'badminton', 'table tennis', '8 week cycle', 'aqa sports', 'coaching'],
        title: 'Sports Delivery',
        description: '8-week activity cycle and AQA Unit Award Scheme sports units',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('teaching').click(), 300);
        },
        section: 'teaching'
    },
    {
        keywords: ['coaching basic sport skills', 'unit 88592', 'aqa 88592', 'coaching session', 'sport coaching'],
        title: 'AQA Unit 88592 — Coaching Basic Sport Skills',
        description: 'Entry Level: Plan and deliver coaching sessions, evaluate performance',
        type: 'Link',
        action: () => window.open('https://www.aqa.org.uk/programmes/unit-award-scheme/unit-details?unit=88592', '_blank'),
        section: 'teaching'
    },
    {
        keywords: ['sports health fitness', 'unit 116266', 'aqa 116266', 'health and fitness', 'fitness regime'],
        title: 'AQA Unit 116266 — Sports-Related Health and Fitness',
        description: 'Level 1: Pulse measurement, fitness regimes, balanced diet',
        type: 'Link',
        action: () => window.open('https://www.aqa.org.uk/programmes/unit-award-scheme/unit-details?unit=116266', '_blank'),
        section: 'teaching'
    },
    {
        keywords: ['general fitness diet', 'unit 77643', 'aqa 77643', 'physical education fitness'],
        title: 'AQA Unit 77643 — Physical Education: General Fitness and Diet',
        description: 'Entry Level: Health & skill-related fitness, balanced diet',
        type: 'Link',
        action: () => window.open('https://www.aqa.org.uk/programmes/unit-award-scheme/unit-details?unit=77643', '_blank'),
        section: 'teaching'
    },
    {
        keywords: ['admin', 'administration'],
        title: 'Administration',
        description: 'Access administration tools, login credentials, and resources',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('adminBtn').click(), 300);
        },
        section: 'administration'
    },
    {
        keywords: ['purple ruler onboarding', 'academy onboarding', 'bespoke onboarding', 'academy form', 'bespoke form'],
        title: 'Purple Ruler Onboarding',
        description: 'Academy and Bespoke onboarding forms and timetables',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => document.getElementById('adminBtn').click(), 300);
        },
        section: 'administration'
    },
    {
        keywords: ['academy form', 'academy onboarding form', 'remote work'],
        title: 'Academy Onboarding Form',
        description: 'Student completing work Remotely, Maths, English & Science',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgPuvp3DW3kcdmCevx7hGgbe', '_blank'),
        section: 'administration'
    },
    {
        keywords: ['academy timetable', 'purple ruler timetable'],
        title: 'Academy Timetable',
        description: 'Timetable for Academy students',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/sheets/KtaysevqrhOyI2t1yJ5lFw5Sglg?sheet=0621bb', '_blank'),
        section: 'administration'
    },
    {
        keywords: ['bespoke form', 'bespoke onboarding form', 'onsite'],
        title: 'Bespoke Onboarding Form',
        description: 'Student completing Maths & English Onsite',
        type: 'Link',
        action: () => window.open('https://purpleruler.sg.larksuite.com/share/base/form/shrlgPuvp3DW3kcdmCevx7hGgbe', '_blank'),
        section: 'administration'
    },
    {
        keywords: ['password', 'passwords', 'username', 'usernames', 'login', 'credentials', 'login details', 'account'],
        title: 'Username / Passwords',
        description: 'Access login credentials for AQA, Boxall, High Speed Training, Prince\'s Trust, Twinkl, Purple Ruler, and Zoho',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        // Scroll to username/passwords section
                        setTimeout(() => {
                            const passwordsSection = adminModal.querySelector('h3');
                            if (passwordsSection && passwordsSection.textContent.includes('Username / Passwords')) {
                                passwordsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['aqa', 'aqa password', 'aqa login', 'vocational gateway', 'vocgateway'],
        title: 'AQA / Vocational Gateway',
        description: 'Login: ldwaah@evolution-sportsgroup.com | Password: Evolution24!',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const aqaSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('AQA'));
                            if (aqaSection) {
                                aqaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['boxall password', 'boxall login', 'boxhall password', 'boxhall login', 'boxall profile password'],
        title: 'Boxhall / Boxall Profile',
        description: 'Login: ldwaah@evolution-sportsgroup.com | Password: Evolution24!',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const boxallSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('Boxhall') || h.textContent.includes('Boxall'));
                            if (boxallSection) {
                                boxallSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['high speed training', 'high speed training password', 'high speed training login', 'hst'],
        title: 'High Speed Training',
        description: 'Login: ldwaah@evolution-sportsgroup.com | Password: Uefa1618',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const hstSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('High Speed'));
                            if (hstSection) {
                                hstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['prince trust', 'princes trust', 'prince trust password', 'princes trust password', 'prince trust login'],
        title: 'Prince\'s Trust',
        description: 'Login: ldwaah@evolution-sportsgroup.com | Password: Uefa1618',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const ptSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('Prince'));
                            if (ptSection) {
                                ptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['twinkl', 'twinkl password', 'twinkl login'],
        title: 'Twinkl',
        description: 'Login: admin@evolution-sportsgroup.com | Password: Uefa1618!',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const twinklSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('Twinkl'));
                            if (twinklSection) {
                                twinklSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['purple ruler', 'purpleruler', 'purple ruler password', 'purpleruler password', 'purple ruler login'],
        title: 'Purple Ruler',
        description: 'Login: ldwaah@evolution-sportsgroup.com | Password: Uefa1618!',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const prSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('Purple Ruler'));
                            if (prSection) {
                                prSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['zoho', 'zoho password', 'zoho login', 'zoho email'],
        title: 'Zoho',
        description: 'Login: lloyddwaah@evolution-education.com | Password: Uefa1618!',
        type: 'Section',
        action: () => {
            closeSearchModal();
            setTimeout(() => {
                document.getElementById('adminBtn').click();
                setTimeout(() => {
                    const adminModal = document.getElementById('adminModal');
                    if (adminModal) {
                        adminModal.scrollTop = 0;
                        setTimeout(() => {
                            const zohoSection = Array.from(adminModal.querySelectorAll('h4')).find(h => h.textContent.includes('Zoho'));
                            if (zohoSection) {
                                zohoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }, 100);
            }, 300);
        },
        section: 'administration'
    },
    {
        keywords: ['safeguarding', 'safeguard', 'concern', 'welfare', 'child protection', 'abuse', 'safety', 'vulnerable'],
        title: 'Safeguarding Form',
        description: 'Report safeguarding concerns. Automatically emailed to designated safeguarding officers',
        type: 'Page',
        action: () => window.location.href = 'safeguarding-form.html',
        section: 'administration'
    },
    {
        keywords: ['tracker', 'student tracker', 'database', 'student database', 'whole centre', 'student list', 'roster'],
        title: 'Whole Centre Student Tracker',
        description: 'Access the complete student tracking database (Admin Only)',
        type: 'Link',
        action: () => window.open('https://docs.google.com/spreadsheets/d/1Yo3BzgicX6oW1bQIGSK0gABD4EDMjeFpFyv-zX8QAYw/edit?gid=1101531133#gid=1101531133', '_blank'),
        section: 'administration'
    },
    {
        keywords: ['google drive', 'drive', 'folder', 'resources'],
        title: 'Google Drive',
        description: 'Access Evolution Education Google Drive folder',
        type: 'Link',
        action: () => window.open('https://drive.google.com/drive/folders/1PYc4sWrv4bybkSso0aa-Mx_w82lEINtt', '_blank'),
        section: 'external'
    },
    {
        keywords: ['bromcom', 'mis', 'student management', 'student data'],
        title: 'Bromcom',
        description: 'Access Bromcom student management system',
        type: 'Link',
        action: () => window.open('https://cloudmis.bromcom.com/Nucleus/Framework/Login.aspx', '_blank'),
        section: 'external'
    },
    {
        keywords: ['staff handbook', 'handbook', 'staff guide', 'employee handbook'],
        title: 'Staff Handbook 2025',
        description: 'Evolution Education Staff Handbook (PDF)',
        type: 'Link',
        action: () => window.open('https://evolution-education.com/wp-content/uploads/2025/04/ESG-Staff-Handbook-2025.pdf', '_blank'),
        section: 'external'
    },
    {
        keywords: ['operational', 'academic', 'progress', 'structures', 'academic structures', 'progress structures'],
        title: 'Operational Academic & Progress Structures',
        description: 'Operational, Academic and Progress Structures document (PDF)',
        type: 'Link',
        action: () => window.open('https://evolution-education.com/wp-content/uploads/2025/08/Operational-Academic-and-Progress-Structures.pdf', '_blank'),
        section: 'external'
    },
    {
        keywords: ['policy', 'policies', 'safeguarding policy', 'behaviour policy', 'attendance policy', 'complaints policy'],
        title: 'Policies',
        description: 'View all Evolution Education policies',
        type: 'Link',
        action: () => window.open('https://evolution-education.com/policies/', '_blank'),
        section: 'external'
    },
    {
        keywords: ['human resources', 'hr', 'leave', 'appraisal', 'review', 'timesheet', 'reimbursement', 'return to work', 'request leave', 'line management'],
        title: 'Human Resources',
        description: 'HR resources including leave requests, appraisals, timesheets, and reimbursements',
        type: 'Link',
        action: () => window.open('https://evolution-education.com/human-resources/', '_blank'),
        section: 'external'
    }
];

// Open search modal
if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', function() {
        searchModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    });
}

// Close search modal
function closeSearchModal() {
    if (searchModal) {
        searchModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
}

if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', closeSearchModal);
}

// Store current search results globally
let currentSearchResults = [];

// Perform search with enhanced matching
function performSearch(query) {
    if (!query || query.trim().length === 0) {
        searchResults.innerHTML = '';
        currentSearchResults = [];
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const matches = [];
    
    // Search through database with improved matching
    searchDatabase.forEach(item => {
        // Check title match (highest priority)
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        
        // Check keyword matches with better logic
        const keywordMatches = item.keywords.filter(keyword => {
            const keywordLower = keyword.toLowerCase();
            return keywordLower.includes(searchTerm) || 
                   searchTerm.includes(keywordLower) ||
                   keywordLower.split(' ').some(word => word.startsWith(searchTerm)) ||
                   searchTerm.split(' ').some(word => keywordLower.includes(word));
        });
        
        // Check description match
        const descMatch = item.description.toLowerCase().includes(searchTerm);
        
        if (titleMatch || keywordMatches.length > 0 || descMatch) {
            let relevance = 0;
            if (titleMatch) relevance += 10;
            if (keywordMatches.length > 0) relevance += keywordMatches.length * 3;
            if (descMatch) relevance += 1;
            
            matches.push({
                ...item,
                relevance: relevance,
                matchedKeywords: keywordMatches
            });
        }
    });
    
    // Sort by relevance
    matches.sort((a, b) => b.relevance - a.relevance);
    
    // Store results
    currentSearchResults = matches;
    
    // Display results
    displaySearchResults(matches, searchTerm);
}

// Display search results
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <p>No results found for "<strong>${query}</strong>"</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Try searching for: reports, induction, behaviour, mentoring, or calendar</p>
            </div>
        `;
        return;
    }
    
    const resultsHTML = results.map((result, index) => `
        <div class="search-result-item" onclick="handleSearchResult(${index})">
            <h4>${result.title}</h4>
            <p>${result.description}</p>
            <span class="result-type">${result.type}</span>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
}

// Handle search result click (make globally accessible)
window.handleSearchResult = function(index) {
    if (currentSearchResults[index] && currentSearchResults[index].action) {
        currentSearchResults[index].action();
    }
};

// Search on input
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        performSearch(e.target.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(e.target.value);
        }
    });
}

// Search on submit button click
if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
}

// Suggestion tags
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('suggestion-tag')) {
        const searchTerm = e.target.getAttribute('data-search');
        searchInput.value = searchTerm;
        performSearch(searchTerm);
    }
});

// Close search modal when clicking outside
if (searchModal) {
    searchModal.addEventListener('click', function(event) {
        if (event.target === searchModal) {
            closeSearchModal();
        }
    });
}

// Recently Used Items Tracking
function getRecentlyUsed() {
    const recent = localStorage.getItem('recentlyUsed');
    return recent ? JSON.parse(recent) : [];
}

function addToRecentlyUsed(title, url, type = 'link') {
    let recent = getRecentlyUsed();
    
    // Remove if already exists
    recent = recent.filter(item => item.url !== url);
    
    // Add to beginning
    recent.unshift({ title, url, type, timestamp: Date.now() });
    
    // Keep only last 8 items
    recent = recent.slice(0, 8);
    
    localStorage.setItem('recentlyUsed', JSON.stringify(recent));
    updateRecentlyUsedDisplay();
}

function updateRecentlyUsedDisplay() {
    const container = document.getElementById('recentlyUsedItems');
    const section = document.getElementById('recentlyUsedSection');
    const recent = getRecentlyUsed();
    
    if (!container || !section) return;
    
    if (recent.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    container.innerHTML = '';
    
    recent.forEach(item => {
        const element = document.createElement('a');
        element.href = item.url;
        element.className = 'recent-item';
        element.textContent = item.title;
        element.onclick = (e) => {
            e.preventDefault();
            if (item.type === 'link' && item.url.startsWith('http')) {
                window.open(item.url, '_blank');
            } else {
                window.location.href = item.url;
            }
        };
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'recent-item-remove';
        removeBtn.innerHTML = '×';
        removeBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            removeFromRecentlyUsed(item.url);
        };
        
        element.appendChild(removeBtn);
        container.appendChild(element);
    });
}

function removeFromRecentlyUsed(url) {
    let recent = getRecentlyUsed();
    recent = recent.filter(item => item.url !== url);
    localStorage.setItem('recentlyUsed', JSON.stringify(recent));
    updateRecentlyUsedDisplay();
}

// Track clicks on assessment links and section modals
document.addEventListener('click', function(e) {
    const link = e.target.closest('a.assessment-link');
    if (link) {
        const title = link.querySelector('strong')?.textContent || link.textContent.trim();
        const url = link.href;
        addToRecentlyUsed(title, url, 'link');
    }
    
    // Track section modal opens
    const section = e.target.closest('.section');
    if (section && section.id) {
        const title = section.querySelector('.section-heading')?.textContent || section.id;
        addToRecentlyUsed(title, `#${section.id}`, 'section');
    }
});

// Initialize recently used display
updateRecentlyUsedDisplay();

// Prominent Search Functionality
const prominentSearchInput = document.getElementById('prominentSearchInput');
const prominentSearchBtn = document.getElementById('prominentSearchBtn');

function performProminentSearch(query) {
    if (!query || query.trim().length < 2) return;
    
    const results = searchDatabase.filter(item => {
        const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    
    if (results.length > 0) {
        // Open search modal with results
        if (searchModal) {
            searchModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (searchInput) {
                searchInput.value = query;
                performSearch(query);
            }
        }
    } else {
        // Show no results message
        alert(`No results found for "${query}". Try a different search term.`);
    }
}

if (prominentSearchInput) {
    prominentSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performProminentSearch(this.value);
        }
    });
}

if (prominentSearchBtn) {
    prominentSearchBtn.addEventListener('click', function() {
        if (prominentSearchInput) {
            performProminentSearch(prominentSearchInput.value);
        }
    });
}

// Close Modal Function for Breadcrumbs
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

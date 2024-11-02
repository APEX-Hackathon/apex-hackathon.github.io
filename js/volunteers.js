const volunteerOpportunities = [
    {
        title: "Staff Supervisors",
        description:
            "We need APEX staff members present in the building during the hackathon event. This is a flexible position where staff can sign up for time slots that work with their schedule.",
        requirements: [
            "APEX building staff"
        ],
        timeCommitment: "Flexible",
        slots: "4",
    },
    {
        title: "Registration Desk",
        description:
            "Welcome participants, handle check-in process, and distribute event materials. Be the friendly face of APEX Hackathon!",
        requirements: ["Organizational skills", "Customer service oriented"],
        timeCommitment: "1 hour",
        slots: 4,
    },
    {
        title: "Help Desk",
        description:
            "Provide technical guidance and programming support to hackathon participants. We're seeking volunteers with strong knowledge in either frontend development (HTML, CSS, JavaScript) and or backend development (Python, databases). Help participants overcome coding challenges, explain key programming concepts, and provide mentorship throughout the event.",
        requirements: [
            "Strong programming knowledge in Python/JavaScript",
            "Web development experience",
            "Problem-solving skills"
        ],
        timeCommitment: "3 hours",
        slots: 2,
    },
    {
        title: "Presentors",
        description:
            "Lead engaging 15-30 minute technical sessions during the hackathon. We're seeking industry professionals to present on topics like web development, Python programming, API integration, database design, or other relevant technologies. These quick-learning sessions will help participants expand their technical knowledge during the event.",
        requirements: [
            "Professional experience in tech",
            "Public speaking ability",
            "Prepared presentation material"
        ],
        timeCommitment: "2 hours",
        slots: 6,
    },
];

function createOpportunityCard(opportunity) {
    return `
        <div class="opportunity-card">
            <h3 class="opportunity-title">${opportunity.title}</h3>
            <p class="opportunity-description">${opportunity.description}</p>
            <div class="opportunity-details">
                <span class="detail-item">${opportunity.timeCommitment}</span>
                <span class="detail-item">${opportunity.slots} positions</span>
            </div>
            <div class="opportunity-details">
                ${opportunity.requirements
                    .map(
                        (req) => `
                    <span class="detail-item">${req}</span>
                `
                    )
                    .join("")}
            </div>
            <button class="apply-button" onclick="applyForPosition('${
                opportunity.title
            }')">
                Apply Now
            </button>
        </div>
    `;
}

function applyForPosition(title) {
    // This could be expanded to open a modal or redirect to an application form
    alert(
        `Thanks for your interest in the ${title} position! Application functionality coming soon.`
    );
}

function initializeVolunteers() {
    const opportunitiesContainer = document.querySelector(".opportunities");
    if (opportunitiesContainer) {
        opportunitiesContainer.innerHTML = volunteerOpportunities
            .map((opportunity) => createOpportunityCard(opportunity))
            .join("");
    }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeVolunteers);

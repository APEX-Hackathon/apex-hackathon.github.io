const volunteerOpportunities = [
    {
        title: "Technical Mentor",
        description:
            "Guide participants through technical challenges, provide code reviews, and share your expertise in various programming languages and frameworks.",
        requirements: [
            "3+ years programming experience",
            "Strong communication skills",
        ],
        timeCommitment: "8 hours",
        slots: 8,
    },
    {
        title: "Registration Desk",
        description:
            "Welcome participants, handle check-in process, and distribute event materials. Be the friendly face of APEX Hackathon!",
        requirements: ["Organizational skills", "Customer service oriented"],
        timeCommitment: "4 hours",
        slots: 4,
    },
    {
        title: "Event Photographer",
        description:
            "Capture the energy and excitement of the hackathon through photos and videos. Document key moments and participant interactions.",
        requirements: ["Photography experience", "Own equipment"],
        timeCommitment: "6 hours",
        slots: 2,
    },
    {
        title: "Workshop Facilitator",
        description:
            "Lead mini-workshops or technical sessions during the hackathon. Share your knowledge in specific technologies or development practices.",
        requirements: ["Teaching experience", "Expert in specific tech"],
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

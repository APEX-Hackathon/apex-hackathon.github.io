const volunteerOpportunities = [
    {
        title: "Staff Supervisors",
        description:
            "We need APEX staff members present in the building during the hackathon event. This is a flexible position where staff can sign up for time slots that work with their schedule.",
        requirements: ["APEX building staff"],
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
            "Provide programming support to participants. Looking for volunteers skilled in frontend and or backend to help participants.",
        requirements: [
            "Strong programming knowledge in Python/JavaScript",
            "Web development experience",
            "Problem-solving skills",
        ],
        timeCommitment: "3 hours",
        slots: 10,
    },
    {
        title: "Presentors",
        description:
            "Lead 15-30 minute technical sessions on web development, Python, or other relevant technologies during the hackathon.",
        requirements: [
            "Professional experience in tech",
            "Public speaking ability",
            "Prepared presentation material",
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
    // Open the volunteer sign-up form in a new tab
    window.open("https://forms.gle/hPo19NuuKTUpAxLY8", "_blank");
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

// Hosts Section Code
const hostsData = [
    {
        name: "Gracie Hutchins",
        description: "Hello! My name is Gracie, I really enjoy all things techy and wanted to host this Hackathon to encourage more students into STEM 🌸",
        members: [
            {
                role: "Event Organizer and Host",
                occupation: "Computer Technician",
                github: "Ann-MarieDev"
            }
        ]
    },
    {
        name: "Ben Boonstra",
        description: "",
        members: [
            {
                role: "Github and Event Organizer",
                occupation: "Full-stack Developer",
                github: "bboonstra"
            }
        ]
    }
];

function loadHosts() {
    const container = document.getElementById("hosts-container");

    hostsData.forEach((host) => {
        const hostElement = createHostCard(host);
        container.appendChild(hostElement);
    });
}

function createHostCard(host) {
    const hostCard = document.createElement("div");
    hostCard.className = "host-card";

    hostCard.innerHTML = `
        <div class="host-header">
            <h2 class="host-name">${host.name}</h2>
            <p class="host-description">${host.description}</p>
        </div>
        <div class="host-members">
            ${host.members
                .map(
                    (member) => `
                <div class="member-card">
                    <img src="https://github.com/${member.github}.png" alt="${member.role}" class="member-avatar" onclick="window.open('https://github.com/${member.github}', '_blank')">
                    <p class="member-role">${member.role}</p>
                    <p class="member-occupation small-text">${member.occupation}</p>
                    <a href="https://github.com/${member.github}" class="member-github" target="_blank">
                        @${member.github}
                    </a>
                </div>
            `
                )
                .join("")}
        </div>
    `;

    return hostCard;
}

// Load hosts when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadHosts);

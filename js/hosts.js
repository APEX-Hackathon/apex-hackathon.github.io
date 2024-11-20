// Sample data for hosts
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
        description: "Description for Host Two.",
        members: [
            {
                role: "Event and Github Organizer",
                occupation: "Full-stack Developer",
                github: "bboonstra"
            }
        ]
    }
];

// Function to load hosts into the DOM
function loadHosts() {
    const container = document.getElementById("hosts-container");

    hostsData.forEach((host) => {
        const hostElement = createHostCard(host);
        container.appendChild(hostElement);
    });
}

// Function to create a host card
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
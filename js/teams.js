async function loadTeams() {
    try {
        const response = await fetch("/data/teams.json");
        const data = await response.json();

        const container = document.getElementById("teams-container");

        data.teams.forEach((team) => {
            const teamElement = createTeamCard(team);
            container.appendChild(teamElement);
        });
    } catch (error) {
        console.error("Error loading teams:", error);
    }
}

function createTeamCard(team) {
    const teamCard = document.createElement("div");
    teamCard.className = "team-card";

    teamCard.innerHTML = `
        <div class="team-header">
            <h2 class="team-name">${team.name}</h2>
            <p class="team-description">${team.description}</p>
        </div>
        <div class="team-members">
            ${team.members
                .map(
                    (member) => `
                <div class="member-card">
                    <img src="https://github.com/${member.github}.png" alt="${member.name}" class="member-avatar" onclick="window.open('https://github.com/${member.github}', '_blank')">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                    <a href="https://github.com/${member.github}" class="member-github" target="_blank">
                        @${member.github}
                    </a>
                </div>
            `
                )
                .join("")}
        </div>
    `;

    return teamCard;
}

function loadHosts() {
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
            description: "My name is Ben, I love all things programming. I can't wait to get the event started and help out while also leading my own team.",
            members: [
                {
                    role: "Github and Event Organizer",
                    occupation: "Full-stack Developer",
                    github: "bboonstra"
                }
            ]
        }
    ];

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

// Load teams and hosts when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    loadTeams();
    loadHosts();
});

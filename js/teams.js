async function loadHosts() {
    try {
        const response = await fetch("/data/teams.json");
        const data = await response.json();

        const container = document.getElementById("hosts-container");

        data.teams.forEach((team) => {
            const hostElement = createHostCard(team);
            container.appendChild(hostElement);
        });
    } catch (error) {
        console.error("Error loading hosts:", error);
    }
}

function createHostCard(team) {
    const hostCard = document.createElement("div");
    hostCard.className = "host-card";

    hostCard.innerHTML = `
        <div class="host-header">
            <h2 class="host-name">${team.name}</h2>
            <p class="host-description">${team.description}</p>
        </div>
        <div class="host-members">
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

    return hostCard;
}

document.addEventListener("DOMContentLoaded", loadHosts);

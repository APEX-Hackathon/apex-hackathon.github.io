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

document.addEventListener("DOMContentLoaded", loadTeams);

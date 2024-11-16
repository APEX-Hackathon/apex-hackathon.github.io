const partnersData = {
    partners: [
        // Add partners here as needed
    ]
};

function createPartnerCard(partner) {
    return `
        <div class="partner-card">
            <img src="${partner.logo}" alt="${partner.name} logo" class="partner-logo">
            <h4 class="partner-name">${partner.name}</h4>
            <p class="partner-description">${partner.description}</p>
            <a href="${partner.website}" class="partner-link" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    `;
}

function initializePartners() {
    const container = document.getElementById('partners');
    if (container && partnersData.partners) {
        container.innerHTML = partnersData.partners
            .map((partner) => createPartnerCard(partner))
            .join("");
    }
}

document.addEventListener("DOMContentLoaded", initializePartners);

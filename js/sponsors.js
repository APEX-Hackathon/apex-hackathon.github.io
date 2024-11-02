const sponsorsData = {
    platinum: [
        {
            name: "Hy-Vee",
            logo: "/images/sponsors/hyvee-logo.png",
            description:
                "Leading grocery retailer supporting technology innovation and education in Iowa.",
            website: "https://www.hy-vee.com",
        },
    ],
    gold: [
        {
            name: "Principal",
            logo: "/images/sponsors/principal-logo.png",
            description:
                "Global financial investment management and insurance company headquartered in Des Moines.",
            website: "https://www.principal.com",
        },
    ],
    silver: [
        {
            name: "Waukee APEX",
            logo: "/images/sponsors/apex-logo.png",
            description:
                "Innovative education program connecting students with business sponsors.",
            website: "https://apex.waukeeschools.org",
        },
    ],
};

function createsponsorCard(sponsor) {
    return `
        <div class="sponsor-card">
            <img src="${sponsor.logo}" alt="${sponsor.name} logo" class="sponsor-logo">
            <h4 class="sponsor-name">${sponsor.name}</h4>
            <p class="sponsor-description">${sponsor.description}</p>
            <a href="${sponsor.website}" class="sponsor-link" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    `;
}

function initializesponsors() {
    // Populate each tier
    Object.keys(sponsorsData).forEach((tier) => {
        const container = document.getElementById(`${tier}-sponsors`);
        if (container) {
            container.innerHTML = sponsorsData[tier]
                .map((sponsor) => createsponsorCard(sponsor))
                .join("");
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeSponsors);

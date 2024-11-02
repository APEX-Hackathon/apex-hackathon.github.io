const partnersData = {
    platinum: [
        {
            name: "Hy-Vee",
            logo: "/images/partners/hyvee-logo.png",
            description:
                "Leading grocery retailer supporting technology innovation and education in Iowa.",
            website: "https://www.hy-vee.com",
        },
    ],
    gold: [
        {
            name: "Principal",
            logo: "/images/partners/principal-logo.png",
            description:
                "Global financial investment management and insurance company headquartered in Des Moines.",
            website: "https://www.principal.com",
        },
    ],
    silver: [
        {
            name: "Waukee APEX",
            logo: "/images/partners/apex-logo.png",
            description:
                "Innovative education program connecting students with business partners.",
            website: "https://apex.waukeeschools.org",
        },
    ],
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
    Object.keys(partnersData).forEach((tier) => {
        const container = document.getElementById(`${tier}-partners`);
        if (container) {
            container.innerHTML = partnersData[tier]
                .map((partner) => createPartnerCard(partner))
                .join("");
        }
    });
}

document.addEventListener("DOMContentLoaded", initializePartners);

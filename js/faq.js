const faqData = {
    generalInfo: [
        {
            question: "What is a hackathon?",
            answer: "The APEX Hackathon is a 24-hour coding competition where participants collaborate in teams to create innovative projects.",
        },
        {
            question: "How does overnight work?",
            answer: "While code repositories will be closed between midnight and 6 AM, teams may continue planning and brainstorming. We strongly recommend getting adequate rest to maintain productivity throughout the event.",
        },
        {
            question: "Is this event beginner-friendly?",
            answer: "Yes! This hackathon is designed for all skill levels. While basic programming knowledge is recommended, we focus primarily on front-end development. Teams may choose to include backend components, but this is optional and won't have additional event support.",
        },
        {
            question: "How does scoring work?",
            answer: "Judging criteria:<ul><li>Awe: Does your project do something new, innovative, or outstanding?</li><li>Prowess: Is it clear from your code that you are a strong team - both technically and in the aspect of teamwork and project management?</li><li>Entertainment: Does your project use creativity and uniqueness that capture an audience?</li><li>X: The X award is the Hackathon equivalent to the People's Choice award. The project that receives the most votes from other teams (you cannot vote for your own) will gain bonus points!</li></ul>",
        },
        {
            question: "Is there food I should not bring?",
            answer: "<ul><li>Peanuts, any type of nuts or anything that may contain nuts</li></ul>",
        },
    ],
    timeline: [
        {
            question: "What's the registration deadline?",
            answer: "Registration must be completed at least 24 hours before the event. Teams will be formed one day before the event for participants who haven't already joined a team. Late registrations may not be assigned to a team. Register here: <a href='https://docs.google.com/forms/d/e/1FAIpQLSeRj7b-Gdfw10ahcIEMRpzIvNW2qZGbG8NgqM1GcB5jXW6c0w/viewform?usp=sf_link' target='_blank'>Registration Form</a>",
        },
        {
            question: "Where is the event located?",
            answer: "Address: 295 SE Ashworth Rd, Waukee, IA 50263<br><br>The event will be held at the WILC building. Check-in opens at 4:45 PM on Friday at the front office. The majority of the competition will take place at this location, except for overnight work.",
        },
        {
            question: "What are the working arrangements?",
            answer: "During WILC hours, teams will work in the building. Outside of WILC hours, teams can choose to work either remotely or meet in person at an agreed-upon location. The majority of project work will take place at the WILC. Note: Code repositories will be locked between midnight and 6 AM to ensure participants get rest.",
        },
    ],
    gettingReady: [
        {
            question: "What technical skills do I need?",
            answer: "It is HIGHLY recommended that you have basic knowledge of these languages:<ul><li>HTML/CSS for the visuals of the website like text, colors, positioning, etc</li><li>Javascript for the mechanics of the website like calculations, drop-down boxes, etc</li><li>Python for any server-side code like having users that can log in to accounts</li></ul>",
        },
        {
            question: "What's provided?",
            answer: "We are planning on serving pizza on friday. For Saturday, we won't be serving food so make sure to bring lunch! Also, bring snacks if you would like.",
        },
        {
            question: "What should I bring?",
            answer: "To bring:<ul><li>Device to program on (participants will be required to bring their device they wish to use, it will not be provided). It is highly recommended to bring a laptop.</li><li>Adequate power supply for your device</li><li>Snacks for yourself or team members (check allergen list)</li><li>Wear comfortable clothes</li></ul>",
        },
        {
            question: "How do I set up my development environment?",
            answer: "Recommended Tools:<ul><li>Visual Studio Code for programming</li><li>Extensions for VSCode:<ul><li>Git Blame/Git Lens - for tracking who did what</li><li>Live Server - to view website</li><li>Prettier - to format code</li><li>Language-specific extensions - to improve quality of life</li><li>Snippets (pre-made code blocks for free)</li><li>Intellisense for your languages of choice</li></ul></li></ul>",
        },
    ],
    resources: [
        {
            question: "Where can I learn the basics?",
            answer: "Free video tutorials:<ul><li>HTML: <a href='https://youtu.be/UB1O30fR-EE?si=L9QipCVUN4SxEIwN' target='_blank'>Getting Started with HTML</a></li><li>CSS: <a href='https://youtu.be/yfoY53QXEnI?si=QuCwl0AGXg1zs9pf' target='_blank'>CSS Crash Course</a></li><li>JavaScript: <a href='https://youtu.be/hdI2bqOjy3c?si=EcKrrhZSP0ey021j' target='_blank'>JavaScript Fundamentals</a></li><li>Python: <a href='https://youtu.be/JJmcL1N2KQs?si=e0srFjRGxotABdSV' target='_blank'>Python Basics</a></li></ul>",
        },
        {
            question: "Where can I practice coding?",
            answer: "Interactive learning platforms:<ul><li><a href='https://codehs.com/go/85D9C' target='_blank'>HTML/CSS on CodeHS</a></li><li><a href='https://www.freecodecamp.org/learn' target='_blank'>FreeCodeCamp HTML/CSS</a></li><li><a href='https://codehs.com/go/65F8D' target='_blank'>JavaScript on CodeHS</a></li><li><a href='https://codehs.com/go/B01CC' target='_blank'>Python on CodeHS</a></li></ul>",
        },
    ],
    teamFormation: [
        {
            question: "How are teams organized?",
            answer: "Teams can be formed in two ways: you can either join with your chosen teammates or be assigned to a team. Team assignments happen one day before the event. Each team has a maximum of 4 members. Note: You must submit the registration form at least 24 hours before the event to be placed on a team.",
        },
        {
            question: "How does team collaboration work?",
            answer: "In order to collaborate with your team, you'll be using a GitHub repository. This allows you to:<ul><li>Share, edit, and collaborate on the same code with your teammates</li><li>Automatically deploy your website to GitHub Pages or Render</li><li>Keep a history of your project to easily undo</li><li>Save your project on the cloud</li></ul>This allows us to:<ul><li>Lock down repositories during downtime (12am to 6am)</li><li>Moderate and manage teams during the Hackathon</li><li>Verify that code is your own and not AI or plagiarized</li><li>Provide feedback and review on your code</li><li>Help with technical issues</li></ul>First, you'll need to create a GitHub account. You'll supply us with this in the signup form. Once those two steps are completed, you'll receive an email from our GitHub organization APEX-Hackathon asking you to join the Organization and the team you specified in the signup form. If you have not specified a team, you will be placed into one the day before competition. After you get this email, you should accept the invitation and navigate to the repository (code) for your project. Now you can start editing the repository from your own computer, either directly from the web interface or using your code editor.",
        },
    ],
};

function initializeFAQ() {
    const container = document.querySelector(".faq-container");
    const categoryButtons = document.querySelectorAll(".category-btn");

    if (!container || !categoryButtons.length) {
        setTimeout(initializeFAQ, 100);
        return;
    }

    function showCategory(category) {
        container.innerHTML = "";
        faqData[category].forEach((item, index) => {
            const faqItem = document.createElement("div");
            faqItem.className = "faq-item";
            faqItem.innerHTML = `
                <button class="faq-question" 
                        aria-expanded="false"
                        aria-controls="faq-answer-${category}-${index}">
                    ${item.question}
                    <span class="icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer" 
                     id="faq-answer-${category}-${index}"
                     role="region">
                    <div class="faq-answer-content">
                        ${item.answer}
                    </div>
                </div>
            `;
            container.appendChild(faqItem);
        });
    }

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            categoryButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            showCategory(button.dataset.category);
        });
    });

    // Show initial category
    showCategory("generalInfo");

    // Replace click handler with this improved version
    container.addEventListener("click", (e) => {
        const question = e.target.closest(".faq-question");
        if (!question) return;

        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");
        const content = answer.querySelector(".faq-answer-content");
        const isExpanded = question.getAttribute("aria-expanded") === "true";

        // Close any other open items first
        const activeItems = container.querySelectorAll(".faq-item.active");
        activeItems.forEach((activeItem) => {
            if (activeItem !== item) {
                const activeQuestion =
                    activeItem.querySelector(".faq-question");
                const activeAnswer = activeItem.querySelector(".faq-answer");
                activeQuestion.setAttribute("aria-expanded", "false");
                activeAnswer.style.removeProperty("--answer-height");
                activeItem.classList.remove("active");
            }
        });

        if (isExpanded) {
            question.setAttribute("aria-expanded", "false");
            answer.style.removeProperty("--answer-height");
            item.classList.remove("active");
        } else {
            // Set the height before adding active class
            const height = content.offsetHeight;
            answer.style.setProperty("--answer-height", `${height}px`);

            // Small delay to ensure smooth animation
            requestAnimationFrame(() => {
                question.setAttribute("aria-expanded", "true");
                item.classList.add("active");
            });
        }
    });

    // Add keyboard support
    container.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            const question = e.target.closest(".faq-question");
            if (question) {
                e.preventDefault();
                question.click();
            }
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeFAQ);
} else {
    initializeFAQ();
}

document.addEventListener("template-loaded", initializeFAQ);

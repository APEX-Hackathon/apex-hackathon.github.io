const faqData = {
    generalInfo: [
        {
            question: "What is a hackathon?",
            answer: "A hackathon is a 24-hour coding competition where teams work together to create innovative solutions. This event is beginner-friendly and focuses primarily on front-end development, though teams may choose to include backend components.",
        },
        {
            question: "Is this event beginner-friendly?",
            answer: "Yes! This hackathon is designed to be beginner-friendly. While basic programming knowledge is recommended (see our preparation resources), the event focuses primarily on front-end development. Backend development is optional and won't be provided with additional event materials.",
        },
        {
            question: "How does scoring work?",
            answer: "Projects are judged on:<ul><li>Awe: Innovation and uniqueness</li><li>Prowess: Technical skill and teamwork</li><li>Entertainment: Creativity and audience appeal</li><li>X Factor: People's Choice award</li></ul>",
        },
        {
            question: "What's not allowed at the event?",
            answer: "For safety reasons, please do not bring:<ul><li>Any foods containing nuts (strict no-nuts policy due to allergies)</li><li>Any disruptive items or behavior</li></ul>",
        },
    ],
    timeline: [
        {
            question: "What's the registration deadline?",
            answer: "Registration must be completed at least 24 hours before the event to ensure team placement. Fill out the registration form at <a href='https://forms.gle/Qw8Rj1tY3ET8jz6q6' target='_blank'>this link</a>.",
        },
        {
            question: "What's the event schedule?",
            answer: "<ul><li>Friday 4:45 PM - 5:00 PM: Check-in at front office</li><li>Friday 5:30 PM: Official start</li><li>Saturday 6:00 PM: Project judging</li><li>View the full schedule <a href='schedule.html'>here</a></li></ul>",
        },
        {
            question: "Where is the event located?",
            answer: "Address: 295 SE Ashworth Rd, Waukee, IA 50263<br><br>When arriving at the WILC, check in at the front office to receive a hand stamp verifying your registration. This is only required on Friday - no re-stamping needed on Saturday.",
        },
        {
            question: "What are the working arrangements?",
            answer: "Teams can work either remotely or in person at a chosen location/member's house outside of WILC hours. Code editing will be disabled between midnight and 6 AM to ensure participants get rest.",
        },
    ],
    gettingReady: [
        {
            question: "What technical skills do I need?",
            answer: "Basic knowledge of these technologies is highly recommended:<ul><li>HTML/CSS for website visuals</li><li>JavaScript for website mechanics</li><li>Python for server-side code (optional)</li></ul>",
        },
        {
            question: "What should I bring?",
            answer: "Essential items:<ul><li>Laptop/programming device</li><li>Power supply/charger</li><li>Comfortable clothes</li><li>Snacks (no nuts!)</li><li>Lunch for Saturday</li></ul>Note: Pizza will be provided on Friday evening.",
        },
        {
            question: "How do I set up my development environment?",
            answer: "Required tools:<ul><li>GitHub account (accept organization invitation after registration)</li><li>VSCode as your code editor</li><li>Recommended extensions:<ul><li>Git Blame/Git Lens</li><li>Live Server</li><li>Prettier</li><li>Language-specific extensions</li></ul></ul>",
        },
    ],
    resources: [
        {
            question: "Where can I learn the basics?",
            answer: "Free video tutorials:<ul><li>HTML: <a href='https://youtu.be/UB1O30fR-EE' target='_blank'>Getting Started with HTML</a></li><li>CSS: <a href='https://youtu.be/yfoY53QXEnI' target='_blank'>CSS Crash Course</a></li><li>JavaScript: <a href='https://youtu.be/hdI2bqOjy3c' target='_blank'>JavaScript Fundamentals</a></li><li>Python: <a href='https://youtu.be/JJmcL1N2KQs' target='_blank'>Python Basics</a></li></ul>",
        },
        {
            question: "Where can I practice coding?",
            answer: "Interactive learning platforms:<ul><li><a href='https://codehs.com/go/85D9C' target='_blank'>HTML/CSS on CodeHS</a></li><li><a href='https://www.freecodecamp.org/learn' target='_blank'>FreeCodeCamp HTML/CSS</a></li><li><a href='https://codehs.com/go/65F8D' target='_blank'>JavaScript on CodeHS</a></li><li><a href='https://codehs.com/go/B01CC' target='_blank'>Python on CodeHS</a></li></ul>",
        },
    ],
    teamFormation: [
        {
            question: "How are teams organized?",
            answer: "Teams will be assembled one day before the event if you haven't already formed one. Maximum team size is 4 members. If you don't submit the registration form at least 24 hours in advance, you may not be placed on a team.",
        },
        {
            question: "How does team collaboration work?",
            answer: "Teams will use GitHub for code sharing, deployment, and project management. Make sure to accept the organization invitation you'll receive after registration.",
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

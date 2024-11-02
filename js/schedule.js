// Only initialize if not already defined
if (typeof window.scheduleData === "undefined") {
    window.scheduleData = {
        friday: [
            {
                time: "4:45 PM",
                location: "WILC Front Office",
                activity:
                    "Check-in: Participants arrive, register, and receive event materials.",
            },
            {
                time: "5:00 PM",
                location: "Triangle",
                activity:
                    "Opening Presentation: Introduction to the event, rules, and judging criteria.",
            },
            {
                time: "5:30 PM",
                location: "Team Areas",
                activity: "GitHub Repos unlocked! Time to work!",
            },
            {
                time: "6:30 PM",
                location: "Triangle",
                activity: "Mini-Presentation (Optional)",
            },
            {
                time: "7:00 PM - 8:00 PM",
                location: "Triangle",
                activity: "Dinner–Pizza",
            },
            {
                time: "8:00 PM - 8:45 PM",
                location: "Triangle",
                activity:
                    "Help-desk: Have any roadblocks? Visit the triangle to receive help!",
            },
            {
                time: "8:45 PM",
                location: "Triangle",
                activity: "Closer Speech: End of day one.",
            },
        ],
        saturday: [
            {
                time: "8:00 AM",
                location: "WILC Front Office",
                activity: "Check-in",
            },
            {
                time: "8:30 AM",
                location: "Team Areas",
                activity: "Work Time",
            },
            {
                time: "8:45 AM - 9:30 AM",
                location: "Triangle",
                activity: "Help Desk: Support for overnight issues",
            },
            {
                time: "11:00 AM - 12:15 PM",
                location: "Triangle",
                activity:
                    "Business Sp/Break Time (Does not count towards 24 hours)",
            },
            {
                time: "6:00 PM",
                location: "All Areas",
                activity: "Time's Up! GitHub Repos locked indefinitely",
            },
            {
                time: "6:40 PM",
                location: "Triangle",
                activity: "Project Presentations",
            },
            {
                time: "8:25 PM",
                location: "Triangle",
                activity: "Winner Announcement & Certification Distribution",
            },
        ],
    };
}

// Wrap the rest in a function that we can call safely multiple times
function initializeSchedule() {
    // DOM Elements
    const tabButtons = document.querySelectorAll(".tab-btn");
    const scheduleContent = document.getElementById("scheduleContent");

    // Functions
    function createScheduleItem(item) {
        return `
            <div class="schedule-item">
                <div class="time">${item.time}</div>
                <div class="location">${item.location}</div>
                <div class="activity">${item.activity}</div>
            </div>
        `;
    }

    function displaySchedule(day) {
        // Store the current height before changing content
        const currentHeight = scheduleContent.offsetHeight;
        scheduleContent.style.height = `${currentHeight}px`;
        scheduleContent.innerHTML = '<div class="loading-spinner"></div>';

        setTimeout(() => {
            const schedule = window.scheduleData[day];
            scheduleContent.innerHTML = schedule
                .map((item) => createScheduleItem(item))
                .join("");

            // Set height to auto after content is loaded
            const newHeight = scheduleContent.scrollHeight;
            scheduleContent.style.height = `${newHeight}px`;

            // Remove fixed height after transition
            setTimeout(() => {
                scheduleContent.style.height = "auto";
            }, 300); // Match this with your CSS transition duration
        }, 0);
    }

    // Event Listeners
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Update active state
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Display schedule for selected day
            const day = button.dataset.day;
            displaySchedule(day);
        });
    });

    // Initial load
    displaySchedule("friday");
}
// Call the initialization function
initializeSchedule();

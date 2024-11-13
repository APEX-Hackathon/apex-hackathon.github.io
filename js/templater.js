async function loadTemplate() {
    try {
        const response = await fetch("/templates/layout.html");
        const template = await response.text();

        // Show loading overlay for at least 0.5 seconds
        const loadingStart = Date.now();
        const minimumLoadTime = 500; // 0.5 seconds

        // Get the content from the page-content div
        const pageContentEl = document.getElementById("page-content");
        const pageContent = pageContentEl.innerHTML;

        // Store any scripts and styles that were in the page content
        const scripts = Array.from(
            pageContentEl.getElementsByTagName("script")
        );
        const styles = Array.from(pageContentEl.getElementsByTagName("style"));
        const elements = [...scripts, ...styles].map((el) => el.outerHTML);

        // Replace the entire body with the template
        document.body.innerHTML = template;

        // Add Umami analytics script
        const umamiScript = document.createElement("script");
        umamiScript.defer = true;
        umamiScript.src = "https://cloud.umami.is/script.js";
        umamiScript.setAttribute(
            "data-website-id",
            "4e0a633b-08be-404a-8b92-3d8509c74e10"
        );
        document.head.appendChild(umamiScript);

        // Insert the page content into the main content area
        document.getElementById("main-content").innerHTML = pageContent;

        // Re-inject any scripts and styles that were in the page content
        elements.forEach((element) => {
            const tempEl = document.createElement("div");
            tempEl.innerHTML = element;
            const node = tempEl.firstChild;

            // For scripts, create a new script element to ensure it executes
            if (node.tagName === "SCRIPT") {
                const script = document.createElement("script");
                script.src = node.src;
                script.textContent = node.textContent;
                document.body.appendChild(script);
            } else {
                document.body.appendChild(node);
            }
        });

        // Set active nav item
        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach((link) => {
            if (link.getAttribute("href").includes(currentPage)) {
                link.classList.add("active");
            }
        });

        const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
        const navLinksContainer = document.querySelector(".nav-links"); // Get the ul element

        if (mobileNavToggle && navLinksContainer) {
            mobileNavToggle.addEventListener("click", () => {
                navLinksContainer.classList.toggle("active");
                mobileNavToggle.setAttribute(
                    "aria-expanded",
                    navLinksContainer.classList.contains("active")
                );
            });
        }

        // Dispatch event when template is loaded
        document.dispatchEvent(new Event("template-loaded"));

        // Ensure loading overlay shows for at least 2 seconds
        const loadingElapsed = Date.now() - loadingStart;
        const remainingTime = Math.max(0, minimumLoadTime - loadingElapsed);

        setTimeout(() => {
            const overlay = document.getElementById("loading-overlay");
            const mainContent = document.getElementById("main-content");

            if (overlay) {
                overlay.classList.add("fade-out");
                setTimeout(() => {
                    overlay.remove();
                    // Add visible class to main content after overlay fades
                    if (mainContent) {
                        mainContent.classList.add("visible");
                    }
                    // Add loaded class to body
                    document.body.classList.add("loaded");
                }, 500);
            }
        }, remainingTime);
    } catch (error) {
        console.error("Error loading template:", error);
    }
}

// Load template when DOM is ready
document.addEventListener("DOMContentLoaded", loadTemplate);
// Add this to your main JavaScript file
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document
            .querySelector(".nav-links")
            .classList.add("transitions-enabled");
    }, 500);
});

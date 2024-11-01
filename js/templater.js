async function loadTemplate() {
    try {
        const response = await fetch("/templates/layout.html");
        const template = await response.text();

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
    } catch (error) {
        console.error("Error loading template:", error);
    }
}

// Load template when DOM is ready
document.addEventListener("DOMContentLoaded", loadTemplate);

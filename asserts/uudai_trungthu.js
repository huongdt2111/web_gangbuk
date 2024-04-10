
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchform");
    const searchInput = document.getElementById("s");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== "") {
            const contentContainers = document.querySelectorAll(".container_content_1");
            contentContainers.forEach(function(container) {
                const content = container.textContent.toLowerCase();
                if (content.includes(searchTerm)) {
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        } else {
            const contentContainers = document.querySelectorAll(".container_content_1");
            contentContainers.forEach(function(container) {
                container.style.display = "block";
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".dropdown");
    
    dropdownItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});
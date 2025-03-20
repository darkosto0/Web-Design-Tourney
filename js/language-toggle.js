function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Close the dropdown if clicked outside of it
window.onclick = function(event) {
    if (!event.target.matches('.language-select-icon') && !event.target.matches('.dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none'; // Hide the dropdown if clicked outside
        });
    }
}

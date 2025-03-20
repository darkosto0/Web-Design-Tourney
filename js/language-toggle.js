function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
};

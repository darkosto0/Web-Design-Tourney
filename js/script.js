function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function animateOnScroll() {
        const statsSection = document.querySelector('.stats');
        let animated = false;
    
        function isInViewport() {
            const rect = statsSection.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
        }
    
        function onScroll() {
            if (isInViewport() && !animated) {
                animateValue("stat-year", 0, 2017, 3000);
                animateValue("stat-clients", 0, 754, 3000);
                animateValue("stat-projects", 0, 120, 3000);
                animateValue("stat-team", 0, 4, 3000);
                animated = true;
                window.removeEventListener('scroll', onScroll);
            }
        }
    
        window.addEventListener('scroll', onScroll);
    }
    
    animateOnScroll();
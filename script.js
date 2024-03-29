function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addInViewClass() {
    const sections = document.querySelectorAll('header, section, footer');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('in-view');
        }
    });
}


addInViewClass();


window.addEventListener('scroll', addInViewClass);
window.addEventListener('resize', addInViewClass);

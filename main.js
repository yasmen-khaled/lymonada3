const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Correctly add 'show' class
        } else {
            entry.target.classList.remove('show'); // Correctly remove 'show' class
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .timeline ');
hiddenElements.forEach((el) => observer.observe(el));



const scrollUp = () => {
    window.scrollBy({ top: -200, behavior: 'smooth' });
};

const scrollDown = () => {
    window.scrollBy({ top: 200, behavior: 'smooth' });
};



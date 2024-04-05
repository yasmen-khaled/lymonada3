// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the 'animate-timeline' class to start the animation
            document.querySelector('.timeline').classList.add('animate-timeline');
        }
    });
}, {
    threshold: 0.5 // Adjust this value as needed
});

// Select all the images within the hidden sections to observe
const images = document.querySelectorAll('.hidden .story-image img, .hidden2 .story-image2 img');
images.forEach(img => {
    observer.observe(img);
});

document.addEventListener('DOMContentLoaded', function() {
    var text = document.querySelector('.des').textContent;
    var container = document.querySelector('.des');
    container.textContent = '';

    for (var i = 0; i < text.length; i++) {
      setTimeout(function(i) {
        container.textContent += text[i];
      }, i * 100); // Adjust the delay as needed
    }
 });
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselTrack = document.querySelector('.carousel-track');


    // Function to handle "Next" button click
    nextBtn.addEventListener('click', () => {
        // Scroll the carousel track to the next position
        carouselTrack.scrollBy({
            left: carouselTrack.clientWidth, // Scroll one item width
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });

    // Function to handle "Previous" button click
    prevBtn.addEventListener('click', () => {
        // Scroll the carousel track to the previous position
        carouselTrack.scrollBy({
            left: -carouselTrack.clientWidth, // Scroll one item width backwards
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});

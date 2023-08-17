// scripts/scripts.js
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelector('.carousel-slide');


let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = carouselSlides.length - 1;
    } else if (index >= carouselSlides.length){
        index = 0;
    }


    const offset = -index * 100;
    carouselContainer.style.transform = 'translateX(${offset}%)';
    currentIndex = index;
}


setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            projects.forEach(project => {
                if (filterValue === 'all' || project.classList.contains(filterValue)){
                    project.style.display ='block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

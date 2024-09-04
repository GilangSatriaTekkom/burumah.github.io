console.log('testing js')

let navigation = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navigation.classList.add('shadow-lg');
        navigation.classList.add('bg-white');
    } else {
        navigation.classList.remove('shadow-lg');
        navigation.classList.remove('bg-white');
    }
})

// Add active class to the current button (highlight it)
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#navActive li');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all items
            items.forEach(i => i.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            this.classList.add('active');
        });
    });
});

const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('opacity-100');
                item.classList.remove('opacity-0');
            } else {
                item.classList.add('opacity-0');
                item.classList.remove('opacity-100');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    setInterval(nextSlide, 3000);

    showSlide(currentIndex);


console.log('testing js')

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-costum',
    prevEl: '.swiper-button-prev-costum',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


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




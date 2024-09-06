
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



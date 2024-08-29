console.log('testing js')


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
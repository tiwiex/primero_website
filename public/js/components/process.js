document.addEventListener('DOMContentLoaded', function() {
    const processItems = document.querySelectorAll('.process-item');
    
    // Initial check for items in viewport
    checkProcessItems();
    
    // Check items on scroll
    window.addEventListener('scroll', checkProcessItems);
    
    function checkProcessItems() {
        processItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8 && itemBottom > 0) {
                item.classList.add('active');
            }
        });
    }
}); 
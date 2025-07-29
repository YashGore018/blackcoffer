// Food Delivery App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initializeApp();
});

function initializeApp() {
    // Add event listeners
    addEventListeners();
    
    // Initialize animations
    initializeAnimations();
}

function addEventListeners() {
    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Simulate going back
            console.log('Going back...');
            // Add your navigation logic here
        });
    }

    // Navigation arrows
    const leftArrow = document.querySelector('.nav-arrow-left');
    const rightArrow = document.querySelector('.nav-arrow-right');
    
    if (leftArrow) {
        leftArrow.addEventListener('click', function() {
            // Simulate previous item
            console.log('Previous item...');
            // Add your navigation logic here
        });
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', function() {
            // Simulate next item
            console.log('Next item...');
            // Add your navigation logic here
        });
    }

    // Size option selection
    const sizeRadios = document.querySelectorAll('.size-radio');
    sizeRadios.forEach(radio => {
        radio.addEventListener('click', function() {
            // Remove active state from all radios
            sizeRadios.forEach(r => {
                r.querySelector('i').style.color = 'transparent';
            });
            
            // Add active state to clicked radio
            this.querySelector('i').style.color = '#ff6b35';
            
            console.log('Size selected');
        });
    });

    // Add button functionality
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            // Simulate adding item to cart
            this.textContent = 'Added!';
            this.style.background = '#4caf50';
            
            setTimeout(() => {
                this.textContent = 'Add';
                this.style.background = '#ff6b35';
            }, 1500);
            
            console.log('Item added to cart');
        });
    }

    // Order status click
    const orderStatus = document.querySelector('.order-status');
    if (orderStatus) {
        orderStatus.addEventListener('click', function() {
            // Simulate going to cart
            console.log('Going to cart...');
            // Add your navigation logic here
        });
    }

    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            console.log('Navigation item clicked:', this.querySelector('span').textContent);
        });
    });

    // Notification bell
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            // Simulate opening notifications
            console.log('Opening notifications...');
            
            // Add animation to notification dot
            const dot = this.querySelector('.notification-dot');
            if (dot) {
                dot.style.animation = 'bounce 0.5s ease-in-out';
                setTimeout(() => {
                    dot.style.animation = '';
                }, 500);
            }
        });
    }

    // Menu icon
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            // Simulate opening menu
            console.log('Opening menu...');
            
            // Add rotation animation
            this.style.transform = 'rotate(90deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
}

function initializeAnimations() {
    // Add entrance animations
    const elements = document.querySelectorAll('.food-details > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add hover effects to interactive elements
    addHoverEffects();
}

function addHoverEffects() {
    // Add bounce effect to buttons
    const buttons = document.querySelectorAll('.add-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add glow effect to rating stars
    const ratingStars = document.querySelectorAll('.rating i');
    ratingStars.forEach(star => {
        star.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px #ffd700';
        });
        
        star.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// Utility functions
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#4caf50' : '#ff6b35',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add some interactive features
function simulateOrderTracking() {
    const statusMessages = [
        "Your order is being prepared...",
        "Chef is cooking your delicious meal...",
        "Order is ready for pickup!",
        "Delivery partner is on the way...",
        "Order delivered successfully!"
    ];
    
    let currentStatus = 0;
    const statusText = document.querySelector('.status-text span');
    
    const interval = setInterval(() => {
        if (currentStatus < statusMessages.length) {
            statusText.textContent = statusMessages[currentStatus];
            currentStatus++;
        } else {
            clearInterval(interval);
        }
    }, 3000);
}

// Initialize order tracking simulation after 5 seconds
setTimeout(simulateOrderTracking, 5000);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            document.querySelector('.nav-arrow-left')?.click();
            break;
        case 'ArrowRight':
            document.querySelector('.nav-arrow-right')?.click();
            break;
        case 'Enter':
            document.querySelector('.add-btn')?.click();
            break;
        case 'Escape':
            document.querySelector('.back-btn')?.click();
            break;
    }
});

// Add touch gestures for mobile
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    // Swipe left (next item)
    if (deltaX < -50 && Math.abs(deltaY) < 100) {
        document.querySelector('.nav-arrow-right')?.click();
    }
    
    // Swipe right (previous item)
    if (deltaX > 50 && Math.abs(deltaY) < 100) {
        document.querySelector('.nav-arrow-left')?.click();
    }
});

console.log('Food Delivery App JavaScript loaded successfully!');
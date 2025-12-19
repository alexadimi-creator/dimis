// DOM Elements
const loading = document.getElementById('loading');
const mainContent = document.getElementById('mainContent');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicSelect = document.getElementById('musicSelect');
const photoModal = document.getElementById('photoModal');
const letterModal = document.getElementById('letterModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const letterTitle = document.getElementById('letterTitle');
const letterText = document.getElementById('letterText');

// Loading Animation
window.addEventListener('load', function() {
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            mainContent.classList.add('show');
            startFloatingHearts();
        }, 500);
    }, 2000);
});

// Music Control
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Putar Musik</span>';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i><span>Jeda Musik</span>';
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
});

musicSelect.addEventListener('change', function() {
    const selectedMusic = this.value;
    backgroundMusic.src = selectedMusic;
    if (isPlaying) {
        backgroundMusic.play();
    }
});

// Photo Modal Functions
function openModal(element) {
    const img = element.querySelector('img');
    const alt = img.getAttribute('alt');
    
    modalImage.src = img.src;
    modalImage.alt = alt;
    modalCaption.innerHTML = alt;
    photoModal.style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        modalImage.style.transform = 'scale(1)';
    }, 10);
}

function closeModal() {
    photoModal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === photoModal) {
        closeModal();
    }
    if (event.target === letterModal) {
        closeLetterModal();
    }
});

// Letter Modal Functions
const letters = {
    1: {
        title: "Surat Pertama",
        content: `
            <p><strong>Hai Sayang,</strong></p>
            <p>Ketika aku pertama kali bertemu denganmu, aku merasa dunia tiba-tiba menjadi lebih berwarna. Mata kamu yang indah dan senyumanmu yang tulus membuat hatiku berdebar-debar seperti sedang listen musik favoritku.</p>
            <p>Kamu datang seperti mimpi yang indah, tapi ternyata kamu nyata dan bahkan lebih menakjubkan dari mimpi manapun. Setiap hari bersamamu adalah petualangan baru yang aku tunggu-tunggu.</p>
            <p>Terima kasih sudah membuat hidupku jauh lebih indah dari yang pernah aku bayangkan. Kamu adalah alasan aku percaya pada cinta sejati.</p>
            <p><em>Dengan cinta yang tak terbatas,<br>Untukmu selalu 💕</em></p>
        `
    },
    2: {
        title: "Surat Kedua",
        content: `
            <p><strong>Hai Cintaku,</strong></p>
            <p>Kamu yang membuat hari-hariku berwarna seperti pelangi setelah hujan. Setiap senyumanmu mampu menghibur ku di hari yang berat, dan setiap pelukanmu membuatku merasa aman di dunia yang penuh ketidakpastian ini.</p>
            <p>Ketika kamu tertawa, dunia seolah berhenti dan hanya ada kita berdua. Ketika kamu menangis, hatiku juga ikut terharu ingin memelukmu dan melindungimu dari segala kesulitan.</p>
            <p>Kamu telah mengajariku arti sebenarnya dari cinta - bukan hanya perasaan, tapi juga tindakan, pengorbanan, dan kesetiaan. Bersama kamu, aku merasa menjadi versi terbaik dari diriku.</p>
            <p><strong>Terima kasih sudah memilihku untuk menjadi bagian dalam hidupmu.</strong></p>
            <p><em>Selamanya untukmu,<br>Percintaanmu abadi 💖</em></p>
        `
    },
    3: {
        title: "Surat Ketiga",
        content: `
            <p><strong>Hai My Future Wife,</strong></p>
            <p>Masa depan yang ingin aku capai bersamamu tidak terbatas hanya pada mimpi. Aku melihat kita sudah memiliki rumah yang hangat, dengan anak-anak kecil yang lucu bermain di halaman, dan kita masih saling mengobrol hingga larut malam seperti sekarang.</p>
            <p>Aku ingin kita Travel ke berbagai negara, mencoba makanan baru, belajar bahasa baru, dan menciptakan kenangan indah di setiap tempat yang kita kunjungi. Aku ingin kita Age Together - menjadi tua bersama dengan senyuman yang masih sama indahnya.</p>
            <p>Pada hari special kita, aku ingin kamu menjadi My Queen yang selalu aku hormati dan protect. Dan aku berjanji akan selalu menjadi Husband yang love you unconditionally, support you dalam setiap langkah, dan never stop showing you how much you mean to me.</p>
            <p>Kamu adalah everything that I have ever dreamed of and more. I promise to love you today, tomorrow, and always.</p>
            <p><em>Forever and always your future husband,<br>Love you more than words can say 💗</em></p>
        `
    }
};

function openLetter(letterNumber) {
    const letter = letters[letterNumber];
    letterTitle.textContent = letter.title;
    letterText.innerHTML = letter.content;
    letterModal.style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        const modalContent = letterModal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(1)';
    }, 10);
}

function closeLetterModal() {
    letterModal.style.display = 'none';
}

// Floating Hearts Animation
function startFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        createFloatingHeart();
    }, 3000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = ['💕', '❤️', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.className = 'floating-heart';
    
    // Random position and properties
    const startX = Math.random() * window.innerWidth;
    const animationDuration = 8 + Math.random() * 4; // 8-12 seconds
    const delay = Math.random() * 2;
    const fontSize = 15 + Math.random() * 15; // 15-30px
    
    heart.style.cssText = `
        position: fixed;
        left: ${startX}px;
        bottom: -50px;
        font-size: ${fontSize}px;
        color: #ff69b4;
        opacity: 0.7;
        pointer-events: none;
        z-index: 1;
        animation: floatUp ${animationDuration}s ${delay}s infinite linear;
        transform: rotate(${Math.random() * 360}deg);
    `;
    
    // Add CSS animation
    if (!document.querySelector('#floating-heart-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-heart-styles';
        style.textContent = `
            @keyframes floatUp {
                from {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.7;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                to {
                    transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, (animationDuration + delay) * 1000);
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const photoFrame = document.querySelector('.photo-frame');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (photoFrame) {
        photoFrame.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add hover effects to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Add click effect to letter cards
document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Add typing effect to main title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Trigger typing effect when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const title = document.querySelector('.title');
        if (title) {
            typeWriter(title, 'From Alexa♡', 150);
        }
    }, 2500);
});

// Add random sparkle effects
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.className = 'sparkle';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = 10 + Math.random() * 20;
    
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${size}px;
        opacity: 0;
        pointer-events: none;
        z-index: 1;
        animation: sparkleAnimation 3s ease-in-out infinite;
    `;
    
    // Add sparkle animation
    if (!document.querySelector('#sparkle-styles')) {
        const style = document.createElement('style');
        style.id = 'sparkle-styles';
        style.textContent = `
            @keyframes sparkleAnimation {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 3000);
}

// Create sparkles periodically
setInterval(createSparkle, 5000);

// Add love calculator (fun interactive element)
function addLoveCalculator() {
    const loveSection = document.createElement('section');
    loveSection.className = 'love-calculator';
    loveSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Love Meter</h2>
            <div class="calculator-content">
                <p>Masukkan nama kita untuk melihat tingkat cinta kita!</p>
                <div class="input-group">
                    <input type="text" id="name1" placeholder="Nama kamu" maxlength="20">
                    <span class="heart-separator">❤️</span>
                    <input type="text" id="name2" placeholder="Nama pasangan" maxlength="20">
                </div>
                <button onclick="calculateLove()" class="love-btn">Hitung Cinta Kita 💕</button>
                <div id="love-result" class="love-result"></div>
            </div>
        </div>

    

        



    `;
    
    // Add to DOM before footer
    const footer = document.querySelector('.footer');
    footer.parentNode.insertBefore(loveSection, footer);
}

function calculateLove() {
    const name1 = document.getElementById('name1').value || 'Kamu';
    const name2 = document.getElementById('name2').value || 'Aku';
    const result = document.getElementById('love-result');
    
    if (!name1.trim() || !name2.trim()) {
        result.innerHTML = '<p class="error">Mohon masukkan kedua nama 💕</p>';
        return;
    }
    
    // Simple love calculation based on names
    const combinedNames = (name1 + name2).toLowerCase();
    const lovePercentage = Math.min(100, Math.max(10, 
        (combinedNames.charCodeAt(0) + combinedNames.length * 7) % 91 + 10));
    
    result.innerHTML = `
        <div class="love-percentage">
            <h3>${lovePercentage}%</h3>
            <div class="love-bar">
                <div class="love-fill" style="width: ${lovePercentage}%"></div>
            </div>
            <p class="love-message">${getLoveMessage(lovePercentage)}</p>
            <p class="couple-names">${name1} ❤️ ${name2}</p>
        </div>
    `;
}

function getLoveMessage(percentage) {
    if (percentage >= 95) return "Perfect Match! Kalian memang ditakdirkan bersama! 💖";
    if (percentage >= 85) return "Amazing Love! Cinta yang luar biasa! 💕";
    if (percentage >= 75) return "Strong Love! Hubungan yang sangat solid! 💗";
    if (percentage >= 65) return "Great Love! Ada chemistry yang bagus! 💝";
    if (percentage >= 50) return "Good Love! Hubungan yang promise! 💓";
    return "Sweet Love! Dimulai dari sini! 💞";
}

// Initialize love calculator after page load
window.addEventListener('load', function() {
    setTimeout(addLoveCalculator, 3000);
});

// ===== MOBILE OPTIMIZATIONS =====

// Touch and Swipe Gestures for Gallery
let touchStartX = 0;
let touchEndX = 0;
let currentImageIndex = 0;
let galleryImages = [];

function initializeMobileGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryImages = Array.from(galleryItems);
    
    galleryItems.forEach((img, index) => {
        // Add touch event listeners
        img.addEventListener('touchstart', handleTouchStart, { passive: true });
        img.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Add swipe indicators for mobile
        if (window.innerWidth <= 768) {
            img.style.cursor = 'pointer';
        }
    });
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}

function handleSwipeGesture() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            navigateGallery('next');
        } else {
            // Swipe right - previous image
            navigateGallery('prev');
        }
    }
}

function navigateGallery(direction) {
    if (galleryImages.length === 0) return;
    
    const modal = document.getElementById('photoModal');
    if (modal.style.display === 'block') {
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        } else {
            currentImageIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
        }
        
        const modalImg = document.getElementById('modalImage');
        const currentImg = galleryImages[currentImageIndex];
        modalImg.src = currentImg.src;
        modalImg.alt = currentImg.alt;
    }
}

// Mobile-optimized modal controls
function setupMobileModalControls() {
    const modal = document.getElementById('photoModal');
    const letterModal = document.getElementById('letterModal');
    
    // Add swipe to close for photo modal
    if (modal) {
        let modalTouchStartY = 0;
        let modalTouchEndY = 0;
        
        modal.addEventListener('touchstart', (e) => {
            modalTouchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        modal.addEventListener('touchend', (e) => {
            modalTouchEndY = e.changedTouches[0].screenY;
            const diff = modalTouchStartY - modalTouchEndY;
            
            // Swipe down to close modal
            if (diff < -100) {
                closeModal();
            }
        }, { passive: true });
    }
}

// Mobile keyboard handling for love calculator
function setupMobileKeyboardHandling() {
    const inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        // Handle Enter key on mobile
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (this.id === 'name1') {
                    document.getElementById('name2').focus();
                } else if (this.id === 'name2') {
                    calculateLove();
                }
            }
        });
        
        // Prevent zoom on focus for iOS
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                this.style.fontSize = '16px';
            }
        });
    });
}

// Mobile performance optimizations
function optimizeForMobile() {
    // Reduce floating hearts on mobile for performance
    if (window.innerWidth <= 768) {
        const floatingHearts = document.querySelector('.floating-hearts');
        if (floatingHearts) {
            // Keep only 2 hearts instead of 5
            const hearts = floatingHearts.querySelectorAll('.heart');
            hearts.forEach((heart, index) => {
                if (index > 1) {
                    heart.style.display = 'none';
                }
            });
        }
    }
    
    // Optimize animations for mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .photo-frame-decoration {
                animation-duration: 15s !important;
            }
            .heart-loader {
                animation-duration: 2s !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Mobile viewport handling
function handleMobileViewport() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 500);
    });
}

// Mobile-specific loading optimizations
function optimizeLoadingForMobile() {
    // Lazy load images for mobile
    if ('IntersectionObserver' in window && window.innerWidth <= 768) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Mobile touch feedback
function addTouchFeedback() {
    const touchElements = document.querySelectorAll('.gallery-item, .letter, .music-btn, .close');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
        }, { passive: true });
        
        element.addEventListener('touchcancel', function() {
            this.style.opacity = '1';
        }, { passive: true });
    });
}

// Initialize mobile optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are loaded
    setTimeout(() => {
        initializeMobileGallery();
        setupMobileModalControls();
        setupMobileKeyboardHandling();
        optimizeForMobile();
        handleMobileViewport();
        optimizeLoadingForMobile();
        addTouchFeedback();
    }, 1000);
});

// Enhanced keyboard navigation for mobile
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('photoModal');
    if (modal.style.display === 'block') {
        switch(e.key) {
            case 'ArrowLeft':
                navigateGallery('prev');
                break;
            case 'ArrowRight':
                navigateGallery('next');
                break;
            case 'Escape':
                closeModal();
                break;
        }
    }
});

// Prevent context menu on mobile for better UX
document.addEventListener('contextmenu', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
    }
});

// Mobile-specific scroll optimizations
let ticking = false;

function updateScrollPosition() {
    // Handle scroll-based animations for mobile
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const photoFrame = document.querySelector('.photo-frame');
    
    if (window.innerWidth <= 768) {
        // Reduced parallax effect for mobile performance
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        if (photoFrame) {
            photoFrame.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    }
    
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);

// Enhanced mobile modal image navigation
function setupImageNavigation() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;
    
    // Add navigation arrows for mobile
    const navHTML = `
        <div class="mobile-nav-arrows" style="
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            pointer-events: none;
            z-index: 2001;
        ">
            <button id="prevImage" style="
                background: rgba(255,255,255,0.3);
                border: none;
                color: white;
                font-size: 24px;
                padding: 10px 15px;
                border-radius: 50%;
                pointer-events: auto;
                touch-action: manipulation;
            ">‹</button>
            <button id="nextImage" style="
                background: rgba(255,255,255,0.3);
                border: none;
                color: white;
                font-size: 24px;
                padding: 10px 15px;
                border-radius: 50%;
                pointer-events: auto;
                touch-action: manipulation;
            ">›</button>
        </div>
    `;
    
    // Only add arrows on mobile
    if (window.innerWidth <= 768) {
        modal.insertAdjacentHTML('beforeend', navHTML);
        
        document.getElementById('prevImage').addEventListener('click', () => navigateGallery('prev'));
        document.getElementById('nextImage').addEventListener('click', () => navigateGallery('next'));
    }
}

// Initialize mobile navigation when modal opens
const originalOpenModal = window.openModal;
window.openModal = function(element) {
    if (originalOpenModal) {
        originalOpenModal(element);
    }
    
    // Update current image index
    const img = element.querySelector('img');
    currentImageIndex = galleryImages.findIndex(galleryImg => galleryImg.src === img.src);
    
    // Setup mobile navigation
    setTimeout(setupImageNavigation, 100);
};

const box = document.getElementById('love meter');

// Mengubah properti satu per satu
box.style.backgroundColor = 'blue';
box.style.marginTop = '20px'; // Gunakan camelCase (bukan margin-top)
box.style.borderRadius = '10px';
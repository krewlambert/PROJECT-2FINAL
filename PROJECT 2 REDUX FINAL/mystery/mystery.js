// All album links
const mysteryLinks = [
    'https://www.youtube.com/watch?v=cAfute5lEzs&list=RDcAfute5lEzs&start_radio=1',
    'https://www.youtube.com/watch?v=4SxWmN2GkAI&list=RD4SxWmN2GkAI&start_radio=1',
    'https://www.youtube.com/watch?v=ETCsm2z9lMc&list=PLLmkHoXYRikar9ehMYk2czWozRRu4q0zf&index=10',
    'https://www.youtube.com/watch?v=EHDD83EL4eQ&list=PL04ostiY-OwsK7vqyOxfB2Eatnc14sH2F&index=28',
    'https://www.youtube.com/watch?v=ifb81eQ87sw&list=PL04ostiY-OwsK7vqyOxfB2Eatnc14sH2F&index=41',
    'https://www.youtube.com/watch?v=eB1J4o2vT5s&list=RDeB1J4o2vT5s&start_radio=1',
    'https://www.youtube.com/watch?v=DSCIQPOiJ8A&list=RDDSCIQPOiJ8A&start_radio=1',
    'https://www.youtube.com/watch?v=cgT5Kjb9LgE&list=RDcgT5Kjb9LgE&start_radio=1',
    'https://www.youtube.com/watch?v=tv-vAUAu_aU',
    'https://www.youtube.com/watch?v=rQb8w6M8Y-4&list=RDrQb8w6M8Y-4&start_radio=1',
    'https://www.youtube.com/watch?v=KM6E68igzeU&list=PLL7mZiJa208xY4ExObxTk7en3qRi3gdhL&index=86',
    'https://www.youtube.com/watch?v=RaOxGl2b9Ag&list=PLL7mZiJa208xY4ExObxTk7en3qRi3gdhL&index=87',
    'https://www.youtube.com/watch?v=QjXHis5TBOA&list=PLL7mZiJa208xY4ExObxTk7en3qRi3gdhL&index=108',
    'https://www.youtube.com/watch?v=8ZCacF3_mww&list=PLL7mZiJa208xY4ExObxTk7en3qRi3gdhL&index=160'
];

// Shuffle array function
function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle links on page load
const shuffledLinks = shuffle(mysteryLinks);
let currentIndex = 0;

// Get elements
const linkElement = document.getElementById('mystery-link');
const nextBtn = document.getElementById('next-btn');

// Set initial link
linkElement.href = shuffledLinks[currentIndex];

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % shuffledLinks.length;
    linkElement.href = shuffledLinks[currentIndex];
    
    // Animation
    linkElement.style.opacity = '0';
    linkElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        linkElement.style.opacity = '0.6';
        linkElement.style.transform = 'translateY(0)';
    }, 200);
});
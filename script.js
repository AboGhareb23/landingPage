// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counters Animation
let countersStarted = false;
window.addEventListener('scroll', () => {
    const countersSection = document.getElementById('counters');
    const position = countersSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (position < screenPosition && !countersStarted) {
        startCounters();
        countersStarted = true;
    }
});

function startCounters() {
    const counters = [
        { id: 'counter1', max: 1500 },
        { id: 'counter2', max: 3200 },
        { id: 'counter3', max: 10 }
    ];

    counters.forEach(counter => {
        let count = 0;
        const element = document.getElementById(counter.id);
        const interval = setInterval(() => {
            element.innerText = count;
            if (count >= counter.max) {
                clearInterval(interval);
            }
            count += Math.ceil(counter.max / 100);
        }, 30);
    });
}

// Subscription Form
const form = document.getElementById('subscription-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    successMessage.style.display = 'block';
});

// Map Initialization (يمكنك استخدام خرائط Google API)
function initMap() {
    const mapElement = document.getElementById('map');
    // Example of a map initialization, replace with your API.
    mapElement.innerHTML = '<p>خريطة تفاعلية</p>';
}

window.onload = initMap;

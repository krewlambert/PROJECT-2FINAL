const buttons      = document.querySelectorAll('nav button[data-category]');
const shuffleBtn   = document.getElementById('shuffle');
const organizedBtn = document.getElementById('organized');
const grid         = document.getElementById('grid');
const items        = document.querySelectorAll('.item');

let isOrganized = false;


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.category;
        items.forEach(item => {
            if (cat === 'all' || item.dataset.cat === cat) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});


shuffleBtn.addEventListener('click', () => {
    if (isOrganized) return; // Don't shuffle in organized mode
    
    const visible = Array.from(items).filter(i => !i.classList.contains('hidden'));
    visible.forEach(item => {
        const x = Math.floor(Math.random() * 74) + 2;
        const y = Math.floor(Math.random() * 900) + 40;
        item.style.setProperty('--x', x + '%');
        item.style.setProperty('--y', y + 'px');
    });
});


organizedBtn.addEventListener('click', () => {
    isOrganized = !isOrganized;
    
    if (isOrganized) {
        grid.classList.add('organized');
        organizedBtn.classList.add('active');
        organizedBtn.textContent = '↺ shuffle view';
        shuffleBtn.style.opacity = '0.3';
        shuffleBtn.style.pointerEvents = 'none';
    } else {
        grid.classList.remove('organized');
        organizedBtn.classList.remove('active');
        organizedBtn.textContent = 'organized view';
        shuffleBtn.style.opacity = '1';
        shuffleBtn.style.pointerEvents = 'auto';
    }
});
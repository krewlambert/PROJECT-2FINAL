const buttons    = document.querySelectorAll('nav button[data-category]');
const shuffleBtn = document.getElementById('shuffle');
const items      = document.querySelectorAll('.item');

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
    const visible = Array.from(items).filter(i => !i.classList.contains('hidden'));
    visible.forEach(item => {
        const x = Math.floor(Math.random() * 74) + 2;
        const y = Math.floor(Math.random() * 900) + 40;
        item.style.setProperty('--x', x + '%');
        item.style.setProperty('--y', y + 'px');
    });
});
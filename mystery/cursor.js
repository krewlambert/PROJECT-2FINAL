// Create cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.innerHTML = '<img src="caterpillar96_128.png" alt="cursor">';
document.body.appendChild(cursor);

// Track mouse position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 4) + 'px';
    cursor.style.top = (e.clientY - 4) + 'px';
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
});

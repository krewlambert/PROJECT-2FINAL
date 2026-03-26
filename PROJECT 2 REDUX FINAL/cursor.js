// Create cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.innerHTML = '<img src="cursor-pin_1_128x128.png" alt="cursor">';
document.body.appendChild(cursor);

// Track mouse position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 8) + 'px';
    cursor.style.top = (e.clientY - 8) + 'px';
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
});

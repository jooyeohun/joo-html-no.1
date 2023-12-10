const toggleBtn = document.querySelector('.navvar__toggleBtn');
const menu =  document.querySelector('.navvar__menu');
const icons =  document.querySelector('.navvar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


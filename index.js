const menuContent = document.getElementById('navbarMenu');
const toggleMenu = document.querySelector('.toggle-icon');

toggleMenu.addEventListener('click', ()=> {
    menuContent.classList.toggle('hidden');
})


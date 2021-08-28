let openSidebar = document.querySelector('.menu');
let closeSidebar = document.querySelector('.close');
let sidebar = document.querySelector('.sidebar');

openSidebar.addEventListener('click', () => {
    sidebar.classList.add('active');
});
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
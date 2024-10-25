const burgerIcon = document.querySelector('.burger-icon');
const sidebar = document.querySelector('.sidebar');

burgerIcon.addEventListener('click', function() {
    sidebar.classList.toggle('show');
    burgerIcon.classList.toggle('clicked');
});
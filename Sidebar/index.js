

const asideBar = document.querySelector('.sidebar');
const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sideBarToggle.addEventListener('click', () => {
    
    var Class = asideBar.classList;
    
    (Class.contains('show-sidebar')) ? Class.remove('show-sidebar') : Class.add('show-sidebar');

});

closeBtn.addEventListener('click' , () => {

    asideBar.classList.remove('show-sidebar');

});
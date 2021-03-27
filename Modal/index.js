

const pop = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
var popup = pop.classList;

openBtn.addEventListener('click', () => {

   if (popup.contains('modal-overlay')) popup.add('open-modal');
   else {
        popup.add('modal-overlay');
        popup.add('open-modal');
   }

});

closeBtn.addEventListener('click', () => {

    if (popup.contains('open-modal')) popup.remove('open-modal');

});


const videoContainer = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');
const preLoad = document.querySelector('.preloader');

btn.addEventListener('click', e => {

    if(btn.classList.contains('slide')){

        btn.classList.remove('slide');
        videoContainer.play();
    }
    else {
        btn.classList.add('slide');
        videoContainer.pause();
    }

});

window.addEventListener('load', () => {

    preLoad.classList.add('hide-preloader');

});
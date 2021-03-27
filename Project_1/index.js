const colors = ["Green","Red","rgba(133,122,200)","#f15025"];

const btn = document.querySelectorAll('button').item(1);
const color = document.querySelector('.color');

btn.addEventListener('click', e => {

    const randNumber = getRandomNumber();
    console.log(getRandomNumber()); 
    document.body.style.backgroundColor = colors[randNumber];
    color.textContent = colors[randNumber];

})

const getRandomNumber = () => parseInt(Math.random() * colors.length); 
const Hex = [
    1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"
];

const btn1 = document.querySelectorAll('button').item(1);
const btn2 = document.querySelectorAll('button').item(2);
const span = document.querySelector('.color');

let actif; 

const getRandomNumber = () => parseInt(Math.random() * Hex.length);

const Start = () => {

    let hexColor = '#';

    for(let i=0 ; i<6 ; i++){
        hexColor += Hex[getRandomNumber()];
    }

    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

}

btn1.addEventListener('click', e => {
    
    actif = setInterval("Start()",1000);
    
});

btn2.addEventListener('click', e => {
    
    clearInterval(actif);
    
});



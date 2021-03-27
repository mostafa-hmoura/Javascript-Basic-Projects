
let count = 0;

const span = document.querySelector('span');
const btn = document.querySelector('div[class^="mt-3"]');

console.log(btn);

btn.addEventListener('click', e => {

    if(e.target.nodeName == "BUTTON" && e.target.textContent == "Decrease"){
            count--;
            span.textContent = count;
    }

    if(e.target.nodeName == "BUTTON" && e.target.textContent == "Reset"){
        count = 0;
        span.textContent = count;   
    }

    if(e.target.nodeName == "BUTTON" && e.target.textContent == "Increase"){
        count++;
        span.textContent = count; 
    }

    if(count == 0) span.setAttribute('style','color: white;');
    if(count > 0) span.setAttribute('style','color: rgb(159, 253, 65);');
    if(count < 0) span.setAttribute('style','color: brown;');

} );


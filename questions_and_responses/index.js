

const button = document.querySelectorAll('button');

button.forEach( btn => {

    btn.addEventListener('click', e => {
        var currentTag = e.currentTarget.parentNode.parentNode;
        currentTag.classList.contains('show-text')
            ? currentTag.classList.remove('show-text') 
            : currentTag.classList.add('show-text');
    });

});



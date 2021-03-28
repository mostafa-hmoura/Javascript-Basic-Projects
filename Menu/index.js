const menu = [
    {
    id: 1,
    title: "SEA-SALT GRAVLAX",
    category: "RUGBY & BULWER",
    price: 10.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 2,
    title: "SALT & SUNFLOWER DRIPPINGS",
    category: "RUGBY & BULWER",
    price: 13.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 3,
    title: "CORN PANINI",
    category: "RUGBY & BULWER",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 4,
    title: "BISON",
    category: "RUGBY & BULWER",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 5,
    title: "WHOLE HAM",
    category: "RUGBY & BULWER",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 6,
    title: "WHOLE HAM",
    category: "RUGBY & BULWER",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 7,
    title: "WHOLE HAM",
    category: "SUMMER ARUGULA",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 8,
    title: "WHOLE HAM",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 9,
    title: "WHOLE HAM",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 10,
    title: "WHOLE HAM",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 11,
    title: "distressed corn",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 12,
    title: "gravlax",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 13,
    title: "vinegar with clam",
    category: "TORMENTED SALT",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 14,
    title: "rounded bluefish",
    category: "COOPER & UNION",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
    {
    id: 15,
    title: "pressed monkfish",
    category: "COOPER & UNION",
    price: 14.99,
    img: "img.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam eaque delectus pariatur, sapiente nostrum!"
    },
];


const section = document.querySelector('.section-center');
const btn = document.querySelectorAll('button');

window.onload = () => {

    addItem(menu);

    btn.forEach( bt => {
        bt.addEventListener('click' , e => {
            addItemFilter(e.currentTarget.innerText,menu);
        });
    });

}

const addItem = (tabItem) => {
    tabItem.map( param => {
        section.innerHTML += `
        <article class="menu-item">
            <img src="https://picsum.photos/500" alt="img" class="photo">
            <div class="item-info">
                <header>
                    <h4>${param.title}</h4>
                    <h4 class="price">${param.price}$</h4>
                </header>
                <p class="item-text">
                    ${param.desc}
                </p>
            </div>
        </article>
        `;
    });
}

// function for filtring

const addItemFilter = (curentBtnText,tab) => {

    let itemHtml = '';
    tab.map( param => {
        if(curentBtnText == 'All') return addItem(menu);
        if(param.category == curentBtnText){
            itemHtml += `
            <article class="menu-item">
            <img src="https://picsum.photos/500" alt="img" class="photo">
            <div class="item-info">
                <header>
                    <h4>${param.title}</h4>
                    <h4 class="price">${param.price}$</h4>
                </header>
                <p class="item-text">
                    ${param.desc}
                </p>
            </div>
        </article>
        `;
        return section.innerHTML = itemHtml;
        }


    })

}
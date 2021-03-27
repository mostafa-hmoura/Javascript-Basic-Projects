
// local data

const users = [
        {
            id: 0,
            name: "Anuel AA",
            job: "Software Developer",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit" 
                +" At repudiandae facilis distinctio ut sit maiores dolorum "
                +"neque. Dolores, exercitationem ullam."    
        },
        {
            id: 1,
            name: "Robin Banks",
            job: "Big data engineer",
            img: "https://randomuser.me/api/portraits/women/74.jpg",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit" 
                  +" At repudiandae facilis distinctio ut sit maiores dolorum "
                  +"neque. Dolores, exercitationem ullam."  
        },
        {
            id: 2,
            name: "Terrence Collins",
            job: "DevOps Engineer.",
            img: "https://randomuser.me/api/portraits/men/83.jpg",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit" 
                  +" At repudiandae facilis distinctio ut sit maiores dolorum "
                  +"neque. Dolores, exercitationem ullam."        
        },
        {
            id: 3,
            name: "Johnny Kim",
            job: "Information systems security manager",
            img: "https://randomuser.me/api/portraits/men/86.jpg",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit" 
                  +" At repudiandae facilis distinctio ut sit maiores dolorum "
                  +"neque. Dolores, exercitationem ullam."        
        },
        {
            id: 4,
            name: "padres",
            job: "Mobile applications developer",
            img: "https://randomuser.me/api/portraits/men/18.jpg",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit" 
                  +" At repudiandae facilis distinctio ut sit maiores dolorum "
                  +"neque. Dolores, exercitationem ullam."        
        }
];



// select items 

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const btn = document.querySelectorAll('button');

// get number betwen a and b
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

// get random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  
// set starting item

let currentItem = 0;

const showItem = (N) =>{
    const item = users[N];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    var back = `color : ${getRandomColor()}`;
    info.setAttribute('style',back)
}


  // onclik on button
const btnClick = (e) => {
    
    if(e == "next-btn"){
        currentItem = (currentItem < 4) ? ++currentItem : 0;
        showItem(currentItem);
    }
    if(e == "prev-btn"){
        currentItem = (currentItem > 0) ? --currentItem : 4;
        showItem(currentItem);
    }
    if(e == "random-btn"){
        do {
            var randomItem = getRandomIntInclusive(1,4);
        } while(currentItem == randomItem);
        currentItem = randomItem;
        showItem(currentItem);
    }
}
// add event listner foreach button
btn.forEach( e => {
    e.addEventListener('click',() => btnClick(e.getAttribute('class')));
});

// load initial 
window.addEventListener('load',() => {
  showItem(currentItem);
});


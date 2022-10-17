//componenti HTML
const slideShow = document.getElementsByClassName('slideshow');
const gallery = document.querySelector('.gallery');
const showItem = document.getElementsByClassName("show-item");
const hideItem = document.getElementsByClassName("hide-item");
const item = document.getElementsByClassName("item");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");
//componenti js
let counter = 0;
let imgTag = '';



//inserire le immagini in un array
const imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
]

//ciclo for per concatenare le immagini in un template literal

for (let i = 0; i < imgsArray.length; i++){
  // template literal per html
  imgTag += `
  <img class="item hide-item" src="../img/${imgsArray[i]}" alt="${imgsArray[i]}">
  `;
  console.log(imgTag);
}

//stampare in html l'immagine


gallery.innerHTML += imgTag;
item[counter].classList.add("show-item");




if (counter === 0){
  btnDown.classList.add("hide-item");
}
btnUp.addEventListener('click', function(){
  item[counter].classList.remove("show-item");
  counter++;
  item[counter].classList.add("show-item");
  btnDown.classList.remove("hide-item");
  if (counter === item.length - 1){
    btnUp.classList.add("hide-item");
  }
})
btnDown.addEventListener('click', function(){
  item[counter].classList.remove("show-item");
  counter--;
  item[counter].classList.add("show-item");
  btnUp.classList.remove("hide-item");
  if (counter === 0){
    btnDown.classList.add("hide-item");
  }
})


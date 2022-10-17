//componenti HTML
const slideShow = document.getElementsByClassName('slideshow');
const gallery = document.querySelector('.gallery');
const showItem = document.getElementsByClassName("show-item");
const hideItem = document.getElementsByClassName("hide-item");
const item = document.getElementsByClassName("item");
//componenti js
let imgTag = '';
let counter = 0;

// template literal per html
// galleryTag = '';

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
  imgTag += `
  <img class="item hide-item" src="../img/${imgsArray[i]}" alt="${imgsArray[i]}">
  `;
  console.log(imgTag);
}

//stampare in html l'immagine

console.log(item);
// item[counter].classList.remove("hide-item");
gallery.innerHTML += imgTag;
item[0].classList.add("show-item");

// console.log(imgTag);


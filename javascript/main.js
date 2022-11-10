const imagesList = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg",
];

const mainImgContainer = document.querySelector(".main-img-container");
const btnNext = document.getElementById("btn_next");
const btnPrev = document.getElementById("btn_prev");

let currentImgIndex = 0;

const imgsElList = [];

for (let i = 0; i < imagesList.length; i++) {
    const currentImg = imagesList[i];
    const imgEl = document.createElement("img");
    imgEl.src = currentImg;
    imgEl.classList.add("img-fluid", "da-js");

    if (i === currentImgIndex) {
        imgEl.classList.add("active");
    }

    imgsElList.push( imgEl );
    mainImgContainer.append(imgEl);
}


btnNext.addEventListener("click", function () {
    currentImgIndex++;
    const lastAvailableIndex = imagesList.length - 1;
    if ( currentImgIndex > lastAvailableIndex ) {
        currentImgIndex = 0;
    }
    const oldActiveEl = mainImgContainer.querySelector(".active");
    oldActiveEl.classList.remove("active");
    const imgElements = mainImgContainer.querySelectorAll("img");
    const newActiveEl = imgElements[currentImgIndex];
    newActiveEl.classList.add("active");

}); 
btnPrev.addEventListener("click", function () {
    currentImgIndex--;
    if ( currentImgIndex < 0 ) {
        currentImgIndex = 4;
    }
    const oldActiveEl = mainImgContainer.querySelector(".active");
    oldActiveEl.classList.remove("active");
    const imgElements = mainImgContainer.querySelectorAll("img");
    const newActiveEl = imgElements[currentImgIndex];
    newActiveEl.classList.add("active");
}); 
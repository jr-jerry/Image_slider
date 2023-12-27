const slider=document.querySelector('.slider-container');

const slides=document.querySelectorAll('.slide')

let slideIndex=0;

const nextBtn=document.querySelector('.nxt-btn');

const preBtn=document.querySelector('.prev-btn');

console.log('script start');

function nextSlide(){
    UpdateSlide();
    showSlide(slideIndex);
    console.log("nextslide");
}

function showSlide(index){
    const newTransformValue=-index*100+'%';
    slider.style.transform=`translateX(${newTransformValue})`;
}

// function showPrevSlide(index){
//     const newTransformValue=index*100+'%';
//     slider.style.transform=`translateX(${newTransformValue})`;

// }

function UpdateSlide(){
    slideIndex=(slideIndex<slides.length-1)?slideIndex+1:0;}

function downSlider(){
    slideIndex=(slideIndex>0)?slideIndex-1:2;
}

function prevSlide(){
    downSlider();
    showSlide(slideIndex);
    console.log('Prev slide')
}



nextBtn.addEventListener('click',nextSlide);

preBtn.addEventListener('click',prevSlide);
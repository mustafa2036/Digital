let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-top');
let imageList = Array.from(document.querySelectorAll('.portfolio img'));
let lightContentBox = document.querySelector('.light-content-box');
let lightBox = document.querySelector('.light-box');
let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let currentSlideIndex = 0;

for(let i = 0; i < imageList.length; i++){
    imageList[i].addEventListener('click', (e)=> {
        let srcImg =  e.target.getAttribute("src");
        lightBox.style.background = `url(${srcImg})`;
        currentSlideIndex = imageList.indexOf(e.target);
        lightContentBox.classList.replace('d-none' , 'd-flex');
    })
}

nextBtn.addEventListener('click', () => {
    currentSlideIndex++;
    if(currentSlideIndex == imageList.length){
        currentSlideIndex = 0
    }
    let srcImg = imageList[currentSlideIndex].getAttribute('src');
    lightBox.style.background = `url(${srcImg})`;
})

prevBtn.addEventListener('click', () => {
    currentSlideIndex--;
    if( currentSlideIndex < 0){
        currentSlideIndex = imageList.length - 1;
    }
    let srcImg = imageList[currentSlideIndex].getAttribute('src');
    lightBox.style.background = `url(${srcImg})`;
})

closeBtn.addEventListener("click", () => {
    lightContentBox.classList.replace('d-flex' , 'd-none');
})

window.onscroll = function(){
    if(window.scrollY > 0){
       navbar.classList.add('active');
    }
    else{
        navbar.classList.remove('active');
    }
    if(window.scrollY > 200){
        scrollBar.style.top = '91%';
    }
    else{
        scrollBar.style.top = '-10%';
    }
}
$(document).ready(function () {
    $(".social").click(function () {
        document.querySelector('.title-social').classList.replace('d-none', 'd-block');
        document.querySelector('.title-block').classList.replace('d-none', 'd-block');
        document.querySelector('.title-mobile').classList.replace('d-block', 'd-none');
        document.querySelector('.title-design').classList.replace('d-block', 'd-none');
        document.querySelector('.title-none').classList.replace('d-block', 'd-none');
        $(!this).addClass('active');
    });
    $(".mobile").click(function () {
        document.querySelector('.title-mobile').classList.replace('d-none', 'd-block');
        document.querySelector('.title-none').classList.replace('d-none', 'd-block');
        document.querySelector('.title-social').classList.replace('d-block', 'd-none');
        document.querySelector('.title-design').classList.replace('d-block', 'd-none');
        document.querySelector('.title-block').classList.replace('d-block', 'd-none');
    });
    $(".design").click(function () {
        document.querySelector('.title-design').classList.replace('d-none', 'd-block');
        document.querySelector('.title-block').classList.replace('d-none', 'd-block');
        document.querySelector('.title-social').classList.replace('d-block', 'd-none');
        document.querySelector('.title-mobile').classList.replace('d-block', 'd-none');
        document.querySelector('.title-none').classList.replace('d-block', 'd-none');
    });
});

$(".nav-link").click((e) => {
    $(e.target).css("border-bottom" , '1px solid #fff');
    $(e.target).parent().siblings().children().css("border-bottom" , 'none');
})

anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});

$(document).ready(function () {
    $("#loading .loading-box").fadeOut(5000 , () => {
        $("#loading").fadeOut(2000, () => {
            $("body").css("overflow-y" , 'auto')
        })
    });
});
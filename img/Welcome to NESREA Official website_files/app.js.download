     // SLIDER

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i) {
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();

// MOBILE NAV MENU
const menuIcon = document.getElementById('menu-icon');
const slideOutMenu = document.getElementById('slideout-menu');
const linksContainer = document.querySelector('.slide-nav-links')
const links = document.querySelectorAll('.slide-nav-links li');
const bar = document.getElementById('bar')

menuIcon.addEventListener('click', () => {
    slideOutMenu.classList.toggle('open')
    bar.classList.toggle('rotate')
    if(slideOutMenu.classList.contains('bg-go')){
    slideOutMenu.classList.remove('bg-go')
    }else{ 
    slideOutMenu.classList.add('bg-go')
    }
    linksContainer.classList.toggle('nav-animation')
})
function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

// Service Item Icon Hover Styles
const serviceItem = document.querySelectorAll('.service-item');

for(i = 0; i < serviceItem.length; i++){
    let iconBlock = serviceItem[i]
    iconBlock.addEventListener('mouseenter', () =>{
        iconBlock.firstElementChild.classList.add ('white-bg')
    })
    iconBlock.addEventListener('mouseleave', () =>{
        iconBlock.firstElementChild.classList.remove ('white-bg')
    })
}


// Banner vertical slider
const wrap = document.querySelector('.news ul');
const wrapStuff = document.querySelectorAll('.news ul li');
const interval = 7000;
const slideTime = wrapStuff.length * interval

var vertSlider = function(){
    let go = document.getElementsByClassName('go');
    let i = 1;

    var repeaters = () => {
        setTimeout(function(){
            [...go].forEach((gopart) => {
                gopart.classList.remove('go')
            });
            
            wrap.style.marginTop = -40*i+'px'
            wrapStuff[i].classList.add('go');
            i++
            if(i == wrapStuff.length){
                i = 0
            }
            if(i >= wrapStuff.length){
                return;
            }
            repeaters();
        }, interval)
    }
    repeaters();
}
vertSlider();

// gallery auto-slider
const imgWrap = document.querySelector('.img-wrap')
const images = document.querySelectorAll('.img-wrap img')
const imageItems = images.length
const animationDuration = imageItems * 7 + 's'
const translateX = images.length * -150
const root = document.documentElement

root.style.setProperty("--img-transform", translateX+'px')

for(i=0; i<imageItems; i++){

    imgWrap.appendChild(imgWrap.children[i].cloneNode(true));
    imgWrap.style.animationDuration = animationDuration

}


// FAQ page open and close effect

const faqTitle = document.querySelectorAll('.faq-title')

for(i=0; i<faqTitle.length; i++){
    let ftitle = faqTitle[i]
    ftitle.addEventListener('click', () => {
        ftitle.nextElementSibling.classList.toggle ('ye') 
        ftitle.classList.toggle ('gr')
        // console.log("yes")
    })
}


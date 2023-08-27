let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loopedSlides:4,
    centeredSlides: false,
    spaceBetween: 10,
    grabCursor:false,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        loopedSlides: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10
      },
      675: {
        slidesPerView: 1,
        loopedSlides: 1,
        spaceBetween: 20
      }
    }
});
let swiperInterface = new Swiper('.swiperInterface-container', {
  slidesPerView: 5,
  loopedSlides: 5,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor:false,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
      loopedSlides: 5,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 4,
      loopedSlides: 4,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      loopedSlides: 2,
      spaceBetween: 10
    },
    675: {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 20
    }
  }
});

let swiperC = new Swiper('.swiperC-container', {
  slidesPerView: 10,
  loopedSlides: 10,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor:false,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 10,
      loopedSlides: 10,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 8,
      loopedSlides: 8,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 5,
      loopedSlides: 5,
      spaceBetween: 10
    },
    675: {
      slidesPerView: 3,
      loopedSlides: 3,
      spaceBetween: 20
    }
  }
});
const swiperClick = document.querySelectorAll('.swiper-wrapper')
swiperClick.forEach(function(element){
  element.addEventListener('mousemove' , function(){
    element.style.cursor = 'grab'
  })
})
$(document).ready(function(){
  $('.owl-review').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    dots : false , 
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
})


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center : true , 
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})
});

function goToPlay(){
  window.location.href = 'https://play.google.com/store/apps/details?id=com.edafh.tabebny'
}
function goToapple(){
  window.location.href = 'https://apps.apple.com/eg/app/%D8%AF%D8%A7%D9%85%D8%A7/id1660821638'
}



(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".news_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    navText: [
      '<i class="far fa-long-arrow-left"></i>',
      '<i class="far fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });

  // owlCarousel
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:2000,
    dots: false,
    animateOut: 'fadeIn',
    animateIn: 'fadeOut',
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // owlCarousel
  $(".topRate-slider").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '<i class="far fa-long-arrow-left"></i>',
      '<i class="far fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        nav: false,
    dots: true,
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });




const slider = document.querySelector('.blog_slide');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
 






})(jQuery);

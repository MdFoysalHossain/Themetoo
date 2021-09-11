// MOBILE NAVBAR START
$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });

// MOBILE NAVBAR END



$(function(){
//   $().();

// WINDOWS LOAD START
$(window).load(function() {
	$(".preloader_bg").delay(1000).fadeOut("slow");
  $(".loader").delay(1000).fadeOut("slow");
  $("body").addClass("activate");
})
// WINDOWS LOAD END

// NAVBAR START
$(".nav_close_btn").click(function (e) { 
    $(".collapse").removeClass("open");
    
});


$(window).scroll(function() {
  var height = $(window).scrollTop();
  
  if(height  > 1) {
    $("nav").addClass("active");
    $(".login_btn").addClass("active");
    $(".nav-item").addClass("active");
  }
  else{
    $(".login_btn").removeClass("active");
    $(".nav-item").removeClass("active");
    $("nav").removeClass("active");
  }
});
// NAVBAR END

// CATAGORY START
$('.catagory_wrapper').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 381,
      settings: {
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
    breakpoint: 321,
    settings: {
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }
  },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// CATAGORY END


// RECENT HTML START

$("#load_html_all").click(function (e) { 
  $(".recent_html_post").addClass("d-none");
  $("#load_html_all").addClass("d-none");
  $(".all_html_post").removeClass("d-none");

  $("#show_less_html").removeClass("d-none");
});

$("#show_less_html").click(function (e) { 
  $(".recent_html_post").removeClass("d-none");
  $("#load_html_all").removeClass("d-none");
  $(".all_html_post").addClass("d-none");

  $("#show_less_html").addClass("d-none");
});

$('.recent_html_wrapper').slick({
  infinite: true,
  speed: 300,
  autoplay:true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 381,
      settings: {
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
    breakpoint: 321,
    settings: {
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }
  },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// RECENT HTML END


});
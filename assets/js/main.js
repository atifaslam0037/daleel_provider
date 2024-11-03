/*** Animation on scroll function and init ***/
function aos_init() {
  AOS.init({
    duration: 1000,
    // easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
// window.addEventListener("load", () => {
//   aos_init();
// });
// *** Animation ****/
jQuery(document).ready(function () {
  //  SERvices Slider
  var Service = jQuery("#service-slider");
  if (Service.length) {
    Service.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      pauseOnHover: true,
      cssEase: "linear",
      autoplay: false,
      loop: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  // SERvices Slider
  //  Customer Slider
  var Customer = jQuery("#customer-slider");
  if (Customer.length) {
    Customer.slick({
      dots: false,
      infinite: true,
      speed: 1500,
      pauseOnHover: true,
      cssEase: "ease-in",
      autoplay: false,
      loop: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  // SERvices Slider
  //  manageImgs Slider
  var manageImgs = $("#manage-imgs");
  if (manageImgs.length) {
    manageImgs.slick({
      dots: true,
      infinite: true,
      speed: 700,
      pauseOnHover: true,
      cssEase: "linear",
      autoplay: false,
      loop: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  var manageImgsAr = $("#manage-imgs-ar");
  if (manageImgsAr.length) {
    manageImgsAr.slick({
      dots: true,
      infinite: true,
      speed: 700,
      pauseOnHover: true,
      cssEase: "linear",
      autoplay: false,
      loop: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  // manageImgs Slider
  // input type password icon
  var inputIcon = jQuery(".input-icon");
  inputIcon.click(function () {
    var input = jQuery(this).siblings('.pass-icon');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      jQuery(this).css("filter", "brightness(0)");
    } else {
      input.attr("type", "password");
      jQuery(this).css("filter", "brightness(1)");
    }
  });
  // var inputIcon = jQuery(".input-icon");
  // var input = jQuery("#password");
  // inputIcon.click(function () {
  //   if (input.attr("type") === "password") {
  //     input.attr("type", "text");
  //     inputIcon.css("filter", "brightness(0)");
  //   } else {
  //     input.attr("type", "password");
  //     inputIcon.css("filter", "brightness(1)");
  //   }
  // });
  // input type password icon
  // add multipule image

  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];

    $(".upload__inputfile").each(function () {
      $(this).on("change", function (e) {
        imgWrap = $(this).closest(".upload__box").find("#ManageImages");
        var maxLength = $(this).attr("data-max_length");

        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {
          if (!f.type.match("image.*")) {
            return;
          }

          if (imgArray.length > maxLength) {
            return false;
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);

              var reader = new FileReader();
              reader.onload = function (e) {
                var html =
                  "<div class='manageimages'><div style='background-image: url(" +
                  e.target.result +
                  ")' data-number='" +
                  $(".upload__img-close").length +
                  "' data-file='" +
                  f.name +
                  "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              };
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });

    $("body").on("click", ".upload__img-close", function (e) {
      
      var file = $(this).parent().data("file");
      try{deleteImage(file);}catch(e){}
      
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          // console.log(uploadedImages[i].name)
          imgArray.splice(i, 1);
          uploadedImages.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }
  ImgUpload();
  // add multipule image
  // accordion start
  jQuery(".accordion-btn").on("click", function () {
    var accordionContent = jQuery(this).siblings(".accordion-content");
    var isVisible = accordionContent.is(":visible");
    jQuery(".accordion-btn").removeClass("active");
    jQuery(".box-shadow").find(".accordion-content").slideUp();
    if (!isVisible) {
      accordionContent.slideDown();
      jQuery(this).addClass("active");
    } else {
      jQuery(this).removeClass("active");
    }
  });

  // accordion en
  // service provider sidebar
  $("#dashboard-header .logo").on("click", function (e) {
    e.stopPropagation();
    $(".dashbord-wrapper").toggleClass("show");
  });

  $(document).on("click", function (e) {
    var leftSide = $(".left-side");
    var dashbordWrapper = $(".dashbord-wrapper");

    if (!leftSide.is(e.target) && leftSide.has(e.target).length === 0) {
      dashbordWrapper.removeClass("show");
    }
    jQuery(".dashbord-wrapper").on("mousedown", function (e) {
      e.stopPropagation();
    });
  });
  // service provider sidebar
});

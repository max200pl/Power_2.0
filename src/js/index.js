import "./import/modules";
import $ from "jquery";

$(function () {
     let header = $("#header"),
          introH = $("#intro").outerHeight(),
          scrollOffset = $(window).scrollTop(),
          headerH = $("#header").outerHeight();

     checkScroll(scrollOffset);

     $(window).on("scroll", function () {
          scrollOffset = $(this).scrollTop();
          checkScroll(scrollOffset);
     });

     function checkScroll(scrollOffset) {
          let offsetIntro = headerH;

          if (scrollOffset >= offsetIntro) {
               header.addClass("fix");
               $(".nav__link").css("color", "#fff");
          } else {
               header.removeClass("fix");
               $(".nav__link").css("color", "");
          }
          if (scrollOffset <= headerH) {
               $("#nav__modal").removeClass("show");
          }
     }

     $("[data-scroll]").on("click", function (event) {
          event.preventDefault();

          let $this = $(this),
               blockId = $this.data("scroll"),
               blockOffset = $(blockId).offset().top - headerH;

          $("html, body").animate(
               {
                    scrollTop: blockOffset - 20
               },
               600
          );
     });


});

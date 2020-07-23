import $ from "jquery";

// скрываем сменю при нажати
$(function () {
     $("#button").on("click", function (event) {
          event.preventDefault();
          $("#nav__modal").toggle("1000");

     });
     $("#nav__modal").bind("click", function (e) {
          var target = e.target ? e.target : e.srcElement;
          if ($(target).is(this)) {
               $(this).toggle("800");
          }
     });
})


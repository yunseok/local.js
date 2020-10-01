$("td:nth-child(1)").on("mouseenter", function () {
  $("td:nth-child(2)").removeClass("a");
  $(this).siblings().addClass("a");
});

$(document).on("mouseenter", ".works", function () {
  $(".works").removeClass("hover");
  $("tr").siblings().find(".works").removeClass("active");
  $(this).addClass("hover");
});

$("table").on("mouseleave", function () {
  $(".works").removeClass("hover").removeClass("active");
});

$(".works-item")
  .on("mouseenter", function () {
    $(".works-item").removeClass("hover");
    $(this).addClass("hover");
    $(".works.hover").addClass("active");
  })
  .on("mouseleave", function () {
    $(".works-item").removeClass("hover");
  });

$(".title").on("click", function () {
  $("section").hide();
  $("tr").addClass("a");
  $("table tr").not("tr.b").show();
  $("table tr").show().addClass("a");
  $("tr").addClass("a");
});

// $("td.about").bind("touchstart mousedown", function () {
//   $("table tr").removeClass("a");
//   $(".works").removeClass("hover").removeClass("active");
//   $("td:nth-child(2)").removeClass("a");
//   $("section.about").show();
//   $("table tr").not("tr.b").hide();
// });

$("td.contact").bind("touchstart mousedown", function () {
  $("table tr").removeClass("a");
  $(".works").removeClass("hover").removeClass("active");
  $("td:nth-child(2)").removeClass("a");
  $("section.contact").show();
  $("table tr").not("tr.b").hide();
});

$("td:nth-child(1)").on("mouseenter", function() {
    $("td:nth-child(2)").removeClass("a")
    $(this).siblings().addClass("a")
});

$(document).on("mouseenter", ".levelA", function() {
    $(".levelA").removeClass("hover")
    $("tr").siblings().find(".levelA").removeClass("active");
    $(this).addClass("hover");
});

$("table").on("mouseleave", function() {
    $(".levelA").removeClass("hover").removeClass("active");
});

$(".levelB").on("mouseenter", function() {
    $(".levelB").removeClass("hover");
    $(this).addClass("hover")
    $(".levelA.hover").addClass("active")
}).on("mouseleave", function() {
    $(".levelB").removeClass("hover");
});

$(".title").on("click", function() {
    $("section").hide();
    $("tr").addClass("a");
    $("table tr").not("tr.b").show()
    $("table tr").show().addClass("a")
    $("tr").addClass("a");
});

$("td.about").bind('touchstart mousedown', function() {
    $("table tr").removeClass("a");
    $(".levelA").removeClass("hover").removeClass("active");
    $("td:nth-child(2)").removeClass("a");
    $("section.about").show();
    $("table tr").not("tr.b").hide()
});

$("td.contact").bind('touchstart mousedown', function() {
    $("table tr").removeClass("a");
    $(".levelA").removeClass("hover").removeClass("active");
    $("td:nth-child(2)").removeClass("a");
    $("section.contact").show();
    $("table tr").not("tr.b").hide()
});
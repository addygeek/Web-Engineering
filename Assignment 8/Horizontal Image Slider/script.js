$(document).ready(function () {
    let slider = $(".image-slider");

    $(".next").click(function () {
        slider.animate({ scrollLeft: "+=300" }, 500);
    });

    $(".prev").click(function () {
        slider.animate({ scrollLeft: "-=300" }, 500);
    });
});

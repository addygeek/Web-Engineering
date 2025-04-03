$(document).ready(function () {

    // Toggle visibility with duration
    $("#toggle-btn").click(function () {
        $("#toggle-text").toggle(500); // 500ms duration
    });

    // Slide Up, Slide Down, and Slide Toggle
    $("#slide-toggle-btn").click(function () {
        $("#slide-box").slideToggle(600);
    });

    // Fade In, Fade Out, and Fade Toggle
    $("#fade-toggle-btn").click(function () {
        $("#fade-box").fadeToggle(600);
    });

    // Image Hover Effect
    let images = $(".hover-img");
    let index = 0;

    images.eq(index).addClass("active");

    images.hover(function () {
        images.eq(index).removeClass("active");

        index = (index + 1) % images.length;

        images.eq(index).addClass("active");
    });
});

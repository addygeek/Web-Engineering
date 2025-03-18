// \Image Slides\script.js
$(document).ready(function() {
    var currentIndex = 0;
    var images = $(".slider-content img");
    var totalImages = images.length;

    function showImage(index) {
        images.hide();
        $(images[index]).fadeIn();
    }

    $(".next").click(function() {
        $(images[currentIndex]).fadeOut(function() {
            currentIndex = (currentIndex + 1) % totalImages;
            $(images[currentIndex]).fadeIn();
        });
    });

    $(".prev").click(function() {
        $(images[currentIndex]).fadeOut(function() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            $(images[currentIndex]).fadeIn();
        });
    });

    $(".slide-up").click(function() {
        $(".slider-content").slideUp();
    });

    $(".slide-down").click(function() {
        $(".slider-content").slideDown();
    });

    $(".slide-toggle").click(function() {
        $(".slider-content").slideToggle();
    });

    $(".fade-in").click(function() {
        $(".slider-content").fadeIn();
    });

    $(".fade-out").click(function() {
        $(".slider-content").fadeOut();
    });

    $(".fade-to").click(function() {
        $(".slider-content").fadeTo("slow", 0.5);
    });
    
    $(".fade-from").click(function() {
        $(".slider-content").fadeTo("slow", 1);
    });

    // Initial display
    showImage(currentIndex);
});
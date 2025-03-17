$(document).ready(function () {
    $("#boldBtn").click(function () {
        showBalloon("Bold text applied!", "bold");
    });

    $("#italicBtn").click(function () {
        showBalloon("Italic text applied!", "italic");
    });

    function showBalloon(message, type) {
        let balloon = $("#wordBalloon");
        balloon.text(message);

        // Position the balloon near the clicked button
        let button = type === "bold" ? $("#boldBtn") : $("#italicBtn");
        let offset = button.offset();

        balloon.css({
            top: offset.top - 50 + "px",
            left: offset.left + button.width() / 2 - balloon.width() / 2 + "px",
            display: "block",
            opacity: 1,
            transform: "scale(1)"
        });

        // Apply Bold/Italic effect
        balloon.css("font-weight", type === "bold" ? "bold" : "normal");
        balloon.css("font-style", type === "italic" ? "italic" : "normal");

        // Hide after 2 seconds
        setTimeout(function () {
            balloon.css({
                opacity: 0,
                transform: "scale(0.8)"
            });

            setTimeout(() => balloon.hide(), 300);
        }, 2000);
    }
});

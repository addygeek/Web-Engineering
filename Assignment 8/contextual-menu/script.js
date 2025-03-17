$(document).ready(function () {
    const menu = $("#contextMenu");

    // Show the context menu on right-click
    $(document).on("contextmenu", function (event) {
        event.preventDefault(); // Prevent default right-click behavior

        // Set menu position dynamically
        menu.css({
            top: event.pageY + "px",
            left: event.pageX + "px",
            display: "block"
        });
    });

    // Hide menu when clicking anywhere else
    $(document).on("click", function (event) {
        if (!$(event.target).closest("#contextMenu").length) {
            menu.hide();
        }
    });

    // Show details on hover
    $(".context-menu li").hover(
        function () {
            let infoText = $(this).attr("data-info");
            $(".info-text").text(infoText);
        },
        function () {
            $(".info-text").text("Hover over an item to see details");
        }
    );
});

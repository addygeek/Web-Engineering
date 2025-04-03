$(document).ready(function () {

    // Toggle All Checkboxes
    $("#toggle-checkboxes").click(function (e) {
        e.preventDefault(); // Prevent page jump
        let allChecked = $(".checkbox-item:checked").length === $(".checkbox-item").length;
        $(".checkbox-item").prop("checked", !allChecked);
    });

    // Auto-Tabbing for Serial Number
    $(".serial-input").on("input", function () {
        let maxLength = $(this).attr("maxlength");
        let currentLength = $(this).val().length;

        if (currentLength == maxLength) {
            $(this).next(".serial-input").focus();
        }
    });
});

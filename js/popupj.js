document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    // Show the popup on page load
    popup.style.display = "none";

    // Close the popup when the OK button is clicked
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
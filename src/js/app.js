import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    var product = document.querySelectorAll('.product');
    product.forEach(element => {
        element.setAttribute("data-price", "price");
    });
});
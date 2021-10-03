import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    var product = document.querySelectorAll('.product');
    product.forEach(element => {
        let text = document.querySelector('.price');
        element.setAttribute("data-price", text.innerText);
    });
});
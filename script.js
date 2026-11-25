alert ("press ok to continue");
// Shopping Cart
let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");

const addButtons = document.querySelectorAll(".product-card button");

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        cartCount++;

        cartDisplay.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });
});

// Search Button
const searchButton = document.querySelector(
    '.icon-btn[aria-label="Search"]'
);

searchButton.addEventListener("click", function() {

    let search = prompt("Search for your favorite flowers:");

    if (search && search.trim() !== "") {
        const products = document.querySelectorAll(".product-card");

        let found = false;

        products.forEach(function(product) {
            const name = product.querySelector("h5");

            if (name && name.textContent.toLowerCase()
                .includes(search.toLowerCase())) {

                product.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                found = true;
            }
        });

        if (!found) {
            alert("Sorry! Product not found.");
        }
    }
});

// Category Click
document.querySelectorAll(".category-card").forEach(function(card) {

    card.addEventListener("click", function() {
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    });

});

// Navbar Auto Close on Mobile
document.querySelectorAll(".navbar-nav .nav-link").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbar).hide();
        }

    });

});

// Newsletter Form
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("newsletter-message").textContent =
        "Thank you for subscribing! 🌸";

    newsletterForm.reset();
});

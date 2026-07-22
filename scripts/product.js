document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById("backBtn");
    const wishlistBtn = document.getElementById("wishlistBtn");
    const qtyMinus = document.getElementById("qtyMinus");
    const qtyPlus = document.getElementById("qtyPlus");
    const qtyValue = document.getElementById("qtyValue");
    const priceDisplay = document.getElementById("priceDisplay");
    const addToCartBtn = document.getElementById("addToCartBtn");

    const BASE_PRICE = 49;
    let quantity = 1;

    // Back Button Handler
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
    }

    // Wishlist Heart Toggle
    if (wishlistBtn) {
        wishlistBtn.addEventListener("click", () => {
            wishlistBtn.classList.toggle("liked");
        });
    }

    // Quantity Plus
    if (qtyPlus) {
        qtyPlus.addEventListener("click", () => {
            quantity++;
            updatePriceAndQty();
        });
    }

    // Quantity Minus
    if (qtyMinus) {
        qtyMinus.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                updatePriceAndQty();
            }
        });
    }

    // Update Quantity & Price Display
    function updatePriceAndQty() {
        qtyValue.textContent = quantity;
        const totalPrice = BASE_PRICE * quantity;
        priceDisplay.textContent = `₹${totalPrice}/kg`;
    }

    // Add to Cart Action
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            window.location.href = "cart.html";
        });
    }
});

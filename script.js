// LOADER
setTimeout(() => {
    let loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
}, 1200);

// MENU
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// CART STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// LOAD PRODUCT
function loadProduct() {
    let params = new URLSearchParams(window.location.search);

    document.getElementById("name").innerText = params.get("name");
    document.getElementById("price").innerText = "$" + params.get("price");
    document.getElementById("productImg").src = "images/" + params.get("img");
}

// ADD TO CART
function addToCart() {
    cart.push({
        name: document.getElementById("name").innerText,
        price: parseFloat(document.getElementById("price").innerText.replace("$", ""))
    });

    saveCart();
    alert("Added to cart");
}

// LOAD CART PAGE
function loadCart() {
    let list = document.getElementById("cartItems");
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;
        list.innerHTML += `
            <p>${item.name} - $${item.price}
            <button onclick="removeItem(${i})">X</button></p>
        `;
    });

    document.getElementById("total").innerText =
        "Total: $" + total;
}

// REMOVE ITEM
function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
    loadCart();
}

// STRIPE (replace with your link)
function checkoutStripe() {
    window.location.href = "https://buy.stripe.com/test";
}

// COUNTDOWN
function countdown() {
    let end = new Date().getTime() + 86400000;

    setInterval(() => {
        let now = new Date().getTime();
        let diff = end - now;

        let h = Math.floor(diff / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);

        let el = document.getElementById("countdown");
        if (el) el.innerText = `${h}h ${m}m ${s}s`;
    }, 1000);
}

// RUN PAGE-SPECIFIC
if (window.location.pathname.includes("product")) loadProduct();
if (window.location.pathname.includes("cart")) loadCart();
if (document.getElementById("countdown")) countdown();

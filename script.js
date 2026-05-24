let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("name").innerText = params.get("name");
    document.getElementById("price").innerText = "$" + params.get("price");
}

function addToCart() {
    const name = document.getElementById("name").innerText;
    const price = parseFloat(document.getElementById("price").innerText.replace("$", ""));
    
    cart.push({ name, price });
    saveCart();
    alert("Added to cart");
}

function loadCart() {
    let list = document.getElementById("cartItems");
    if (!list) return;

    let total = 0;
    list.innerHTML = "";

    cart.forEach((item, i) => {
        total += item.price;
        list.innerHTML += `
            <p>${item.name} - $${item.price}
            <button onclick="removeItem(${i})">X</button></p>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
    loadCart();
}

function checkout() {
    alert("Connect Stripe / PayPal next");
}

if (window.location.pathname.includes("product.html")) loadProduct();
if (window.location.pathname.includes("cart.html")) loadCart();
``

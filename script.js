let cart = [];
let current = {};

function openProduct(name, price) {
    current = { name, price };
    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = "$" + price;
    document.getElementById("productPage").classList.add("active");
}

function closeProduct() {
    document.getElementById("productPage").classList.remove("active");
}

function addToCart() {
    cart.push(current);
    updateCart();
    closeProduct();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

function updateCart() {
    let list = document.getElementById("cartItems");
    list.innerHTML = "";

    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;
        list.innerHTML += `
            <p>${item.name} - $${item.price} 
            <button onclick="removeItem(${i})">x</button></p>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
    document.getElementById("cartCount").innerText = cart.length;
}

function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}

function checkout() {
    alert("Next step: connect Stripe or PayPal");
}

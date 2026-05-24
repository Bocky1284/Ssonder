let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalText = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div>
                ${item.name} - $${item.price}
                <button onclick="removeItem(${index})">X</button>
            </div>
        `;
    });

    totalText.innerText = "Total: $" + total;
    cartCount.innerText = cart.length;
}

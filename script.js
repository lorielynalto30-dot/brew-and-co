let cart = [];

// ADD PRODUCT TO CART
function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
    alert(name + " has been added to your cart!");
}

// DISPLAY CART
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <p>₱${item.price} x ${item.quantity}</p>
                </div>

                <div class="cart-controls">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button class="remove-button" onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>

                <strong>₱${subtotal}</strong>
            </div>
        `;
    });

    cartTotal.textContent = total;
}

// CHANGE PRODUCT QUANTITY
function changeQuantity(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}

// REMOVE PRODUCT
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// OPEN CUSTOMER ORDER FORM
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add a product first.");
        return;
    }

    displayOrderSummary();

    document.getElementById("order-form").hidden = false;
    document.getElementById("confirmation").hidden = true;

    document.getElementById("order-form").scrollIntoView({
        behavior: "smooth"
    });
}

// DISPLAY ORDER SUMMARY
function displayOrderSummary() {
    let summary = document.getElementById("form-order-summary");
    let formTotal = document.getElementById("form-total");

    summary.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        summary.innerHTML += `
            <div class="summary-row">
                <span>${item.name} x ${item.quantity}</span>
                <strong>₱${subtotal}</strong>
            </div>
        `;
    });

    formTotal.textContent = total;
}

// CONFIRM CUSTOMER ORDER
document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let customerName = document.getElementById("customer-name").value.trim();
    let contactNumber = document.getElementById("contact-number").value.trim();
    let orderType = document.getElementById("order-type").value;
    let pickupTime = document.getElementById("pickup-time").value;

    if (!customerName || !contactNumber || !orderType || !pickupTime) {
        alert("Please complete all the required fields.");
        return;
    }

    let total = 0;
    let orderDetails = "";

    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        orderDetails += `
            <div class="summary-row">
                <span>${item.name} x ${item.quantity}</span>
                <strong>₱${subtotal}</strong>
            </div>
        `;
    });

    let confirmationMessage = document.getElementById("confirmation-message");

    confirmationMessage.innerHTML = `
        <strong>Order successfully placed!</strong><br><br>

        Thank you, ${customerName}!<br><br>

        <strong>Contact Number:</strong> ${contactNumber}<br>
        <strong>Order Type:</strong> ${orderType}<br>
        <strong>Preferred Pickup Time:</strong> ${pickupTime}<br><br>

        <strong>Your Order:</strong>
        ${orderDetails}

        <hr>
        <h3>Total Amount: ₱${total}</h3>

        <p>Your order has been recorded in this demo website.
        Please wait for the shop's confirmation.</p>
    `;

    document.getElementById("order-form").hidden = true;
    document.getElementById("confirmation").hidden = false;

    cart = [];
    displayCart();

    document.getElementById("customer-form").reset();

    document.getElementById("confirmation").scrollIntoView({
        behavior: "smooth"
    });
});

// CANCEL ORDER
function cancelOrder() {
    document.getElementById("order-form").hidden = true;

    document.getElementById("cart").scrollIntoView({
        behavior: "smooth"
    });
}

// BACK TO MENU
function backToMenu() {
    document.getElementById("confirmation").hidden = true;

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

// INITIAL CART DISPLAY
displayCart();
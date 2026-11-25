// PRODUCT MENU
const products = [
    // COFFEE
    {
        name: "Iced Americano",
        price: 100,
        category: "Coffee",
        description: "Rich espresso with refreshing cold water.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
    },
    {
        name: "Spanish Latte",
        price: 130,
        category: "Coffee",
        description: "Espresso mixed with creamy milk and sweetness.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
    {
        name: "Caramel Macchiato",
        price: 140,
        category: "Coffee",
        description: "Smooth espresso with sweet caramel flavor.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500"
    },
    {
        name: "Cafe Latte",
        price: 120,
        category: "Coffee",
        description: "Classic espresso blended with steamed milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
    {
        name: "Cappuccino",
        price: 125,
        category: "Coffee",
        description: "Espresso topped with creamy milk foam.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
    },
    {
        name: "Mocha Latte",
        price: 140,
        category: "Coffee",
        description: "A delicious combination of coffee and chocolate.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
    {
        name: "Vanilla Latte",
        price: 135,
        category: "Coffee",
        description: "Smooth latte with sweet vanilla flavor.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500"
    },
    {
        name: "Caramel Latte",
        price: 135,
        category: "Coffee",
        description: "Creamy coffee with rich caramel syrup.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
    },

    // NON-COFFEE
    {
        name: "Matcha Latte",
        price: 120,
        category: "Non-Coffee",
        description: "Earthy Japanese matcha blended with milk.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500"
    },
    {
        name: "Strawberry Milk",
        price: 115,
        category: "Non-Coffee",
        description: "Sweet strawberry mixed with fresh milk.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be5b4b4b4?w=500"
    },
    {
        name: "Chocolate",
        price: 110,
        category: "Non-Coffee",
        description: "A comforting and creamy chocolate drink.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be5b4b4b4?w=500"
    },
    {
        name: "Taro Latte",
        price: 125,
        category: "Non-Coffee",
        description: "Creamy milk drink with sweet taro flavor.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500"
    },
    {
        name: "Mango Milk",
        price: 120,
        category: "Non-Coffee",
        description: "Refreshing mango blended with milk.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be5b4b4b4?w=500"
    },
    {
        name: "Cookies and Cream",
        price: 130,
        category: "Non-Coffee",
        description: "Creamy drink with crushed chocolate cookies.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500"
    },

    // FRAPPES
    {
        name: "Coffee Frappe",
        price: 145,
        category: "Frappes",
        description: "Blended coffee drink with a creamy texture.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },
    {
        name: "Mocha Frappe",
        price: 155,
        category: "Frappes",
        description: "Blended coffee with rich chocolate flavor.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },
    {
        name: "Caramel Frappe",
        price: 155,
        category: "Frappes",
        description: "Icy blended drink with caramel sweetness.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },
    {
        name: "Java Chip Frappe",
        price: 165,
        category: "Frappes",
        description: "Chocolate chips blended with coffee and milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },
    {
        name: "Matcha Frappe",
        price: 150,
        category: "Frappes",
        description: "Refreshing blended matcha with creamy milk.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500"
    },
    {
        name: "Cookies and Cream Frappe",
        price: 160,
        category: "Frappes",
        description: "Blended cookies and cream topped with sweetness.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },

    // PASTRIES
    {
        name: "Butter Croissant",
        price: 80,
        category: "Pastries",
        description: "Flaky and buttery pastry, freshly served.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
    },
    {
        name: "Chocolate Muffin",
        price: 90,
        category: "Pastries",
        description: "Soft muffin filled with chocolate goodness.",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500"
    },
    {
        name: "Cinnamon Roll",
        price: 95,
        category: "Pastries",
        description: "Soft pastry with cinnamon and sweet glaze.",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500"
    },
    {
        name: "Blueberry Muffin",
        price: 95,
        category: "Pastries",
        description: "Freshly baked muffin with blueberry flavor.",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500"
    },
    {
        name: "Chocolate Danish",
        price: 100,
        category: "Pastries",
        description: "Buttery pastry filled with chocolate.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
    },
    {
        name: "Cheese Danish",
        price: 100,
        category: "Pastries",
        description: "Flaky pastry with a creamy cheese filling.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
    },

    // DESSERTS
    {
        name: "New York Cheesecake",
        price: 150,
        category: "Desserts",
        description: "Rich and creamy classic cheesecake.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
    },
    {
        name: "Chocolate Brownies",
        price: 85,
        category: "Desserts",
        description: "Soft and fudgy chocolate brownies.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
    },
    {
        name: "Chocolate Chip Cookies",
        price: 65,
        category: "Desserts",
        description: "Crunchy cookies with chocolate chips.",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
    },
    {
        name: "Red Velvet Cake",
        price: 145,
        category: "Desserts",
        description: "Soft red velvet cake with cream cheese frosting.",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500"
    },
    {
        name: "Tiramisu",
        price: 155,
        category: "Desserts",
        description: "Classic dessert with coffee and creamy layers.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500"
    },
    {
        name: "Chocolate Cake",
        price: 140,
        category: "Desserts",
        description: "Moist chocolate cake with rich frosting.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    },

    // SNACKS
    {
        name: "Clubhouse Sandwich",
        price: 160,
        category: "Snacks",
        description: "A filling sandwich with layers of delicious ingredients.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
    },
    {
        name: "Ham and Cheese Sandwich",
        price: 120,
        category: "Snacks",
        description: "Classic sandwich with ham and melted cheese.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
    },
    {
        name: "French Fries",
        price: 90,
        category: "Snacks",
        description: "Golden and crispy fries served fresh.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },
    {
        name: "Nachos",
        price: 130,
        category: "Snacks",
        description: "Crispy tortilla chips with cheese topping.",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500"
    },
    {
        name: "Chicken Nuggets",
        price: 125,
        category: "Snacks",
        description: "Crispy bite-sized chicken pieces.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500"
    },
    {
        name: "Waffles",
        price: 135,
        category: "Snacks",
        description: "Golden waffles served with sweet toppings.",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500"
    }
];

// CATEGORY LIST
const categories = [
    "All",
    "Coffee",
    "Non-Coffee",
    "Frappes",
    "Pastries",
    "Desserts",
    "Snacks"
];

const categoryIcons = {
    "Coffee": "☕",
    "Non-Coffee": "🍵",
    "Frappes": "🥤",
    "Pastries": "🥐",
    "Desserts": "🍰",
    "Snacks": "🥪"
};

// SHOPPING CART
let cart = [];
let selectedCategory = "All";

// DISPLAY CATEGORY FILTERS
function displayCategoryFilters() {
    const filterContainer = document.getElementById("category-filters");

    filterContainer.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");

        button.className = "filter-button";
        button.textContent = category === "All"
            ? "All Menu"
            : categoryIcons[category] + " " + category;

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", function() {
            selectedCategory = category;
            displayCategoryFilters();
            displayProducts();
        });

        filterContainer.appendChild(button);
    });
}

// DISPLAY PRODUCTS
function displayProducts() {
    const menuContent = document.getElementById("menu-content");
    const searchInput = document.getElementById("search-input");

    const searchText = searchInput.value.toLowerCase().trim();

    menuContent.innerHTML = "";

    let filteredProducts = products.filter(product => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        menuContent.innerHTML = `
            <p class="no-results">
                No products found. Please try another search.
            </p>
        `;
        return;
    }

    categories.slice(1).forEach(category => {
        const categoryProducts = filteredProducts.filter(
            product => product.category === category
        );

        if (categoryProducts.length === 0) {
            return;
        }

        const categorySection = document.createElement("div");
        categorySection.className = "category-section";

        categorySection.innerHTML = `
            <h3 class="category-title">
                ${categoryIcons[category]} ${category}
            </h3>
            <div class="menu-container"></div>
        `;

        const menuContainer = categorySection.querySelector(".menu-container");

        categoryProducts.forEach(product => {
            const productCard = document.createElement("div");

            productCard.className = "menu-card";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4>₱${product.price}</h4>
                <button>Add to Cart</button>
            `;

            productCard.querySelector("button").addEventListener("click", function() {
                addToCart(product.name, product.price);
            });

            menuContainer.appendChild(productCard);
        });

        menuContent.appendChild(categorySection);
    });
}

// SEARCH PRODUCTS
document.getElementById("search-input").addEventListener("input", function() {
    displayProducts();
});

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
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>₱${item.price} x ${item.quantity}</p>
            </div>

            <div class="cart-controls">
                <button class="minus-button">-</button>
                <span>${item.quantity}</span>
                <button class="plus-button">+</button>
                <button class="remove-button">Remove</button>
            </div>

            <strong>₱${subtotal}</strong>
        `;

        cartItem.querySelector(".minus-button").addEventListener("click", function() {
            changeQuantity(index, -1);
        });

        cartItem.querySelector(".plus-button").addEventListener("click", function() {
            changeQuantity(index, 1);
        });

        cartItem.querySelector(".remove-button").addEventListener("click", function() {
            removeItem(index);
        });

        cartItems.appendChild(cartItem);
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
    const summary = document.getElementById("form-order-summary");
    const formTotal = document.getElementById("form-total");

    summary.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement("div");
        row.className = "summary-row";

        row.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <strong>₱${subtotal}</strong>
        `;

        summary.appendChild(row);
    });

    formTotal.textContent = total;
}

// ESCAPE CUSTOMER INPUTS FOR CONFIRMATION
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(character) {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return replacements[character];
    });
}

// CONFIRM CUSTOMER ORDER
document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customerName = document.getElementById("customer-name").value.trim();
    const contactNumber = document.getElementById("contact-number").value.trim();
    const orderType = document.getElementById("order-type").value;
    const pickupTime = document.getElementById("pickup-time").value;

    if (!customerName || !contactNumber || !orderType || !pickupTime) {
        alert("Please complete all the required fields.");
        return;
    }

    let total = 0;
    let orderDetails = "";

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        orderDetails += `
            <div class="summary-row">
                <span>${escapeHTML(item.name)} x ${item.quantity}</span>
                <strong>₱${subtotal}</strong>
            </div>
        `;
    });

    const confirmationMessage = document.getElementById("confirmation-message");

    confirmationMessage.innerHTML = `
        <strong>Order successfully placed!</strong><br><br>

        Thank you, ${escapeHTML(customerName)}!<br><br>

        <strong>Contact Number:</strong> ${escapeHTML(contactNumber)}<br>
        <strong>Order Type:</strong> ${escapeHTML(orderType)}<br>
        <strong>Preferred Pickup Time:</strong> ${escapeHTML(pickupTime)}<br><br>

        <strong>Your Order:</strong>
        ${orderDetails}

        <hr>
        <h3>Total Amount: ₱${total}</h3>

        <p>
            Your order has been recorded in this demo website.
            Please wait for the shop's confirmation.
        </p>
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

// INITIAL DISPLAY
displayCategoryFilters();
displayProducts();
displayCart();
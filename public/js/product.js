// Basic cart functionality using local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartTable = document.getElementById('cart-items');
    const totalElem = document.getElementById('total');
    cartTable.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
    `;

    let total = 0;
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
        `;
        cartTable.appendChild(row);
        total += item.price * item.quantity;
    });

    totalElem.innerText = total.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const price = parseFloat(button.getAttribute('data-price'));
        
        const existingProduct = cart.find(item => item.productId == productId);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ productId, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    });
});

window.onload = updateCartDisplay;

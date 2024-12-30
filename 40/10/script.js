function doubleCartQuantity(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }
    return cart;
}

let cart = [2, 3, 5, 8, 1];
document.getElementById('cartBugOutput').textContent = 'Corrected Cart (Double Quantity): ' + doubleCartQuantity(cart);

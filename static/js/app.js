
function addEventListenersToCartBtn() {
    const cartBtn = document.querySelector('#cart');
    cartBtn.addEventListener('click', showHideModal);
}

function showHideModal() {
    if (document.querySelector('.cart-modal'))
        document.querySelector('.cart-modal').remove();

    else {
        const cartModal = document.createElement('div');
        cartModal.classList.add('cart-modal');
        cartModal.innerHTML = `<div class="cart-header-container">
                                    <h1 id="cart-modal-header">Cart</h1>
                                </div>
                                <div class="cart-content-container">
                                    <img src="/static/images/image-product-1-thumbnail.jpg" id="cart-product-picture">
                                    <div class="cart-product-description">
                                        <p>Fall Limited edition Sneakers</p>
                                        <div class="cart-product-price-container">
                                            <p class="cart-product-quantity">$125 * 3</p>
                                            <p class="cart-product-price">$375</p>
                                        </div>
                                    </div>
                                    <img src="/static/images/icon-delete.svg" id="cart-delete-icon">
                                </div>
                                <div class="checkout-btn-container">
                                    <button type="button" id="checkout-btn">Checkout</button>
                                </div>`;
        document.body.append(cartModal);
    }
}

window.onload = addEventListenersToCartBtn;

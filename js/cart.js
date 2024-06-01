const cartItems = document.querySelector('.cart-items');

function displayCartItems() {
   const items = JSON.parse(localStorage.getItem('cart'));
   items.forEach((item) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart_item';
      cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="" class="cart_img">
      <p class="cart_price">₹ ${item.price}</p>
      <p class="cart_delete">Delete</p>
      `;
      console.log(cartItem)
      cartItems.appendChild(cartItem);
   });
}

displayCartItems();
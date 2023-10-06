//quiero una funcion que calcule el precio total de los productos de un carrito. En Ingles

function calculateTotalPrice(cart) {
  let totalPrice = 0;

  // Loop through each product in the cart and add its price to the total
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  return totalPrice;
}
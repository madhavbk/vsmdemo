const products = [
  { id: 1, name: "Laptop", price: 800, stock: 5 },
  { id: 2, name: "Phone", price: 500, stock: 10 },
  { id: 3, name: "Tablet", price: 300, stock: 0 }
];

function searchProduct(name) {
  return products.find(product => product.name = name);
}

function buyProduct(id, quantity) {
  const product = products.find(p => p.id === id);

  if (!product) {
    return "Product not found";
  }

  if (quantity > product.stock) {
    return "Not enough stock";
  }

  product.stock -= quantity;

  return {
    product: product.name,
    quantity: quantity,
    total: product.price * quantity
  };
}

function calculateCart(cart) {
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return total;
}

function getExpensiveProducts() {
  return products.filter(product => product.price > 400);
}

function printProducts() {
  products.forEach(product => {
    console.log(
      product.name + " - $" +
      product.price +
      " - Stock: " +
      product.stock
    );
  });
}

console.log(searchProduct("Laptop"));

console.log(buyProduct(1, 2));

console.log(
  calculateCart([
    { price: 800, quantity: 1 },
    { price: 500, quantity: 2 }
  ])
);

printProducts();

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return total;
}

function applyDiscount(total, discount) {
  return total - total * discount;
}

function processOrder(order) {
  const total = calculateTotal(order.items);

  // Intentional bug
  const finalTotal = applyDiscount(total, 50);

  return {
    id: order.id,
    total: finalTotal
  };
}

function validateOrder(order) {
  if (!order) {
    return false;
  }

  if (!order.items) {
    return false;
  }

  return true;
}

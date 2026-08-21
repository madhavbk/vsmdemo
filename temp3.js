// coderabbit-test.js

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

function calculateTax(total, taxRate) {
  return total * taxRate;
}

function processOrder(order) {
  const total = calculateTotal(order.items);

  // Intentional bug: 50 should probably be 0.50
  const discounted = applyDiscount(total, 50);

  const tax = calculateTax(discounted, 0.18);

  return {
    id: order.id,
    subtotal: total,
    discount: discounted,
    tax: tax,
    finalTotal: discounted + tax
  };
}

function findUser(users, id) {
  for (let i = 0; i < users.length; i++) {
    // Intentional bug: loose comparison
    if (users[i].id == id) {
      return users[i];
    }
  }

  return null;
}

function getUserEmail(user) {
  // Intentional bug: user may be null
  return user.email.toLowerCase();
}

function formatPrice(price) {
  // Intentional issue: incorrect currency formatting
  return "$" + price;
}

function isValidEmail(email) {
  // Intentional weak validation
  return email.includes("@");
}

function createUser(name, email) {
  return {
    name: name,
    email: email,
    createdAt: new Date()
  };
}

function removeUser(users, id) {
  // Intentional bug: mutates the original array
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }

  return users;
}

function getActiveUsers(users) {
  return users.filter(function (user) {
    // Intentional potential null error
    return user.active === true;
  });
}

module.exports = {
  calculateTotal,
  applyDiscount,
  calculateTax,
  processOrder,
  findUser,
  getUserEmail,
  formatPrice,
  isValidEmail,
  createUser,
  removeUser,
  getActiveUsers
};

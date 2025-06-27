
import { db, auth } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Example cart logic (expand as needed)
let cart = [];
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function updateCartUI() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " x " + item.qty;
    cartList.appendChild(li);
    total += item.qty * item.price;
  });
  cartTotal.textContent = "Total: ₹" + total;
}

// Add item to cart (example)
window.addToCart = function(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({ name, price, qty: 1 });
  updateCartUI();
};

// Submit order
document.getElementById("submitOrder")?.addEventListener("click", () => {
  const name = document.getElementById("custName").value;
  const address = document.getElementById("custAddress").value;
  const user = auth.currentUser;
  if (!user) return alert("Please log in first.");

  const orderRef = ref(db, "orders");
  push(orderRef, {
    user: user.email,
    name,
    address,
    items: cart,
    timestamp: Date.now()
  }).then(() => {
    alert("Order placed!");
    cart = [];
    updateCartUI();
  }).catch(err => alert("Error saving order: " + err.message));
});

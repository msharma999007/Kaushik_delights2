
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Register
document.getElementById("registerBtn")?.addEventListener("click", () => {
  const email = document.getElementById("reg_email").value;
  const password = document.getElementById("reg_password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered successfully!"))
    .catch(err => alert("Error: " + err.message));
});

// Login
document.getElementById("loginBtn")?.addEventListener("click", () => {
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Logged in!"))
    .catch(err => alert("Login error: " + err.message));
});

// Logout
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(auth).then(() => alert("Logged out."));
});

// Auth state
onAuthStateChanged(auth, user => {
  const authSection = document.getElementById("authSection");
  const userEmail = document.getElementById("userEmail");
  if (user) {
    authSection.style.display = "block";
    userEmail.innerText = user.email;
  } else {
    authSection.style.display = "none";
  }
});

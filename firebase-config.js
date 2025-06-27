
// Firebase config setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQtWSbTD31cXlQkoEeGuhGdKuTwKfMrAI",
  authDomain: "kaushik-delights.firebaseapp.com",
  databaseURL: "https://kaushik-delights-default-rtdb.firebaseio.com",
  projectId: "kaushik-delights",
  storageBucket: "kaushik-delights.appspot.com",
  messagingSenderId: "89529354351",
  appId: "1:89529354351:web:8aa42ed6bfdd261165259a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

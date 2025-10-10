import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCutT7k1LdP85gAEXGXbEEx34ly_Bp5c08",
  authDomain: "awakened-rp.firebaseapp.com",
  databaseURL: "https://awakened-rp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "awakened-rp",
  storageBucket: "awakened-rp.firebasestorage.app",
  messagingSenderId: "451491524889",
  appId: "1:451491524889:web:d73f5377403c88a52f1588"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ====== FUNCTION UTAMA ======

// Simpan uang player
export function saveMoney(username, amount) {
  set(ref(db, 'players/' + username), {
    money: amount
  });
}

// Ambil uang player
export async function getMoney(username) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'players/' + username));
  if (snapshot.exists()) {
    alert(username + " punya uang: " + snapshot.val().money);
  } else {
    alert("Player belum punya data!");
  }
}

console.log("Firebase module loaded!");
import { auth, onAuthStateChanged } from "./fireBase.js"

// firebase work


onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "../pages/dashboard.html"
    } else {
       window.location.href = "../pages/login.html"
    }
 });
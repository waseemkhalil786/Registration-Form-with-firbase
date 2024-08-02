import { auth, signInWithEmailAndPassword } from "./fireBase.js";
// console.log(auth);

const form = document.querySelector("#Login-form");
const button = document.querySelector("#button-press");
// console.log("form;",form);
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.value = "loading...";
  const email = event.target.querySelector('input[type="email"]').value;
  const password = event.target.querySelector('input[type="password"]').value;

  // console.log("Email:", email);
  // console.log("Password:", password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    window.location.href = "../Pages/dashboard.html";
    console.log(userCredential);
  } catch (error) {
    Swal.fire({
      title: "Wrong",
      text: error,
      icon: "error",
      footer: "Please check your credentials",
    });
    button.value = "login";
    console.error("Error creating user:", error);
  }
});

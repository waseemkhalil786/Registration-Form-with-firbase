import { auth, createUserWithEmailAndPassword } from "./fireBase.js";
// console.log(auth);
const myError =document.querySelector(".disply-Eror")
const form = document.querySelector("#signup-form");
const button = document.querySelector("#btn001");
// console.log(button);
// console.log("form;",form);
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = event.target.querySelector('input[type="email"]').value;
  const password = event.target.querySelector('input[type="password"]').value;
//   console.log(email, password);
  try {
    button.value = "loading...";
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    window.location.href = "../Pages/login.html"
    // Get user from the userCredential
    const user = userCredential.user;
    // console.log(user);
    await user.updateProfile({
        displayName: fullName
    });

    form.reset();
  }
  catch (error) {
    fire({
        title: "Wrong",
        text: error,
        icon: "error",
        footer: "Please check your credentials"
    });
    myError.innerHTML ="Email has already login !!!", error;
    button.value="Sign up"
  }
});

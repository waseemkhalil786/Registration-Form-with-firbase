import { auth, createUserWithEmailAndPassword,} from "./fireBase.js";
// console.log(auth);

const form =document.querySelector("#Login-form")
// console.log("form;",form);
form.addEventListener("submit",async(event)=>{
event.preventDefault();
// console.log(event.target);
try {
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
     signInWithEmailAndPassword(auth, email, password)
    
    // console.log("Email:", email);
    // console.log("Password:", password);
    
} catch (error) {
    console.log("my error message!!",error.message)
}

})
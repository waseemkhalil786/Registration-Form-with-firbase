const form =document.querySelector("#signup-form")
// console.log("form;",form);
form.addEventListener("submit",(event)=>{
event.preventDefault();
console.log(event.target);
const Email = event.target.children[3].value;
const pasword = event.target.children[6].value;
console.log(Email);
console.log(pasword);
})
const logInBtnN=document.querySelectorAll(".nbtn1");
const logInBtnH=document.querySelectorAll(".hbtn1");
const logInModal=document.querySelector(".login-modal-none")
const signUpBtnN=document.querySelectorAll(".nbtn2");
const signUpBtnH=document.querySelectorAll(".hbtn2");
const signUpModal=document.querySelector(".signup-modal-none")

let logInButtons=[...logInBtnN,...logInBtnH]
let signUpButtons=[...signUpBtnN,...signUpBtnH]

logInButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
    signUpModal.classList.remove("flex")
    logInModal.classList.add("flex")
    e.preventDefault();
})})

signUpButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
    logInModal.classList.remove("flex")
    signUpModal.classList.add("flex")
    e.preventDefault();
})}
)

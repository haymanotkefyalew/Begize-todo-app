const logInBtnN=document.querySelectorAll(".nbtn1");
const logInBtnH=document.querySelectorAll(".hbtn1");
const logInModal=document.querySelector(".login-modal-none")
const signUpBtnN=document.querySelectorAll(".nbtn2");
const signUpBtnH=document.querySelectorAll(".hbtn2");
const modalSubmit=document.querySelector(".modal-submit");
const lModalSubmit=document.querySelector(".lmodal-submit");
const signUpBtnC=document.querySelectorAll(".cta-component");
const signUpModal=document.querySelector(".signup-modal-none")

// inputs
// sign up info

const sFullName=document.querySelector("#modal-name")
const sUsername=document.querySelector("#modal-username")
const sPass=document.querySelector("#modal-password")
const sPassC=document.querySelector("#modal-confirm")
const sAgree=document.querySelector("#agree")

//login info
const lUsername=document.querySelector("#lmodal-username")
const lPass=document.querySelector("#lmodal-password")


let logInButtons=[...logInBtnN,...logInBtnH]
let signUpButtons=[...signUpBtnN,...signUpBtnH,...signUpBtnC]

logInButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
        document.body.classList.add("no-scroll")
    signUpModal.classList.remove("flex")
    logInModal.classList.add("flex")
    
    e.preventDefault();
})})

signUpButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
    logInModal.classList.remove("flex")
    signUpModal.classList.add("flex")
    document.body.classList.add("no-scroll")
    e.preventDefault();
})}
)

modalSubmit.addEventListener("click",(e)=>{
    document.body.classList.remove("no-scroll")
    window.location.href="main.html"
    signUpModal.classList.remove("flex")
     e.preventDefault();
})
lModalSubmit.addEventListener("click",(e)=>{
    document.body.classList.remove("no-scroll")
    logInModal.classList.remove("flex")
    window.location.href="main.html"
     e.preventDefault();
})


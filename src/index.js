import { saveUserInfo,getUserInfo } from "./modules/user-info.js";
import { validateName,validatePassword,validateUsername } from "./modules/validate-input.js";
import { clearWindowL,clearWindowS } from "./modules/utilities.js";

const logInBtnN=document.querySelectorAll(".nbtn1");
const logInBtnH=document.querySelectorAll(".hbtn1");
const logInModal=document.querySelector(".login-modal-none")
const signUpBtnN=document.querySelectorAll(".nbtn2");
const signUpBtnH=document.querySelectorAll(".hbtn2");
const modalSubmit=document.querySelector(".modal-submit");
const lModalSubmit=document.querySelector(".lmodal-submit");
const signUpBtnC=document.querySelectorAll(".cta-component");
const signUpModal=document.querySelector(".signup-modal-none")

//second page

// inputs
// sign up info

const sFullName=document.querySelector("#modal-name")
const sUsername=document.querySelector("#modal-username")
const sPass=document.querySelector("#modal-password")
const sPassC=document.querySelector("#modal-confirm")
const sAgree=document.querySelector("#agree")
//signup object
function signupObject(fullName,username,password){
    return ({fullName,username,password})
}

//login info
const lUsername=document.querySelector("#lmodal-username")
const lPass=document.querySelector("#lmodal-password")

//login object
function loginObject(username,password){
    return ({username,password})
}
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
if(modalSubmit){
modalSubmit.addEventListener("click",(e)=>{
    
    const invalidU=document.querySelector(".us-invalid")
    const invalidF=document.querySelector(".fs-invalid")
    const invalidP=document.querySelector(".ps-invalid")
    

    if(!validateName(sFullName.value)){
        
        invalidF.textContent="Invalid name"
        clearWindowS();
         e.preventDefault();
        return
    }else invalidF.textContent="";
    if(!validateUsername(sUsername.value)){
        
        invalidU.textContent="Invalid username"
        clearWindowS();
         e.preventDefault();
        return
    }else invalidU.textContent="";
    if(!validatePassword(sPass.value)){
         invalidP.textContent="Invalid password"
       sPass.value="";
       sPassC.value="";
       
         e.preventDefault();
        return
    }else{
        invalidP.textContent=""
    }
    if(sPass.value!=sPassC.value){
        const invalidPC=document.querySelector(".cs-invalid")
        invalidPC.textContent="Password don't match!"
        sPass.value="";
       sPassC.value="";
       e.preventDefault();
       return
    }
    let userInfo=[sFullName.value.trim(),sUsername.value.trim(),sPass.value.trim()]
    clearWindowS();
    saveUserInfo(...userInfo)

    signUpModal.classList.remove("flex")
    document.body.classList.remove("no-scroll")
    window.location.href="./main.html"  
     e.preventDefault();
})
}

if(lModalSubmit){
lModalSubmit.addEventListener("click",(e)=>{
const invalidU=document.querySelector(".u-invalid")
 const invalidP=document.querySelector(".p-invalid")
    if(!validateUsername(lUsername.value)){
        
        invalidU.textContent="Invalid username"
        clearWindowL()
         e.preventDefault();
        return
    }else invalidU.textContent="";
    if(!validatePassword(lPass.value)){
       lPass.value="";
        invalidP.textContent="Invalid password"
         e.preventDefault();
        return
    }else{
        invalidP.textContent=""
    }
     let savedInfo=getUserInfo()
    let userInfo=[lUsername.value.trim(),lPass.value.trim()]
    let userObject=loginObject(...userInfo);

    if(savedInfo.username!=userObject.username){
         invalidU.textContent="Account not found!"
        clearWindowL()
         e.preventDefault();
        return
    }else{
        if(savedInfo.password!=userObject.password){
        lPass.value="";
        invalidP.textContent="Wrong password"
         e.preventDefault();
        return
        }
    }
    clearWindowL()
    document.body.classList.remove("no-scroll")
    logInModal.classList.remove("flex")
    window.location.href="main.html"
     e.preventDefault();
})
}

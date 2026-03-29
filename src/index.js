import { saveUserInfo,getUserInfo } from "./modules/user-info.js";
import { validateName,validatePassword,validateUsername } from "./modules/validate-input.js";
import { clearWindowL,clearWindowS,closeModals,openModal } from "./modules/utilities.js";


// login node elements
const logInBtnN=document.querySelectorAll(".nbtn1");
const logInBtnH=document.querySelectorAll(".hbtn1");
const lModalSubmit=document.querySelector(".lmodal-submit");
const cancelL=document.querySelector('.cancel-lmodal');




// signup node elements
const signUpBtnN=document.querySelectorAll(".nbtn2");
const signUpBtnH=document.querySelectorAll(".hbtn2");
const modalSubmit=document.querySelector(".modal-submit");
const cancelS=document.querySelector('.cancel-smodal');

// cta
const signUpBtnC=document.querySelectorAll(".cta-component");



// inputs
// sign up info

const sFullName=document.querySelector("#modal-name")
const sUsername=document.querySelector("#modal-username")
const sPass=document.querySelector("#modal-password")
const sPassC=document.querySelector("#modal-confirm")


//login info
const lUsername=document.querySelector("#lmodal-username")
const lPass=document.querySelector("#lmodal-password")



//login object
function loginObject(username,password){
    return ({username,password})
}


// events

cancelS.addEventListener('click', closeModals)
cancelL.addEventListener('click', closeModals)

// buttons
let logInButtons=[...logInBtnN,...logInBtnH]
let signUpButtons=[...signUpBtnN,...signUpBtnH,...signUpBtnC]


if(logInButtons){
    
    logInButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
        e.preventDefault();
        closeModals()
        openModal("login")
})})
}


if(signUpButtons){
    
    signUpButtons.forEach((each)=>{
    each.addEventListener("click",(e)=>{
        e.preventDefault();
        closeModals()
        openModal("signup")
})})
}


if(modalSubmit){
    modalSubmit.addEventListener("click",(e)=>{
        e.preventDefault();
        const invalidU=document.querySelector(".us-invalid")
        const invalidF=document.querySelector(".fs-invalid")
        const invalidP=document.querySelector(".ps-invalid")
    

        if(!validateName(sFullName.value)){
        
            invalidF.textContent="Invalid name"
            clearWindowS();
            return
        }else invalidF.textContent="";


        if(!validateUsername(sUsername.value)){
        
            invalidU.textContent="Invalid username"
            clearWindowS();
            return
        }else invalidU.textContent="";


        if(!validatePassword(sPass.value)){
            invalidP.textContent="Invalid password"
            sPass.value="";
            sPassC.value="";
            return
        }else{
            invalidP.textContent=""
        }


        if(sPass.value!=sPassC.value){
            const invalidPC=document.querySelector(".cs-invalid")
            invalidPC.textContent="Password don't match!"
            sPass.value="";
            sPassC.value="";
            return
        }


        let userInfo=[sFullName.value.trim(),sUsername.value.trim(),sPass.value.trim()]
        clearWindowS();
        saveUserInfo(...userInfo)

        closeModals();
        window.location.href="./main.html"  
})
}

if(lModalSubmit){
    lModalSubmit.addEventListener("click",(e)=>{
        e.preventDefault();
        const invalidU=document.querySelector(".u-invalid")
        const invalidP=document.querySelector(".p-invalid")


        if(!validateUsername(lUsername.value)){
        
            invalidU.textContent="Invalid username"
            clearWindowL()
            return
        }else invalidU.textContent="";


        if(!validatePassword(lPass.value)){
            lPass.value="";
            invalidP.textContent="Invalid password"
            return
        }else{
            invalidP.textContent=""
        }


        let savedInfo=getUserInfo()
        let userInfo=[lUsername.value.trim(),lPass.value.trim()]
        let userObject=loginObject(...userInfo);


        if(!savedInfo){
            invalidU.textContent = "No account found! Please sign up first.";
            clearWindowL()
            return;
        }


        if(savedInfo.username!=userObject.username){
            invalidU.textContent="Account not found!"
            clearWindowL()
            return
        }else{
            if(savedInfo.password!=userObject.password){
                lPass.value="";
                invalidP.textContent="Wrong password"
                return
            }
        }

        clearWindowL()
        closeModals();
        window.location.href="main.html"
    })
}

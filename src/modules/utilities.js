export function clearWindowS(){
const sFullNameC=document.querySelector("#modal-name")
const sUsernameC=document.querySelector("#modal-username")
const sPassC=document.querySelector("#modal-password")
const sPassCC=document.querySelector("#modal-confirm")
    sFullNameC.value="";
    sPassC.value=""
    sPassCC.value=""
    sUsernameC.value=""
}
export function clearWindowL(){
    const lUsernameC=document.querySelector("#lmodal-username")
    const lPassC=document.querySelector("#lmodal-password")
    lPassC.value=""
    lUsernameC.value=""
}
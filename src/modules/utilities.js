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

export function closeModals() {
    document.body.classList.remove("no-scroll")
    document.getElementById('overlay').classList.add('hidden');
    document.querySelectorAll('.signup-modal, .login-modal').forEach(el => el.classList.add('hidden'));
}

export function openModal(type) {
    document.body.classList.add("no-scroll")
    document.getElementById('overlay').classList.remove('hidden');
    document.querySelector(`.${type}-modal`).classList.remove('hidden');
}
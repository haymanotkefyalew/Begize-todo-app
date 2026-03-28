export function saveUserInfo(fullName,username,password){
    let user={fullName,username,password};
    localStorage.setItem("user",JSON.stringify(user))
}
export function getUserInfo(){
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
}
export function saveUserInfo(fullName,username,password){
    let user={fullName,username,password};
    localStorage.setItem("user",JSON.stringify(user))
}
export function getUserInfo(){
    let user= localStorage.getItem("user")
    user=JSON.parse(user)
    return user;
}
export function validateName(name){
    name.trim();
    if(name.length<3){
        return false
    }
    return true
}
export function validatePassword(password){
    password.trim();
    if(password.length<8){
        return false
    }
    return true
}
export function validateUsername(username){
    username.trim();
    if(username.length<5){
        return false
    }
    if(username.includes(" ")){
        return false
    }
    return true
}
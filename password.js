function checkPassword(){
    const password = document.getElementById('passwordBox');
    const passwordText = password.value;
    if (passwordText == 'Hello'){
        return true;
    }else {
    alert("The password is wrong please try again");
    return false;
    }
}
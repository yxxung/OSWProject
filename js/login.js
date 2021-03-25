// Name and Password from the register-form


// storing input from register-form
function store() {

    let name = document.getElementById('registerUserId').value;
    let pw = document.getElementById('registerPassword').value;

    // if(localStorage.)
    // localStorage.setItem('user', JSON.stringify({id : name , password: pw}));

    localStorage.setItem('user', name);
    localStorage.setItem('password', pw);

}


function check() {

    // stored data from the register-form
    let storedName = localStorage.getItem('user');
    let storedPw = localStorage.getItem('password');

    // entered data from the login-form
    let userName = document.getElementById("loginUserId").value;
    let userPw = document.getElementById("loginPassword").value;

    // let checkName, checkPw;
    //
    // if(userName != null){
    //     checkName = userName.value;
    // }else{
    //     checkName = null;
    // }
    //
    // if(userPw != null){
    //     checkPw = userPw.value;
    // }else{
    //     checkPw = null;
    // }



    console.log("your username is " + userName + "and your password" + password)

    // check if stored data from register-form is equal to data from login form
    if (userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are loged in.');
    }
}

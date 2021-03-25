// Name and Password from the register-form


// storing input from register-form
function register() {

    let name = document.getElementById('registerUserId').value;
    let pw = document.getElementById('registerPassword').value;

    if (registerInvaildCheck(name)) {
        for (let key = 0; key < 100; key++) {
            if (localStorage.getItem(key.toString()) == null) {
                localStorage.setItem(key, JSON.stringify({id: name, password: pw}));
                break;
            }

        }
    }

}

function registerInvaildCheck(name) {

    for (let key = 0; key < localStorage.length; key++) {
        if ((JSON.parse(localStorage.getItem(key.toString())).id) == name) {
            alert('이미 있는 아이디');
            return false;
        }
    }
    return true;
}


function check() {

    // stored data from the register-form
    let storedName = localStorage.getItem('user');
    let storedPw = localStorage.getItem('password');

    // entered data from the login-form
    let userName = document.getElementById("loginUserId").value;
    let userPw = document.getElementById("loginPassword").value;


    console.log("your username is " + userName + "and your password" + userPw)

    // check if stored data from register-form is equal to data from login form
    if (userName !== storedName || userPw !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are loged in.');
    }
}

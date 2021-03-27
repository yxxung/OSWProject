// Name and Password from the register-form


// storing input from register-form
function register() {

    const name = document.getElementById('registerUserId').value;
    const pw = document.getElementById('registerPassword').value;

    if (registerInvalidCheck(name)) {
        for (let key = 0; key < 100; key++) {
            if (localStorage.getItem(key.toString()) == null) {
                localStorage.setItem(key, JSON.stringify({id: name, password: pw}));
                window.location.href = "index.html";
                break;
            }

        }
    }

}

function registerInvalidCheck(name) {

    if (localStorage.length != 100) {
        for (let key = 0; key < localStorage.length; key++) {
            if ((JSON.parse(localStorage.getItem(key.toString())).id) == name) {
                alert('이미 있는 아이디');
                return false;
            }
        }
        return true;
    } else {
        alert('더이상 회원가입 불가능');
        return false;
    }
}


function login() {

    // entered data from the login-form
    const userName = document.getElementById("loginUserId").value;
    const userPw = document.getElementById("loginPassword").value;


    if(userInvalidCheck(userName, userPw) != -1){
       const userKey = userInvalidCheck(userName, userPw);
        alert('로그인 되었습니다.');
        setCookie("currentUser", userKey.toString(), 4);
        window.location.href = "index.html";
    }

}

function userInvalidCheck(name, pw){

    for(let key = 0; key < localStorage.length; key++){
        if ((JSON.parse(localStorage.getItem(key.toString())).id) == name) {
            if((JSON.parse(localStorage.getItem(key.toString()))).password == pw){
                return key;
            }else{
                alert('비밀번호가 일치하지 않습니다.');
                return -1;
            }
        }
    }
    alert('회원이 없습니다.');
    return -1;
}

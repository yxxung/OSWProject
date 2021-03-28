var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};


var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

var deleteCookie = function(name) {
    setCookie(name, "", -1);
}

function changeLoginBtn() {

    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const bagBtn = document.getElementById("bagBtn");
    const profileBtn = document.getElementById("profileBtn")



    if(getCookie("currentUser") != null){
        loginBtn.style.display = "none";
        registerBtn.style.display = "none"
    }else{
        logoutBtn.style.display = "none";
        bagBtn.style.display = "none"
    }

}

function logout() {

    if(getCookie("currentUser") != null){
        deleteCookie("currentUser");
        alert('로그아웃되었습니다.');
        window.location.href = "index.html";
    }else{
        alert('이미 로그아웃되어있습니다.');
    }

}



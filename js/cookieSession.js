var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};


var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

function loginCheck() {

    if(getCookie("currentUser") != null){
        document.getElementById("header-logout").style.display = "block";
        document.getElementById("header-login").style.display = "none";
    }

}

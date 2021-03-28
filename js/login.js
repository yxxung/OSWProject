/**
 * @author "최제현"
 * @date 2021/03/25
 * 회원가입요청을 보내고, Invalid check를 통과하면 localstorage에 id와 password JSON을 저장합니다.
 */
function register() {

    /*
    name과 PAssword를 폼에서 불러오고, 해당값을 각각 저장합니다.
     */
    const name = document.getElementById('registerUserId').value;
    const pw = document.getElementById('registerPassword').value;


    /*
    registerInvalidCheck 에 name을 parameter로 전달하여 True를 리턴받으면 회원가입을 진행합니다.
     */
    if (registerInvalidCheck(name)) {
        for (let key = 0; key < 100; key++) {
            //로컬스토리지 내 빈 key값이 있으면 거기에 value를 삽입합니다.
            if (localStorage.getItem(key.toString()) == null) {
                //모든 회원정보는 JSON형태로 저장됩니다.
                localStorage.setItem(key, JSON.stringify({id: name, password: pw}));
                window.location.href = "index.html";
                break;
            }

        }
    }

}


/**
 * @Author 최제현
 * @date 2021/03/25
 * @param name '회원가입하는 사람의 이름'
 * @returns {boolean} 회원가입 가능할시 TRUE 리턴
 */
function registerInvalidCheck(name) {

    /*
    * 회원수 100명으로 제한
    * 원래 localStorage를 전부 회원정보만 넣으려 했으나, ItemDB, 장바구니 등
    * 추가로 리펙토링 필요
    * */
    if (localStorage.length != 100) {
        for (let key = 0; key < localStorage.length; key++) {
            //localStorage 내 JSON을 프로퍼티를 이용하기 위해 parse후 사용

            try {
                if ((JSON.parse(localStorage.getItem(key.toString())).id) == name) {
                    alert('이미 있는 아이디');
                    return false;
                }
                //localStorage exception 처리 수정 요망
            } catch(err){
                key++
            }
        }
        //일치하는 아이디가 없으면 true 리턴
        return true;
    } else {
        alert('더이상 회원가입 불가능');
        return false;
    }
}


/**
 *
 * @author 최제현
 * @date 2021/03/26
 * 로그인을 요청하는 함수.
 * login Invalid Check 후 해당 유저의 key를 리턴 받으면 로그인 성공
 * index로 페이지 리다이렉트
 */
function login() {

    // login 폼에서 ID 와 password value 를 불러옵니다.
    const userName = document.getElementById("loginUserId").value;
    const userPw = document.getElementById("loginPassword").value;


    if(loginInvalidCheck(userName, userPw) != -1){
        //InvalidCheck 통과시 userKey를 리턴받습니다.
       const userKey = loginInvalidCheck(userName, userPw);
        alert('로그인 되었습니다.');
        //session을 대신에 쿠키에 현재 유저의 key를 추가합니다.
        setCookie("currentUser", userKey.toString(), 4);
        window.location.href = "index.html";
    }

}


/**
 * @author 최제현
 * @date 2021/03/26
 * @param name 'login 폼에서 받은 id'
 * @param pw '폼에서 받은 password'
 * @returns user key '해당 유저의 localStorage key', -1
 * 해당 유저가 DB에 있는지 검사하고, 비밀번호를 확인한다.
 * 일치시 userkey return 불일치시 -1 return
 */
function loginInvalidCheck(name, pw){

    for(let key = 0; key < localStorage.length; key++){
        // 동일한 아이디가 나올때까지 Key 탐색
        if ((JSON.parse(localStorage.getItem(key.toString())).id) == name) {
            //아이디를 찾으면 Password 동일한지 검사
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

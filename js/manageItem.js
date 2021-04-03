/**
 * @author 최제현
 * @date 2021/03/28
 * @type
 *
 *
 * localStorage에 저장될 Item DB
 */



const itemDB = {
    "items" : [
        {"itemNumber" : "0",
            "category" : "top",
            "name" : "아디다스상의",
            "price" : "248,000원",
            "image" : "product1_1",
            "new" : "0"

        },
        {
            "itemNumber" : "1",
            "category" : "top",
            "name" : "언더아머상의",
            "price" : "180,000원",
            "image" : "product1_1",
            "new" : "1"
        },
        {
            "itemNumber" : "2",
            "category" : "bottom",
            "name" : "언더아머하의",
            "price" : "500,000원",
            "image" : "product1_1",
            "new" : "1"
        },
        {
            "itemNumber" : "3",
            "category" : "bottom",
            "name" : "아디다스하의",
            "price" : "70,000원",
            "image" : "product1_1",
            "new" : "0"
        },
        {
            "itemNumber" : "4",
            "category" : "training",
            "name" : "푸쉬업바",
            "price" : "55,000원",
            "image" : "product1_1",
            "new" : "1"
        },
        {
            "itemNumber" : "5",
            "category" : "training",
            "name" : "런닝머신",
            "price" : "1,999,000원",
            "image" : "product1_1",
            "new" : "0"
        }
    ]

    /**
     * @author 최제현
     * @date 2021/03/28
     *
     * localStorage에 ItemDB를 저장하는 기능
     */
}
function setItemDB() {

    localStorage.setItem("DB", JSON.stringify({DB : itemDB}));
}

/**
 * @author 최제현
 * @date 2021/03/27
 *
 * user가 check한 Checkbox를 찾아 해당하는 item의 이름을 localStorage에 저장
 */
function getChooseItem() {

    // 고를 수 있는 item 의 리스트를 받아옵니다.
    let chooseItem = document.getElementsByName("chooseItem");
    const chooseItemLength = chooseItem.length;
    //현재 로그인중인 유저 찾기.
    const currentUser = getCookie("currentUser").toString();
    const storageName = currentUser + "userItemList" ;
    let choosedItemList = new Array();


    if(currentUser == null){
        alert('로그인하세요');
        window.location.href = "manageUser.html";
    }

    try {
        let currentStorage = JSON.parse(localStorage.getItem(storageName));
        for(let i =0; i < currentStorage.items[i].length; i++){
            choosedItemList.push(currentStorage.items[i])
        }

    }catch (e) {
        localStorage.setItem(storageName, null);
    }
    for(let i =0; i<chooseItemLength; i++){
        if(chooseItem[i].checked == true){
            let itemName = document.getElementsByName("chooseItem")[i].value;
            //JSON 의 Key 이름을 동적으로 저장합니다.
            let itemJson = {};
            //default 갯수는 1개입니다.
            itemJson["item" + i] = itemName; //json 의 Key를 변수로 받기위해 프로퍼티 설
            choosedItemList.push(itemJson);
        }
    }

    //localStorage에 고른 상품들을 저장합니다.
    localStorage.setItem(storageName, JSON.stringify({items : choosedItemList}));

    alert('장바구니에 담겼습니다.');

}

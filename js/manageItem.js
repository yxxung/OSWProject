const itemDB = {
    "items" : [
        {"item1" :{
            "category" : "top",
            "name" : "아디다스상의",
            "price" : "248,000원",
                "image" : "src"

        }},

        {"item2" : {
            "category" : "top",
            "name" : "언더아머상의",
            "price" : "180,000원",
                "image" : "src"
        }}
    ]

}
function setItemDB() {

    localStorage.setItem("DB", JSON.stringify({DB : itemDB}));
}

/**
 *
 */
function getChooseItem() {

    const choosedItemLength = document.getElementsByName("chooseItem").length;
    let choosedItem = document.getElementsByName("chooseItem");
    const currentUser = getCookie("currentUser").toString();
    const storageName = currentUser + "userItemList" ;
    let choosedItemList = new Array();


    if(localStorage.getItem(storageName) == null){
        localStorage.setItem(storageName, null);
    }


    for(let i =0; i<choosedItemLength; i++){
        if(choosedItem[i].checked == true){
            let itemName = document.getElementsByName("chooseItem")[i].value;
            let itemJson = {};
            itemJson[itemName] = "1" ; //json 의 Key를 변수로 받기위해 프로퍼티 설
            choosedItemList.push(itemJson);
        }
    }

    localStorage.setItem(storageName, JSON.stringify({items : choosedItemList}));

    alert('장바구니에 담겼습니다.');

}

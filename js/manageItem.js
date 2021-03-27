/**
 *
 */
function getChooseItem() {

    const choosedItemLength = document.getElementsByName("chooseItem");
    let choosedItem = null;
    const currentUser = getCookie("currentUser").toString();
    const storageName = "userItemList" + currentUser;
    let choosedItemList = [];


    if(localStorage.getItem(storageName) == null){
        localStorage.setItem(storageName, null);
    }


    for(let i =0; i<choosedItemLength; i++){
        if(choosedItem[i].checked == true){
            choosedItem = document.getElementsByName("chooseItem")[i].value;
            choosedItemList.push(JSON.stringify({choosedItem: 1}));
        }
    }

}

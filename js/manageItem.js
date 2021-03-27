/**
 *
 */
function getChoosedItem() {

    const choosedItemLength = document.getElementsByName("chooseItem");
    const currentUser = getCookie("currentUser").toString();
    const storage = JSON.parse(localStorage.getItem(currentUser));
    let choosedItemList = [];
    let choosedItem;

    if(localStorage.getItem(currentUser+"userItemList") == null){
        localStorage.setItem(currentUser+"userItemList", null);
    }
    for(let i =0; i<choosedItemLength; i++){
        if(document.getElementsByName("chooseItem").checked == true){

        }
    }

}


function renderProduct() {

    const userKey = getCookie("currentUser");
    const userItemList = JSON.parse(localStorage.getItem(userKey+"userItemList"));
    const localItemDb = JSON.parse(localStorage.getItem("DB"));
    const userProfile = localStorage.getItem(userKey);
    let contents = document.getElementById("contents");
    // html render object
    const divBox = document.getElementById("divBox");
    let itemUl = document.createElement("ul");
    let itemLiImg = document.createElement("li");
    let itemLiA = document.createElement("li");
    let itemLiB = document.createElement("li");
    let itemLiC = document.createElement("li");


    if(userItemList !== null){


        for(let i = 0; i<userItemList.items.length; i++){

            //userItemList에서 탐색할 JSON key
            let thisItem = "item" + i.toString();
            //키를 통해 접근한 저장된 아이템 번호 저장
            let itemNumber = userItemList.items[i][thisItem];

            //html 렌더링
            // let acover = document.createElement("a");
            // acover.setAttribute("class", "cover");
            // acover.setAttribute("href","#");
            // let Div = document.createElement("div");
            // Div.setAttribute("id", "mybag");
            // acover.appendChild(Div);
            // let newCheckBtn = document.createElement("input");
            // newCheckBtn.setAttribute("type", "checkbox");
            // newCheckBtn.setAttribute("name", "chooseBuy");
            // acover.appendChild(newCheckBtn);

            let imgSrc = item
            itemUl.setAttribute("class", "best_items");
            itemLiImg.innerHTML = "";


            // Div.innerHTML = itemNumber + "번 item";

            // contents.appendChild(acover);

        }




    }



}


function renderProfile() {

    const userKey = getCookie("currentUser");
    const userItemList = JSON.parse(localStorage.getItem(userKey+"userItemList"));
    const localItemDb = JSON.parse(localStorage.getItem("DB"));
    const userProfile = localStorage.getItem(userKey);
    let contents = document.getElementById("contents");

    if(userItemList !== null){


        for(let i = 0; i<userItemList.items.length; i++){

            let thisItem = "item" + i.toString();
            let itemNumber = userItemList.items[i][thisItem];


            let acover = document.createElement("a");
            acover.setAttribute("class", "cover");
            acover.setAttribute("href","#");
            let Div = document.createElement("div");
            Div.setAttribute("id", "mybag");
            acover.appendChild(Div);
            let newCheckBtn = document.createElement("input");
            newCheckBtn.setAttribute("type", "checkbox");
            newCheckBtn.setAttribute("name", "chooseBuy");
            acover.appendChild(newCheckBtn);
            Div.innerHTML = itemNumber + "번 item";

            contents.appendChild(acover);

        }




    }



}

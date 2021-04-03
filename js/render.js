
function renderProduct() {

    const userKey = getCookie("currentUser");
    const userItemList = JSON.parse(localStorage.getItem(userKey+"userItemList"));
    const localItemDB = JSON.parse(localStorage.getItem("DB"));
    const userProfile = localStorage.getItem(userKey);
    let contents = document.getElementById("contents");
    // html render object



    if(userItemList !== null){


        for(let i = 0; i<localItemDB.DB.items.length; i++){


            let divBox = document.getElementById("divBox");
            let itemUl = document.createElement("ul");
            let itemInput = document.createElement("input");
            let itemLiImg = document.createElement("li");
            let imgSrc = document.createElement("img");
            let itemLiA = document.createElement("li");
            let itemLiB = document.createElement("li");
            let itemLiC = document.createElement("li");
            let thisItem = localItemDB.DB.items[i];




            itemInput.setAttribute("type", "checkbox");
            itemInput.setAttribute("name", "chooseItem");
            itemInput.setAttribute("value", thisItem.itemNumber)
            imgSrc.src = "../css/image/" + thisItem.image+  ".jpg";
            imgSrc.width = 270;
            imgSrc.height = 380;
            itemLiA.setAttribute("class", "a");
            itemLiB.setAttribute("class", "b");
            itemLiC.setAttribute("class", "c");


            divBox.appendChild(itemUl);
            itemUl.appendChild(itemInput);
            itemUl.appendChild(itemLiImg);
            itemLiImg.appendChild(imgSrc);
            itemUl.appendChild(itemLiA);
            itemUl.appendChild(itemLiB);
            itemUl.appendChild(itemLiC);



            //userItemList에서 탐색할 JSON key

            itemUl.setAttribute("class", "best_items");
            itemLiA.innerText = thisItem.name;
            itemLiB.innerText = thisItem.price;



            // Div.innerHTML = itemNumber + "번 item";

            // contents.appendChild(acover);

        }




    }



}

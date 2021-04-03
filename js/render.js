
function renderProduct(model, length, JSONKey, condition) {

        for(let i = 0; i<length; i++) {

            try {
                let DB = model.items[i]
            }catch(e){
                alert('잘못된 접근입니다.');
                window.location.href = "index.html";
                return;
            }


           let DB = model.items[i];

            if (DB[JSONKey] == condition) {

                // 렌더링 할 html 오브젝트  생
                let divBox = document.getElementById("divBox");
                let itemUl = document.createElement("ul");
                let itemInput = document.createElement("input");
                let itemLiImg = document.createElement("li");
                let imgSrc = document.createElement("img");
                let itemLiA = document.createElement("li");
                let itemLiB = document.createElement("li");
                let itemLiC = document.createElement("li");


                itemUl.setAttribute("class", "best_items");
                itemInput.setAttribute("type", "checkbox");
                itemInput.setAttribute("name", "chooseItem");
                itemInput.setAttribute("value", DB.itemNumber)
                imgSrc.src = "../css/image/" + DB.image + ".jpg";
                imgSrc.width = 270;
                imgSrc.height = 380;
                itemLiA.setAttribute("class", "a");
                itemLiA.innerText = DB.name;
                itemLiB.setAttribute("class", "b");
                itemLiB.innerText = DB.price;
                itemLiC.setAttribute("class", "c");


                divBox.appendChild(itemUl);
                itemUl.appendChild(itemInput);
                itemUl.appendChild(itemLiImg);
                itemLiImg.appendChild(imgSrc);
                itemUl.appendChild(itemLiA);
                itemUl.appendChild(itemLiB);
                itemUl.appendChild(itemLiC);

            } else {
                continue;
            }
        }
}


function renderTop() {

    let localItemDB = (JSON.parse(localStorage.getItem("DB"))).DB;
    let length = localItemDB.items.length;

    renderProduct(localItemDB,length, "category", "top")

}

function renderBottom() {

    let localItemDB = (JSON.parse(localStorage.getItem("DB"))).DB;
    let length = localItemDB.items.length;

    renderProduct(localItemDB,length, "category", "bottom")
}

function renderNew() {

    let localItemDB = (JSON.parse(localStorage.getItem("DB"))).DB;
    let length = localItemDB.items.length;

    renderProduct(localItemDB,length, "new", "1")

}

//Показывает PopUp
btnMainMenuSearch.addEventListener("click", event =>{
    document.getElementById("popUpWrapper").style.display = "flex";
    document.getElementById("popUpSearchTypesBtns").style.display = "flex";
    document.getElementById("formInputData").style.display = "none";
})

let searchType; //Поле поиска, 1 - имя, 4 - год появления, 6 - книги, 10 - количество игр с участием персонажа


//Oпределяет поле поиска
popUpSearchTypesBtns.addEventListener("click", event=>{
    let searchBtn = event.target.closest("button");
 
    if (searchBtn == document.getElementById("popUpBtnName")){
        document.getElementById("formtextBoxInputData").value = "Geralt Yennefer Triss";
        searchType = 1;
    }
    else if (searchBtn == document.getElementById("popUpBtnAppearance")){
        document.getElementById("formtextBoxInputData").value = "1986 2001 2003";
        searchType = 4;
    }
    else if (searchBtn == document.getElementById("popUpBtnBooks")){
        document.getElementById("formtextBoxInputData").value = "1 5 8";
        searchType = 6;
    } 
    else{
        document.getElementById("formtextBoxInputData").value = "1 2";
        searchType = 10;
    }
    
    document.getElementById("popUpSearchTypesBtns").style.display = "none";
    document.getElementById("formInputData").style.display = "block";
})


//Submit
myForm.addEventListener("submit", event =>{
    event.preventDefault();
    let searchValues = document.getElementById("formtextBoxInputData").value.split(' ');
    search(searchValues);
    document.getElementById("popUpWrapper").style.display = "none";
})

//Поиск, контейнер считается подходящим, если он содержит хотя бы 1 искомое значение
function search(searchValues){
    let cards = document.getElementById("cards").childNodes;
    let countHiddenBoxes = 0;
    cards.forEach(function(witcherBox){
        let witcherInfo = getInfo(witcherBox);
        if (witcherInfo.every(value => !searchValues.includes(value))){
            witcherBox.style.display = "none";
            hiddenWitcherHeroes.push(witcherBox);  
            countHiddenBoxes++;
        
        }
    })   
    if (countHiddenBoxes > 0){
        document.getElementById("btnMainMenuShowHidden").style.display = "block";
    }
}
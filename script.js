"use strict"

/*На странице расположены карточки (3 штуки в ряд). 
Каждая карточка несет информацию о каком-то объекте, 
все объекты являют собой однородный список (товаров, фильмов и т.п.)
с одинаковым набором полей. Имеются предзаполненные карточки.
1. Фильтрация данных (по нажатию кнопки "поиск" появляется поп-ап,
в котором можно задать информацию для поиска объекта, кнопка отмена
и кнопка "искать". при нажатии "искать" останутся только соответствующие объекты,
есть кнопка "отменить поиск", активная, если поиск был произведен, 
она вернет все в изначальный вид).
2. Массовое удаление карточек (в каждой карточке есть чек-бокс,
можно выбрать несколько карточек и нажать кнопку удалить, они удалятся,
можно одной кнопкой выбрать все)*/

const witcherHeroes = [{Name: "Geralt",                First: 1986,  Books: [1, 2, 3, 4, 5, 6, 7, 8],          Games: 3,    img: "Pictures/Geralt.jpg"},
                       {Name: "Yennefer",              First: 1986,  Books: [1, 2, 3, 4, 6, 8],                Games: 3,    img: "Pictures/Yennefer.jpg"},
                       {Name: "Triss",                 First: 1989,  Books: [4, 5, 6],                         Games: 2,    img: "Pictures/Triss.jpg"},
                       {Name: "Jaskier",               First: 1986,  Books: [1, 2, 4, 5],                      Games: 2,    img: "Pictures/Jaskier.jpg"},
                       {Name: "Vesemir",               First: 1988,  Books: [4, 8],                            Games: 1,    img: "Pictures/Vesemir.jpg"},
                       {Name: "Eskel",                 First: 1993,  Books: [5, 6],                            Games: 1,    img: "Pictures/Eskel.jfif"},
                       {Name: "Lambert",               First: 1993,  Books: [6],                               Games: 1,    img: "Pictures/Lambert.jfif"},
                       {Name: "Ciri",                  First: 1995,  Books: [6, 7, 8],                         Games: 1,    img: "Pictures/Ciri.jpg"},
                       {Name: "Filippa Eilhart",       First: 2003,  Books: [8],                               Games: 1,    img: "Pictures/Filippa Eilhart.jfif"},
                       {Name: "Fringilla Vigo",        First: 2003,  Books: [6, 8],                            Games: 2,    img: "Pictures/Fringilla Vigo.jpg"},
                       {Name: "Avallak'h",             First: 2001,  Books: [7],                               Games: 1,    img: "Pictures/Avallak'h.jpg"},
                       {Name: "Zoltan Chivay",         First: 1986,  Books: [1, 5, 6, 8],                      Games: 3,    img: "Pictures/Zoltan Chivay.jpg"},
                       {Name: "Dijkstra",              First: 1996,  Books: [6, 7],                            Games: 2,    img: "Pictures/Dijkstra.jpg"},
                       {Name: "Emhyr var Emreis",      First: 2001,  Books: [2, 4, 5],                         Games: 2,    img: "Pictures/Emhyr var Emreis.jpg"},
                       {Name: "Emiel Regis",           First: 1989,  Books: [3, 4, 5, 6, 7],                   Games: 1,    img: "Pictures/Emiel Regis.jpg"},
                       {Name: "Gaunter O'Dimm",        First: 2001,  Books: [7],                               Games: 1,    img: "Pictures/Gaunter O'Dimm.jfif"},
                       {Name: "Eredin",                First: 1989,  Books: [2,7],                             Games: 1,    img: "Pictures/Eredin.jpg"},
                       {Name: "Shani",                 First: 2001,  Books: [7],                               Games: 1,    img: "Pictures/Shani.jpg"},
                       {Name: "Bianka",                First: 2001,  Books: [7],                               Games: 2,    img: "Pictures/Bianka.jpg"},
                       {Name: "Keira Metz",            First: 1997,  Books: [5, 6, 7],                         Games: 1,    img: "Pictures/Keira Metz.jpg"},]

//Перевод в строку элементов массива
function toString(witcherHeroesInfo){
    let result = "Name: " + witcherHeroesInfo.Name + " \n";
    result += "First appearance: " + witcherHeroesInfo.First + " \n";
    result += "Books: " + witcherHeroesInfo.Books + " \n";
    result += "Parts of games: " + witcherHeroesInfo.Games + " \n";
    return result;
}

//Создание бокса с персонажем
function makeWitcherBox(witcherHero){
    let newWitcherBox = document.createElement("div");

    let newWitcherImage = document.createElement("img"); 
    let newWitcherInfo = document.createElement("p"); 
    let newCheckBox = document.createElement("input");

    newWitcherBox.classList.add("witcherBox");
    newWitcherInfo.classList.add("witcherInfo");
    newCheckBox.classList.add("witcherCheckBox");

    newWitcherImage.src = witcherHero.img;
    newWitcherInfo.innerText = toString(witcherHero);
    newCheckBox.type = "checkbox";

    newWitcherBox.appendChild(newWitcherImage);
    newWitcherBox.appendChild(newWitcherInfo);
    newWitcherBox.appendChild(newCheckBox);

    return newWitcherBox;
}

let i = 0;
let btnMainMenuAdd = document.getElementById('btnMainMenuAdd');

btnMainMenuAdd.addEventListener('click', event => {
    let witcherHero = makeWitcherBox(witcherHeroes[i]);
    document.getElementById('cards').appendChild(witcherHero);
    i = (i + 1) % 20;
})



//Отмена
let btnPopUpCancel = document.getElementById("btnPopUpCancel");


btnPopUpCancel.addEventListener("click", event =>{
    document.getElementById("popUpWrapper").style.display = "none";
})


let hiddenWitcherHeroes = []; //Массив с непоходящими под условие поиска контейнерами


//Oтображение скрытых контейнеров (отмена поиска)
let btnMainMenuShowHidden = document.getElementById("btnMainMenuShowHidden");
btnMainMenuShowHidden.addEventListener("click", event =>{
    hiddenWitcherHeroes.forEach(witcherBox => {
        witcherBox.style.display = "flex";
    });
    hiddenWitcherHeroes = [];
    document.getElementById("btnMainMenuShowHidden").style.display = "none";
})



let popUpSearchTypesBtns = document.getElementById("popUpSearchTypesBtns");


let myForm = document.getElementById("formInputData");


//Получение информации из контейнера
function getInfo(witcherBox){
    let witcherInfo = witcherBox.childNodes[1].textContent.split(' ');
    return witcherInfo[searchType].split(',');
}

//Выделить все
let btnMainMenuCheckAll = document.getElementById('btnMainMenuCheckAll');

btnMainMenuCheckAll.addEventListener('click', event=>{
    let checkBoxes = document.querySelectorAll("input[type='checkbox']");
    checkBoxes.forEach(box => {box.checked = true; });
})
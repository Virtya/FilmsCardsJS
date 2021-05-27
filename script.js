//Удаление
let btnMainMenuDelete = document.getElementById('btnMainMenuDelete');

btnMainMenuDelete.addEventListener('click', event=>{
    let checkBoxes = document.querySelectorAll("input[type='checkbox']");
    checkBoxes.forEach(box => {
        if (box.checked){
            box.parentElement.remove();
        }
    });
})
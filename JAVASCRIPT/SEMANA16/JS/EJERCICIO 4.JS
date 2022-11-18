filterSelection("all") //Ejecuta la función y muestra todas las imágenes 
function filterSelection (c){
    let x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    //Agrega la class "show" (display:block) a los elementos filtrados, y elimina la class "show" de los elementos  que no son selecciondos

    for (i = 0; i < x.length; i++){
        w3RemoverClass (x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Muestra los elementos filtrados

function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");//coloca espacio blanco a arrays
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}


//Oculta los elementos que no son seleccionados

function w3RemoverClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" "); //coloca espacio blanco a arrays
    arr2 = name.split(" ");
    for (i = 0; i< arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}

//Agrega class active al botón actual (iluminado)

let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}



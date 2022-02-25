// FUNCTION ABAIXO SELECIONA PELO ID
/*function show(){
    let element = document.getElementById("name")
    console.log(element.value);
}*/

// FUNCTION ABAIXO SELECIONA PELO NOME

/*function show(){
    let elements = document.getElementsByName("phone")
    console.log(elements[0].value);
}*/

// FUNCTION ABAIXO SELECIONA PELO SELECTOR

/*function show(){
    let elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements[1].value);
}*/

// FUNCTION ABAIXO SELECIONA PELO NOME DA TAG

function show(){
    let elements = document.getElementsByTagName("input")
    console.log(elements);
}

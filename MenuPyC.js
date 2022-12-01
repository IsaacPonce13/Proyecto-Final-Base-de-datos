//Mostrar formulario productos
function SelectProd() {
    document.getElementById("Productos").style.display = "block"
    document.getElementById("Menu").style.display = "none"
}

//Mostrar formulario clientes
function SelectClie() {
    document.getElementById("Clientes").style.display = "block"
    document.getElementById("Menu").style.display = "none"
}
//Funcion del boton regresar al menu
function RegresarMenu() {
    document.getElementById("Productos").style.display = "none"
    document.getElementById("Clientes").style.display = "none"
    document.getElementById("Menu").style.display = "flex"
}
    //ocultar elementos
    //Clientes
    document.getElementById("guardar").style.display = "none"
    document.getElementById("cancelar").style.display = "none"
    //Productos
    document.getElementById("guardarP").style.display = "none"
    document.getElementById("cancelarP").style.display = "none"
    //Formularios
    document.getElementById("Clientes").style.display = "none"
    document.getElementById("Productos").style.display = "none"
    //Fin ocultar elementos.
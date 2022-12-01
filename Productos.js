//Productos
let productos=[];
cargarP();
mostrarProducto();
function guardarP() {
    localStorage.setItem("productos", JSON.stringify(productos));
}
function cargarP() {
    if(!!localStorage.getItem("productos"))
    productos=JSON.parse(localStorage.getItem("productos"));   
    //alert(productos.length);             
}

function mostrarProducto() 
{
let lineasP="";
    for(let c=0; c<productos.length; c++) {
        indiceP=c+1;
        lineasP+="<div class='tarjeta'>"+"No."+indiceP+"<br>"+"<b>Nombre del producto:</b>"+productos[c].nombreP+"<br>"
                                    +"<b>Descripción:</b>"+productos[c].descripcion+"<br>"
                                    +"<b>Cantidad:</b>"+productos[c].cantidad+"<br>"
                                    +"<b>Precio de costo:</b>"+productos[c].precioC+"<br>"
                                    +"<b>Precio de venta:</b>"+productos[c].precioV+"<br>"
                                    +"<img src='"+productos[c].fotoP+"'class='ImgP'>"
                                    +"<br><button class='boton' onclick='editarProducto("+c+")'>Editar</button>"
                                    +"<br><button class='boton' onclick='EliminarProducto("+c+")'>Eliminar</button>"
                +"</div>";
    }   
document.getElementById("listadoP").innerHTML=lineasP;
console.log(productos);
}
function EliminarProducto(noP) {
    if(confirm("¿Desea usted eliminar este registro?"))
    {
        let productostmp=[];
        for(c in productos)
        {
            if(c!=noP)
            productostmp.push(productos[c]);
        }
        productos = productostmp;
        guardarP();
        mostrarProducto();
    }
}
function cancelarEditarP() {
    //Borrar inputs
    document.getElementById('nombreP').value="";
    document.getElementById('descripcion').value="";
    document.getElementById('cantidad').value="";
    document.getElementById('precioC').value="";
    document.getElementById('precioV').value="";
    document.getElementById('fotoP').value="";
    //Botones
    document.getElementById("agregarP").style.display = "block"
    document.getElementById("RegresarM").style.display = "block"
    document.getElementById("guardarP").style.display = "none"
    document.getElementById("cancelarP").style.display = "none"
}
function guardarEditadoP() {
    //cambiar valores
    productos[NoderegistroP]["nombreP"]=document.getElementById("nombreP").value;
    productos[NoderegistroP]["descripcion"]=document.getElementById("descripcion").value;
    productos[NoderegistroP]["cantidad"]=document.getElementById("cantidad").value;
    productos[NoderegistroP]["precioC"]=document.getElementById("precioC").value;
    productos[NoderegistroP]["precioV"]=document.getElementById("precioV").value;
    productos[NoderegistroP]["fotoP"]=document.getElementById("fotoP").value;
    //Limpiar valores de la pantalla
    document.getElementById('nombreP').value="";
    document.getElementById('descripcion').value="";
    document.getElementById('cantidad').value="";
    document.getElementById('precioC').value="";
    document.getElementById('precioV').value="";
    document.getElementById('fotoP').value="";
    //Actualizar la lista que se ve en pantalla
    guardarP();
    mostrarProducto();
     //Actualizar botones
    document.getElementById("agregarP").style.display = "block"
    document.getElementById("RegresarM").style.display = "block"
    document.getElementById("guardarP").style.display = "none"
    document.getElementById("cancelarP").style.display = "none"
}
function editarProducto(noP) {
    NoderegistroP=noP;
    document.getElementById("agregarP").style.display = "none"
    document.getElementById("RegresarM").style.display = "none"
    document.getElementById("guardarP").style.display = "block"
    document.getElementById("cancelarP").style.display = "block"


    document.getElementById('nombreP').value=productos[noP]["nombreP"];
    document.getElementById('descripcion').value=productos[noP]["descripcion"];
    document.getElementById('cantidad').value=productos[noP]["cantidad"];
    document.getElementById('precioC').value=productos[noP]["precioC"];
    document.getElementById('precioV').value=productos[noP]["precioV"];
    document.getElementById('fotoP').value=productos[noP]["fotoP"];
}
function agregarProducto() 
{
    let nombreP=document.getElementById('nombreP').value;
    let descripcion=document.getElementById('descripcion').value;
    let cantidad=document.getElementById('cantidad').value;
    let precioC=document.getElementById('precioC').value;
    let precioV=document.getElementById('precioV').value;
    let fotoP=document.getElementById('fotoP').value;

    if(!!nombreP && !!descripcion && !!cantidad && !!precioC && !!precioV && !!fotoP){
        productos.push({"nombreP":nombreP,
                    "descripcion":descripcion,
                    "cantidad":cantidad,
                    "precioC":precioC,
                    "precioV":precioV,
                    "fotoP":fotoP});

        document.getElementById('nombreP').value="";
        document.getElementById('descripcion').value="";
        document.getElementById('cantidad').value="";
        document.getElementById('precioC').value="";
        document.getElementById('precioV').value="";
        document.getElementById('fotoP').value="";
        console.log(productos);
        guardarP();
        mostrarProducto();
    }else{
        alert("Error al capturar los datos")
    }
}
//Clientes
let personas=[];
cargar();
mostrarPersonas();
function guardar() {
    localStorage.setItem("personas", JSON.stringify(personas));
}
function cargar() {
    if(!!localStorage.getItem("personas"))
    personas=JSON.parse(localStorage.getItem("personas"));   
    //alert(personas.length);             
}

function mostrarPersonas() 
{
let lineas="";
    for(let i=0; i<personas.length; i++) {
        indice=i+1;
        lineas+="<div class='tarjeta'>"+"No."+indice+"<br>"+"<b>Nombre:</b>"+personas[i].nombre+"<br>"
                                    +"<b>Dirección:</b>"+personas[i].direccion+"<br>"
                                    +"<b>Telefono:</b>"+personas[i].telefono+"<br>"
                                    +"<b>Correo:</b>"+personas[i].correo+"<br>"
                                    +"<img src='"+personas[i].foto+"'class='ImgP'>"
                                    +"<br><button class='boton' onclick='editarPersona("+i+")'>Editar</button>"
                                    +"<br><button class='boton' onclick='EliminarPersona("+i+")'>Eliminar</button>"
                +"</div>";
    }   
document.getElementById("listado").innerHTML=lineas;
console.log(personas);
}
function EliminarPersona(no) {
    if(confirm("¿Desea usted eliminar este registro?"))
    {
        let personastmp=[];
        for(i in personas)
        {
            if(i!=no)
            personastmp.push(personas[i]);
        }
        personas = personastmp;
        guardar();
        mostrarPersonas();
    }
}
function cancelarEditar() {
    //Borrar inputs
    document.getElementById('nombre').value="";
    document.getElementById('direccion').value="";
    document.getElementById('telefono').value="";
    document.getElementById('correo').value="";
    document.getElementById('foto').value="";
    //Botones
    document.getElementById("agregar").style.display = "block"
    document.getElementById("RegresarM").style.display = "block"
    document.getElementById("guardar").style.display = "none"
    document.getElementById("cancelar").style.display = "none"
}
function guardarEditado() {
    //cambiar valores
    personas[Noderegistro]["nombre"]=document.getElementById("nombre").value;
    personas[Noderegistro]["direccion"]=document.getElementById("direccion").value;
    personas[Noderegistro]["telefono"]=document.getElementById("telefono").value;
    personas[Noderegistro]["correo"]=document.getElementById("correo").value;
    personas[Noderegistro]["foto"]=document.getElementById("foto").value;
    //Limpiar valores de la pantalla
    document.getElementById('nombre').value="";
    document.getElementById('direccion').value="";
    document.getElementById('telefono').value="";
    document.getElementById('correo').value="";
    document.getElementById('foto').value="";
    //Actualizar la lista que se ve en pantalla
    guardar();
    mostrarPersonas();
    //Actualizar botones
    document.getElementById("agregar").style.display = "block"
    document.getElementById("RegresarM").style.display = "block"
    document.getElementById("guardar").style.display = "none"
    document.getElementById("cancelar").style.display = "none"
}
function editarPersona(no) {
    Noderegistro=no;
    document.getElementById("agregar").style.display = "none"
    document.getElementById("RegresarM").style.display = "none"
    document.getElementById("guardar").style.display = "block"
    document.getElementById("cancelar").style.display = "block"

    document.getElementById('nombre').value=personas[no]["nombre"];
    document.getElementById('direccion').value=personas[no]["direccion"];
    document.getElementById('telefono').value=personas[no]["telefono"];
    document.getElementById('correo').value=personas[no]["correo"];
    document.getElementById('foto').value=personas[no]["foto"];
}
function agregarPersona() 
{
    let nombre=document.getElementById('nombre').value;
    let direccion=document.getElementById('direccion').value;
    let telefono=document.getElementById('telefono').value;
    let correo=document.getElementById('correo').value;
    let foto=document.getElementById('foto').value;

    if(!!nombre && !!direccion && !!telefono && !!correo && !!foto){
        personas.push({"nombre":nombre,
                    "direccion":direccion,
                    "telefono":telefono,
                    "correo":correo,
                    "foto":foto});

        document.getElementById('nombre').value="";
        document.getElementById('direccion').value="";
        document.getElementById('telefono').value="";
        document.getElementById('correo').value="";
        document.getElementById('foto').value="";
        console.log(personas);
        guardar();
        mostrarPersonas();
    }else{
        alert("Error al capturar los datos")
    }
}
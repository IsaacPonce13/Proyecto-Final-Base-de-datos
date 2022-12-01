<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/Style.css">
        <title>Clientes y Productos</title>
    </head>
    <body class="Fondo">
        <div class="encabezado">
            <div class="contenido"> 
                Listas de Productos y Clientes <br> 
            </div>
        </div>

        <!-- menu de seleccion de cliente o producto -->
        <div id="Menu" class="Menu2">
            <div>
                <button onclick = "SelectProd()" class="BotonMenu"><img src="https://cdn-icons-png.flaticon.com/512/2984/2984072.png" alt="Moto" width="200px"> <p>Catalogo de motos</p></button>
                <button onclick = "SelectClie()" class="BotonMenu"><img src="https://prints.ultracoloringpages.com/ff748ba4371e977296575b11b72624a7.png" alt="Clientes" width="200px"> <p>Clientes</p></button>
            </div>
        </div>

        <!-- Seccion que aparece al seleccionar el boton clientes en el menu -->
        <div id="Clientes">
            <h2>Clientes</h2>
            <!-- formulario que muestra los datos requeridos para hacer un registro -->
            <form action="" class="formulario">
                <label for="dni" class="Etiquetas">DNI del cliente:</label><br>
                <input class="entradas" type="text" id="dni"><br>

                <label for="nombre" class="Etiquetas">Nombre:</label><br>
                <input class="entradas" type="text" id="nombre"><br>
                
                <label for="apellido_p" class="Etiquetas">Apellido paterno:</label><br>
                <input class="entradas" type="text" id="apellido_p"><br>

                <label for="apellido_m" class="Etiquetas">Apellido materno:</label><br>
                <input class="entradas" type="text" id="apellido_m"><br>

                <label for="direccion" class="Etiquetas">Direccion:</label><br>
                <input class="entradas" type="text" id="direccion"><br>

                <label for="ciudad" class="Etiquetas">ciudad:</label><br>
                <input class="entradas" type="text" id="ciudad"><br>

                <label for="telefono" class="Etiquetas">Telefono:</label><br>
                <input class="entradas" type="text" id="telefono"><br>
            </form>
            <!-- Botones -->
            <button class="boton" onclick="agregarPersona()" id="agregar">Agregar</button>
            <button class="boton" onclick="RegresarMenu()" id="RegresarM">Regresar al Menu</button>
            <button class="boton" onclick="guardarEditado()" id="guardar">Guardar</button>
            <button class="boton" onclick="cancelarEditar()" id="cancelar">Cancelar</button>
            <p id="listado"></p>
        </div>

        <!-- Seccion que aparece al seleccionar el boton productos en el menu -->
        <div id="Productos">
            <h2>Inventario de motos</h2>
            <!-- formulario que muestra los datos requeridos para hacer un registro -->
            <form action="" class="formulario">
                <label for="matricula" class="Etiquetas">Matricula:</label><br>
                <input class="entradas" type="text" id="matricula"><br>

                <label for="numero_bast" class="Etiquetas">Numero de bast:</label><br>
                <input class="entradas" type="text" id="numero_bast"><br>

                <label for="color" class="Etiquetas">Color:</label><br>
                <input class="entradas" type="text" id="color"><br>

                <label for="marca" class="Etiquetas">Marca:</label><br>
                <input class="entradas" type="text" id="marca"><br>

                <label for="modelo" class="Etiquetas">Modelo:</label><br>
                <input class="entradas" type="text" id="modelo"><br>

                <label for="cod_p" class="Etiquetas">Codigo Postal:</label><br>
                <input class="entradas" type="text" id="cod_p"><br>

                <label for="calle" class="Etiquetas">Calle:</label><br>
                <input class="entradas" type="text" id="calle"><br>

                <label for="numero" class="Etiquetas">Numero de moto:</label><br>
                <input class="entradas" type="text" id="numero"><br>

                <label for="nomb_agencia" class="Etiquetas">Nombre de la agencia:</label><br>
                <input class="entradas" type="text" id="nomb_agencia"><br>
            </form>
            <!-- Botones -->
            <button class="boton" onclick="agregarProducto()" id="agregarP">Agregar</button>
            <button class="boton" onclick="RegresarMenu()" id="RegresarM">Regresar al Menu</button>
            <button class="boton" onclick="guardarEditadoP()" id="guardarP">Guardar</button>
            <button class="boton" onclick="cancelarEditarP()" id="cancelarP">Cancelar</button>
            <p id="listadoP"></p>
        </div>
    </body>
    
    <script src="js/MenuPyC.js"></script>
    <script src="js/Clientes.js"></script>
    <script src="js/Productos.js"></script>
</html>
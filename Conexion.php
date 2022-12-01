<?php
    $server = "localhost";
    $user = "root";
    $pass = "112233";
    $db = "alquiler_motos";

    $conectar = mysqli_connect($server, $user, $pass,$db);

    if(!$conectar){
        die("conexion fallo: " . mysqli_connect_error());
    }else {
        echo "Conexion exitosa";
    }
    
?>
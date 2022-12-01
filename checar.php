<?php
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
session_start();
$_SESSION['usuario'] = $usuario;

include("conexion.php");

$consulta = "SELECT * FROM users where usuario = '$usuario' and contraseña = '$contraseña'";
$resultado = mysqli_query($conectar, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas) {
    header("location:ListaPyC.php");
}else {
    ?>
    <?php
    include("login.php");
    ?>
    <h1>ERROR EN LA AUTENTIFICACION</h1>
    <?php
}
mysqli_free_result($resultado);
mysqli_close($conectar);
?>
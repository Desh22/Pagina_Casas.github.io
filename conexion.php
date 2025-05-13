<?php
$conexion = new mysqli("localhost", "root", "", "catalogo_casas");
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>

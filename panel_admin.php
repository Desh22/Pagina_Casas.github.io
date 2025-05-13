<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.html");
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Panel Administrador</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION['usuario']; ?>!</h1>
    <a href="logout.php">Cerrar sesión</a>
    <!-- Aquí irán los formularios para agregar/eliminar casas -->
</body>
</html>

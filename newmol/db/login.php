<?php

require_once 'db_conection.php';

$log = $_POST['login'];
$pass = $_POST['password'];

$sql = "SELECT * FROM admin WHERE login = '$log' AND password = '$pass'";
$result = mysqli_query($con, $sql);
//return $result;
$row = mysqli_fetch_array($result);
if ( $row['id']!= null ){
    echo $row['id'];
}

    ?>


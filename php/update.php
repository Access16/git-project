<?php

require_once '../db/connection.php';

$check = $_POST['check'];
$id = $_POST['id'];
$ch = $_POST['ch'];
$res = $mysql->query("UPDATE result SET $ch = $ch + 1, stage = stage + 1 WHERE id = '$id'");


// $mysql->query("INSERT INTO `result` (`checking`) VALUES ('$check')");

// $res = $mysql->query("SELECT * FROM `result`");
// $arr = array();

// while($us = mysqli_fetch_assoc($res)) {
//      array_push($arr, $us);
// }

// foreach($arr as $key => $value) {
//     print_r($value[$key]);
// //     echo("ключ: $key и значение $value");
// }
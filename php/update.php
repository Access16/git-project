<?php

require_once '../db/connection.php';

$check = $_POST['check'];
$id = $_POST['id'];
$ch = $_POST['ch'];
$res = $mysql->query("UPDATE result SET $ch = $ch + 1, stage = stage + 1 WHERE id = '$id'");

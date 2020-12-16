<?php 

 require_once '../db/connection.php';

 $res = $mysql->query("SELECT * FROM `result`");
 $arr = array();

 while($us = mysqli_fetch_assoc($res)) {
     array_push($arr, $us);
}

 $jsonData = json_encode($arr, JSON_UNESCAPED_UNICODE);
 file_put_contents('../json/res.json', $jsonData);

echo($jsonData);

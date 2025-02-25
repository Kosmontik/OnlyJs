<?php
$host='localhost';
$user='root';
$password='';
$name='ecxel5';
$link= new mysqli($host,$user,$password,$name);

if($link->connect_error){
    die("Connection failed: ". $link->connect_error);
}
?>
<?php
error_reporting(E_ALL);
$link = mysqli_connect('127.0.0.1', 'root', '', 'users2') or die ("Error connect to base");
$query = mysqli_query($link,"SELECT * FROM workers");
var_dump($link);
<?php
session_start();
// error_reporting(0);
include "includes/autoloader.php";
// include "includes/function.php";
$auth = new auth();
$r = $auth->switchAcc($_GET['name']);
if($r){
    header('Location: home');
}
?>
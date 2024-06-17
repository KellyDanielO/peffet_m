<?php
session_start();
error_reporting(0);
include "includes/autoloader.php";
$auth = new auth();
$d = $auth->deleteloginset();

session_unset();
session_destroy();
header("Location: login");


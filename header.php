<?php
session_start();
// error_reporting(0);
include "includes/autoloader.php";
include "includes/function.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/img/peffet.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css">
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="css/trans.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/jquery.mobile.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Dancing+Script&display=swap" rel="stylesheet">
    <script src="js/sweetalert.min.js"></script>
    <script src="js/trans.js"></script>
    <!-- <script src="js/jquery.mobile.min.js"></script> -->
    <script src="js/Jquery.min.js"></script>
    <script src="js/jquery.form.min.js"></script>
    <script src="js/typed.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/audio.js"></script>
    <script src="js/function.js"></script>
    <script src="js/template.js"></script>
    <script src="js/main.js"></script>
    <script src="js/pc.js"></script>
    <script src="js/realtime.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <?php
    $page_name =  basename($_SERVER['PHP_SELF']);
    switch ($page_name) {
        case 'account.php':
            $username = $_GET['username'];
            echo "
            <title> $username | Peffet</title>
            <link rel='stylesheet' href='css/account.css'>
            <script src='js/account.js' defer></script>";
            break;
        case 'home.php':
            echo "
            <title>Peffet - Feed</title>
            <link rel='stylesheet' href='css/home_page.css'>";
            break;

        case 'notification.php':
            echo "
            <title>Notifications</title>
            <link rel='stylesheet' href='css/notifications.css'>";
            break;
        case 'login.php':
            echo "
            <title>Login | Peffet</title>
            <link rel='stylesheet' href='css/registration.css'>";
            break;
        case 'resetpassword.php':
            echo "
            <title>Reset Password | Peffet</title>
            <link rel='stylesheet' href='css/registration.css'>";
            break;
        case 'signup.php':
            echo "
            <title>Sign Up | Peffet</title>
            <link rel='stylesheet' href='css/registration.css'>";
            break;
        case 'xchat.php':
            echo "
            <title>Xchat | Peffet</title>
            <link rel='stylesheet' href='css/xchat.css'>";
            break;
        case 'explore.php':
            echo "
            <title>Explore | Peffet</title>
            <link rel='stylesheet' href='css/explore.css'>";
            break;

        case 'account_settings.php':
            echo "
            <title>Settings | Peffet</title>
            <link rel='stylesheet' href='css/account_settings.css'>";
            break;

        case 'detailedview.php':
            echo "
                <title>Post Detailed | Peffet</title>
                <link rel='stylesheet' href='css/detailed.css'>";
            break;

        case 'post_view.php':
            echo "
                <title>Post View | Peffet</title>
                <link rel='stylesheet' href='css/post_view.css'>";
            break;

        default:
            # code...
            break;
    }
    ?>


        <link rel="stylesheet" href="./css/reponsive.css">
        <link rel="stylesheet" href="./css/theme.css">
        <link rel="manifest" href="manifest.json">
        <link rel="apple-touch-icon" href="icons/xhdpi.png">
        <meta name="apple-mobile-web-app-status" content="#000">
        <meta name="theme-color" content="#1e252f">
        <script>
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('sw.js').then(registeration => {
                    // console.log("SW Registered")
                }).catch(error => {
                    // console.log("error", error)
                })
            }
        </script>
</head>
<?php
if (isset($_COOKIE['peffet_theme'])) {
    if ($_COOKIE['peffet_theme'] == "light") {
        $bg = "bg-light";
    } else {
        $bg = "bg-dark";
    }
} else {
    if (setcookie("peffet_theme", "light",  time() + (10 * 365 * 24 * 60 * 60), "/")) {
        $bg = "bg-light";
    } else {
        $bg = "bg-light";
    }
}

$attr = '';
if (isset($_COOKIE['peffet_theme'])) {
    if ($_COOKIE['peffet_theme'] == "dark") {
        $attr = " checked='true' ";
    } else {
        $attr = '';
    }
}
?>

<body class="<?php echo $bg; ?>">
    <?php
    $randomstring =  substr(str_shuffle(str_repeat($x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTbkcvbfksagkjhfbhgiyudsgfrbebwnjbuhgfxbjkbdjkagiyedgibqwjkeigiuegdfUVWXYZ', ceil(10 / strlen($x)))), 1, 20);
    $auth = new auth();
    $auth->logUserBack();
    require 'pc_comp.php';
    ?>
    <main class="general">
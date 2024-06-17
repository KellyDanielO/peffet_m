<?php
require 'header.php';
require 'top_nav.php';
if (!isset($_SESSION['uid'])) {
    header("Location: login");
}
?>
<div class="tabs">
    <button id="all" class="nav_btn active">All</button>
    <button id="post_likes" class="nav_btn">Likes</button>
    <button id="mentions" class="nav_btn">Mentions</button>
    <button id="activity" class="nav_btn">Activity</button>
</div>
<div class="quick_notif_block">
 

</div>
<script>
    var top_nav_text = document.querySelector(".top_nav_text");
    var uid = document.querySelector(".uid");
    top_nav_text.textContent = "Notifications";
</script>
<script src='js/notifications.js' ></script>
<?php
require 'footer.php';
?>
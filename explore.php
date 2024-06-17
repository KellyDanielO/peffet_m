<?php
require "header.php";
$user = new user();
$user_values = $user->getUserDetails($_SESSION['username']);
if ($user_values['name'] == null) {
    $name = $user_values['username'];
} else {
    $name = $user_values['name'];
}
if ($user_values['bio'] == null) {
    $bio = "no bio yet!";
} else {
    $bio = $user_values['bio'];
}
?>
<div class="peffet_trans is_active peffet_trans_two">
    <div class="bx_t">
        <div class="ring_loader">
            <div class="ring_bx"></div>
            <div class="ring_bx"></div>
            <div class="ring_bx"></div>
            <div class="ring_bx"></div>
        </div>
        <img class="loader_span" src="assets/img/peffet.jpg">
    </div>
</div>
<?php
if (isset($_GET['q'])) {
    $user = new search();
           
    if(isset($_GET['type'])){
        if($_GET['type'] == "hash"){
            $user->saveSearch('#' . $_GET['q']);
        }
    }else{
        $user->saveSearch($_GET['q']);
    }
    ?>
    <div class="cont_home">
        <div class="first_header">
            <div class="notif_ico spec">
		        <div class="notif_num notif_num_handler d-none">6</div>
                <!-- <ion-icon name="notifications-outline" class="exp_notif"></ion-icon> -->
                <i class="fa fa-bell exp_notif"></i>
            </div>
            <b>Explore</b>
            <img src="media/dp/<?php echo  $user_values['avatar']; ?>" class="toggle exp_img">
        </div>
        <div class="sticky_nav">
            <div class="row_one">
                <div class="search_timer">
                    <i class="fa fa-search"></i>
                    <b class="search_q"></b>
                </div>
            </div>
            <div class="tabs">

                <div class="tab_navi tab_left"><i class="fa fa-arrow-left tab_left"></i></div>
                <div class="bx tab_bx">
                    <button id="search_posts" class="nav_btn">Posts</button>
                    <button id="search_users" class="nav_btn">Users</button>
                    <button id="search_event" class="nav_btn">Event</button>
                    <button id="search_portrait" class="nav_btn">Portrait</button>
                    <button id="search_regular" class="nav_btn">Regular</button>
                    <button id="search_write_up" class="nav_btn">Write Up</button>
                    <button id="search_reference" class="nav_btn">Reference</button>
                    <button id="search_hash_tags" class="nav_btn">#Tags</button>
                </div>
                <div class="tab_navi tab_right"><i class="fa fa-arrow-right tab_right"></i></div>

            </div>
        </div>
        <div class="content_bx">

        </div>
    </div>
    <div class="main_search_bar">
        <form class="search_area" autocomplete="off">
            <!-- <i class="fa fa-arrow-left close_search_bar"></i> -->
            <i class="fa fa-chevron-up" hidden></i>
            <input type="search" autocomplete="off" placeholder="Explore" id="search_box" value="<?php
                if(isset($_GET['type'])){
                    if($_GET['type'] == "hash"){
                        echo "#" . $_GET['q']; 
                    }
                }else{
                    echo $_GET['q']; 
                }
            ?>">
            <button type="submit" class="search_btn" hidden></button>
            <button type="button" class="close_search_bar">cancel</button>
        </form>
        <div class="suggestions">
            <?php
                getSearch();
                ?>
        </div>
    </div>
    <script src="js/search_functions.js"></script>
    <script src="js/search.js"></script>
    <script>
        document.querySelector(".explore_ico").classList.add("active");
        document.getElementById("search_posts").click();
    </script>
<?php
} else {
    ?>
    <div class="cont_home">
        <div class="first_header">
            <div class="notif_ico spec">
		        <div class="notif_num notif_num_handler d-none">6</div>
                <!-- <ion-icon name="notifications-outline" class="exp_notif"></ion-icon> -->
                <i class="fa fa-bell exp_notif"></i>
            </div>
            <b>Explore</b>
            <img src="media/dp/<?php echo  $user_values['avatar']; ?>" class="toggle">
        </div>
        <div class="sticky_nav">
            <div class="row_one">
                <div class="search_timer">
                    <i class="fa fa-search"></i>
                    <b>Explore</b>
                </div>
            </div>
            <div class="tabs">
                <div class="tab_navi tab_left"><i class="fa fa-arrow-left tab_left"></i></div>
                <div class="bx tab_bx">
                    <button id="posts" class="nav_btn">Posts</button>
                    <button id="event" class="nav_btn">Event</button>
                    <button id="portrait" class="nav_btn">Portrait</button>
                    <button id="regular" class="nav_btn">Regular</button>
                    <button id="write_up" class="nav_btn">Write Up</button>
                    <button id="reference" class="nav_btn">Reference</button>
                    <button id="hash_tags" class="nav_btn">#Tags</button>
                </div>
                <div class="tab_navi tab_right"><i class="fa fa-arrow-right tab_right"></i></div>
            </div>
        </div>
        <div class="content_bx">

        </div>
    </div>
    <div class="main_search_bar">
        <form class="search_area" autocomplete="off">
            <!-- <i class="fa fa-arrow-left close_search_bar"></i> -->
            <i class="fa fa-chevron-up" hidden></i>
            <input type="search" autocomplete="off" placeholder="Explore" id="search_box">
            <button type="submit" class="search_btn" hidden></button>
            <button type="button" class="close_search_bar">cancel</button>
        </form>
        <div class="suggestions">
            <?php
                getSearch();
            ?>
        </div>
    </div>
    <script>
        document.querySelector(".explore_ico").classList.add("active");
    </script>
    <script src="js/explore.js"></script>
<?php
}
?>
<?php
require "footer.php";

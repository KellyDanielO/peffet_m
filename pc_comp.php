<?php if (isset($_SESSION['uid'])) :
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
    <div class="pc_comp">
        <header class="pc_nav">
            <strong class="brand_name">Peffet</strong>
            <div class="d-flex justify-content-between align-items-center search_area">
                <i class="fa fa-search uni_search_btn"></i>
                <input type="search" class="uni_search" placeholder="Search.." value="<?php 
                if ($page_name == "explore.php"){
                    if(isset($_GET['q'])){
                        if(isset($_GET['type'])){
                            if($_GET['type'] == "hash"){
                                $result = substr($_GET['q'], 0, 50);
                                echo "#" . $result;
                            }
                        }else{
                            $result = substr($_GET['q'], 0, 50);
                            echo $result;
                        }
                    }
                }
                ?>">
            </div>
            <div class="links_for_pages">
                <a class="sec home_ico" href="home">
                    <i href="home" class="fa fa-home"></i>
                    <!-- <ion-icon name="home-outline"></ion-icon> -->
                </a>

                <a class="sec explore_ico" href="explore">
                    <i href="explore" class="fa fa-compass"></i>
                    <!-- <ion-icon name="compass-outline"></ion-icon> -->
                </a>

                <div class="sec ">
                    <i class="fa fa-plus-circle create_btn"></i>
                    <!-- <ion-icon name="add-circle-outline" class="create_btn"></ion-icon> -->
                </div>
                <a class="sec chat_ico" href="xchat">
		            <div class="notif_num chat_num chats_num d-none">6</div>
                    <!-- <i class="fab fa-telegram-plane" href="xchat"></i> -->
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                </a>
                <a class="sec account_ico" href="@<?php echo $_SESSION['username']; ?>">
                    <i class="fa fa-user"></i>
                    <!-- <ion-icon name="person-outline"></ion-icon> -->
                </a>
                <div class="notif_ico">
		            <div class="notif_num notif_num_handler d-none">6</div>
                    <i class="fa fa-bell pc_notifications" id="pc_notifications"></i>
                    <!-- <ion-icon name="notifications-outline" id="pc_notifications" class="pc_notifications"></ion-icon> -->
                </div>
            </div>
        </header>
        <aside>
            <div class="user_details">
                <img src="media/dp/<?php echo  $user_values['avatar']; ?>" class="classic_img_prev" alt="">
                <div class="name">
                    <strong><?php echo $name; ?></strong>
                    <p><?php echo $bio; ?></p>
                </div>
            </div>
            <strong>Trending</strong>
            <div class="p_h_t">
                <?php getTags() ?>
            </div>
            <strong>You can</strong>
            <div class="bx_contents">
                <?php if (isset($_SESSION['uid'])) : ?>
                    <a href="account_settings">
                        <ion-icon name="create-outline"></ion-icon> Edit profile details
                    </a>
                    <span>
                        <ion-icon name="sparkles-outline"></ion-icon> Invite friends
                    </span>
                    <a href="#">
                        <ion-icon name="help-buoy-outline"></ion-icon> Help
                    </a>
                    <a href="#">
                        <ion-icon name="information-circle-outline"></ion-icon> About
                    </a>
                    <a href="logout">
                        <ion-icon name="log-out-outline"></ion-icon> Logout
                    </a><br>
                <?php endif ?>
            </div>
            <strong>Theme</strong>
            <div class="dark_list">
                <p>Dark mode</p>
                <label class="switch">
                    <input type="checkbox" <?php echo $attr; ?> class="theme_toggle">
                    <span class="slider round"></span>
                </label>
            </div>
            <strong>Switch account</strong>
            <?php if (isset($_SESSION['uid'])) : ?>
                <div class="switch_acc">
                    <?php showSwitchAcc() ?>
                </div>
            <?php endif ?>
        </aside>
    </div>
<?php endif ?>
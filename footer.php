<!-- <br><br> -->
<div class="bottom_nav box-s mt-5">
	<a class="sec home_ico" href="home">
		<!-- <i href="home" class="fa fa-home"></i> -->
		<ion-icon name="home-outline"></ion-icon>
	</a>

	<a class="sec explore_ico" href="explore">
		<!-- <i href="explore" class="fa fa-compass"></i> -->
		<ion-icon name="compass-outline"></ion-icon>
	</a>

	<div class="sec ">
		<!-- <i class="fa fa-plus-circle create_btn"></i> -->
		<ion-icon name="add-circle-outline" class="create_btn"></ion-icon>
	</div>
	<a class="sec xchat_ico chat_ico" href="xchat">
		<div class="notif_num chats_num d-none">6</div>
		<!-- <i class="fab fa-telegram-plane" href="xchat"></i> -->
		<ion-icon name="chatbox-ellipses-outline"></ion-icon>
	</a>
	<a class="sec account_ico" href="@<?php echo $_SESSION['username']; ?>">
		<!-- <i class="fa fa-user"></i> -->
		<ion-icon name="person-outline"></ion-icon>
	</a>
</div>
<!-- side nav -->
<div class="side_nav">
	<div class="side_bx">
		<div class="side_bar">
			<?php sideUser() ?>
			<div class="pages">
				<a href="home" class="each_page">
					<div class="p_bx">
						<i href="home" class="fa fa-home"></i>
						<!-- <ion-icon name="home-outline"></ion-icon> -->
					</div>
					<span>Home</span>
				</a>
				<a href="explore" class="each_page">
					<div class="p_bx">
						<i href="explore" class="fa fa-compass"></i>
						<!-- <ion-icon name="compass-outline"></ion-icon> -->
					</div>
					<span>Explore</span>
				</a>
				<a href="home" class="each_page">
					<div class="p_bx">
						<i class="fa fa-envelope" href="xchat"></i>
						<!-- <ion-icon name="chatbox-ellipses-outline"></ion-icon> -->
					</div>
					<span>Messages</span>
				</a>
				<a href="notification" class="each_page">
					<div class="p_bx">
						<i class="fa fa-bell"></i>
						<!-- <ion-icon name="notifications-outline"></ion-icon> -->
					</div>
					<span>Notification</span>
				</a>
				<a href="@<?php echo $_SESSION['username']; ?>" class="each_page">
					<div class="p_bx">
						<i class="fa fa-user"></i>
						<!-- <ion-icon name="person-outline"></ion-icon> -->
					</div>
					<span>Profile</span>
				</a>
				<a href="account_settings" class="each_page">
					<div class="p_bx">
						<i class="fa fa-cog"></i>
						<!-- <ion-icon name="settings-outline"></ion-icon> -->
					</div>
					<span>Settings</span>
				</a>
				<a href="logout" class="each_page">
					<div class="p_bx">
						<i class="fa fa-door-open"></i>
						<!-- <ion-icon name="log-out-outline"></ion-icon> -->
					</div>
					<span>Logout</span>
				</a>
			</div>
			<div class="dark_list">
				<h3>Dark mode</h3>
				<label class="switch">
					<input type="checkbox" <?php echo $attr; ?> class="theme_toggle">
					<span class="slider round"></span>
				</label>
			</div>
			<div class="switch_acc">
				<?php showSwitchAcc() ?>
			</div>
		</div>
	</div>
</div>
<!-- end of side nav -->
<div class="side_nav_peffet d-flex justify-content-between align-items-center flex-column">
	<div class="bx_side">
		<div class="bx">
			<div class="notch"></div>
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
					</a>

					<div class="dark_list">
						<p>Dark mode</p>
						<label class="switch">
							<input type="checkbox" <?php echo $attr; ?> class="theme_toggle">
							<span class="slider round"></span>
						</label>
					</div>
					<div class="switch_acc">
						<?php showSwitchAcc() ?>
					</div>
				<?php endif ?>
			</div>
		</div>
	</div>
</div>

<div class="img_viewer">
	<div class="img_viewer_cont">
	</div>
</div>
<!-- <div class="video_viewer">
	<div class="video_viewer_cont">


	</div>
</div> -->
<div class="event_full_view">
    <div class="event_mv_bx">
        <div class="event_mv_conts">
			<div class="header_evt">
				<span>All Pairs</span>
			</div>
			<div class="evt_ms">
				<div class="each_group">
					<div class="group_sec">
						<img src="media/event_media/peffet_event_91511670332897.jpg" alt="@dev" class="classic_img_prev">
					</div>
					<div class="group_sec">
						<img src="media/event_media/peffet_event_80811670333137.jpg" alt="@jada" class="classic_img_prev">
					</div>
					<div class="group_sec_act_bx one">
						<i class="fa fa-heart event_like_btn event_like_one  pair_one_peffet_event_pair_01ca305769b2fb22004d66d0620c257915896a644fa8d5a20672aaeeacce521d33c08c" data-event-id="peffet_event_56363ad59c7ef6c56ce47f5d2945870f897c57ecec001592e0d67b060fd754c1c072d72170d4c762dec6056ce0d5e5e309df7685241875d74e9697fb488e34bb1316703324004184e2aa34d63fd8194c5d2946eff0ca5dfb46960baca2" data-pair-id="peffet_event_pair_01ca305769b2fb22004d66d0620c257915896a644fa8d5a20672aaeeacce521d33c08c"></i>
						<b><a href="@dev">@dev</a></b>
					</div>
					<div class="group_sec_act_bx two">
						<i class="fa fa-heart event_like_btn event_like_two active pair_two_peffet_event_pair_01ca305769b2fb22004d66d0620c257915896a644fa8d5a20672aaeeacce521d33c08c" data-event-id="peffet_event_56363ad59c7ef6c56ce47f5d2945870f897c57ecec001592e0d67b060fd754c1c072d72170d4c762dec6056ce0d5e5e309df7685241875d74e9697fb488e34bb1316703324004184e2aa34d63fd8194c5d2946eff0ca5dfb46960baca2" data-pair-id="peffet_event_pair_01ca305769b2fb22004d66d0620c257915896a644fa8d5a20672aaeeacce521d33c08c"></i>
						<b><a href="@jada">@jada</a></b>
					</div>
				</div>
				<div class="each_group">
					<div class="group_sec">
						<img src="media/event_media/peffet_event_78401670332643.jpg" alt="@kelly_daniel" class="classic_img_prev">
					</div>
					<div class="group_sec">
						<img src="media/event_media/peffet_event_84901670332710.jpg" alt="@dav" class="classic_img_prev">
					</div>
					<div class="group_sec_act_bx one">
						<i class="fa fa-heart event_like_btn event_like_one active pair_one_peffet_event_pair_b6d35f34476fae97d697007e13e596c75cee09fceeb2e4ce1e4be1e86fcf836bc59aa9" data-event-id="peffet_event_56363ad59c7ef6c56ce47f5d2945870f897c57ecec001592e0d67b060fd754c1c072d72170d4c762dec6056ce0d5e5e309df7685241875d74e9697fb488e34bb1316703324004184e2aa34d63fd8194c5d2946eff0ca5dfb46960baca2" data-pair-id="peffet_event_pair_b6d35f34476fae97d697007e13e596c75cee09fceeb2e4ce1e4be1e86fcf836bc59aa9"></i>
						<b><a href="@kelly_daniel">@kelly_daniel</a></b>
					</div>
					<div class="group_sec_act_bx two">
						<i class="fa fa-heart event_like_btn event_like_two  pair_two_peffet_event_pair_b6d35f34476fae97d697007e13e596c75cee09fceeb2e4ce1e4be1e86fcf836bc59aa9" data-event-id="peffet_event_56363ad59c7ef6c56ce47f5d2945870f897c57ecec001592e0d67b060fd754c1c072d72170d4c762dec6056ce0d5e5e309df7685241875d74e9697fb488e34bb1316703324004184e2aa34d63fd8194c5d2946eff0ca5dfb46960baca2" data-pair-id="peffet_event_pair_b6d35f34476fae97d697007e13e596c75cee09fceeb2e4ce1e4be1e86fcf836bc59aa9"></i>
						<b><a href="@dav">@dav</a></b>
					</div>
				</div>
			</div>
		</div>
        <i class="fa fa-times event_mv_close"></i>
    </div>
</div>
<div class="preview">
	<div class="preview_cont">
		<div class="bx">
			<img src="img/2.jpg" alt="">
			<i class="fa fa-times preview_cont_close"></i>
		</div>
	</div>
</div>
</main>
<div class="notification_bx">
	<div class="pc_tabs">
		<button id="pc_all" class="pc_nav_btn active">All</button>
		<button id="pc_post_likes" class="pc_nav_btn">Likes</button>
		<button id="pc_mentions" class="pc_nav_btn">Mentions</button>
		<button id="pc_activity" class="pc_nav_btn">Activity</button>
	</div>
	<div class="notif_bx"></div>
</div>
<?php
require 'utility.php';
?>


</body>

</html>
<?php
require 'header.php';
if (!isset($_SESSION['uid'])) {
	header("Location: login");
}

require 'top_nav.php';

$user = new user();
$user_values = $user->getUserDetails($_GET['username']);
$user_follower_values = $user->getUserFollowerDetails($user_values['username']);
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
if ($user_values['error'] == "ghost") {
	header("Location: home");
	exit();
}
$f_c = $user->f_system_get($_SESSION['username'], $user_values['username']);
$fc_b = "";
$msg_show = 'd-none';
if ($f_c == "follow") {
	$fc_b = "follow";
	$b = '<i class="get_notif_of_user"></i>';
} else if ($f_c == "friends") {
	$fc_b = "friends";
	$msg_show = '';
	$b = '<i class="fa fa-bell get_notif_of_user"></i>';
} else if ($f_c == "following") {
	$fc_b = "following";
	$msg_show = '';
	$b = '<i class="fa fa-bell get_notif_of_user"></i>';
}
if ($user_follower_values['error'] !== "ghost") {
	if ($user_follower_values['reference'] == "notify") {
		$ref_check = "checked";
	} else {
		$ref_check = "";
	}
	if ($user_follower_values['portrait'] == "notify") {
		$port_check = "checked";
	} else {
		$port_check = "";
	}
	if ($user_follower_values['regular'] == "notify") {
		$reg_check = "checked";
	} else {
		$reg_check = "";
	}
	if ($user_follower_values['write_up'] == "notify") {
		$wri_check = "checked";
	} else {
		$wri_check = "";
	}
	if ($user_follower_values['peffet_event'] == "notify") {
		$event_check = "checked";
	} else {
		$event_check = "";
	}
} else {
	# code...
}

?>
<main class="cont_home">

	<div class="d-none uid" data-uid="<?php echo $user_values['uid'] ?>"></div>
	<div class="d-none username" id="username_body" data-username="<?php echo $user_values['username'] ?>"></div>
	<div class="depend_button">
		<?php if ($_GET['username'] !== $_SESSION['username']) : ?>
			<?php echo $b; ?>
		<?php else : ?>
			<!-- <i class="fa fa-edit text-lime"></i> -->
		<?php endif ?>
	</div>
	<div class="main_block">
		<div class="img_area">
			<img src="media/dp/<?php echo  $user_values['avatar']; ?>" class="classic_img_prev">
		</div>
		<div class="text_content">
			<h2 class="username mt-1 mb-1"><?php echo $name; ?></h2>
			<p class="bio pc_bio"><?php echo $bio; ?></p>
			<?php if ($_GET['username'] !== $_SESSION['username']) : ?>
				<div class="button_area">
					<button class="btn btn-lime f_or_f_btn" data-owner-uname="<?php echo $user_values['username'] ?> "> <?php echo $fc_b; ?> </button>
					<button class="btn btn-outline-lime <?php echo $msg_show; ?> send_msg_acc" data-owner-uname="<?php echo $user_values['username'] ?> " data-user-id="<?php echo $user_values['uid']; ?>">message</button>
				</div>
			<?php endif ?>
		</div>
	</div>

	<div class="stat_block">
		<div class="block account_b">
			<div class="num">
				<?php echo $user->getUserTotalPost("all", $user_values['uid']); ?>
			</div>
			<div class="name">Post</div>
		</div>
		<div class="block getUserFollowers account_b" data-owner-uname="<?php echo $user_values['username']; ?>">
			<div class="num getUserFollowers" data-owner-uname="<?php echo $user_values['username']; ?>">
				<?php echo $user->UserFollowersNum($user_values['username'], "follower") ?>
			</div>
			<div class="name getUserFollowers" data-owner-uname="<?php echo $user_values['username']; ?>">Followers</div>
		</div>
		<div class="block getUserFollowing account_b" data-owner-uname="<?php echo $user_values['username']; ?>">
			<div class="num getUserFollowing" data-owner-uname="<?php echo $user_values['username']; ?>">
				<?php echo $user->UserFollowersNum($user_values['username'], "following") ?>
			</div>
			<div class="name getUserFollowing" data-owner-uname="<?php echo $user_values['username']; ?>">Following</div>
		</div>
	</div>

	<div class="post_all_block">
		<div class="tabs">

			<div class="tab_navi tab_left"><i class="fa fa-arrow-left tab_left"></i></div>
			<div class="bx tab_bx">

				<button id="timeline" class="nav_btn active">All</button>
				<button id="event" class="nav_btn">Event</button>
				<button id="regular" class="nav_btn">Regular</button>
				<button id="portrait" class="nav_btn">Portrait</button>
				<button id="write_up" class="nav_btn">Write Up</button>
				<button id="reference" class="nav_btn">Reference</button>
				<?php if ($_GET['username'] == $_SESSION['username']) : ?>
					<button id="saved" class="nav_btn">Saved</button>
				<?php endif ?>

			</div>
			<div class="tab_navi tab_right"><i class="fa fa-arrow-right tab_right"></i></div>
		</div>
		<div class="tab_content">
		</div>
	</div>
</main>
<div class="follower_or_following_box">
	<div class="con">
		<div class="d-flex justify-content-between align-items-center top">
			<div>Followers</div>
			<i class="fa fa-times"></i>
		</div>
		<div class="list">

			<div class="d-flex justify-content-center align-items-center list_each">
				<div class="img_area">
					<img src="img/kdo.jpg">
				</div>
				<div class="username_and_bio m-3">
					<b>dev</b>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
				</div>
				<button class="follow_or_view m-2 btn btn-outline-lime">Follow</button>
			</div>
		</div>
	</div>
</div>
<div class="notify_box_user">
	<div class="m_b">
		<div class="main_bx">
			<div class="notch"></div><br>
			<h1 class="text-center">Account notifications</h1>
			<div class="list">
				<div class="each_list">
					<h3>Regular</h3>
					<label class="switch">
						<input type="checkbox" id="reg_check" <?php echo $reg_check; ?>>
						<span class="slider round"></span>
					</label>
				</div>
				<div class="each_list">
					<h3>Write Up</h3>
					<label class="switch">
						<input type="checkbox" id="wri_check" <?php echo $wri_check; ?>>
						<span class="slider round"></span>
					</label>
				</div>
				<div class="each_list">
					<h3>Portrait</h3>
					<label class="switch">
						<input type="checkbox" id="port_check" <?php echo $port_check; ?>>
						<span class="slider round"></span>
					</label>
				</div>
				<div class="each_list">
					<h3>Reference</h3>
					<label class="switch">
						<input type="checkbox" id="ref_check" <?php echo $ref_check; ?>>
						<span class="slider round"></span>
					</label>
				</div>
				<div class="each_list">
					<h3>Event</h3>
					<label class="switch">
						<input type="checkbox" id="event_check" <?php echo $event_check; ?>>
						<span class="slider round"></span>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="following_follower_bx">
	<div class="bx following_follower_bx_cont">
		<div class="main_bx">
			<div class="content_bx">
				<div class="utl_tab">
					<div class="tab_button active" id="utl_follower_btn">Follower</div>
					<div class="tab_button" id="utl_following_btn">Following</div>
					<!-- <div class="tab_button">Suggested</div> -->
				</div>
				<div class="utl_tab_contents">
				</div>
			</div>
			<div class="notch"></div>
		</div>
	</div>
</div>
<div class="utl_send_msg">
	<div class="utl_send_msg_bx">
		<div class="bx">
			<textarea id="chat_bx" placeholder="Message.."></textarea>
			<button id="send_txt" data-owner-uname="<?php echo $user_values['username'] ?>" data-user-id="<?php echo $user_values['uid']; ?>">send</button>
		</div>
	</div>
</div>
<script>
	var top_nav_text = document.querySelector(".top_nav_text");
	var title = document.querySelector(".username").getAttribute("data-username")
	top_nav_text.textContent = title;
	document.querySelector(".account_ico").classList.add("active");
</script>
<?php

require 'footer.php';
?>
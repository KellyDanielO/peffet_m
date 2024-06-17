<?php
require "header.php";
?>
<div class="peffet_trans is_active peffet_trans_two">
	<div class="ring_loader"></div>
	<span class="loader_span">Loading..</span>
</div>
<?php
if (isset($_GET['q'])) {
} else {
?>

	<div class="cont_home">
		<div class="first_header">
			<ion-icon name="notifications-outline"></ion-icon>
			<b>Explore</b>
			<img src="img/kdo.jpg" class="toggle">
		</div>
		<div class="sticky_nav">
			<div class="row_one">
				<div class="search_timer">
					<i class="fa fa-search"></i>
					<b>Explore</b>
				</div>
			</div>
			<div class="tabs">
				<button id="posts" class="nav_btn">Posts</button>
				<button id="users" class="nav_btn">Users</button>
				<button id="portrait" class="nav_btn">Portrait</button>
				<button id="regular" class="nav_btn">Regular</button>
				<button id="write_up" class="nav_btn">Write Up</button>
				<button id="reference" class="nav_btn">Reference</button>
			</div>
		</div>
		<div class="content_bx">

		</div>
	</div>
<?php
}
?>
<div class="main_search_bar">
	<div class="search_area">
		<i class="fa fa-arrow-left close_search_bar"></i>
		<input type="input" placeholder="Explore" id="search_box">
	</div>
	<div class="suggestions">
		<span class="jkfkfjkgjkfgjkbsfjsfjsb">
			<a href="#">Kelly Daniel</a>
			<i class="fa fa-times delete_search_sug" data-sug-id="jkfkfjkgjkfgjkbsfjsfjsb"></i>
		</span>
		<span class="jkfkfjkgjkfgjkbsfjsfsxgfggfjsb">
			<a href="#">Jane doe what's up</a>
			<i class="fa fa-times delete_search_sug" data-sug-id="jkfkfjkgjkfgjkbsfjsfsxgfggfjsb"></i>
		</span>
		<span class="jkfkfjkgdzffdjkfgjkbsfjsfsxgfggfjsb">
			<a href="#">Hey what's up</a>
			<i class="fa fa-times delete_search_sug" data-sug-id="jkfkfjkgdzffdjkfgjkbsfjsfsxgfggfjsb"></i>
		</span>
		<span class="jkfkgdzffdjkfgjkbsfjsfsxgfggfjsb">
			<a href="#">#kellydaniel</a>
			<i class="fa fa-times delete_search_sug" data-sug-id="jkfkgdzffdjkfgjkbsfjsfsxgfggfjsb"></i>
		</span>
		<span class="jkfkgdzffderywvjkfgjkbsfjsfsxgfggfjsb">
			<a href="#">@dev</a>
			<i class="fa fa-times delete_search_sug" data-sug-id="jkfkgdzffderywvjkfgjkbsfjsfsxgfggfjsb"></i>
		</span>
	</div>
</div>
<script src="js/explore.js"></script>
<?php
require "footer.php";

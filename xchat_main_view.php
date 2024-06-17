<?php
require 'header.php';
?>
<title>Xchat | Peffet</title>
<link rel="stylesheet" type="text/css" href="css/xchat_main_view.css">
<div class="body_holder">
	<div class="header_holder">
		<div class="back_button box-s">
			<i onclick="history.back()"><<</i>
		</div>
		<div class="status_bar">
			<div class="box-s img_holder">
				<img src="img/eminem.jpeg" class="user_active_upd">
			</div>
			<div class="text_part">
				<strong>Eminem</strong>
				<em>online</em>
			</div>
		</div>
		<div class="settings box-s">
			<i class="fa fa-cog"></i>
		</div>
	</div>
	<div class="main_chat_page">
		<div class="line_holder ">
			<div class="text_box_chat right">
				<div class="text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt 
				</div>
				<em>by: 12:29 pm</em>
			</div>
		</div>
		<div class="line_holder ">
			<div class="text_box_chat left">
				<div class="text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt 
				</div>
				<em>by: 12:29 pm</em>
			</div>
		</div>
		<div class="line_holder ">
			<div class="text_box_chat left">
				<div class="media">
					<img src="img/nf.jpeg">
				</div>
				<em>by: 12:29 pm</em>
			</div>
		</div>
		<div class="line_holder ">
			<div class="text_box_chat right">
				<div class="media">
					<video src="img/test.mp4" controls></video>
				</div>
				<em>by: 12:29 pm</em>
			</div>
		</div>
	</div>
	<div class="footer_holder">
		<div class="sender_area">
			<span class="emoji">
				<i class="fa fa-smile"></i>
			</span>
			<input type="text" placeholder="message...">
			<i class="fa fa-camera"></i>
		</div>
		<div class="send_btn">
			<i class="fab fa-telegram-plane"></i>
		</div>
	</div>
</div>
<?php

require 'footer.php';

?>
<?php
require 'header.php';
?>
<header>
	<i onclick="history.back()"><<</i>
	<em align="center">Comments</em>
	<div></div>
</header>
<div class="content">
	<div class="comment_sec">
		<div class="user_area_com">
			<img src="img/hopsin.jpeg">
			<small>Hopsin</small>
		</div>
		<div class="comment">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. <br>
						<i>2mins ago</i></p>
			<div class="act_com">
				<i class="fa fa-reply" data-username="Hopsin" id="reply_comment"> 5.6k</i>
				<i class="fa fa-heart" id="like_cm"> 200</i>
			</div>
		</div>
	</div>
	<div class="show_replies">
		<div class="header_replies">2 Replies</div>
		<div class="replies">
			<div class="comment_sec">
				<div class="user_area_com">
					<img src="img/nf.jpeg">
					<small>NF</small>
				</div>
				<div class="comment">
					<p>@Hopsin Damn <br>
						<i>2mins ago</i></p>
					<div class="act_com">
						<i class="fa fa-reply" data-username="NF" id="reply_comment"> 5.6k</i>
						<i class="fa fa-heart" id="like_cm"> 499</i>
					</div>
				</div>
			</div>
			<div class="comment_sec">
				<div class="user_area_com">
					<img src="img/eminem.jpeg">
					<small>Eminem</small>
				</div>
				<div class="comment">
					<p>@NF What's up people <br>
						<i>2mins ago</i></p>
					<div class="act_com">
						<i class="fa fa-reply" data-username="Eminem" id="reply_comment"> 5.6k</i>
						<i class="fa fa-heart" id="like_cm"> 499</i>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="comment_sec">
		<div class="user_area_com">
			<img src="img/nf.jpeg">
			<small>NF</small>
		</div>
		<div class="comment">
			<p>Damn This post is Garbage <a href="search?q=#done" class="text-info">#done</a> <br>
			<i>2mins ago</i> </p>
			<div class="act_com">
				<i class="fa fa-reply" data-username="NF" id="reply_comment"> 5.6k</i>
				<i class="fa fa-heart" id="like_cm"> 499</i>
			</div>
		</div>
	</div>
	<div class="show_replies">
		<div class="header_replies">1 Reply</div>
		<div class="replies">
			<div class="comment_sec">
				<div class="user_area_com">
					<img src="img/nf.jpeg">
					<small>NF</small>
				</div>
				<div class="comment">
					<p>@Hopsin Damn <br>
						<i>2mins ago</i></p>
					<div class="act_com">
						<i class="fa fa-reply" data-username="NF" id="reply_comment"> 5.6k</i>
						<i class="fa fa-heart" id="like_cm"> 499</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="comment_sender">
	<span>@</span>
	<input type="text" placeholder="Type comment" id="comment_msg">
	<div class="like_or_send"><i class="fa fa-heart text-danger"></i></div>
</div>
<?php 
require 'utility.php';
?>
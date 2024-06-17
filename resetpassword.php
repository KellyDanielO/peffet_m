<?php
require  "header.php";
if(isset($_SESSION['uid'])){
	header("Location: home");
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
	<div class=" d-flex justify-content-center align-items-center main_cont flex-column">
		<div class="form_area d-flex justify-content-between align-items-center main_cont">
			
			<div class="text_side">
				<img src="img/login.png" alt="">
			</div>

			<form>
				<div class="bx-1 mb-1 text-lime"><h1>Reset Password</h1></div>
				<div class="each_field">
					<i class="fa fa-user"></i>
					<input type="text" id="username_field" maxlength="22" placeholder="Username">
					<i class="fa fa-check uname_check"></i>
				</div>
				<div class="each_field">
					<i class="fa fa-envelope"></i>
					<input type="email" name="" id="email_field" placeholder="E-mail">
					<i class="fa fa-check email_check"></i>
				</div>
				<button>Get Code!</button>
				<strong class="text-lime mt-2"><a href="login">Login?</a></strong>
			</form>
		</div>
	</div>
	<script src="js/app.js"></script>
<?php
require "footer.php";
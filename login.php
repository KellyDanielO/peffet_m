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
		<div class="form_area d-flex justify-content-between align-items-center main_cont ">
			
			<div class="text_side">
				<img src="img/login.png" alt="">
			</div>

			<form autocomplete="off">
				<div class="bx-1 mb-1 text-lime"><h1>Login!</h1></div>
				<div class="each_field">
					<i class="fa fa-user"></i>
					<input type="text" autocomplete="off" id="username_field_log" maxlength="22" placeholder="Username">
					<i class="fa fa-check uname_check"></i>
				</div>
				<div class="each_field">
					<i class="fa fa-lock"></i>
					<input autocomplete="off" type="password" name="" id="password_field"  placeholder="Password">
					<i class="fa fa-eye-slash password_view"></i>
				</div>
				<button class="login_btn" type="button">Login!</button>
				<strong><a href="signup" class="text-lime mt-2">Don't have an account?</a> or <a href="resetpassword" class="text-lime mt-2">Forgotten Password?</a></strong>
			</form>
		</div>
	</div>
	<script src="js/app.js"></script>
<?php
require "footer.php";
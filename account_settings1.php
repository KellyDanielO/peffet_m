<?php
require 'header.php';
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
if($user_values['error'] == "ghost"){
	header("Location: home");
	exit();
}
?>
<link rel="stylesheet" type="text/css" href="css/account.css">
<script src="js/account.js" defer></script>

<div class="peffet_trans is_active peffet_trans_two">
	<div class="ring_loader"></div>
	<span class="loader_span">Loading..</span>
</div>
<?php
if (isset($_GET['edit_other'])) {
	if ($_GET['edit_other'] == "password") {
?>
<div class="header">
	<i onclick="history.back()"><<</i>
	<strong>Edit </strong>
	<i class="fa fa-check"></i>
</div>
<div class="edit_password">
	<div class="form_area_edit">
		<div class="sec_each">
			<small>Old password</small>
			<input type="password" name="oldpass">
		</div>
		<div class="sec_each">
			<small>New password</small>
			<input type="password" name="newpass">
		</div>
		<div class="sec_each">
			<small>Confirm</small>
			<input type="password" name="newpassconfirm">
		</div>
	</div>
	<div class="other_settings">
		<a class="text-lime" href="?">Edit Profile <span> >></span></a>
		<a class="text-lime" href="?edit_other=email">Change E-mail <span> >></span></a>
	</div>
</div>



<?php
	}elseif ($_GET['edit_other'] == "email") {
?>

<div class="header">
	<i onclick="history.back()"><<</i>
	<strong>Edit </strong>
	<i class="fa fa-check"></i>
</div>
<div class="edit_password">
	<div class="form_area_edits">
		<div class="sec_each">
			<small>E-mail</small>
			<input type="email" name="email">
		</div>
	</div>
	<div class="other_settings">
		<a class="text-lime" href="?">Edit Profile <span> >></span></a>
		<a class="text-lime" href="?edit_other=password">Change Password <span> >></span></a>
	</div>
</div>

<?php
	}
}else{
?>
<style>
button{
	border: none;
	outline: none;
	background: transparent;
}
</style>
<form enctype="multipart/form-data" method="POST" id="fm" action="qs">

	<div class="header">
		<i onclick="history.back()"><<</i>
		<strong>Edit </strong>
		<button type="submit" class="fa fa-check" name="updateUserInfo" id="sub"></button>
	</div>
	<div class="account_settings_pef">
		<div class="progress h">
			<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
		</div>
		<div class="avatar_area">
			<div class="av_img_holder" >
				<img src="media/dp/<?php echo $user_values['avatar']; ?>" id="img_prev">
				<input type="file" id="img_change" accept="image/*" hidden name="dp">
			</div>
			<label for="img_change">Change your profile picture</label>	
		</div>
		<b class="results"></b>
		<div class="form_area_edit">
			<div class="sec_each">
				<small>Name</small>
				<input type="text" name="name" id="name" value="<?php echo $user_values['name']; ?>">
			</div>
			<div class="sec_each">
				<small>Bio</small>
				<input type="text" name="bio" id="bio" value="<?php echo $user_values['bio']; ?>">
			</div>
			<div class="sec_each">
				<small>Website</small>
				<input type="url" name="website" id="website" value="<?php echo $user_values['website']; ?>">
			</div>
			<input type="text" name="send_a" value="1" id="send_a" hidden>
		</div>
		
		<div class="other_settings">
			<a class="text-lime" href="?edit_other=password">Change Password <span> >></span></a>
			<a class="text-lime" href="?edit_other=email">Change E-mail <span> >></span></a>
		</div>
	</div>
</form>
<script src="js/acc_settings.js">

</script>
<?php
}
?>
</body>
</html>
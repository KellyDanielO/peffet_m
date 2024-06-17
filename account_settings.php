<?php
require "header.php";
if(!isset($_SESSION['uid'])){
    header("Loaction: login");
    exit();
}
$user = new user();
$user_values = $user->getUserDetails($_SESSION['username']);
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
<div class="main">
    <div class="bx">
        <div class="left">
            <div class="navi">
                <a href="@<?php echo $_SESSION['username']; ?>" class="fa fa-chevron-left"></a>
                <b>Settings</b>
            </div>
            <div class="list_box">
                <li class="list_item" id="edit_profile">Edit profile</li>
                <li class="list_item" id="reset_password">Reset password</li>
                <li class="list_item" id="manage_acc">Manage accounts</li>
                <li class="list_item" id="account_info">Account info</li>
                <li class="list_item" id="blacklist">Backlist</li>
                <li class="list_item" id="security">Security</li>
                <li class="list_item" id="about">About</li>
                <li class="list_item" id="invite">Invite a friend</li>
                <li class="list_item" id="t_and_c">Terms & conditions</li>
            </div>
        </div>
        <div class="right">
            <div class="bx">
                <i class="fa fa-arrow-left back_btn"></i>
                <div class="edit_profile_bx boxes ">
                    <h1 class="text-center">Edit profile</h1>
                    <form class="edit_box" enctype="multipart/form-data" method="POST" id="fm" action="qs" autocomplete="off">
                        <div class="avatar_area">
                            <div class="av_img_holder">
                                <img src="media/dp/<?php echo $user_values['avatar']; ?>" id="img_prev">
                                <input type="file" id="img_change" accept="image/*" hidden name="dp">
                            </div>
                            <label for="img_change">Change your profile picture</label>

                            <div class="progress h">
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <b class="results"></b>
                        </div>
                        <div class="form_area_edit">
                            <div class="sec_each">
                                <label>Username</label>
                                <input type="text" value="<?php echo $user_values['username']; ?>" autocomplete="off" disabled>
                            </div>
                            <div class="sec_each">
                                <label>Name</label>
                                <input type="text" autocomplete="off" name="name" id="name" value="<?php echo $user_values['name']; ?>">
                            </div>
                            <div class="sec_each">
                                <label>Bio</label>
                                <textarea name="bio" id="bio"><?php echo $user_values['bio']; ?></textarea>
                            </div>
                            <button type="submit" name="updateUserInfo" id="sub">Update</button>
                        </div>
                        <input type="text" name="send_a" value="1" id="send_a" hidden>
                </div>
                </form>
            </div>
            <div class="reset_pass boxes">
                <h1 class="text-center">Reset password</h1>
                <form enctype="multipart/form-data" class="edit_password" action="qs" method="POST" id="editPass">
                    <div class="form_area_edit">
                        <div class="sec_each">
                            <small>Old password</small>
                            <input type="password" required id="oldpass" name="oldpass">
                        </div>
                        <div class="sec_each">
                            <small>New password</small>
                            <input type="password" required name="newpass" id="newpass">
                        </div>
                        <div class="sec_each">
                            <small>Confirm new password</small>
                            <input type="password" required name="newpassconfirm" id="newpassconfirm">
                        </div>
                        <input type="text" name="send_pass" id="send_pass"  value="1" id="send_pass" hidden>
                        <b class="pass_results"></b>
                    </div>
                        <button type="submit" name="resetPass" id="editPassBtn">Reset</button>
                </form>
            </div>
            <div class="manage_acc boxes">
                manage_acc
            </div>
            <div class="acc_info boxes">
                <h1 class="text-center">Account info</h1>
                <div class="acc_info_bx">
                    <div class="info_box">
                        <?php 
                        $users = new user();
                        $abs_info = $users->getUserAbsoluteInfo();
                        ?>
                        <div class="each_info_box">
                            <strong>Username</strong>
                            <b><?php echo $abs_info['username']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Name</strong>
                            <b><?php echo $abs_info['name']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Bio</strong>
                            <b><?php echo $abs_info['bio']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Email</strong>
                            <b><?php echo $abs_info['email']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Location</strong>
                            <b><?php echo $abs_info['location']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Joined</strong>
                            <b><?php echo $abs_info['joined']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Total posts</strong>
                            <b><?php echo $abs_info['total_post']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Reaction gotten</strong>
                            <b><?php echo $abs_info['reaction_gotten']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Reaction given</strong>
                            <b><?php echo $abs_info['reaction_given']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Following</strong>
                            <b><?php echo $abs_info['following_num']; ?></b>
                        </div>
                        <div class="each_info_box">
                            <strong>Followers</strong>
                            <b><?php echo $abs_info['follower_num']; ?></b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blacklist boxes">
                blacklist
            </div>
            <div class="about_page boxes">
                about
            </div>
            <div class="secu boxes">
                security
            </div>
        </div>
    </div>
</div>
</div>
<script src="js/acc_settings.js"></script>
<?php
require "footer.php";
?>
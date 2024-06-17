<?php
include "header.php";
if(!isset($_SESSION['uid'])){
	header("Location: login");
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
<div class="xchat" id="xchat_bx">
    <div class="chats_outline">
        <!-- <div class="d-flex justify-content-around align-items-center new_conversation nw_conv">
            <i class="fa fa-plus nw_conv"></i>
            <b class="nw_conv">New conversation</b>
        </div> -->
        <div class="d-flex justify-content-between align-items-center title_block">
            <h3>Messages</h3>
            <i class="fa fa-ellipsis-h"></i>
        </div>
        <!-- <div class="d-flex justify-content-between align-items-center search_area">
            <i class="fa fa-search"></i>
            <input type="search" placeholder="Search..">
        </div> -->
        <div class="ms_bx">
            <div class="new_chat_btn nw_conv">
                <ion-icon name="chatbox-ellipses-outline" class="nw_conv"></ion-icon>
            </div>
            <div class="recent_chats">
                <div class="d-flex justify-content-between align-items-center w-100 ch_header">
                    <b>Recent</b>
                    <em class="see_all_cent"></em>
                </div>
                <div class="recent_chats_bx">
                   
                </div>
            </div>
            <!-- <div class="fav_chats">
                <div class="d-flex justify-content-between align-items-center w-100 ch_header">
                    <b>Favourites</b>
                    <span class="see_all_cent fav_chats_btn">See all</span>
                </div>
                <div class="d-flex justify-content-between align-items-center each_chat">
                    <div class="d-flex justify-content-between align-items-center left_side">
                        <img src="img/dp.jpg" alt="">
                        <div class="text">
                            <strong>kelly_daniel_official</strong>
                            <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>Active</small> <div class="active_dot"></div></div>
                        </div>
                    </div>
                    <div class="right_side">
                        <div class="num">25</div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center each_chat">
                    <div class="d-flex justify-content-between align-items-center left_side">
                        <img src="img/nf.jpeg" alt="">
                        <div class="text">
                            <strong>Nathan Fareist</strong>
                            <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>Offline</small> <div class="offline_dot"></div></div>
                        </div>
                    </div>
                    <div class="right_side">
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center each_chat">
                    <div class="d-flex justify-content-between align-items-center left_side">
                        <img src="img/dp2.jpg" alt="">
                        <div class="text">
                            <strong>Jane Doe</strong>
                            <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>Active</small> <div class="active_dot"></div></div>
                        </div>
                    </div>
                    <div class="right_side">
                        <div class="num">5</div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center each_chat">
                    <div class="d-flex justify-content-between align-items-center left_side">
                        <img src="img/dp3.jpg" alt="">
                        <div class="text">
                            <strong>Scott Choker</strong>
                            <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>Active</small> <div class="active_dot"></div></div>
                        </div>
                    </div>
                    <div class="right_side">
                    </div>
                </div>
            </div> -->
            <div class="fav_chats d-none">
                <div class="d-flex justify-content-between align-items-center w-100 ch_header">
                    <b>Fav</b>
                    <em class="see_all_cent fav_chats_see" id="fav_chats_see"></em>
                </div>
                <div class="fav_chats_area">
                
                </div>
            </div>
            <div class="all_chats">
                <div class="d-flex justify-content-between align-items-center w-100 ch_header">
                    <b>All</b>
                    <em class="see_all_cent all_chats_see">See all</em>
                </div>
                <div class="all_chats_area">
                
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex flex-column chats blur">
        <div class="d-flex justify-content-between align-items-center  chats_header ">
            <i class="fa fa-chevron-left m_chats_back"></i>
            <i class="fa fa-ellipsis-v chats_action_help"></i>
            <div class="d-flex justify-content-between align-items-center  right_side ">
                <img src="img/dp.jpg" alt="" class="reciever_avatar">
                <div class="d-flex justify-content-around flex-column">
                    <b class="reciever_uname">Kelly Daniel</b>
                    <small class="chat_is_active"></small>
                </div>
            </div>
            <div class="left_side"></div>
        </div>
        <div class="chats_cont">
            <div class="line_holder reciever">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small class="m-1">7:00 pm</small>
                <div class="main_bx_chat">consectetur adipisicing elit. Aliquam error in facere minus inventore quisquam aut repudiandae velit accusantium? Libero quaerat pariatur modi eum saepe incidunt soluta placeat quisquam porro.</div>
            </div>
            <div class="line_holder reciever">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small class="m-1">7:00 pm</small>
                <div class="main_bx_chat">Finally</div>
            </div>
            <div class="line_holder sender">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small class="m-1">7:00 pm</small>
                <div class="main_bx_chat">Some inner peace</div>
            </div>
            <div class="line_holder sender">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small class="m-1">7:00 pm</small>
                <div class="main_bx_chat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam error in facere minus inventore quisquam aut repudiandae velit accusantium? Libero quaerat pariatur modi eum saepe incidunt soluta placeat quisquam porro.</div>
            </div>
            <div class="line_holder reciever">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small>7:00 pm</small>
                <div class="main_bx_chat">hmm</div>
            </div>
            <div class="line_holder reciever">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small>7:00 pm</small>
                <div class="main_bx_chat images">
                    <div class="sent_img">
                        <img src="img/dp.jpg" alt="" class="viewer_img">
                        <img src="img/dp2.jpg" alt="" class="viewer_img">
                        <img src="img/dp3.jpg" alt="" class="viewer_img">
                        <img src="img/nf.jpeg" alt="" class="viewer_img">
                    </div>
                </div>
            </div>
            <div class="line_holder sender">
                <i class="fa fa-ellipsis-h msg_act m-3"></i>
                <small>7:00 pm</small>
                <div class="main_bx_chat images">
                    <div class="sent_img">
                        <video src="img/3.mp4" class="video_viewer_btn"></video>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="chats_footer">
            <div class="reply_area">
                <div class="reply_close">
                    <i class="fa fa-times"></i>
                </div>
                <div class="reply_msg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
            <div class="d-flex justify-content-around align-items-center sender_area_x">
                <div class="add_btn plus_ch">
                    <i class="fa fa-plus ch_add plus_ch"></i>
                </div>
                <textarea placeholder="Type a text message here.." id="chat_msg_input"></textarea>  
                <div class="send_btn_chat chat_bt">
                    <i class="fa fa-arrow-up "></i>
                </div>
                <div class="send_opt active">
                    <!-- <div class="fa fa-smile "></div>  -->
                    <span class="gif_bx">gif</span>
                    <ion-icon name="happy-outline" class="emoji"></ion-icon>
                    
                    <span><ion-icon name="mic-outline"></ion-icon></span>
                </div>         
            </div>
            <div class="add_contents">
                <div class="bx_add share_image">
                    <ion-icon name="images-outline"></ion-icon>
                </div>
                <div class="bx_add">
                    <i class="fa fa-video"></i>
                </div>
                <div class="bx_add" title="audio">
                    <i class="fa fa-music" title="audio"></i>
                </div>
                <div class="bx_add" title="contacts">
                    <i class="fa fa-users" title="contacts"></i>
                </div>
            </div>
        </div>
        <div class="plus_chats_bx">
            <button class="share_vid_btn"><ion-icon name="videocam-outline"></ion-icon></button>
            <button><ion-icon name="musical-notes-outline"></ion-icon> </button>
        </div>
    </div>
    <div class="status blur">
        <div class="img_det">
            <img src="img/dp.jpg" alt="">
        </div>
        <h3>Kelly Daniel</h3>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
        <div class="act_btn">
            <button class="add_user_to_fav"><i class="fa fa-heart"></i> Add to favourite</button>
            <a><i class="fa fa-user"></i> Goto Profile</a>
            <button><i class="fa fa-user-slash"></i> Block User</button>
        </div>
    </div>
</div>
<div class="msg_act_cont_bx">
    <div class="msg_act_bx">
        <div class="bx msg_act_cont_bx_c">
            <button class="foward_to_btn"><i class="fa fa-share"></i> Forward</button>
            <button class="copy_btn"><i class="fa fa-clipboard"></i> Copy</button>
            <button class="deleted_msg_for_me"><i class="fa fa-trash-alt"></i> Delete for me</button>
            <div class="bx_new_aea" style="width: 100%"></div>
            <em class="time_area"></em>
        </div>
    </div>
</div>
<div class="nw_conv_bx">
    <div class="bx_relative">
        <h3 class="">New Conversation</h3>
        <i class="fa fa-times close_nw_conv_bx"></i>
        <div class="d-flex justify-content-between align-items-center search_area">
            <i class="fa fa-search"></i>
            <input type="search" placeholder="Search.." id="new_conv_search_bar">
        </div>
        <div class="bx_search_result">
            <h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">Search for followers!</h3>
        </div>
    </div>
</div>
<div class="forward_msg_cont">
    <div class="main_cont">
        <div class="bx">
            <h3 class="text-center" style="font-family: Arial; font-weight: 700; padding: 5px;">Forward to</h3>
            <div class="d-flex justify-content-between align-items-center search_area">
                <i class="fa fa-search"></i>
                <input type="search" placeholder="Search.." id="searchFollowerFoward">
            </div>
            <div class="forward_q">
            </div>
        </div>
        <div class="notch"></div>
    </div>
</div>
<div class="tenor_bg_bx">
    <div class="tenor_bx">
        <div class="bx">
            <div class="notch"></div>
            <div class="d-flex justify-content-between align-items-center search_area" action="#">                
                <input type="text" placeholder="Search Tenor" id="tenor_search">
                <button type="submit" id="search_tenor">search</button>
            </div>
            <div class="gifs">

            </div>
        </div>
    </div>
</div>
<!-- <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button> -->

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
<form class="share_pics" id="share_pics" enctype="multipart/form-data" method="POST" action="qs" >
    <input type="file" name="shareImage[]" hidden id="shareImage">
    <div class="bx">
        <div class="share_header">
            <span>Share</span>
            <ion-icon name="close-outline" class="close_share" id="close_share"></ion-icon>
        </div>
        <div class="imgs_">
            
        </div>
        <div class="share_scroll_nav">
            <div class="bx_left">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div class="bx_right">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>
        <div class="caption_bx">
            <input type="text" hidden id="reciever_username" name="reciever_username" value="">
            <input type="text" hidden name="reciever_id" id="reciever_id" value="">
            <input type="text" placeholder="Caption" id="caption_for_media" name="caption_for_media">
            <button type="submit" id="sned" name="share_medias"><i class="fa fa-arrow-up send-arr"></i></button>
        </div>
    </div>
</form>
<form class="share_vid" id="share_vid" enctype="multipart/form-data" method="POST" action="qs" >
    <input type="file" name="shareImage[]" hidden id="shareVideo">
    <div class="bx">
        <div class="share_header">
            <span>Share</span>
            <!-- <ion-icon name="close-outline" class="close_vid_share" id="close_vid_share"></ion-icon> -->
            <i class="fa fa-times" class="close_vid_share" id="close_vid_share"></i>
        </div>
        <div class="imgs_">
            <!-- <iframe src="player.php?src=media/regular/peffet_regular_image21481660003274.mp4" frameborder="0"></iframe> -->
        </div>
        <div class="caption_bx">
            <input type="text" hidden id="reciever_username" name="reciever_username" value="">
            <input type="text" hidden name="reciever_id" id="reciever_id" value="">
            <input type="text" placeholder="Caption" id="caption_for_video" name="caption_for_video">
            <button type="submit" id="send_vid" name="share_medias"><i class="fa fa-arrow-up send-arr"></i></button>
        </div>
    </div>
</form>
<script src="js/vanillaEmojiPicker.js"></script>
    <script>

        new EmojiPicker({
            trigger: [
                {
                    selector: '.emoji',
                    insertInto: '#chat_msg_input'
                }
            ],
            closeButton: true,
            // specialButtons: green
        });

    </script>
<script src="js/xchat.js"></script>
<?php
include "footer.php";
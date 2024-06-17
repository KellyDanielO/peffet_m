<?php
require 'header.php';
if (!isset($_SESSION['uid'])) {
    header("Location: login");
}
require 'top_nav.php';


?>

<div class="cont_home">
    <div class="share_memories" id="share_write_up">
        <textarea type="text" placeholder="Write something.." id="quick_write_up"></textarea>
        <div class="post_btn">
            <i class="fa fa-arrow-up post_btn_main"></i>
        </div>
    </div>
    <div class="posts_area">
        <div class="new_post_area"></div>
        <!-- <div class="peffet_event box-s pre_event">
            <div class="evt_header">
                <strong>Event by <a href="@dev" class="text-info">Dev the coder</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best trap beat get a reward from me
            </div>
            <div class="group">
                <button class="evt_act_btn">Join event</button>
            </div>
        </div>
        <div class="peffet_event box-s winner">
            <div class="evt_header">
                <strong>Event by <a href="@kelly_daniel" class="text-info">Kelly Daniel</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best anime pics
            </div>
            <div class="group">
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/1. .jpg" alt="@kelly_daniel" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                </div>
            </div>
            <div class="btm_btns">                
                <span class="winner_banner">WINNER</span>   
            </div>
        </div>
        <div class="peffet_event box-s landscape audio">
            <div class="evt_header">
                <strong>Event by <a href="@dev" class="text-info">Dev the coder</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best trap beat get a reward from me
            </div>
            <div class="group gp_mdkvekdlmmp3mmfmkm">
                <div class="group_navi navi_btn_prev" data-group-id="mdkvekdlmmp3mmfmkm">
                    <i class="fa fa-arrow-left navi_btn_prev" data-group-id="mdkvekdlmmp3mmfmkm"></i>
                </div>
                <div class="group_navi navi_btn_forward" data-group-id="mdkvekdlmmp3mmfmkm">
                    <i class="fa fa-arrow-right navi_btn_forward" data-group-id="mdkvekdlmmp3mmfmkm"></i>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio2.mp3" class="evt_audio spec_audio" data-audio-sel-id="ndlfnjlndlhfhioedfnlel" hidden></audio>
                            <div class="pause_or_play pp_ndlfnjlndlhfhioedfnlel">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_ndlfnjlndlhfhioedfnlel" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_ndlfnjlndlhfhioedfnlel" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_ndlfnjlndlhfhioedfnlel"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio_.mp3" class="evt_audio spec_audio" data-audio-sel-id="jkmcjiojisdjpiu9ufjemnpiocjx" hidden></audio>
                            <div class="pause_or_play pp_jkmcjiojisdjpiu9ufjemnpiocjx">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_jkmcjiojisdjpiu9ufjemnpiocjx" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_jkmcjiojisdjpiu9ufjemnpiocjx" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_jkmcjiojisdjpiu9ufjemnpiocjx"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio2.mp3" class="evt_audio spec_audio" data-audio-sel-id="pjcdjsinnsdlksdc" hidden></audio>
                            <div class="pause_or_play pp_pjcdjsinnsdlksdc">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_pjcdjsinnsdlksdc" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_pjcdjsinnsdlksdc" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_pjcdjsinnsdlksdc"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio_.mp3" class="evt_audio spec_audio" data-audio-sel-id="jkmcjiojisdjpiu9ufjemnpiocjx" hidden></audio>
                            <div class="pause_or_play pp_jkmcjiojisdjpiu9ufjemnpiocjx">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_jkmcjiojisdjpiu9ufjemnpiocjx" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_jkmcjiojisdjpiu9ufjemnpiocjx" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_jkmcjiojisdjpiu9ufjemnpiocjx"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio2.mp3" class="evt_audio spec_audio" data-audio-sel-id="dwdcwqzsxws" hidden></audio>
                            <div class="pause_or_play pp_dwdcwqzsxws">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_dwdcwqzsxws" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_dwdcwqzsxws" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_dwdcwqzsxws"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec">
                        <div class="audio_bx">
                            <audio src="img/audio_.mp3" class="evt_audio spec_audio" data-audio-sel-id="klnnccmww9eufen" hidden></audio>
                            <div class="pause_or_play pp_klnnccmww9eufen">
                                <i class="fa fa-play"></i>
                            </div>
                            <div class="progress_and_time">
                                <input type="range" name="" class="progress_range audio_range_klnnccmww9eufen" min="0" max="100" step="0.1" value="0">
                                <div class="bts">
                                    <span class="timestamp tps_klnnccmww9eufen" id="timestamp">00:00</span>
                                    <div class="mute_or_umuted mm_klnnccmww9eufen"><i class="fa fa-volume-up"></i></div>
                                </div>
                            </div>
                            <a href="#">
                                <img src="img/dp.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                </div>
            </div>
        </div>
        <div class="peffet_event box-s">
            <div class="evt_header">
                <strong>Event by <a href="@kelly_daniel" class="text-info">Kelly Daniel</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best anime pics
            </div>
            <div class="group gp_huchv7yc89uv8uvu3irfi">
                <div class="group_navi navi_btn_prev" data-group-id="huchv7yc89uv8uvu3irfi">
                    <i class="fa fa-arrow-left navi_btn_prev" data-group-id="huchv7yc89uv8uvu3irfi"></i>
                </div>
                <div class="group_navi navi_btn_forward" data-group-id="huchv7yc89uv8uvu3irfi">
                    <i class="fa fa-arrow-right navi_btn_forward" data-group-id="huchv7yc89uv8uvu3irfi"></i>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/1. .jpg" alt="@kelly_daniel" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/2. .jpg" alt="@dev" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/3. .jpg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/4. .jpg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/5. .jpg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/6. .jpg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/7. .jpg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/8. .jpg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/9. .png" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/10. .jpg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
            </div>
            <div class="btm_btns">
                
                <a class="evt_act_btn">View all</a>   
            </div>
        </div>
        <div class="peffet_event box-s landscape">
            <div class="evt_header">
                <strong>Event by <a href="@dev" class="text-info">Dev the coder</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best anime pics
            </div>
            <div class="group gp_fnifhu9vu78dd98udhvi">
                <div class="group_navi navi_btn_prev" data-group-id="fnifhu9vu78dd98udhvi">
                    <i class="fa fa-arrow-left navi_btn_prev" data-group-id="fnifhu9vu78dd98udhvi"></i>
                </div>
                <div class="group_navi navi_btn_forward" data-group-id="fnifhu9vu78dd98udhvi">
                    <i class="fa fa-arrow-right navi_btn_forward" data-group-id="fnifhu9vu78dd98udhvi"></i>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/11. .png" alt="@kelly_daniel" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/12. .png" alt="@dev" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/13. .jpeg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/14. .jpeg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/15. .jpeg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/16. .jpeg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/17. .jpeg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/18. .jpeg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <img src="media/event_media/19. .jpeg" alt="@jada" class="classic_img_prev">
                    </div>
                    <div class="group_sec">
                        <img src="media/event_media/20. .jpg" alt="@dav" class="classic_img_prev">
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@jada">@jada</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dav">@dav</a></b>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="peffet_event box-s video">
            <div class="evt_header">
                <strong>Event by <a href="@dev" class="text-info">Dev the coder</a></strong>
                <i class="fa fa-ellipsis-h"></i>
            </div>
            <div class="description">
                Best dance videos
            </div>
            <div class="group gp_fnifhu9vu78ddvdfb98udhvi">
                <div class="group_navi navi_btn_prev" data-group-id="fnifhu9vu78ddvdfb98udhvi">
                    <i class="fa fa-arrow-left navi_btn_prev" data-group-id="fnifhu9vu78ddvdfb98udhvi"></i>
                </div>
                <div class="group_navi navi_btn_forward" data-group-id="fnifhu9vu78ddvdfb98udhvi">
                    <i class="fa fa-arrow-right navi_btn_forward" data-group-id="fnifhu9vu78ddvdfb98udhvi"></i>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image21481660003274.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image79021660819392.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                    <div class="each_play_btn one">
                        <i class="fa fa-play"></i>
                    </div>
                    <div class="each_play_btn two">
                        <i class="fa fa-play"></i>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image21481660003274.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image79021660819392.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                    <div class="each_play_btn one">
                        <i class="fa fa-play"></i>
                    </div>
                    <div class="each_play_btn two">
                        <i class="fa fa-play"></i>
                    </div>
                </div>
                <div class="each_group">
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image21481660003274.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec">
                        <video src="media/regular/peffet_regular_image79021660819392.mp4" preload="buffer" class="video_viewer_btn"></video>
                    </div>
                    <div class="group_sec_act_bx one">
                        <i class="fa fa-heart"></i>
                        <b><a href="@kelly_daniel">@kelly_daniel</a></b>
                    </div>
                    <div class="group_sec_act_bx two">
                        <i class="fa fa-heart"></i>
                        <b><a href="@dev">@dev</a></b>
                    </div>
                    <div class="each_play_btn one">
                        <i class="fa fa-play"></i>
                    </div>
                    <div class="each_play_btn two">
                        <i class="fa fa-play"></i>
                    </div>
                </div>
            </div>
        </div> -->

    </div>
</div>
<script>
    var top_nav_text = document.querySelector(".top_nav_text");
    top_nav_text.textContent = "My Feed";
    getFollowingPost();
    if (window.innerWidth >= 1025) {
        let cont = document.querySelector(".cont_home")
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) + cont.scrollHeight / 1/3 >= cont.scrollHeight) {
                getFollowingPostScroll();
            }
        }
    } else {
        window.onscroll = function(ev) {
            if (window.innerHeight + window.scrollY + document.body.offsetHeight / 1/3 >= document.body.offsetHeight) {
                getFollowingPostScroll();
            }
        }
    }

    document.querySelector(".home_ico").classList.add("active");
</script>
<?php
require 'footer.php';
?>
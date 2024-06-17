<div class="post_reac_holder">
    <i class="fa fa-heart" id="like"></i>
    <i class="fa fa-heart" id="unlike"></i>
</div>
<div class="peffet_action_bar box-s">
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<!-- comment_modal -->
<div class="modal fade" id="comment_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Comment</h5>
                <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <div class="comment_se_sec">
                    <input type="text" placeholder="write your comment..">
                    <i class="fa fa-arrow-circle-right send_comment"></i>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- create area -->
<div class="create_area">
    <div class="create_container">
        <div class="notch"></div>
        <h1 class="create d-none">Create</h1>
        <br>
        <div class="templates">
            <div class="temp regular_create">Regular</div>
            <div class="temp writeup_create_main">Write up</div>
            <div class="temp typing_create">Typing</div>
            <div class="temp reference_create">Reference</div>
            <div class="temp port_create">Portrait</div>
            <div class="temp event_create">An Event</div>
        </div>
    </div>
</div>
<button class="create_btn"></button>
<!-- fullscreen utility handler -->
<div class="full_screen_utility_handler">

</div>
<!-- event -->
<div class="utl_event_manager_container">
    <div class="utl_event_bx">
        <div class="utl_main_bx">
            <div class="notch"></div>
            <div class="utl_bx_content">
                <div class="utl_header">Manage Event</div>
                <ul class="pair_table">
                    <li class="each_pair">
                        <div class="pair_one">
                            <strong>@dev</strong>
                            <p>25 like</p>
                        </div>
                        <div class="pair_one">
                            <strong>@dav</strong>
                            <p>14 like</p>
                        </div>
                    </li>
                    <li class="each_pair">
                        <div class="pair_one">
                            <strong>@dev</strong>
                            <p>25 like</p>
                        </div>
                        <div class="pair_one">
                            <strong>@dav</strong>
                            <p>14 like</p>
                        </div>
                    </li>
                    <li class="each_pair">
                        <div class="pair_one">
                            <strong>@dev</strong>
                            <p>25 like</p>
                        </div>
                        <div class="pair_one">
                            <strong>@dav</strong>
                            <p>14 like</p>
                        </div>
                    </li>
                </ul>
                <button class="close_event" data-event-id="">Close event</button>
            </div>
        </div>
    </div>
</div>
<!-- event end -->
<div class="video_viewer">
    <div class="video_viewer_cont">
    </div>
</div>

<div class="universal_search">
    <div class="search_bx">
        <div class="bx_s search_bx_s"> 
            <?php
                getSearch();
            ?>
        </div>
    </div>
</div>

<div class="modal fade" id="followers_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<div class="comment_bx">
    <div class="cb_container">
        <div class="header d-flex justify-content-between align-items-center">
            <i>Comments</i>
            <i class="fa fa-times comment_exit_btn"></i>
        </div>

        <div class="content_cm">

        </div>
        <div class="footer d-flex justify-content-between align-items-center">
            <button type="button" style="outline:none;border:none;" class="btn btn-secondary at_user_comment">
                @
            </button>
            <textarea type="text" placeholder="write a comment..." class="comment_control" id="comment_input"></textarea>
            <button type="button" class="btn btn-primary create_comment">
                <i class="fa fa-arrow-right create_comment"></i>
            </button>
        </div>
    </div>
</div>
<div class="replies_bx">
    <div class="rep_container">
        <div class="header d-flex justify-content-between align-items-center">
            <i>Replies</i>
            <i class="fa fa-times reply_exit"></i>
        </div>
        <div class="content_cm rep_cm">

        </div>
        <div class="footer d-flex justify-content-between align-items-center">
            <button type="button" class="btn btn-secondary at_user_reply">
                @
            </button>
            <textarea type="text" placeholder="reply someone..." class="comment_control" id="rep_input"></textarea>
            <button type="button" class="btn btn-primary reply_btn_sender">
                <i class="fa fa-arrow-right reply_btn_sender"></i>
            </button>
        </div>
    </div>
</div>
<div class="d-flex flex-column justify-content-between  users_at_list">
</div>
<div class="comment_action_box d-flex justify-content-center align-items-center">
    <div class="box_main d-flex justify-content-center align-items-center">
        <div class="delete_comment d-flex justify-content-between align-items-center w-75">
            <i class="fa fa-trash delete_comment"> Delete Comment </i>
        </div>
    </div>
</div>
<div class="reply_action_box d-flex justify-content-center align-items-center">
    <div class="box_main d-flex justify-content-center align-items-center">
        <div class="delete_reply d-flex justify-content-between align-items-center w-75">
            <i class="fa fa-trash delete_reply"> Delete reply </i>
        </div>
    </div>
</div>
<div class="post_act_utl">
    <div class="post_act_utl_con">
        <div class="action_box">
            <div class="up_btn">
                <button class="share_user_post">
                    <ion-icon name="share-social-outline"></ion-icon>
                    <span>Share</span>
                </button>
                <button class="copy_post_link">
                    <ion-icon name="link-outline"></ion-icon>
                    <span>Link</span>
                </button>
                <button class="delete_post_btn d-none">
                    <ion-icon name="trash-outline"></ion-icon>
                    <span>Delete</span>
                </button>
            </div>
            <div class="msg_bx">
                <div class="search_folls">
                    <i class="fa fa-search"></i>
                    <input type="search" placeholder="Search" id="search_input_bx">
                </div>
                <div class="bx get_followers_to_share_post_to_bx">
                    <b class="text-lime text-center" style="padding: 10px;">Loading</b>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="peffet_hash_and_at_bx">
    <div class="peffet_hash_and_at_bx_header">#Tags</div>
    <div class="bx">
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>@kelly_daniel</b>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>#kelly</b>
            <small>25 posts</small>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>@kelly_daniel</b>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>#kelly</b>
            <small>25 posts</small>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>@kelly_daniel</b>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>#kelly</b>
            <small>25 posts</small>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>@kelly_daniel</b>
        </span>
        <span class="d-flex justify-content-between align-items-center w-100">
            <b>#kelly</b>
            <small>25 posts</small>
        </span>
    </div>
</div>
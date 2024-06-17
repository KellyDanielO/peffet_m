<?php
session_start();
include "includes/function.php";
include "includes/autoloader.php";

if (isset($_POST['valUserName'])) {
    $auth = new auth();
    echo $auth->checkUsername($_POST['username']);
} else if (isset($_POST['SignupNewUser'])) {
    $auth = new auth();
    echo $auth->CreateAcc($_POST['username'], $_POST['email'], $_POST['password']);
} else if (isset($_POST['LoginUser'])) {
    $auth = new auth();
    echo $auth->LoginAcc($_POST['username'], $_POST['password']);
} else if (isset($_POST['getUnameMatch'])) {
    $user = new user();
    echo $user->getUnameMatch($_POST['username']);
} else if (isset($_POST['create_write_up'])) {
    $post = new post();
    echo $post->addPost("write_up_regular", htmlentities($_POST['text_posted']), $_SESSION['uid'], $_SESSION['username']);
} else if (isset($_POST['getCreatedPost'])) {
    $post = new post();
    echo $post->getCreatedPost($_SESSION['uid']);
} else if (isset($_POST['getFollowingPost'])) {
    $post = new post();
    echo $post->getFollowingPost($_SESSION['uid']);
} else if (isset($_POST['reactToPost'])) {
    $post = new post();
    echo $post->reactToPost($_POST['post_id'], $_SESSION['uid'], $_SESSION['username']);
} else if (isset($_POST['getUnameQuery'])) {
    $user = new user();
    echo $user->getUnameQuery($_POST['username']);
} else if (isset($_POST['createNewComment'])) {
    $post = new post();
    echo $post->createNewComment(htmlentities($_POST['comment']), $_POST['post_id'], $_SESSION['uid'], $_SESSION['username']);
} else if (isset($_POST['getComments'])) {
    $post = new post();
    echo $post->getComments($_POST['post_id']);
} else if (isset($_POST['deleteComment'])) {
    $post = new post();
    echo $post->deleteComment($_POST['cid'], $_POST['post_id']);
} else if (isset($_POST['deleteReply'])) {
    $post = new post();
    echo $post->deleteReply($_POST['cid'], $_POST['repid'], $_POST['post_id']);
} else if (isset($_POST['reactToComment'])) {
    $post = new post();
    echo $post->reactToComment($_POST['cid'], $_POST['post_id']);
} else if (isset($_POST['reactToReply'])) {
    $post = new post();
    echo $post->reactToReply($_POST['cid'], $_POST['post_id'], $_POST['repid']);
} else if (isset($_POST['createNewReply'])) {
    $post = new post();
    echo $post->createNewReply($_POST['cid'], $_POST['post_id'], $_SESSION['uid'], htmlentities($_POST['reply']), $_SESSION['username']);
} else if (isset($_POST['getReplies'])) {
    $post = new post();
    echo $post->getReplies($_POST['cid'], $_POST['post_id'], $_SESSION['uid']);
} else if (isset($_POST['createNewRef'])) {
    $post = new post();
    echo $post->createRefPost(htmlentities($_POST['ref_value']), $_SESSION['uid'], $_SESSION['username'], htmlentities($_POST['ref_by']));
} else if (isset($_POST['create_write_up_classic'])) {
    $post = new post();
    echo $post->create_write_up_classic(htmlentities($_POST['text']), $_POST['bg'], $_SESSION['uid'], $_SESSION['username'], $_POST['font']);
} else if (isset($_POST['createNewTyped'])) {
    $post = new post();
    echo $post->createNewTyped(htmlentities($_POST['text']), $_POST['bg'], $_SESSION['uid'], $_SESSION['username'], $_POST['font']);
} else if (isset($_POST['getUserPosts'])) {
    $post = new post();
    echo $post->getUserAccCreatedPost($_POST['uid']);
} else if (isset($_POST['getSavedPost'])) {
    $post = new post();
    echo $post->getUserAccSavedPost($_POST['uid']);
} else if (isset($_POST['getUserPostsWriteUP'])) {
    $post = new post();
    echo $post->getUserPostsWriteUP($_POST['uid']);
} else if (isset($_POST['getPortPost'])) {
    $post = new post();
    echo $post->getPortPost($_POST['uid']);
} else if (isset($_POST['getRegPost'])) {
    $post = new post();
    echo $post->getRegPost($_POST['uid']);
} else if (isset($_POST['getEventPost'])) {
    $post = new post();
    echo $post->getEventPost($_POST['uid']);
} else if (isset($_POST['getUserRefPost'])) {
    $post = new post();
    echo $post->getUserRefPost($_POST['uid']);
} else if (isset($_POST['updateCommentNumber'])) {
    $post = new post();
    echo $post->allCommentCount($_POST['cid']);
} else if (isset($_POST['getUserNotif'])) {
    $user = new user();
    echo $user->getNotif();
}else if (isset($_POST['getUserNotifLikes'])) {
    $user = new user();
    echo $user->getNotifLikes();
}else if (isset($_POST['getUserNotifMentions'])) {
    $user = new user();
    echo $user->getNotifMention();
} else if (isset($_POST['getUserNotifActivity'])) {
    $user = new user();
    echo $user->getNotifActivity();
}  else if (isset($_POST['cap'])) {
    $post = new post();
    echo json_encode($post->createPort($_FILES['port_input']['name'], $_FILES['port_input']['tmp_name'], $_POST['cap'], $_FILES['port_input']['error']));
} else if (isset($_POST['caption_reg'])) {
    $post = new post();
    echo json_encode($post->createReg(htmlentities($_POST['caption_reg'])));
} else if (isset($_POST['caption_for_media'])) {
    $chat = new chat();
    echo json_encode($chat->shareMedia(htmlentities($_POST['caption_for_media']), $_POST['reciever_username'], $_POST['reciever_id']));
} else if (isset($_POST['caption_for_video'])) {
    $chat = new chat();
    echo json_encode($chat->shareMedia(htmlentities($_POST['caption_for_video']), $_POST['reciever_username'], $_POST['reciever_id']));
} else if (isset($_POST['userConnectionSys'])) {
    $user = new user();
    echo $user->f_system($_SESSION['username'], $_POST['reciever']);
} else if (isset($_POST['user_follow_notify_type'])) {
    $user = new user();
    echo $user->user_follow_notify_type($_POST['type'], $_POST['sec'], $_POST['username']);
} else if (isset($_POST['searchforFollower'])) {
    $user = new user();
    echo $user->searchforFollower($_POST['username']);
} else if (isset($_POST['getAllChatList'])) {
    $chat = new chat();
    echo $chat->getAllChatList($_SESSION['uid']);
} else if (isset($_POST['getAllUsersChats'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->getAllUsersChats($_POST['reciever_id'], $_POST['reciever_username'], $_SESSION['uid'], $_SESSION['username']);
    }
} else if (isset($_POST['sendNewChat'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->sendNewChat($_POST['msg'], $_POST['reciever_id'], $_POST['reciever_username'], $_SESSION['uid'], $_SESSION['username']);
    }
} else if (isset($_POST['sendNewTxtChat'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->sendNewTxtChat($_POST['msg'], $_POST['reciever_id'], $_POST['reciever_username'], $_SESSION['uid'], $_SESSION['username']);
    }
} else if (isset($_POST['sendNewGifChat'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->sendNewGifChat($_POST['gif_url'], $_POST['reciever_id'], $_POST['reciever_username'], $_SESSION['uid'], $_SESSION['username']);
    }
}
// else if(isset($_POST['updateCurrentChatBox'])){
//     $chat = new chat();
//     if (isset($_SESSION['uid'])) {    
//         echo $chat->updateCurrentChatBox($_POST['reciever_id'], $_SESSION['uid'], $_POST['existing_msg_id']);

//     }

// }
else if (isset($_POST['updateLeftChatValue'])) {
    $user = new user();
    if (isset($_SESSION['uid'])) {
        echo json_encode($user->getUserDetailsWithId($_POST['reciever_id']));
    }
} else if (isset($_POST['check_msg_type'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->chechWhoSentChat($_POST['mid'], $_POST['reciever_id'], $_SESSION['uid']);
    }
} else if (isset($_POST['fowardMsg'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->fowardMsg($_POST['mid'], $_POST['reciever_id'], $_SESSION['uid'], $_SESSION['username'], $_POST['reciever_username']);
    }
} else if (isset($_POST['unsend_msg'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        echo $chat->unsend_msg($_POST['mid'], $_SESSION['uid']);
    }
} else if (isset($_POST['unsend_for_me'])) {
    $chat = new chat();
    if (isset($_SESSION['uid'])) {
        if ($_SESSION['uid'] !== $_POST['sender_id']) {
            echo $chat->unsend_for_me($_POST['mid'], $_SESSION['uid'], "reciever");
        } else if ($_SESSION['uid'] == $_POST['sender_id']) {
            echo $chat->unsend_for_me($_POST['mid'], $_SESSION['uid'], "sender");
        }
    }
}
else if (isset($_POST['getUserWishListAll'])) {
    $post = new post();
    echo $post->getUserWishListAll($_SESSION['uid']);
} else if (isset($_POST['getUserWishListWriteUp'])) {
    $post = new post();
    echo $post->getUserWishListWriteUp($_SESSION['uid']);
} else if (isset($_POST['getUserWishListPortrait'])) {
    $post = new post();
    echo $post->getUserWishListPortrait($_SESSION['uid']);
} else if (isset($_POST['getUserWishListPortrait'])) {
    $post = new post();
    echo $post->getUserWishListPortrait($_SESSION['uid']);
} else if (isset($_POST['getUserWishListReg'])) {
    $post = new post();
    echo $post->getUserWishListReg($_SESSION['uid']);
} else if (isset($_POST['getUserWishListEvent'])) {
    $post = new post();
    echo $post->getUserWishListEvent($_SESSION['uid']);
}else if (isset($_POST['getUserWishListReference'])) {
    $post = new post();
    echo $post->getUserWishListReference($_SESSION['uid']);
} else if (isset($_POST['send_a'])) {
    $user = new user();
    if (isset($_FILES['dp']['name'])) {
        $k = "yes";
    } else {
        $k = "no";
    }
    echo $user->updateUserinfoForm($k);
} else if (isset($_POST['send_pass'])) {
    $user = new user();
    echo $user->updateUserPassword();
} else if (isset($_POST['follow_btn_checker'])) {
    $user = new user();
    foreach ($_POST['data'] as $row) {
        $output[] = $user->follow_btn_checker($row['username'], $row['spec_id']);
    }
    echo json_encode($output);
} else if (isset($_POST['addToSaved'])) {
    $post = new post();
    echo $post->addToSaved($_POST['post_id']);
}
else if (isset($_POST['users_suggestion'])) {
    $user = new user();
    echo $user->users_suggestion_manual($_SESSION['username']);
} else if (isset($_POST['add_to_fav'])) {
    $chat = new chat();
    echo $chat->add_to_fav($_POST['username'], $_POST['uid']);
} else if (isset($_POST['getAllFavChatList'])) {
    $chat = new chat();
    echo $chat->getFavChatList();
} else if (isset($_POST['getUserSearchPost'])) {
    $search = new search();
    echo $search->getUserSearchPost($_POST['query']);
} else if (isset($_POST['getUserSearchPort'])) {
    $search = new search();
    echo $search->getUserSearchPort($_POST['query']);
} else if (isset($_POST['getUserSearchWriteUp'])) {
    $search = new search();
    echo $search->getUserSearchWriteUp($_POST['query']);
} else if (isset($_POST['getUserSearchReference'])) {
    $search = new search();
    echo $search->getUserSearchReference($_POST['query']);
} else if (isset($_POST['getUserSearchReg'])) {
    $search = new search();
    echo $search->getUserSearchReg($_POST['query']);
}  else if (isset($_POST['getUserSearchEvent'])) {
    $search = new search();
    echo $search->getUserSearchEvent($_POST['query']);
}else if (isset($_POST['users_search_suggestion'])) {
    $search = new search();
    echo $search->explore_search_($_POST['query']);
} else if (isset($_POST['explore_search_sug'])) {
    $search = new search();
    echo $search->explore_search_sug($_POST['query']);
} else if (isset($_POST['show_or_hide_delete_button'])) {
    $post = new post();
    echo $post->show_or_hide_delete_button($_POST['post_id']);
} else if (isset($_POST['delete_post'])) {
    $post = new post();
    echo $post->delete_post($_POST['post_id']);
} else if (isset($_POST['share_post_to_third_party'])) {
    $post = new post();
    echo $post->share_post_to_third_party($_POST['post_id']);
} else if (isset($_POST['get_followers_to_share_post_to'])) {
    $user = new user();
    echo $user->get_followers_to_share_post_to();
}else if (isset($_POST['get_followers_to_share_post_to_search'])) {
    $user = new user();
    echo $user->get_followers_to_share_post_to_search($_POST['username']);
} else if (isset($_POST['send_post_to_msg'])) {
    $chat = new chat();
    echo $chat->send_post_to_msg($_POST['reciever_id'], $_POST['reciever_username'], $_POST['post_id']);
} else if (isset($_POST['getSpecPost'])) {
    $post = new post();
    echo $post->getSpecificPost($_SESSION['uid'], $_POST['post_id']);
} else if (isset($_POST['realTime'])) {
    $post = new post();
    foreach ($_POST as $key => $value) {
        if ($key == 'comments') {
            $ret = json_decode($post->allCommentCount($value['cid']));
            $output[] = ['comments' => $ret];
        } else if ($key == 'pins') {
            $ret = json_decode($post->update_pin_num($value['post_id']));
            $output[] = ['pins' => $ret];
        } else if ($key == 'post_like') {
            $ret = json_decode($post->update_like_num($value['post_id']));
            $output[] = ['post_like' => $ret];
        } else if ($key == 'is_active') {
            if (isset($_SESSION['uid'])) {
                $user = new user();
                $user->is_active();
            }
        } else if ($key == 'getUnSeenNotifNum') {
            $user = new user();
            $output[] = ['getUnSeenNotifNum' => $user->getUnSeenNotifNum()];
        } else if ($key == 'getUnseenChatNumGlob') {
            $chat = new chat();
            $output[] = ['getUnseenChatNumGlob' => $chat->getUnseenChatNumGlob()];
        }
    }
    echo json_encode($output);
} else if (isset($_POST['all_query'])) {
    $chat = new chat();
    foreach ($_POST as $key => $value) {
        if ($key == 'getAllRecentChatQuery') {
            $ret = json_decode($chat->getAllRecent($_SESSION['uid']));
            $output[] = ['getAllRecentChatQuery' => $ret];
        } else if ($key == 'updateCurrentChatBoxQuery') {
            $ret = json_decode($chat->updateCurrentChatBox($value['reciever_id'], $_SESSION['uid'], $value['existing_msg_id']));
            $output[] = ['updateCurrentChatBoxQuery' => $ret];
        } else if ($key == 'updateUnreadChatNumberQuery') {
            foreach ($value as $val) {
                $ret = json_decode($chat->updateUnreadChatNumber($_SESSION['username'], $val['reciever_username'], $val['sel_id']));
                $set[] = $ret;
            }
            $output[] = ['updateUnreadChatNumberQuery' => $set];
        }
    }
    echo json_encode($output);
} else if (isset($_POST['toggleTheme'])) {
    if (isset($_COOKIE['peffet_theme'])) {
        if ($_COOKIE['peffet_theme'] == "light") {
            if (setcookie("peffet_theme", "dark",  time() + (10 * 365 * 24 * 60 * 60), "/")) {
                $output = ['res' => true];
            }
        } else {
            if (setcookie("peffet_theme", "light",  time() + (10 * 365 * 24 * 60 * 60), "/")) {
                $output = ['res' => true];
            }
        }
    } else {
        if (setcookie("peffet_theme", "light",  time() + (10 * 365 * 24 * 60 * 60), "/")) {
            $output = ['res' => true];
        }
    }
    echo json_encode($output);
} else if (isset($_POST['fillFollowerFollowing'])) {
    $user = new user();
    echo $user->fillFollowerFollowing($_POST['username'], $_POST['type']);
} else if (isset($_POST['createEvent'])) {
    $post = new post();
    echo $post->createEvent($_POST['evt_description'], $_POST['media_type'], $_POST['target_audience'], $_POST['orientation'], $_POST['num_of_part']);
} else if (isset($_POST['updateEvtBxJoin'])) {
    $post = new post();
    echo $post->updateEvtBxJoin($_POST['event_id'], $_SESSION['uid'], $_SESSION['username']);
} else if (isset($_POST['event_id_val'])) {
    $post = new post();
    echo json_encode($post->applyForEvent($_FILES['event_pic_sel']['name'], $_FILES['event_pic_sel']['tmp_name'],$_FILES['event_pic_sel']['error'],$_FILES['event_pic_sel']['size']));
} else if (isset($_POST['updateEvtBxManage'])) {
    $post = new post();
    echo $post->updateEvtBxManage($_POST['event_id'], $_SESSION['uid'], $_SESSION['username']);
}  else if (isset($_POST['decline_application'])) {
    $post = new post();
    echo $post->decline_application($_POST['event_id'], $_POST['applicant_id']);
}  else if (isset($_POST['approve_event'])) {
    $post = new post();
    echo $post->approve_event($_POST['event_id']);
} else if (isset($_POST['like_event'])) {
    $post = new post();
    echo $post->like_event($_POST['event_id'], $_POST['pair_id'], $_POST['like_for']);
} else if (isset($_POST['updateEvtBxManagePre'])) {
    $post = new post();
    echo $post->updateEvtBxManagePre($_POST['event_id']);
} else if (isset($_POST['concludeEvent'])) {
    $post = new post();
    echo $post->concludeEvent($_POST['event_id']);
}  else if (isset($_POST['getFollowingPostScroll'])) {
    $post = new post();
    echo $post->getFollowingPostScroll($_SESSION['uid'], $_POST['post_ids']);
}else if (isset($_POST['deleSearch'])) {
    $search = new search();
    $search->deleSearch($_SESSION['uid'], $_POST['sid']);
} else if (isset($_POST['getTrendingHash'])) {
    $post = new post();
    echo json_encode($post->hash_tags_details());
} else if (isset($_POST['getRelatedHashTag'])) {
    $search = new search();
    echo json_encode($search->gethash_tags_details($_POST['q']));
}else if (isset($_POST['getAllEvents'])) {
    $post = new post();
    echo json_encode($post->getAllEvents($_POST['post_id']));
}  else if (isset($_POST['getUserWishListAllScroll'])) {
    $post = new post();
    echo $post->getUserWishListAllScroll($_SESSION['uid'], $_POST['post_ids']);
} else if (isset($_POST['getWishListScrollPortrait'])) {
    $post = new post();
    echo $post->getWishListScrollPortrait($_SESSION['uid'], $_POST['post_ids']);
}else if (isset($_POST['getUsernameSearch'])) {
    $user = new user();
    echo $user->getUnameQuery($_POST['username']);
} else if (isset($_POST['getHashSearch'])) {
    $search = new search();
    echo json_encode($search->gethash_tags_details($_POST['value']));
}
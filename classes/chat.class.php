<?php
class chat extends dbh
{
    public static function prepareSentence($sentence)
    {
        $sentence = trim($sentence);
        if ($sentence[0] == '"')
            $sentence = substr($sentence, 1, strlen($sentence));

        if ($sentence[strlen($sentence) - 1] == '"')
            $sentence = substr($sentence, 0, -1);

        if ($sentence[0] == '"' || $sentence[strlen($sentence) - 1] == '"')
            return self::prepareSentence($sentence);
        return $sentence;
    }

    public function getAllChatList($uid)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_uid` = ? OR `reciever_uid` = ? ORDER BY `time` DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $uid]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('num' => 'empty');
            } else {

                foreach ($stmt->fetchAll() as $chat_values) {
                    if ($uid == $chat_values['sender_uid']) {
                        $g_username = $chat_values['reciever_uid'];
                    } else {
                        $g_username = $chat_values['sender_uid'];
                    }
                    $uname[] = $g_username;
                }
                $uniq_uname = array_unique($uname);
                foreach ($uniq_uname as $g_username) {
                    $u_sql = "SELECT `uid`, `username`, `avatar`, `name` FROM `users` WHERE `uid` = ?";
                    $u_stmt = $this->connect()->prepare($u_sql);
                    $u_stmt->execute([$g_username]);
                    if ($u_stmt) {
                        $u_fetch = $u_stmt->fetch();
                        $set = array('uid' => $u_fetch['uid'], 'avatar' => $u_fetch['avatar'], 'name' => $u_fetch['name'], 'username' => $u_fetch['username'], 'num' => 'all good');
                        $output[] = $set;
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getAllUsersChats($reciever_uid, $reciever_username, $sender_uid, $sender_username)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_uid` = ? AND `reciever_uid` = ? OR `sender_uid` = ? AND `reciever_uid` = ? AND `msg_type` != 'message_request'";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sender_uid, $reciever_uid, $reciever_uid, $sender_uid]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('num' => 'empty');
            } else {
                foreach ($stmt->fetchAll() as $chat_values) {
                    $mid = $chat_values['mid'];
                    $msg_category = $chat_values['msg_category'];
                    $msg_type = $chat_values['msg_type'];
                    $msg_type = $chat_values['msg_type'];
                    $sender_uid = $chat_values['sender_uid'];
                    $reciever_uid = $chat_values['reciever_uid'];
                    $sender_username = $chat_values['sender_username'];
                    $reciever_uid = $chat_values['reciever_uid'];
                    $sender_msg_copy = $chat_values['sender_msg_copy'];
                    $reciever_msg_copy = $chat_values['reciever_msg_copy'];
                    $main_msg = $chat_values['main_msg'];
                    $display_time = $chat_values['display_time'];
                    $msg_req_status = $chat_values['msg_req_status'];
                    $deleted_for_sender = $chat_values['deleted_for_sender'];
                    $deleted_for_reciever = $chat_values['deleted_for_reciever'];
                    $reciever_seen_status = $chat_values['reciever_seen_status'];
                    $time = $chat_values['time'];

                    if ($sender_uid == $_SESSION['uid']) {
                        $vt = "sender";
                    } else {
                        $vt = "reciever";
                    }

                    if($msg_type == 'shared_images'){
                        $imgs = $this->getChatSharedMedia($mid);                        
                        $set = array('num' => 'all good', 'mid' => $mid, 'vt' => $vt, 'reciever_id' => $reciever_uid, 'msg_cat' => $msg_category, 'main_msg' => $main_msg, 'd_time' => $display_time, 'time' => $time, 'msg_type' => $msg_type, 'reciever_view_status' => $reciever_seen_status, 'deleted_for_sender' => $deleted_for_sender, 'deleted_for_reciever' => $deleted_for_reciever, 'img_files' => $imgs);
                        $output[] = $set;
                    }else{                        
                        $set = array('num' => 'all good', 'mid' => $mid, 'vt' => $vt, 'reciever_id' => $reciever_uid, 'msg_cat' => $msg_category, 'main_msg' => $main_msg, 'd_time' => $display_time, 'time' => $time, 'msg_type' => $msg_type, 'reciever_view_status' => $reciever_seen_status, 'deleted_for_sender' => $deleted_for_sender, 'deleted_for_reciever' => $deleted_for_reciever);
                        $output[] = $set;
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getChatSharedMedia($mid)
    {
        $sql = "SELECT * FROM `chat_media_table` WHERE `mid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$mid]);
        if($stmt){
            if($stmt->rowCount() > 0){
                foreach ($stmt->fetchAll() as $value) {
                    $set = [
                        'name' => $value['name'],
                        'type' => $value['type'],
                        'time' => $value['time']
                    ];
                    $output[] = $set;
                }
            }
        }
        return $output;
    }
    public function sendNewChat($msg_main_txt, $reciever_uid, $reciever_username, $sender_uid, $sender_username)
    {
        date_default_timezone_set("Africa/Lagos");
        $msg = htmlentities($msg_main_txt);
        $mid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
        $msg_cat = "users_chat";
        $msg_type = "normal";
        $d_time = date("j M Y");
        $time = date("h:i a");
        $d_for_sender = false;
        $d_for_reciever = false;
        $r_s_status = false;
        $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`,`connection`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([
            $mid, $msg_cat, $msg_type, $sender_uid, $reciever_uid, $sender_username, $reciever_username, $msg, $msg, $msg, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time, "chat_conn_" . $reciever_username . "_and_" . $sender_username
        ]);
        if ($stmt) {

            $output = array("return" => true);
        } else {
            $output = array("return" => false);
        }
        return json_encode($output);
    }
    public function sendNewTxtChat($msg_main_txt, $reciever_uid, $reciever_username, $sender_uid, $sender_username)
    {
        $c_sql = "SELECT * FROM `fanf` WHERE `reciever` = ? AND `sender` = ?";
        $c_stmt = $this->connect()->prepare($c_sql);
        $c_stmt->execute([$reciever_username, $sender_username]);
        if($c_stmt){
            if($c_stmt->rowCount() > 0){
                date_default_timezone_set("Africa/Lagos");
                $msg = htmlentities($msg_main_txt);
                $mid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
                $msg_cat = "users_chat";
                $msg_type = "normal";
                $d_time = date("j M Y");
                $time = date("h:i a");
                $d_for_sender = false;
                $d_for_reciever = false;
                $r_s_status = false;
                $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([
                    $mid, $msg_cat, $msg_type, $sender_uid, $reciever_uid, $sender_username, $reciever_username, $msg, $msg, $msg, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time
                ]);
                if ($stmt) {
        
                    $output = array("return" => true);
                } else {
                    $output = array("return" => false);
                }
            }else{
                date_default_timezone_set("Africa/Lagos");
                $msg = htmlentities($msg_main_txt);
                $mid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
                $msg_cat = "users_chat";
                $msg_type = "message_request";
                $d_time = date("j M Y");
                $time = date("h:i a");
                $d_for_sender = false;
                $d_for_reciever = false;
                $r_s_status = false;
                $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([
                    $mid, $msg_cat, $msg_type, $sender_uid, $reciever_uid, $sender_username, $reciever_username, $msg, $msg, $msg, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time
                ]);
                if ($stmt) {

                    $output = array("return" => true);
                } else {
                    $output = array("return" => false);
                }
            }
        }
        return json_encode($output);
    }
    public function sendNewGifChat($msg_main_txt, $reciever_uid, $reciever_username, $sender_uid, $sender_username)
    {
        date_default_timezone_set("Africa/Lagos");
        $msg = htmlentities($msg_main_txt);
        $mid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
        $msg_cat = "users_chat";
        $msg_type = "gif";
        $d_time = date("j M Y");
        $time = date("h:i a");
        $d_for_sender = false;
        $d_for_reciever = false;
        $r_s_status = false;
        $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([
            $mid, $msg_cat, $msg_type, $sender_uid, $reciever_uid, $sender_username, $reciever_username, $msg, $msg, $msg, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time
        ]);
        if ($stmt) {

            $output = array("return" => true);
        } else {
            $output = array("return" => false);
        }
        return json_encode($output);
    }
    public function send_post_to_msg($reciever_id, $reciever_username, $post_id)
    {
        date_default_timezone_set("Africa/Lagos");
        $sender_username = $_SESSION['username'];
        $sender_uid = $_SESSION['uid'];
        $mid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
        $msg_cat = "users_chat";
        $msg_type = "post_attachment";
        $d_time = date("j M Y");
        $time = date("h:i a");
        $d_for_sender = false;
        $d_for_reciever = false;
        $r_s_status = false;
        $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([
            $mid, $msg_cat, $msg_type, $sender_uid, $reciever_id, $sender_username, $reciever_username, $post_id, $post_id, $post_id, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time
        ]);
        if ($stmt) {
            $output = array("return" => "true");
        } else {
            $output = array("return" => "false");
        }
        return json_encode($output);
    }
    public function setAsRead($mid)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `mid` IN ($mid)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        if($stmt){
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    if($row['sender_username'] == $_SESSION['username']){
                        // 
                    }else{
                        $sql = "UPDATE `chat_central_holder` SET `reciever_seen_status`= 'yes' WHERE `mid` = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row['mid']]);
                        if($stmt){
                            //
                        }
                    }
                }
            }
        }
    }
    public function updateCurrentChatBox($reciever_id, $sender_id, $g)
    {
        foreach ($g as $z) {
            $d[] = "'$z'";
        }
        $exsting_id = implode(',', $d);
        $this->setAsRead($exsting_id);

        $sql = "SELECT * FROM chat_central_holder WHERE  mid NOT IN ($exsting_id) AND sender_uid = ? AND reciever_uid = ? OR   mid NOT IN ($exsting_id) AND sender_uid = ? AND reciever_uid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sender_id, $reciever_id, $reciever_id, $sender_id]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('num' => 'empty');
            } else {
                foreach ($stmt->fetchAll() as $chat_values) {
                    $mid = $chat_values['mid'];
                    $msg_category = $chat_values['msg_category'];
                    $msg_type = $chat_values['msg_type'];
                    $msg_type = $chat_values['msg_type'];
                    $sender_uid = $chat_values['sender_uid'];
                    $reciever_uid = $chat_values['reciever_uid'];
                    $sender_username = $chat_values['sender_username'];
                    $reciever_uid = $chat_values['reciever_uid'];
                    $sender_msg_copy = $chat_values['sender_msg_copy'];
                    $reciever_msg_copy = $chat_values['reciever_msg_copy'];
                    $main_msg = $chat_values['main_msg'];
                    $display_time = $chat_values['display_time'];
                    $msg_req_status = $chat_values['msg_req_status'];
                    $deleted_for_sender = $chat_values['deleted_for_sender'];
                    $deleted_for_reciever = $chat_values['deleted_for_reciever'];
                    $reciever_seen_status = $chat_values['reciever_seen_status'];
                    $time = $chat_values['time'];

                    if ($sender_uid == $_SESSION['uid']) {
                        $vt = "sender";
                    } else {
                        $vt = "reciever";
                    }
                    // $set = array('num' => 'all good', 'mid' => $mid, 'vt' => $vt, 'reciever_id' => $reciever_uid, 'msg_cat' => $msg_category, 'main_msg' => $main_msg, 'd_time' => $display_time, 'time' => $time, 'msg_type' => $msg_type, 'reciever_view_status' => $reciever_seen_status, 'deleted_for_sender' => $deleted_for_sender, 'deleted_for_reciever' => $deleted_for_reciever);
                    // $output[] = $set;
                    if($msg_type == 'shared_images'){
                        $imgs = $this->getChatSharedMedia($mid);                        
                        $set = array('num' => 'all good', 'mid' => $mid, 'vt' => $vt, 'reciever_id' => $reciever_uid, 'msg_cat' => $msg_category, 'main_msg' => $main_msg, 'd_time' => $display_time, 'time' => $time, 'msg_type' => $msg_type, 'reciever_view_status' => $reciever_seen_status, 'deleted_for_sender' => $deleted_for_sender, 'deleted_for_reciever' => $deleted_for_reciever, 'img_files' => $imgs);
                        $output[] = $set;
                    }else{                        
                        $set = array('num' => 'all good', 'mid' => $mid, 'vt' => $vt, 'reciever_id' => $reciever_uid, 'msg_cat' => $msg_category, 'main_msg' => $main_msg, 'd_time' => $display_time, 'time' => $time, 'msg_type' => $msg_type, 'reciever_view_status' => $reciever_seen_status, 'deleted_for_sender' => $deleted_for_sender, 'deleted_for_reciever' => $deleted_for_reciever);
                        $output[] = $set;
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function chechWhoSentChat($mid, $reciever_id, $sender_id)
    {
        $sql = "SELECT * FROM chat_central_holder WHERE  mid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$mid]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                $display_time = $row['display_time'];
                $time = $row['time'];
                if ($sender_id == $row['sender_uid']) {
                    $output = array('temp' => "yes", 'time' => "$display_time $time", 'mid' => $row['mid'], 'reciever_id' => $row['reciever_uid'], 'sender_id' => $row['sender_uid']);
                } else {
                    $output = array('temp' => "no", 'time' => "$display_time $time");
                }
            }
        }
        return json_encode($output);
    }
    public function fowardMsg($mid, $reciever_id, $sender_id, $sender_username, $reciever_username)
    {
        date_default_timezone_set("Africa/Lagos");
        $sql = "SELECT * FROM chat_central_holder WHERE  mid = ? AND sender_uid = ?  OR  mid = ? AND reciever_uid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$mid, $sender_id, $mid, $sender_id]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $initial_chat_values) {
                $newmid = "chats_" . $reciever_username . "_and_" . $sender_username . time() . bin2hex(random_bytes(10));
                $nsql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                $nstmt = $this->connect()->prepare($nsql);
                $nstmt->execute([$newmid, $initial_chat_values['msg_category'], $initial_chat_values['msg_type'], $sender_id, $reciever_id, $sender_username, $reciever_username, $initial_chat_values['main_msg'], $initial_chat_values['main_msg'], $initial_chat_values['main_msg'], $initial_chat_values['display_time'], $initial_chat_values['msg_req_status'], $initial_chat_values['deleted_for_sender'], $initial_chat_values['deleted_for_reciever'], $initial_chat_values['reciever_seen_status'], $initial_chat_values['time']]);
                if ($nstmt) {
                    $output = array('response' => true);
                } else {

                    $output = array('response' => false);
                }
            }
        } else {
            // $output = "no";
        }
        return json_encode($output);
    }
    public function unsend_msg($mid, $uid)
    {
        $sql = "DELETE FROM `chat_central_holder` WHERE `mid` = ? AND `sender_uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$mid, $uid]);
        if (!$stmt) {
            $output = array('response' => false);
        } else {
            $output = array('response' => true);
        }
        return json_encode($output);
    }
    public function unsend_for_me($mid, $uid, $for)
    {
        if ($for == "sender") {
            $var = "deleted_for_sender";
        } else {
            $var = "deleted_for_reciever";
        }
        $sql = "UPDATE `chat_central_holder` SET $var = ? WHERE `mid`= ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['yes', $mid]);
        if (!$stmt) {
            $output = array('response' => false);
        } else {
            $output = array('response' => true);
        }
        return json_encode($output);
    }
    public function updateUnreadChatNumber($username, $reciever_username, $sel_id)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_username` = ? AND `reciever_username` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$reciever_username, $username]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['reciever_seen_status'] == '') {
                    $num_array[] = "yep";
                }else{
                    $num_array = [];
                }
            }
            $output = array("total" => count($num_array), "sel_id" => $sel_id);
        }else{
            $output = array("total" => 0, "sel_id" => $sel_id);
        }
        return json_encode($output);
    }
    public function updateUnreadChatNumberSpec($username, $reciever_username)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_username` = ? AND `reciever_username` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$reciever_username, $username]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['reciever_seen_status'] == '') {
                    $num_array[] = "yep";
                }else{
                    $num_array = [];
                }
            }
            return count($num_array);
        }else{
            return 0;
        }
        
    }
    public function getAllRecent($uid)
    {
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_uid` = ? OR `reciever_uid` = ? ";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $uid]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('num' => 'empty');
            } else {

                foreach ($stmt->fetchAll() as $chat_values) {
                    if ($uid == $chat_values['sender_uid']) {
                        $g_username = $chat_values['reciever_uid'];
                    } else {
                        $g_username = $chat_values['sender_uid'];
                    }
                    $uname[] = $g_username;
                }
                // $uniq_uname = array_unique(flatten($uname));
                // arsort($uniq_uname);
                // $uniq_uname = $uname;
                // $uniq_uname = array_unique($arr);
                // $uniq_uname = array_values($uname);
                $uniq_uname = removeDuplicates($uname);
                foreach ($uniq_uname as $g_username) {
                    $u_sql = "SELECT `uid`, `username`, `avatar`, `name` FROM `users` WHERE `uid` = ?";
                    $u_stmt = $this->connect()->prepare($u_sql);
                    $u_stmt->execute([$g_username]);
                    if ($u_stmt) {
                        $u_fetch = $u_stmt->fetch();
                        $num_u = $this->updateUnreadChatNumberSpec($_SESSION['username'], $u_fetch['username']);
                        $set = array('uid' => $u_fetch['uid'], 'avatar' => $u_fetch['avatar'], 'name' => $u_fetch['name'], 'username' => $u_fetch['username'], 'num' => 'all good', 'number_of_unread' => $num_u);
                        $output[] = $set;
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function add_to_fav($username, $uid)
    {
        $time = date("d-m-Y");
        $sel_sql = "SELECT * FROM `users_chat_fav` WHERE `saver_username` = ? AND `saved_username` = ?";
        $sel_stmt = $this->connect()->prepare($sel_sql);
        $sel_stmt->execute([$_SESSION['username'], $username]);
        if ($sel_stmt) {
            if($sel_stmt->rowCount() > 0){
                $sql = "DELETE FROM `users_chat_fav` WHERE `saver_username` = ? AND `saved_username` = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$_SESSION['username'], $username]);
                if($stmt){
                    $output = "deleted";
                }
            }else{
                $sql = "INSERT INTO `users_chat_fav`(`saver_username`, `saved_username`,  `saved_uid`, `time`) VALUES (?,?,?,?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$_SESSION['username'], $username, $uid, $time]);
                if($stmt){
                    $output = "added";
                }
            }
        }
        return json_encode($output);
    }
    public function getFavChatList()
    {
        $sel_sql = "SELECT * FROM `users_chat_fav` WHERE `saver_username` = ? ORDER BY `time` DESC";
        $sel_stmt = $this->connect()->prepare($sel_sql);
        $sel_stmt->execute([$_SESSION['username']]);
        if ($sel_stmt) {
            if($sel_stmt->rowCount() > 0){
                foreach ($sel_stmt->fetchAll() as $row) {
                   $unames[] = $row['saved_username'];
                }
                $uniq_uname = array_unique($unames);
                foreach ($uniq_uname as $g_username) {
                    $u_sql = "SELECT `uid`, `username`, `avatar`, `name` FROM `users` WHERE `username` = ?";
                    $u_stmt = $this->connect()->prepare($u_sql);
                    $u_stmt->execute([$g_username]);
                    if ($u_stmt) {
                        $u_fetch = $u_stmt->fetch();
                        $set = array('uid' => $u_fetch['uid'], 'avatar' => $u_fetch['avatar'], 'name' => $u_fetch['name'], 'username' => $u_fetch['username'], 'num' => 'all good');
                        $output[] = $set;
                    }
                }
            }
        }

       
        return json_encode($output);
    }
    public function shareMedia($caption, $reciever_username, $reciever_uid)
    {
        date_default_timezone_set('Africa/Lagos');
        $uid = $_SESSION['uid'];
        $mid = "message_chat_". $reciever_username . "_and_" . $_SESSION['username']  . time() . bin2hex(random_bytes(15)) . $uid;
        $time = date('m/d/Y h:i:s a');
        foreach ($_FILES['shareImage']['name'] as $key => $value) {
            $filename = $_FILES['shareImage']['name'][$key];
            $fileTmpName = $_FILES['shareImage']['tmp_name'][$key];
            $error = $_FILES['shareImage']['error'][$key];
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            $filetype = ['jpg', 'jpeg', 'png', 'mov', 'mp4', 'avi'];
            $newfilename = "peffet_chat_image" . rand(1111, 9999) . time() . "." . $ext;
            $target = "media/chat_media/images/" . basename($newfilename);
            $ext_c = pathinfo($_FILES['shareImage']['name'][0], PATHINFO_EXTENSION);
            if (in_array($ext_c, ['png', 'jpg', 'jpeg'])) {
                $type_c = "image";
            } else if (in_array($ext_c, ['mov', 'mp4', 'avi'])) {
                $type_c = "video";
            }
            if (!in_array($ext, $filetype)) {

                return 'invalid file format';
                exit();
            } else if ($error) {
                return 'file error';
                exit();
            } else {
                $upload = move_uploaded_file($fileTmpName, $target);
                if ($upload) {
                    $sql = "INSERT INTO `chat_media_table`(`mid`, `name`, `type`, `time`) VALUES (?,?,?,?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$mid, $newfilename, $type_c, $time]);
                    if (!$stmt) {
                        exit();
                    }
                }
            }
        }
        $msg = htmlentities($caption);
        $msg_cat = "users_chat";
        $msg_type = "shared_images";
        $d_time = date("j M Y");
        $time = date("h:i a");
        $d_for_sender = false;
        $d_for_reciever = false;
        $r_s_status = false;
        $sql = "INSERT INTO `chat_central_holder`(`mid`, `msg_category`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([
            $mid, $msg_cat, $msg_type, $uid, $reciever_uid, $_SESSION['username'], $reciever_username, $msg, $msg, $msg, $d_time, "accepted", $d_for_sender, $d_for_reciever, $r_s_status, $time
        ]);
        if ($stmt) {
            return 'successful';
        }
    }
    public function getUnseenChatNumGlob()
    {
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `chat_central_holder` WHERE `sender_uid` = ? OR `reciever_uid` = ? ";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $uid]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('status' => 'empty','num' => 'empty');
            } else {

                foreach ($stmt->fetchAll() as $chat_values) {
                    if ($uid == $chat_values['sender_uid']) {
                        $g_username = $chat_values['reciever_uid'];
                    } else {
                        $g_username = $chat_values['sender_uid'];
                    }
                    $uname[] = $g_username;
                }
                $uniq_uname = array_unique($uname);
                $output = ['status' => 'good', 'num' => count($uniq_uname)];
            }
        }
        return $output;
    }
}

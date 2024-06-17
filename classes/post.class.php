
  <?php
class post extends dbh
{
    public static function prepareSentence($sentence)
    {
        error_reporting(0);
        $sentence = trim($sentence);
        if ($sentence[0] == '"')
            $sentence = substr($sentence, 1, strlen($sentence));

        if ($sentence[strlen($sentence) - 1] == '"')
            $sentence = substr($sentence, 0, -1);

        if ($sentence[0] == '"' || $sentence[strlen($sentence) - 1] == '"')
            return self::prepareSentence($sentence);
        return $sentence;
    }
    public function removeFromwishList($post_id)
    {
        $i_sql = "DELETE FROM `wishlist` WHERE `wisher_id` = ? AND `wish_id` = ?";
        $i_stmt = $this->connect()->prepare($i_sql);
        $i_stmt->execute([$_SESSION['uid'], $post_id]);
        if (!$i_stmt) {
            // 
        }
    }
    public function check_if_post_saved($post_id, $uid)
    {
        $sql = "SELECT * FROM `usersavedpost` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                return "active";
            } else {
                return "";
            }
        }
    }
    public function addTowishList($post_id)
    {
        date_default_timezone_set('Africa/Lagos');
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                $i_sql = "INSERT INTO `wishlist`(`text_content`, `type`, `initial_poster`, `time`, `wish_id`, `wisher_id`, `wisher_username`) VALUES (?, ?, ?, ?, ?, ?, ?)";
                $i_stmt = $this->connect()->prepare($i_sql);
                $i_stmt->execute([$row['title'], $row['type'], $row['username'], date("Y/d/m H:i:s", time()), $post_id, $_SESSION['uid'], $_SESSION['username']]);
                if (!$i_stmt) {
                    // 
                }
            }
        }
    }
    public function notifyUserPostCreated($post_id, $username, $uid)
    {
        date_default_timezone_set('Africa/Lagos');
        $nid = "post_new_write_up_notif" . time() . bin2hex(random_bytes(15));
        $time = date('m/d/Y h:i:s a');
        $sql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$nid, "post_created", $username, $username, "post_created", "unseen", "unseen", $post_id, $time]);
        if (!$stmt) {
            # code...
        }
        # code...
    }
    public function notifyNewPostToFollower($type, $post_id, $poster_username)
    {
        switch ($type) {
            case 'write_up':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND write_up = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_write_up_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "write up", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;
            case 'typing_text':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND write_up = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_typing_text_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "typing_text", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;
            case 'regular':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND regular = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_regular_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "regular", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;
            case 'portrait':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND portrait = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_portrait_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "portrait", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;
            case 'reference':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND reference = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_reference_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "reference", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;
            case 'peffet_event':
                $stmt = $this->connect()->prepare("SELECT * FROM fanf WHERE reciever = ? AND peffet_event = ?");
                $stmt->execute([$poster_username, 'notify']);
                if ($stmt && $stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $nid = "post_new_peffet_event_notif" . time() . bin2hex(random_bytes(15));
                        $time = date('m/d/Y h:i:s a');
                        $nsql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "new post", $poster_username, $row['sender'], "peffet_event", "unseen", "unseen", $post_id, $time]);
                        if (!$stmt) {
                            # code...
                        }
                    }
                }
                break;

            default:
                # code...
                break;
        }
    }
    public function NotifyUserCallPostCaption($username, $text, $url, $type = "post", $id)
    {
        $fist_text =  explode(" ", $text);
        foreach ($fist_text as $row) {
            if ($row[0] == "@") {
                $new_username = explode("@", $row);
                if ($_SESSION['username'] !== $new_username[1]) {
                    if ($type == "post") {
                        $nid = "Post_notif" . bin2hex(random_bytes(25));
                        $time = date('m/d/Y h:i:s a');
                        $sql = "INSERT INTO `notification`
                        (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `time`) 
                        VALUES (?,?,?,?,?,?,?,?)";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$nid, "post", $username, $new_username[1], "unseen", "unseen", $id, $time]);
                    }
                }
            }
        }
    }
    public function notifyUsercommentCall($username, $text, $post_id, $cid)
    {
        $fist_text =  explode(" ", $text);
        foreach ($fist_text as $row) {
            if ($row[0] == "@") {
                $new_username = explode("@", $row);
                if ($_SESSION['username'] !== $new_username[1]) {
                    $nid = "comment_notif" . bin2hex(random_bytes(25));
                    $time = date('m/d/Y h:i:s a');
                    $sql = "INSERT INTO `notification`
                (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `cid`, `time`) 
                VALUES (?,?,?,?,?,?,?,?,?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$nid, "comment", $username, $new_username[1], "unseen", "unseen", $post_id, $cid, $time]);
                }
            }
        }
        // return $output;
    }
    public function notifyUsercomment($username, $post_id, $cid)
    {
        if ($_SESSION['username'] !== $username) {
            $nid = "comment_notif" . bin2hex(random_bytes(25));
            $time = date('m/d/Y h:i:s a');
            $sql = "INSERT INTO `notification`
                (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `cid`, `time`) 
                VALUES (?,?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$nid, "commented", $_SESSION['username'], $username, "unseen", "unseen", $post_id, $cid, $time]);
        }
        // return $output;
    }
    public function notifyUserReplyCall($username, $text, $post_id, $cid, $repid)
    {
        $fist_text =  explode(" ", $text);
        foreach ($fist_text as $row) {
            if ($row[0] == "@") {
                $new_username = explode("@", $row);
                if ($_SESSION['username'] !== $new_username[1]) {
                    $nid = "rep_notif" . bin2hex(random_bytes(25));
                    $time = date('m/d/Y h:i:s a');
                    $sql = "INSERT INTO `notification`
                (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `cid`, `repid`, `time`) 
                VALUES (?,?,?,?,?,?,?,?,?,?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$nid, "reply", $username, $new_username[1], "unseen", "unseen", $post_id, $cid, $repid, $time]);
                }
            }
        }
        // return $output;
    }
    public function notifyUserReply($username, $post_id, $cid, $repid)
    {
        if ($_SESSION['username'] !== $username) {
            $nid = "rep_notif" . bin2hex(random_bytes(25));
            $time = date('m/d/Y h:i:s a');
            $sql = "INSERT INTO `notification`
                (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `cid`, `repid`, `time`) 
                VALUES (?,?,?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$nid, "replyed", $_SESSION['username'], $username, "unseen", "unseen", $post_id, $cid, $repid, $time]);
        }
    }
    public function addPost($type, $text, $uid, $username)
    {
        date_default_timezone_set('Africa/Lagos');
        if ($type == "write_up_regular") {

            $post_id = bin2hex(random_bytes(28));
            $time = date('m/d/Y h:i:s a');
            $url = "/detailview?user_id=$uid&&post_id=$post_id";
            $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
            $sql = "INSERT INTO `central_post_holder`
                    (`uid`, `post_id`,`username`, `title`, `type`, `url`,  `time`, `Location`) 
                    VALUES (?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);

            $stmt->execute([$uid, $post_id, $username, $text, $type, $url, $time, $location]);
            if (!$stmt) {
                $output = "error";
            } else {
                $this->NotifyUserCallPostCaption($username, $this->prepareSentence($text), $url, "post", $post_id);
                $this->notifyNewPostToFollower("write_up", $post_id, $username);
                $sql = "SELECT * FROM users WHERE uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $output = array(
                            'post_id' => $post_id,
                            'username' => $row['username'],
                            'avatar' => $row['avatar'],
                            'time' => $time,
                            'text' => $text,
                            'post_id' => $post_id,
                            'time_ago' => time_ago($time)
                        );
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getPostReactions($post_id, $uid)
    {
        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt) {
            $output[] = 0;
            foreach ($stmt->fetchAll() as $row) {
                $output[] = $row['uid'];
            }
            $output_main = array('num' => $stmt->rowCount(), 'entire_query' => $stmt->fetchAll());
        }
        return json_encode($output_main);
    }
    public function CommentCount($post_id)
    {
        $sql = "SELECT * FROM `comments_table` WHERE post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function regMedia($post_id)
    {
        $images_sql = "SELECT * FROM `regular_post_media_table` WHERE `post_id` = ?";
        $images_stmt = $this->connect()->prepare($images_sql);
        $images_stmt->execute([$post_id]);
        foreach ($images_stmt->fetchAll() as $img) {
            $arrayName = array('img' => $img['name'], 'type_of' => $img['type'], 'post_id' => $post_id);
            $imgs[] = $arrayName;
        }
        return $imgs;
    }
    public function getCreatedPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` ORDER BY rand() LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['title'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount(
                                    $row1['post_id']
                                ),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' =>  $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getCreatedPostScroll($uid, $ids)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` NOT IN($ids) ORDER BY rand() LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['title'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount(
                                    $row1['post_id']
                                ),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' =>  $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getFollowingPost($uid)
    {
        $get_following_sql = "SELECT * FROM `fanf` WHERE `sender` = ?";
        $get_following_stmt = $this->connect()->prepare($get_following_sql);
        $get_following_stmt->execute([$_SESSION['username']]);
        if ($get_following_stmt) {
            if ($get_following_stmt->rowCount() > 0) {
                foreach ($get_following_stmt->fetchAll() as $row) {
                    $usernames[] = $row['reciever'];
                }
                $usernames[] = $_SESSION['username'];
                foreach ($usernames as $z) {
                    $d[] = "'$z'";
                }
                $unames = implode(',', $d);

                // $output = $unames;
                $sql = "SELECT * FROM `central_post_holder` WHERE `username` IN ($unames) ORDER BY rand() LIMIT 20";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $uid]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            if ($is_liked == true) {
                                $is_liked = true;
                            } else {
                                $is_liked = false;
                            }
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'write_up_regular') {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['title'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount(
                                            $row1['post_id']
                                        ),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'peffet_event') {
                                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                                }
                            }
                        }
                    }
                }
            } else {
                $output = array('number' => false);
            }
        }

        return json_encode($output);
    }
    public function getFollowingPostScroll($uid, $post_ids)
    {
        $get_following_sql = "SELECT * FROM `fanf` WHERE `sender` = ?";
        $get_following_stmt = $this->connect()->prepare($get_following_sql);
        $get_following_stmt->execute([$_SESSION['username']]);
        if ($get_following_stmt) {
            if ($get_following_stmt->rowCount() > 0) {
                foreach ($get_following_stmt->fetchAll() as $row) {
                    $usernames[] = $row['reciever'];
                }
                $usernames[] = $_SESSION['username'];
                foreach ($usernames as $z) {
                    $d[] = "'$z'";
                }
                $unames = implode(',', $d);
                $post_ids_ex = explode("||",$post_ids);
                foreach ($post_ids_ex as $z) {
                    $d[] = "'$z'";
                }
                $ids = implode(',', $d);

                // $output = $unames;
                $sql = "SELECT * FROM `central_post_holder` WHERE `username` IN ($unames) AND `post_id` NOT IN($ids) ORDER BY rand() LIMIT 20";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $uid]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            if ($is_liked == true) {
                                $is_liked = true;
                            } else {
                                $is_liked = false;
                            }
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'write_up_regular') {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['title'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount(
                                            $row1['post_id']
                                        ),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'peffet_event') {
                                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                                }
                            }
                        }
                    }
                }
            } else {
                $output = array('number' => false);
            }
        }

        return json_encode($output);
    }
    public function getCountryCreatedPost($uid)
    {
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `Location` LIKE ? ORDER BY rand() LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$location%"]);
        if ($stmt->rowCount() > 20) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['title'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount(
                                    $row1['post_id']
                                ),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        } else {
            $output = json_decode($this->getCreatedPost($uid));
        }
        return json_encode($output);
    }
    public function getCountryCreatedPostScroll($uid, $ids)
    {
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `Location` LIKE ? AND `post_id` NOT IN($ids) ORDER BY rand() LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$location%"]);
        if ($stmt->rowCount() > 20) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['title'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount(
                                    $row1['post_id']
                                ),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        } else {
            $output = json_decode($this->getCreatedPostScroll($uid, $ids));
        }
        return json_encode($output);
    }

    public function reactToPost($post_id, $uid, $username)
    {
        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if (!$stmt) {
            $output = false;
        } else {
            if ($stmt->rowCount() > 0) {
                $sql = "DELETE FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$post_id, $uid]);
                $this->removeFromwishList($post_id);
                $output = true;
                $psql = "SELECT `username` FROM `central_post_holder` WHERE post_id = ?";
                $pstmt = $this->connect()->prepare($psql);
                $pstmt->execute([$post_id]);
                if ($pstmt) {
                    $poster_username = $pstmt->fetch();
                    if ($poster_username['username'] !== $_SESSION['username']) {
                        $nsql = "DELETE FROM `notification` WHERE post_id = ? AND re_username = ? AND username = ? AND type = ?";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$post_id, $poster_username['username'], $_SESSION['username'], "liked_your_post"]);
                        if (!$nstmt) {
                            // fgh
                        }
                    }
                }
            } else {
                $psql = "SELECT `username` FROM `central_post_holder` WHERE post_id = ?";
                $pstmt = $this->connect()->prepare($psql);
                $pstmt->execute([$post_id]);
                if ($pstmt) {
                    $poster_username = $pstmt->fetch();
                    $time = date('m/d/Y h:i:s a');
                    $sql = "INSERT INTO `reaction_table`(`post_id`, `uid`, `username`, `time`, `poster_username`) 
                            VALUES (?, ?, ?, ?, ?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$post_id, $uid, $username, $time, $poster_username['username']]);
                    $output = true;
                    $this->addTowishList($post_id);
                    $nid = "liked_post_notif_" . time() . bin2hex(random_bytes(15));
                    if ($poster_username['username'] !== $_SESSION['username']) {
                        $nsql = "INSERT INTO `notification`(`nid`, `type`,`username`, `re_username`,  `seen_one`, `seen_two`, `post_id`, `time`) VALUES (?,?,?,?,?,?,?,?)";
                        $nstmt = $this->connect()->prepare($nsql);
                        $nstmt->execute([$nid, "liked_your_post", $_SESSION['username'], $poster_username['username'], "unseen", "unseen", $post_id, $time]);
                        if (!$nstmt) {
                            // fgh
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function createNewComment($comment, $post_id, $uid, $username)
    {
        date_default_timezone_set('Africa/Lagos');
        $cid = "comment_id" . bin2hex(random_bytes(28));
        $time = date('m/d/Y h:i:s a');
        $sql = "INSERT INTO `comments_table`(`cid`, `post_id`, `uid`, `username`, `comment`, `time`) 
                VALUES (?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $uid, $username, $comment, $time]);
        if (!$stmt) {
            $output = "error";
        } else {
            $g_sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ?";
            $g_stmt = $this->connect()->prepare($g_sql);
            $g_stmt->execute([$post_id]);
            if ($g_stmt) {
                $uname = $g_stmt->fetch();
                $this->notifyUsercomment($uname['username'], $post_id, $cid);
            }
            $this->notifyUsercommentCall($username, $this->prepareSentence($comment), $post_id, $cid);
            $sql = "SELECT * FROM users WHERE uid = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$uid]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $output = array(
                        'post_id' => $post_id,
                        'username' => $row['username'],
                        'avatar' => $row['avatar'],
                        'time' => $time,
                        'comment' => $comment,
                        'post_id' => $post_id,
                        'time_ago' => time_ago($time),
                        'comment_id' => $cid,
                        'show_ac_bx' => true
                    );
                }
            }
        }
        return json_encode($output);
    }
    public function getComments($post_id)
    {
        $sql = "SELECT * FROM `comments_table` WHERE post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if (!$stmt->rowCount() > 0) {
            $output[] = array('error' => 'empty');
        } else {
            foreach ($stmt->fetchAll() as $row) {
                $uid = $row['uid'];
                $sql2 = "SELECT * FROM `users` WHERE uid = ?";
                $stmt2 = $this->connect()->prepare($sql2);
                $stmt2->execute([$uid]);
                if ($stmt2->rowCount() > 0) {
                    foreach ($stmt2->fetchAll() as $row1) {

                        if ($_SESSION['uid'] == $row['uid']) {
                            $show_act_box = true;
                        } else {
                            $show_act_box = false;
                        }
                        if ($this->checkUserCommentReact($_SESSION['uid'], $row['cid'], $row['post_id'])) {
                            $ac = "active";
                        } else {
                            $ac = "";
                        }

                        $data = array(
                            'post_id' => $row['post_id'],
                            'username' => $row1['username'],
                            'avatar' => $row1['avatar'],
                            'time_ago' => time_ago($row['time']),
                            'comment' => $row['comment'],
                            'comment_id' => $row['cid'],
                            'error' => "alive",
                            'show_ac_bx' => $show_act_box,
                            'total_comments_reaction' => $this->getCommentReactionNum(
                                $row['cid'],
                                $row['post_id']
                            ),
                            'total_comment_reply' => $this->totalCommentreplys($row['post_id'], $row['cid']),
                            'user_liked_comment' => $ac
                        );
                        $output[] = $data;
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function totalCommentreplys($post_id, $cid)
    {
        $sql = "SELECT * FROM `comment_reply` WHERE `post_id` = ? AND `cid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $cid]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function deleteComment($cid, $post_id)
    {
        $sql = "SELECT * FROM `comments_table` WHERE cid = ? && uid = ? && post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $_SESSION['uid'], $post_id]);

        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $sql = "DELETE FROM `comments_table` WHERE  cid = ? && uid = ? && post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$cid, $_SESSION['uid'], $post_id]);
                if ($stmt) {
                    $output = array('return' => true);
                }
            } else {
                $output = array('return' => false, 'ghost' => true);
            }
        }
        return json_encode($output);
    }
    public function reactToComment($cid, $post_id)
    {
        $sql = "SELECT * FROM `commentsreaction` WHERE `cid` = ? AND `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $del_sql = "DELETE FROM `commentsreaction` WHERE `cid` = ? AND `post_id` = ? AND `uid` = ?";
                $del_stmt = $this->connect()->prepare($del_sql);
                $del_stmt->execute([$cid, $post_id, $_SESSION['uid']]);
                if ($del_stmt) {
                    $output = array('res' => true);
                }
            } else {
                $time = date('m/d/Y h:i:s a');
                $in_sql = "INSERT INTO `commentsreaction`(`cid`, `post_id`, `uid`, `username`, `time`)
                        VALUES (?,?,?,?,?)";
                $in_stmt = $this->connect()->prepare($in_sql);
                $in_stmt->execute([
                    $cid,
                    $post_id,
                    $_SESSION['uid'],
                    $_SESSION['username'],
                    $time
                ]);
                if ($in_stmt) {
                    $output = array('res' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function checkUserCommentReact($uid, $cid, $post_id)
    {
        $sql = "SELECT * FROM `commentsreaction` WHERE cid = ? && post_id = ? && uid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    public function checkUserRepReact($uid, $cid, $post_id, $repid)
    {
        $sql = "SELECT * FROM `reply_reaction_table` WHERE cid = ? && post_id = ? && uid = ? && repid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $uid, $repid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    public function getCommentReactionNum($cid, $post_id)
    {
        $sql = "SELECT * FROM `commentsreaction` WHERE cid = ? && post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function getRepReactionNum($cid, $post_id, $repid)
    {
        $sql = "SELECT * FROM `reply_reaction_table` WHERE cid = ? && post_id = ? && repid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $repid]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function createNewReply($cid, $post_id, $uid, $reply, $username)
    {
        date_default_timezone_set('Africa/Lagos');
        $repid = "comment_reply" . bin2hex(random_bytes(25));
        $time = date("d-m-Y H:i:s", time());
        $sql = "INSERT INTO `comment_reply`(`cid`, `post_id`, `repid`, `uid`, `username`, `reply`, `time`) 
                VALUES (?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $repid, $uid, $username, $this->prepareSentence($reply), $time]);
        if ($stmt) {

            $g_sql = "SELECT * FROM `comments_table` WHERE `post_id` = ? AND `cid` = ?";
            $g_stmt = $this->connect()->prepare($g_sql);
            $g_stmt->execute([$post_id, $cid]);
            if ($g_stmt) {
                $uname = $g_stmt->fetch();
                $this->notifyUserReply($uname['username'], $post_id, $cid, $repid);
            }
            $this->notifyUserReplyCall($username, $reply, $post_id, $cid, $repid);
            $sql2 = "SELECT * FROM `users` WHERE `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$uid]);
            if ($stmt2->rowCount() > 0) {
                $row = $stmt2->fetch();
                $output = array(
                    'post_id' => $post_id,
                    'username' => $username,
                    'avatar' => $row['avatar'],
                    'time_ago' => 'now',
                    'reply' => $reply,
                    'comment_id' => $cid,
                    'error' => "alive",
                    'show_ac_bx' => true,
                    'total_replies_reaction' => 0,
                    'user_liked_rep' => '',
                    'repid' => $repid,
                    'return' => true
                );
            }
        }
        return json_encode($output);
    }
    public function getReplies($cid, $post_id, $uid)
    {
        $sql = "SELECT * FROM `comment_reply` WHERE cid = ? && post_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output[] = array('error' => 'empty');
            } else {
                foreach ($stmt->fetchAll() as $row) {
                    $uid = $row['uid'];
                    $sql2 = "SELECT * FROM `users` WHERE uid = ?";
                    $stmt2 = $this->connect()->prepare($sql2);
                    $stmt2->execute([$uid]);
                    if ($stmt2->rowCount() > 0) {
                        foreach ($stmt2->fetchAll() as $row1) {
                            if ($_SESSION['uid'] == $row['uid']) {
                                $show_act_box = true;
                            } else {
                                $show_act_box = false;
                            }
                            if ($this->checkUserRepReact(
                                $_SESSION['uid'],
                                $row['cid'],
                                $row['post_id'],
                                $row['repid']
                            )) {
                                $ac = "active";
                            } else {
                                $ac = "";
                            }
                            $data = array(
                                'post_id' => $row['post_id'],
                                'username' => $row1['username'],
                                'avatar' => $row1['avatar'],
                                'time_ago' => time_ago($row['time']),
                                'reply' => $row['reply'],
                                'comment_id' => $row['cid'],
                                'error' => "alive",
                                'show_ac_bx' => $show_act_box,
                                'total_replies_reaction' => $this->getRepReactionNum(
                                    $row['cid'],
                                    $row['post_id'],
                                    $row['repid']
                                ),
                                'user_liked_rep' => $ac,
                                'repid' => $row['repid']
                            );
                            $output[] = $data;
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function reactToReply($cid, $post_id, $repid)
    {
        $sql = "SELECT * FROM `reply_reaction_table` WHERE cid = ? && post_id = ? && uid = ? && repid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $post_id, $_SESSION['uid'], $repid]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $sql = "INSERT INTO `reply_reaction_table`
                (`uid`, `post_id`, `cid`, `repid`, `username`, `time`) 
                VALUES (?,?,?,?,?,?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$_SESSION['uid'], $post_id, $cid, $repid, $_SESSION['username'], 'NOW()']);
                if ($stmt) {
                    $output = array('res1' => true);
                }
            } else {
                $sql = "DELETE FROM `reply_reaction_table` 
                        WHERE cid = ? && post_id = ? && uid = ? && repid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$cid, $post_id, $_SESSION['uid'], $repid]);
                if ($stmt) {
                    $output = array('res2' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function deleteReply($cid,  $repid, $post_id)
    {
        $sql = "SELECT * FROM `comment_reply` WHERE cid = ? && uid = ? && post_id = ? && repid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$cid, $_SESSION['uid'], $post_id, $repid]);

        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $sql = "DELETE FROM `comment_reply` WHERE  cid = ? && uid = ? && post_id = ? && repid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$cid, $_SESSION['uid'], $post_id, $repid]);
                if ($stmt) {
                    $output = array('return' => true);
                }
            } else {
                $output = array('return' => false, 'ghost' => true);
            }
        }
        return json_encode($output);
    }
    public function createRefPost($text, $uid, $username, $ref_by)
    {
        date_default_timezone_set('Africa/Lagos');
        $post_id = "reference_post_" . bin2hex(random_bytes(25)) . time() . bin2hex(random_bytes(23));
        $time = date('m/d/Y h:i:s a');
        $url = "/detailview?user_id=$uid&&post_id=$post_id";
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "INSERT INTO `central_post_holder`
                (`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) 
                VALUES (?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id, $username, $text . " by " . $ref_by, 'reference_post', $url, $time, $location]);
        if ($stmt) {
            $sql = "INSERT INTO `reference_post`(`post_id`, `uid`, `username`, `text`, `ref_by`, `time`) 
                    VALUES (?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id, $uid, $username, $text, $ref_by, $time]);
            if ($stmt) {
                $this->NotifyUserCallPostCaption($username, $this->prepareSentence($text), $url, "post", $post_id);
                $this->notifyNewPostToFollower("reference", $post_id, $username);
                $sql = "SELECT * FROM users WHERE uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid]);
                if ($stmt) {
                    if ($stmt->rowCount() > 0) {
                        foreach ($stmt->fetchAll() as $row) {
                            $output = array(
                                'post_id' => $post_id,
                                'username' => $row['username'],
                                'avatar' => $row['avatar'],
                                'time' => $time,
                                'text' => $text,
                                'by' => $ref_by,
                                'error' => false,
                                'time_ago' => time_ago($time)
                            );
                        }
                    } else {
                        $output = array('error' => true);
                    }
                } else {
                    $output = array('error' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function create_write_up_classic($text, $bg, $uid, $username, $font)
    {
        date_default_timezone_set('Africa/Lagos');
        $post_id = "classic_write_up_" . bin2hex(random_bytes(25)) . time() . bin2hex(random_bytes(23));
        $time = date('m/d/Y h:i:s a');
        $url = "/detailview?user_id=$uid&&post_id=$post_id";
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "INSERT INTO `central_post_holder`(`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) 
                VALUES (?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id, $username, $text, 'classic_write_up', $url, $time, $location]);
        if ($stmt) {
            $sql = "INSERT INTO `classic_write_up`(`post_id`, `uid`, `username`, `text`, `bg`, `time`, `font`) 
                    VALUES (?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id, $uid, $username, $text, $bg, $time, $font]);
            if ($stmt) {
                $this->NotifyUserCallPostCaption($username, $this->prepareSentence($text), $url, "post", $post_id);

                $this->notifyNewPostToFollower("write_up", $post_id, $username);
                $sql = "SELECT * FROM users WHERE uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid]);
                if ($stmt) {
                    if ($stmt->rowCount() > 0) {
                        foreach ($stmt->fetchAll() as $row) {
                            $output = array(
                                'post_id' => $post_id,
                                'username' => $row['username'],
                                'avatar' => $row['avatar'],
                                'time' => $time,
                                'text' => $text,
                                'bg' => $bg,
                                'error' => false,
                                'time_ago' => time_ago($time)
                            );
                        }
                    } else {
                        $output = array('error' => true);
                    }
                } else {
                    $output = array('error' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function createNewTyped($text, $bg, $uid, $username, $font)
    {
        date_default_timezone_set('Africa/Lagos');
        $post_id = "typing_text" . bin2hex(random_bytes(25)) . time() . bin2hex(random_bytes(23));
        $time = date('m/d/Y h:i:s a');
        $url = "/detailview?user_id=$uid&&post_id=$post_id";
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "INSERT INTO `central_post_holder`(`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) 
                VALUES (?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id, $username, $text, 'typing_text', $url, $time, $location]);
        if ($stmt) {
            $sql = "INSERT INTO `typing_text_post`(`post_id`, `uid`, `username`, `text`, `bg`, `time`, `font`) VALUES (?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id, $uid, $username, $text, $bg, $time, $font]);
            if ($stmt) {
                $this->NotifyUserCallPostCaption($username, $this->prepareSentence($text), $url, "post", $post_id);

                $this->notifyNewPostToFollower("typing_text", $post_id, $username);
                $sql = "SELECT * FROM users WHERE uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid]);
                if ($stmt) {
                    if ($stmt->rowCount() > 0) {
                        foreach ($stmt->fetchAll() as $row) {
                            $output = array(
                                'post_id' => $post_id,
                                'username' => $row['username'],
                                'avatar' => $row['avatar'],
                                'time' => $time,
                                'text' => $text,
                                'bg' => $bg,
                                'error' => false,
                                'time_ago' => time_ago($time)
                            );
                        }
                    } else {
                        $output = array('error' => true);
                    }
                } else {
                    $output = array('error' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function getUserAccCreatedPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE uid = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['post_id'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount($row1['post_id']),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function getUserAccSavedPost($uid)
    {
        $saved_sql = "SELECT * FROM `usersavedpost` WHERE `uid` = ?";
        $saved_stmt = $this->connect()->prepare($saved_sql);
        $saved_stmt->execute([$uid]);
        if ($saved_stmt) {
            if ($saved_stmt->rowCount() > 0) {
                foreach ($saved_stmt->fetchAll() as $row) {
                    $g[] = $row['post_id'];
                }
                foreach ($g as $z) {
                    $d[] = "'$z'";
                }
                $exsting_id = implode(',', $d);
                $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` IN ($exsting_id) ORDER BY `time` DESC";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {
                                if ($row1['type'] == 'write_up_regular') {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'peffet_event') {
                                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                                }
                            }
                        }
                    }
                }
            } else {
                $output = [
                    'num_post' => "yep"
                ];
            }
        }

        return json_encode($output);
    }
    public function chechIfEventApplicationIsPending($uid, $post_id)
    {
        $sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `creator_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid, $_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                return 'yes';
            } else {
                return 'no';
            }
        } else {
            return 'no';
        }
    }
    public function checkWhoILiked($eid, $pid)
    {
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `peffet_event_reaction` WHERE `eid` = ? AND `pair_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $pid, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $row = $stmt->fetch();
                if ($row['like_for'] == 'pair_one') {
                    $output = 'pair_one';
                } else if ($row['like_for'] == 'pair_two') {
                    $output = 'pair_two';
                } else {
                    $output = 'none';
                }
            } else {
                $output = 'none';
            }
        }
        return $output;
    }
    public function updateEvtBxManagePre($eid)
    {
        error_reporting(0);
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE  `eid` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $sql = "SELECT * FROM `peffet_event_reaction` WHERE `eid` = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$eid]);
                if ($stmt) {
                    if ($stmt->rowCount() > 0) {
                        foreach ($stmt->fetchAll() as $row) {
                            if ($row['like_for'] == 'pair_one') {
                                $set[] = ['name' => $row['pair_one_name'], 'like_for' => $row['like_for'], 'event_id' => $row['eid']];
                            } else if ($row['like_for'] == 'pair_two') {
                                $set[] = ['name' => $row['pair_two_name'], 'like_for' => $row['like_for'], 'event_id' => $row['eid']];
                            }
                            // $set[] = ['like_for' => $row['like_for']];
                        }
                        foreach ($set as $value) {
                            $n[] = implode("||", $value);
                        }
                        $s = array_count_values($n);
                        arsort($s);
                        foreach ($s as $x => $x_value) {
                            $ex = explode("||", $x);
                            $e[] = ['name' => $ex[0], 'number' => $x_value];
                        }
                        if ($e[0]['number'] == $e[1]['number']) {
                            $m = [
                                'closable' => false,
                                'ns' =>  array_chunk($e, 2)
                            ];
                        } else {
                            $m =  [
                                'closable' => true,
                                'event_id' => $set[0]['event_id'],
                                'ns' =>  array_chunk($e, 2)
                            ];
                        }
                        $output = $m;
                    }
                }
            } else {
                $output = ['error' => 'none'];
            }
        }
        return json_encode($output);
    }
    public function like_event($eid, $pid, $like_for)
    {
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `peffet_event_reaction` WHERE `eid` = ? AND `pair_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $pid, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $row = $stmt->fetch();
                if ($row['like_for'] == $like_for) {
                    $sql = "DELETE FROM `peffet_event_reaction` WHERE `eid` = ? AND `pair_id` = ? AND `uid` = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$eid, $pid, $uid]);
                    if ($stmt) {
                        $output = ['error' => 'none', 'like_for' => 'none'];
                    }
                } else {
                    $sql = "UPDATE `peffet_event_reaction` SET `like_for` = ? WHERE `eid` = ? AND `pair_id` = ? AND `uid` = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$like_for, $eid, $pid, $uid]);
                    if ($stmt) {
                        $output = ['error' => 'none', 'like_for' => $like_for];
                    }
                }
            } else {
                date_default_timezone_set('Africa/Lagos');
                $sql = "SELECT * FROM `peffet_event_main_table` WHERE  `eid` = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$eid]);
                if ($stmt) {
                    $p_sql = "SELECT * FROM `peffet_event_pair` WHERE `eid` = ? AND `pair_id` = ?";
                    $p_stmt = $this->connect()->prepare($p_sql);
                    $p_stmt->execute([$eid, $pid]);
                    if ($p_stmt) {
                        $prow = $p_stmt->fetch();
                        $row = $stmt->fetch();
                        $time = date('m/d/Y h:i:s a');
                        $i_sql = "INSERT INTO `peffet_event_reaction`(`eid`, `pair_id`, `media_type`, `description`, `pair_one_name`, `pair_two_name`, `like_for`, `uid`, `username`, `time`) VALUES (?,?,?,?,?,?,?,?,?,?)";
                        $i_stmt = $this->connect()->prepare($i_sql);
                        $i_stmt->execute([$eid, $pid, $row['media_type'], $row['description'], $prow['pair_one_name'], $prow['pair_two_name'], $like_for, $uid, $_SESSION['username'], $time]);
                        if ($i_stmt) {
                            $output = ['error' => 'none', 'like_for' => $like_for];
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getPeffetEvent($uid, $post_id)
    {
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `uid` = ? AND `eid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    if ($row['stage'] == "application") {
                        if ($uid == $_SESSION['uid']) {
                            $set = [
                                'username' => $row['username'],
                                'text' => $row['description'],
                                'post_id' => $row['eid'],
                                'time_ago' => time_ago($row['time']),
                                'type' => 'peffet_event',
                                'sub_type' => 'application',
                                'post_id' => $row['eid'],
                                'post_type' => 'peffet_event',
                                'previlage' => 'admin'
                            ];
                        } else if ($uid !== $_SESSION['uid']) {
                            $set = [
                                'username' => $row['username'],
                                'text' => $row['description'],
                                'post_id' => $row['eid'],
                                'time_ago' => time_ago($row['time']),
                                'type' => 'peffet_event',
                                'sub_type' => 'application',
                                'post_id' => $row['eid'],
                                'post_type' => 'peffet_event',
                                'previlage' => 'applicant',
                                'is_pending' =>  $this->chechIfEventApplicationIsPending($uid, $post_id)
                            ];
                        } else {
                            $set = ['num' => 0];
                        }
                        $output = $set;
                    } else if ($row['stage'] == "event") {
                        $eid = $post_id;
                        $em_sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ? AND `uid` = ?";
                        $stmt = $this->connect()->prepare($em_sql);
                        $stmt->execute([$post_id, $_SESSION['uid']]);
                        if ($stmt) {
                            if ($stmt->rowCount() > 0) {
                                $is_creator = true;
                            } else {
                                $is_creator = false;
                            }
                            $p_sql = "SELECT * FROM `peffet_event_pair` WHERE `eid` = ? ORDER BY rand()";
                            $p_stmt = $this->connect()->prepare($p_sql);
                            $p_stmt->execute([$eid]);
                            if ($p_stmt) {
                                if ($p_stmt->rowCount() > 0) {
                                    foreach ($p_stmt->fetchAll() as $row) {
                                        $check_who_i_liked = $this->checkWhoILiked($eid, $row['pair_id']);
                                        $set[] = [
                                            'pair_id' => $row['pair_id'],
                                            'pair_one_name' => $row['pair_one_name'],
                                            'pair_one_media' => $row['pair_one_media'],
                                            'pair_two_name' => $row['pair_two_name'],
                                            'pair_two_media' => $row['pair_two_media'],
                                            'like_for' => $check_who_i_liked
                                        ];
                                    }
                                    $sql = "SELECT * FROM `peffet_event_main_table` WHERE `uid` = ? AND `eid` = ?";
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$uid, $post_id]);
                                    if ($stmt) {
                                        if ($stmt->rowCount() > 0) {
                                            $m_row = $stmt->fetch();
                                            $output = [
                                                'error' => 'none',
                                                'event_id' => $eid,
                                                'post_id' => $eid,
                                                'is_creator' => $is_creator,
                                                'media' => $set,
                                                'type' => 'peffet_event',
                                                'sub_type' => 'event',
                                                'text' => $m_row['description'],
                                                'media_type' => $m_row['media_type'],
                                                'host_name' => $m_row['username'],
                                                'orientation' => $m_row['orientation']
                                            ];
                                        }
                                    }
                                }
                            }
                        }
                    } else if ($row['stage'] == "concluded") {
                        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$post_id]);
                        if ($stmt) {
                            if ($stmt->rowCount() > 0) {
                                $row = $stmt->fetch();
                                $sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ?";
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$post_id]);
                                if ($stmt) {
                                    if ($stmt->rowCount() > 0) {
                                        $a_row = $stmt->fetch();
                                        $output = [
                                            'host_name' => $row['username'],
                                            'winner_name' => $a_row['username'],
                                            'post_id' => $post_id,
                                            'event_id' => $post_id,
                                            'media' => $a_row['media'],
                                            'text' => $row['description'],
                                            'type' => 'peffet_event',
                                            'orientation' => $row['orientation'],
                                            'sub_type' => 'concluded',
                                            'media_type' => $row['media_type']
                                        ];
                                    } else {
                                        $output = ['type' => "none", ];
                                    }
                                }
                            } else {
                                $output = ['type' => "none", ];
                            }
                        }
                    } else {
                        $output = ['type' => "none", ];
                    }
                }
            } else {
                $output = ['type' => "none", ];
            }
        }
        return $output;
    }
    public function getUserPostsWriteUP($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE uid = ? AND type =  ? OR uid = ? AND type = ? OR uid = ? AND type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, "write_up_regular", $uid, "classic_write_up", $uid, "typing_text"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['post_id'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount($row1['post_id']),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function getUserRefPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE uid = ? && type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, "reference_post"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }

                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function getPortPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE  uid = ? AND type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, "portrait_post"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }

                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {
                        $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt && $stmt->rowCount() > 0) {
                            foreach ($stmt->fetchAll() as $port_row) {
                                $set = array(
                                    'username' => $user_d_row['username'],
                                    'avatar' => $user_d_row['avatar'],
                                    'text' => $port_row['caption'],
                                    'post_id' => $port_row['post_id'],
                                    'time_ago' => time_ago($port_row['time']),
                                    'type' => $row1['type'],
                                    'sub_type' => $row1['sub_type'],
                                    'post_id' => $row1['post_id'],
                                    'is_liked' => $is_liked,
                                    'total_likes' => $num,
                                    'total_comment' => $this->CommentCount($row1['post_id']),
                                    'post_type' => $row1['type'],
                                    'image' => $port_row['image'],
                                    'saved_num' => $saved_num,
                                    'post_saved' => $is_post_saved
                                );
                                $output[] = $set;
                            }
                        }
                    }
                }
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function getRegPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE  uid = ? AND type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, "regular_post"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }

                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {
                        $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt && $stmt->rowCount() > 0) {
                            foreach ($stmt->fetchAll() as $port_row) {
                                $regMedia = $this->regMedia($port_row['post_id']);
                                $set = array(
                                    'username' => $user_d_row['username'],
                                    'avatar' => $user_d_row['avatar'],
                                    'text' => $port_row['caption'],
                                    'post_id' => $port_row['post_id'],
                                    'time_ago' => time_ago($port_row['time']),
                                    'type' => $row1['type'],
                                    'sub_type' => $row1['sub_type'],
                                    'post_id' => $row1['post_id'],
                                    'is_liked' => $is_liked,
                                    'total_likes' => $num,
                                    'total_comment' => $this->CommentCount($row1['post_id']),
                                    'post_type' => $row1['type'],
                                    'images' => $regMedia,
                                    'saved_num' => $saved_num,
                                    'post_saved' => $is_post_saved
                                );
                                $output[] = $set;
                            }
                        }
                    }
                }
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function getEventPost($uid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE  `uid` = ? AND `type` = ? ORDER BY `time` DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, "peffet_event"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
            }
        } else {
            $output = [
                'num_post' => "yep"
            ];
        }
        return json_encode($output);
    }
    public function createPort($filename, $fileTmpName, $caption, $error)
    {
        date_default_timezone_set('Africa/Lagos');
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        $filetype = ['jpg', 'jpeg', 'png'];
        $newfilename = "peffet_profile_image" . rand(1111, 9999) . time() . "." . $ext;
        $target = "media/portrait/" . basename($newfilename);
        if (!in_array($ext, $filetype)) {
            return 'invalid file format';
        } else if ($error) {
            return 'file error';
        } else {
            $upload = move_uploaded_file($fileTmpName, $target);
            if ($upload) {
                $post_id = "portrait_post" . time() . bin2hex(random_bytes(15));
                $uid = $_SESSION['uid'];
                $time = date('m/d/Y h:i:s a');
                $url = "/detailview?user_id=$uid&&post_id=$post_id";
                $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
                $sql = "INSERT INTO `central_post_holder`(`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) VALUES (?,?,?,?,?,?,?,?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid, $post_id, $_SESSION['username'], $caption, "portrait_post", $url, $time, $location]);
                if ($stmt) {
                    $sql = "INSERT INTO `portrait_post`(`uid`, `post_id`, `username`, `caption`, `image`, `time`) VALUES (?,?,?,?,?,?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$uid, $post_id, $_SESSION['username'], $caption, $newfilename, $time]);
                    if ($stmt) {
                        $this->NotifyUserCallPostCaption($_SESSION['username'], $this->prepareSentence($caption), $url, "post", $post_id);
                        $this->notifyNewPostToFollower("portrait", $post_id, $_SESSION['username']);
                        return 'successful';
                    }
                }
            } else {
                return 'error';
            }
        }
    }
    public function createReg($caption)
    {
        date_default_timezone_set('Africa/Lagos');
        $ext_main = pathinfo($_FILES['media']['name'][0], PATHINFO_EXTENSION);
        $uid = $_SESSION['uid'];
        $post_id = "regular_post" . time() . bin2hex(random_bytes(15)) . $uid;
        $time = date('m/d/Y h:i:s a');
        $url = "/detailview?user_id=$uid&&post_id=$post_id";
        if (in_array($ext_main, ['png', 'jpg', 'jpeg'])) {
            $type_main = "image";
        } else if (in_array($ext_main, ['mov', 'mp4', 'avi'])) {
            $type_main = "video";
        }
        foreach ($_FILES['media']['name'] as $key => $value) {
            $filename = $_FILES['media']['name'][$key];
            $fileTmpName = $_FILES['media']['tmp_name'][$key];
            $error = $_FILES['media']['error'][$key];
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            $filetype = ['jpg', 'jpeg', 'png', 'mov', 'mp4', 'avi'];
            $newfilename = "peffet_regular_image" . rand(1111, 9999) . time() . "." . $ext;
            $target = "media/regular/" . basename($newfilename);
            $ext_c = pathinfo($_FILES['media']['name'][0], PATHINFO_EXTENSION);
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
                    $sql = "INSERT INTO `regular_post_media_table`(`post_id`, `name`, `type`, `time`) VALUES (?,?,?,?)";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$post_id, $newfilename, $type_c, $time]);
                    if (!$stmt) {
                        exit();
                    }
                }
            }
        }
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "INSERT INTO `central_post_holder`(`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) VALUES (?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id, $_SESSION['username'], $caption, "regular_post", $url, $time, $location]);
        if ($stmt) {
            $sql = "INSERT INTO `regular_post_table`(`post_id`, `uid`, `username`, `caption`, `type`, `time`) VALUES (?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id, $uid, $_SESSION['username'], $caption, $type_main, $time]);
            if ($stmt) {
                $this->NotifyUserCallPostCaption($_SESSION['username'], $this->prepareSentence($caption), $url, "post", $post_id);
                $this->notifyNewPostToFollower("regular", $post_id, $_SESSION['username']);
                return 'successful';
            }
        }
    }
    public function getUserWishListAll($uid)
    {
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? ORDER BY `time` DESC LIMIT 15";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }

                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'write_up_regular') {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'peffet_event') {
                                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $output = json_decode($this->getCountryCreatedPost($uid));
        }

        return json_encode($output);
    }
    public function getUserWishListAllScroll($uid, $post_ids)
    {
        // $post_ids_ex = explode("||", $post_ids);
        foreach ($post_ids as $z) {
            $d[] = "'$z'";
        }
        $ids = implode(',', $d);
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND `wish_id` NOT IN($ids) ORDER BY `time` DESC LIMIT 15";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }

                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'write_up_regular') {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'peffet_event') {
                                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $output = json_decode($this->getCountryCreatedPostScroll($uid, $ids));
        }

        return json_encode($output);
    }

    public function getUserWishListWriteUp($uid)
    {
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND type = ? OR type = ? OR type = ? ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid, "typing_text", "classic_write_up", "write_up_regular"]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }

                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'write_up_regular') {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $row1['title'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($row1['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                } else if ($row1['type'] == 'classic_write_up') {
                                    $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $classic_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $classic_row['text'],
                                                'post_id' => $classic_row['post_id'],
                                                'time_ago' => time_ago($classic_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $classic_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $classic_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                } else if ($row1['type'] == 'typing_text') {
                                    $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $typed_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' =>  $typed_row['text'],
                                                'post_id' => $typed_row['post_id'],
                                                'time_ago' => time_ago($typed_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'bg' => $typed_row['bg'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved,
                                                'font' => $typed_row['font']
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $sql = "SELECT * FROM `central_post_holder` WHERE type = ? OR type = ? OR type = ? ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["typing_text", "classic_write_up", "write_up_regular"]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row1) {
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                    $is_liked = false;
                    if ($stmt->rowCount() > 0) {
                        $is_liked = true;
                    }
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id']]);
                    if ($stmt) {
                        $num = $stmt->rowCount();
                    }
                    $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                    $saved_stmt = $this->connect()->prepare($saved_sql);
                    $saved_stmt->execute([$row1['post_id']]);
                    if ($saved_stmt) {

                        $saved_num = $saved_stmt->rowCount();
                    }
                    $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                    $user_d_stmt = $this->connect()->prepare($user_d_sql);
                    $user_d_stmt->execute([$row1['uid']]);
                    if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                        foreach ($user_d_stmt as $user_d_row) {

                            if ($row1['type'] == 'write_up_regular') {

                                $set = array(
                                    'username' => $user_d_row['username'],
                                    'avatar' => $user_d_row['avatar'],
                                    'text' => $row1['title'],
                                    'post_id' => $row1['post_id'],
                                    'time_ago' => time_ago($row1['time']),
                                    'type' => $row1['type'],
                                    'sub_type' => $row1['sub_type'],
                                    'post_id' => $row1['post_id'],
                                    'is_liked' => $is_liked,
                                    'total_likes' => $num,
                                    'total_comment' => $this->CommentCount($row1['post_id']),
                                    'post_type' => $row1['type'],
                                    'saved_num' => $saved_num
                                );
                                $output[] = $set;
                            } else if ($row1['type'] == 'classic_write_up') {
                                $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $classic_row) {
                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' => $classic_row['text'],
                                            'post_id' => $classic_row['post_id'],
                                            'time_ago' => time_ago($classic_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'post_id' => $row1['post_id'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'post_type' => $row1['type'],
                                            'bg' => $classic_row['bg'],
                                            'saved_num' => $saved_num,
                                            'font' => $classic_row['font']
                                        );
                                        $output[] = $set;
                                    }
                                }
                            } else if ($row1['type'] == 'typing_text') {
                                $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $typed_row) {

                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' =>  $typed_row['text'],
                                            'post_id' => $typed_row['post_id'],
                                            'time_ago' => time_ago($typed_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'post_id' => $row1['post_id'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'post_type' => $row1['type'],
                                            'bg' => $typed_row['bg'],
                                            'saved_num' => $saved_num,
                                            'font' => $typed_row['font']
                                        );
                                        $output[] = $set;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return json_encode($output);
    }
    public function getUserWishListPortrait($uid)
    {
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND type = ? ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid, "portrait_post"]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $sql = "SELECT * FROM `central_post_holder` WHERE  type = ? ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["portrait_post"]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row1) {
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                    $is_liked = false;
                    if ($stmt->rowCount() > 0) {
                        $is_liked = true;
                    }
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id']]);
                    if ($stmt) {
                        $num = $stmt->rowCount();
                    }
                    $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                    $saved_stmt = $this->connect()->prepare($saved_sql);
                    $saved_stmt->execute([$row1['post_id']]);
                    if ($saved_stmt) {

                        $saved_num = $saved_stmt->rowCount();
                    }
                    $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);

                    $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                    $user_d_stmt = $this->connect()->prepare($user_d_sql);
                    $user_d_stmt->execute([$row1['uid']]);
                    if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                        foreach ($user_d_stmt as $user_d_row) {

                            if ($row1['type'] == 'portrait_post') {
                                $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $port_row) {
                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' => $port_row['caption'],
                                            'post_id' => $port_row['post_id'],
                                            'time_ago' => time_ago($port_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'post_id' => $row1['post_id'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'post_type' => $row1['type'],
                                            'image' => $port_row['image'],
                                            'saved_num' => $saved_num,
                                            'post_saved' => $is_post_saved
                                        );
                                        $output[] = $set;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return json_encode($output);
    }
    public function getWishListScrollPortrait($uid, $post_ids)
    {
        foreach ($post_ids as $z) {
            $d[] = "'$z'";
        }
        $ids = implode(',', $d);
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND `type` = ? AND `wish_id` NOT IN($ids) ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid, "portrait_post"]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'portrait_post') {
                                    $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'image' => $port_row['image'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $sql = "SELECT * FROM `central_post_holder` WHERE  `type` = ? AND `post_id` NOT IN($ids)  ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["portrait_post"]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row1) {
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                    $is_liked = false;
                    if ($stmt->rowCount() > 0) {
                        $is_liked = true;
                    }
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id']]);
                    if ($stmt) {
                        $num = $stmt->rowCount();
                    }
                    $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                    $saved_stmt = $this->connect()->prepare($saved_sql);
                    $saved_stmt->execute([$row1['post_id']]);
                    if ($saved_stmt) {

                        $saved_num = $saved_stmt->rowCount();
                    }
                    $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);

                    $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                    $user_d_stmt = $this->connect()->prepare($user_d_sql);
                    $user_d_stmt->execute([$row1['uid']]);
                    if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                        foreach ($user_d_stmt as $user_d_row) {

                            if ($row1['type'] == 'portrait_post') {
                                $sql = 'SELECT * FROM `portrait_post` WHERE post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $port_row) {
                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' => $port_row['caption'],
                                            'post_id' => $port_row['post_id'],
                                            'time_ago' => time_ago($port_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'post_id' => $row1['post_id'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'post_type' => $row1['type'],
                                            'image' => $port_row['image'],
                                            'saved_num' => $saved_num,
                                            'post_saved' => $is_post_saved
                                        );
                                        $output[] = $set;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return json_encode($output);
    }
    public function getUserWishListReg($uid)
    {
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND type = ? ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid, "regular_post"]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {

                                if ($row1['type'] == 'regular_post') {
                                    $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $port_row) {
                                            $regMedia = $this->regMedia($port_row['post_id']);
                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $port_row['caption'],
                                                'post_id' => $port_row['post_id'],
                                                'time_ago' => time_ago($port_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'post_id' => $row1['post_id'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'post_type' => $row1['type'],
                                                'images' => $regMedia,
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $sql = "SELECT * FROM `central_post_holder` WHERE  type = ? ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["regular_post"]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row1) {
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                    $is_liked = false;
                    if ($stmt->rowCount() > 0) {
                        $is_liked = true;
                    }
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id']]);
                    if ($stmt) {
                        $num = $stmt->rowCount();
                    }
                    $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                    $saved_stmt = $this->connect()->prepare($saved_sql);
                    $saved_stmt->execute([$row1['post_id']]);
                    if ($saved_stmt) {

                        $saved_num = $saved_stmt->rowCount();
                    }
                    $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                    $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                    $user_d_stmt = $this->connect()->prepare($user_d_sql);
                    $user_d_stmt->execute([$row1['uid']]);
                    if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                        foreach ($user_d_stmt as $user_d_row) {

                            if ($row1['type'] == 'regular_post') {
                                $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $port_row) {
                                        $regMedia = $this->regMedia($port_row['post_id']);
                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' => $port_row['caption'],
                                            'post_id' => $port_row['post_id'],
                                            'time_ago' => time_ago($port_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'post_id' => $row1['post_id'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'post_type' => $row1['type'],
                                            'images' => $regMedia,
                                            'saved_num' => $saved_num,
                                            'post_saved' => $is_post_saved
                                        );
                                        $output[] = $set;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return json_encode($output);
    }
    public function getUserWishListEvent($uid)
    {
        $W_sql = "SELECT * FROM `peffet_event_reaction` WHERE `uid` = ? ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid]);
        if ($W_stmt && $W_stmt->rowCount() > 10) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['description'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                    }
                }
            }
        } else {
            $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
            $sql = "SELECT * FROM `central_post_holder` WHERE  `Location` LIKE ? AND `type` = ? ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["%$location%", "peffet_event"]);
            if ($stmt->rowCount() > 5) {
                foreach ($stmt->fetchAll() as $row1) {
                    $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                }
            }else{
                $sql = "SELECT * FROM `central_post_holder` WHERE `type` = ? ORDER BY rand() LIMIT 10";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(["peffet_event"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                    }
                }else{
                    $output = ['error' => 'none', 'status' => 'empty'];   
                }
                
            }
        }

        return json_encode($output);
    }
    public function getUserWishListReference($uid)
    {
        $W_sql = "SELECT * FROM `wishlist` WHERE `wisher_id` = ? AND type = ? ORDER BY `time` DESC LIMIT 10";
        $W_stmt = $this->connect()->prepare($W_sql);
        $W_stmt->execute([$uid, "reference_post"]);
        if ($W_stmt && $W_stmt->rowCount() > 0) {
            foreach ($W_stmt as $row) {
                $sql = "SELECT * FROM `central_post_holder` WHERE title LIKE ? ORDER BY rand() LIMIT 1";
                $stmt = $this->connect()->prepare($sql);
                $q = $row['text_content'];
                $stmt->execute(["%$q%"]);
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row1) {
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                        $is_liked = false;
                        if ($stmt->rowCount() > 0) {
                            $is_liked = true;
                        }
                        $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$row1['post_id']]);
                        if ($stmt) {
                            $num = $stmt->rowCount();
                        }
                        $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                        $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                        $saved_stmt = $this->connect()->prepare($saved_sql);
                        $saved_stmt->execute([$row1['post_id']]);
                        if ($saved_stmt) {

                            $saved_num = $saved_stmt->rowCount();
                        }
                        $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                        $user_d_stmt = $this->connect()->prepare($user_d_sql);
                        $user_d_stmt->execute([$row1['uid']]);
                        if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                            foreach ($user_d_stmt as $user_d_row) {
                                if ($row1['type'] == 'reference_post') {
                                    $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$row1['post_id']]);
                                    if ($stmt && $stmt->rowCount() > 0) {
                                        foreach ($stmt->fetchAll() as $ref_row) {

                                            $set = array(
                                                'username' => $user_d_row['username'],
                                                'avatar' => $user_d_row['avatar'],
                                                'text' => $ref_row['text'],
                                                'post_id' => $row1['post_id'],
                                                'time_ago' => time_ago($ref_row['time']),
                                                'type' => $row1['type'],
                                                'sub_type' => $row1['sub_type'],
                                                'is_liked' => $is_liked,
                                                'total_likes' => $num,
                                                'total_comment' => $this->CommentCount($row1['post_id']),
                                                'ref_by' => $ref_row['ref_by'],
                                                'saved_num' => $saved_num,
                                                'post_saved' => $is_post_saved
                                            );
                                            $output[] = $set;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    $output = array("num" => "empty");
                }
            }
        } else {
            $sql = "SELECT * FROM `central_post_holder` WHERE type = ? ORDER BY rand() LIMIT 10";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["reference_post"]);
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row1) {
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id'], $_SESSION['uid']]);
                    $is_liked = false;
                    if ($stmt->rowCount() > 0) {
                        $is_liked = true;
                    }
                    $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$row1['post_id']]);
                    if ($stmt) {
                        $num = $stmt->rowCount();
                    }
                    $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                    $saved_stmt = $this->connect()->prepare($saved_sql);
                    $saved_stmt->execute([$row1['post_id']]);
                    if ($saved_stmt) {

                        $saved_num = $saved_stmt->rowCount();
                    }
                    $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                    $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                    $user_d_stmt = $this->connect()->prepare($user_d_sql);
                    $user_d_stmt->execute([$row1['uid']]);
                    if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                        foreach ($user_d_stmt as $user_d_row) {
                            if ($row1['type'] == 'reference_post') {
                                $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                                $stmt = $this->connect()->prepare($sql);
                                $stmt->execute([$row1['post_id']]);
                                if ($stmt && $stmt->rowCount() > 0) {
                                    foreach ($stmt->fetchAll() as $ref_row) {

                                        $set = array(
                                            'username' => $user_d_row['username'],
                                            'avatar' => $user_d_row['avatar'],
                                            'text' => $ref_row['text'],
                                            'post_id' => $row1['post_id'],
                                            'time_ago' => time_ago($ref_row['time']),
                                            'type' => $row1['type'],
                                            'sub_type' => $row1['sub_type'],
                                            'is_liked' => $is_liked,
                                            'total_likes' => $num,
                                            'total_comment' => $this->CommentCount($row1['post_id']),
                                            'ref_by' => $ref_row['ref_by'],
                                            'saved_num' => $saved_num,
                                            'post_saved' => $is_post_saved
                                        );
                                        $output[] = $set;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                $output = array("num" => "empty");
            }
        }
        return json_encode($output);
    }
    public function addToSaved($post_id)
    {
        $c_sql = "SELECT * FROM `usersavedpost` WHERE `post_id` = ? AND `uid` = ?";
        $c_stmt = $this->connect()->prepare($c_sql);
        $c_stmt->execute([$post_id, $_SESSION['uid']]);
        if ($c_stmt) {
            if ($c_stmt->rowCount() > 0) {
                $d_sql = "DELETE FROM `usersavedpost` WHERE `post_id` = ? AND `uid` = ?";
                $d_stmt = $this->connect()->prepare($d_sql);
                $d_stmt->execute([$post_id, $_SESSION['uid']]);
                if ($d_stmt) {
                    $output = "done";
                }
            } else {
                date_default_timezone_set('Africa/Lagos');
                $time = date("d-m-Y H:i:s", time());
                $i_sql = "INSERT INTO `usersavedpost`(`uid`, `username`, `post_id`, `time`) VALUES (?,?,?,?)";
                $i_stmt = $this->connect()->prepare($i_sql);
                $i_stmt->execute([$_SESSION['uid'], $_SESSION['username'], $post_id, $time]);
                if ($i_stmt) {
                    $output = "done";
                }
            }
        }
        return json_encode($output);
    }
    public function update_pin_num($post_ids)
    {
        foreach ($post_ids as $post_id) {
            $sql = "SELECT * FROM `usersavedpost` WHERE `post_id` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id]);
            if ($stmt) {
                $set[] = array('post_id' => $post_id, 'num' => $stmt->rowCount());
            }
        }
        return json_encode($set);
    }
    public function update_like_num($post_ids)
    {
        foreach ($post_ids as $post_id) {
            $sql = "SELECT * FROM `reaction_table` WHERE `post_id` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id]);
            if ($stmt) {
                //  return json_encode(array('num' => $stmt->rowCount(), 'error' => "good"));
                $set[] = array('post_id' => $post_id, 'num' => $stmt->rowCount());
            }
        }
        return json_encode($set);
    }

    public function allCommentCount($post_ids)
    {
        foreach ($post_ids as $post_id) {
            $sql = "SELECT * FROM `comments_table` WHERE post_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$post_id]);
            if ($stmt) {
                $set[] = array('post_id' => $post_id, 'num' => $stmt->rowCount());
            }
        }
        return json_encode($set);
    }
    public function hash_tags()
    {
        error_reporting(1);
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `Location` LIKE ? LIMIT 900000";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute("%$location%");
        if ($stmt) {
            if($stmt->rowCount() > 10){
                foreach ($stmt->fetchAll() as $row) {
                    $fist_text =  explode(" ", $this->prepareSentence($row['title']));
                    foreach ($fist_text as $row) {
                        if ($row[0] == "#") {
                            $new_arr[] = $row;
                        }
                    }
                }
                $values = array_count_values($new_arr);
                arsort($values);
                foreach ($values as $x => $x_value) {
                    $output[] = $x;
                }
            }else{
                $sql = "SELECT * FROM `central_post_holder`LIMIT 900000";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                if($stmt->rowCount() > 0){
                    foreach ($stmt->fetchAll() as $row) {
                        $fist_text =  explode(" ", $this->prepareSentence($row['title']));
                        foreach ($fist_text as $row) {
                            if ($row[0] == "#") {
                                $new_arr[] = $row;
                            }
                        }
                    }
                    $values = array_count_values($new_arr);
                    arsort($values);
                    foreach ($values as $x => $x_value) {
                        $output[] = $x;
                    }
                }
            }
        }
        return $output;
    }
    public function hash_tags_details()
    {
        error_reporting(1);
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `Location` LIKE ? LIMIT 900000";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute("%$location%");
        if ($stmt) {
            if($stmt->rowCount() > 10){
                foreach ($stmt->fetchAll() as $row) {
                    $fist_text =  explode(" ", $this->prepareSentence($row['title']));
                    foreach ($fist_text as $row) {
                        if ($row[0] == "#") {
                            $new_arr[] = $row;
                        }
                    }
                }
                $values = array_count_values($new_arr);
                arsort($values);
                foreach ($values as $x => $x_value) {
                    $output[] = ['tag' => $x, 'num' => $x_value];
                }
            }else{
                $sql = "SELECT * FROM `central_post_holder`LIMIT 900000";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                if($stmt->rowCount() > 0){
                    foreach ($stmt->fetchAll() as $row) {
                        $fist_text =  explode(" ", $this->prepareSentence($row['title']));
                        foreach ($fist_text as $row) {
                            if ($row[0] == "#") {
                                $new_arr[] = $row;
                            }
                        }
                    }
                    $values = array_count_values($new_arr);
                    arsort($values);
                    foreach ($values as $x => $x_value) {
                        $output[] = ['tag' => $x, 'num' => $x_value];
                    }
                }
            }
        }
        return $output;
    }
    public function show_or_hide_delete_button($post_id)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    if ($row['type'] == 'peffet_event') {
                        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `uid`  = ? AND `eid` = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$_SESSION['uid'], $post_id]);
                        if ($stmt) {
                            if ($stmt->rowCount() > 0) {
                                $row = $stmt->fetch();
                                if ($row['stage'] == 'application') {
                                    $output = ['response' => 'show_delete'];
                                } else {
                                    $output = ['response' => 'hide_delete'];
                                }
                            } else {
                                $output = ['response' => 'hide_delete'];
                            }
                        }
                    } else if ($row['uid'] == $_SESSION['uid']) {
                        $output = ['response' => 'show_delete'];
                    } else {
                        $output = ['response' => 'hide_delete'];
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function delete_write_up_regular($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            return ['response' => 'deleted'];
        } else {
            return ['response' => 'error'];
        }
    }
    public function delete_typing_text($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "DELETE FROM `typing_text_post` WHERE `post_id` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                return ['response' => 'deleted'];
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }
    public function delete_regular_post($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "DELETE  FROM `regular_post_table` WHERE `post_id` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                $sql4 = "SELECT * FROM `regular_post_media_table` WHERE `post_id` = ? ";
                $stmt4 = $this->connect()->prepare($sql4);
                $stmt4->execute([$post_id]);
                if ($stmt4) {
                    if ($stmt4->rowCount() > 0) {
                        error_reporting(0);
                        foreach ($stmt4->fetchAll() as $files) {
                            $file_names[] = $files['name'];
                        }
                        foreach ($file_names as $name) {
                            unlink("media/regular/$name");
                        }
                        $del_sql = "DELETE FROM `regular_post_media_table` WHERE `post_id` IN ('', '', '', '$post_id')";
                        $del_stmt = $this->connect()->prepare($del_sql);
                        $del_stmt->execute();
                        if ($del_stmt) {
                            return ['response' => 'deleted'];
                        } else {
                            return ['response' => 'error'];
                        }
                    }
                } else {
                    return ['response' => 'error'];
                }
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }
    public function delete_reference_post($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "DELETE FROM `reference_post` WHERE `post_id` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                return ['response' => 'deleted'];
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }

    public function delete_portrait_post($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "SELECT * FROM `portrait_post` WHERE `post_id` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                if ($stmt2->rowCount() > 0) {
                    $filename = $stmt2->fetch()['image'];
                    unlink("media/portrait/$filename");
                    $sql3 = "DELETE FROM `portrait_post` WHERE `post_id` = ? AND `uid` = ?";
                    $stmt3 = $this->connect()->prepare($sql3);
                    $stmt3->execute([$post_id, $uid]);
                    if ($stmt3) {
                        return ['response' => 'deleted'];
                    } else {
                        return ['response' => 'error'];
                    }
                } else {
                    return ['response' => 'error'];
                }
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }
    public function delete_classic_write_up($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "DELETE FROM `classic_write_up` WHERE `post_id` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                return ['response' => 'deleted'];
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }

    public function delete_peffet_event($post_id, $uid)
    {
        $sql = "DELETE FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $uid]);
        if ($stmt) {
            $sql2 = "DELETE  FROM `peffet_event_main_table` WHERE `eid` = ? AND `uid` = ?";
            $stmt2 = $this->connect()->prepare($sql2);
            $stmt2->execute([$post_id, $uid]);
            if ($stmt2) {
                $sql4 = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? ";
                $stmt4 = $this->connect()->prepare($sql4);
                $stmt4->execute([$post_id]);
                if ($stmt4) {
                    if ($stmt4->rowCount() > 0) {
                        error_reporting(0);
                        foreach ($stmt4->fetchAll() as $files) {
                            $file_names[] = $files['media'];
                        }
                        foreach ($file_names as $name) {
                            unlink("media/event_media/$name");
                        }
                        $del_sql = "DELETE FROM `peffet_event_application_table` WHERE `eid` = $post_id";
                        $del_stmt = $this->connect()->prepare($del_sql);
                        $del_stmt->execute();
                        if ($del_stmt) {
                            return ['response' => 'deleted'];
                        } else {
                            return ['response' => 'error'];
                        }
                    } else {
                        return ['response' => 'deleted'];
                    }
                } else {
                    return ['response' => 'error'];
                }
            } else {
                return ['response' => 'error'];
            }
        } else {
            return ['response' => 'error'];
        }
    }
    public function delete_post($post_id)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id, $_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $type = $row['type'];
                    if ($type == "write_up_regular") {
                        $output = $this->delete_write_up_regular($post_id, $_SESSION['uid']);
                    } else if ($type == "typing_text") {
                        $output = $this->delete_typing_text($post_id, $_SESSION['uid']);
                    } else if ($type == "regular_post") {
                        $output = $this->delete_regular_post($post_id, $_SESSION['uid']);
                    } else if ($type == "reference_post") {
                        $output = $this->delete_reference_post($post_id, $_SESSION['uid']);
                    } else if ($type == "portrait_post") {
                        $output = $this->delete_portrait_post($post_id, $_SESSION['uid']);
                    } else if ($type == "classic_write_up") {
                        $output = $this->delete_classic_write_up($post_id, $_SESSION['uid']);
                    } else if ($type == "peffet_event") {
                        $output = $this->delete_peffet_event($post_id, $_SESSION['uid']);
                    }
                }
            } else {
                $output = ['response' => 'error'];
            }
        }
        return json_encode($output);
    }
    public function share_post_to_third_party($post_id)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $output = [
                        'title' => "@" . $row['username'] . ' is on Peffet',
                        'text' => "Hello, I'm " . $row['username'] . " checkout my post on Peffet. Click the link below.",
                        'url' => 'https://localhost:8080/peffet_m/detailed_view?post_id=' . $row['post_id']
                    ];
                }
            }
        }
        return json_encode($output);
    }
    public function getSpecificPost($uid, $post_id)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ? ";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$post_id]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ? && uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id'], $uid]);
                $is_liked = false;
                if ($stmt->rowCount() > 0) {
                    $is_liked = true;
                }
                $sql = "SELECT * FROM `reaction_table` WHERE post_id = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$row1['post_id']]);
                if ($stmt) {
                    if ($is_liked == true) {
                        $is_liked = true;
                    } else {
                        $is_liked = false;
                    }
                    $num = $stmt->rowCount();
                }
                $saved_sql = "SELECT * FROM `usersavedpost` WHERE post_id = ?";
                $saved_stmt = $this->connect()->prepare($saved_sql);
                $saved_stmt->execute([$row1['post_id']]);
                if ($saved_stmt) {

                    $saved_num = $saved_stmt->rowCount();
                }
                $is_post_saved = $this->check_if_post_saved($row1['post_id'], $_SESSION['uid']);
                $user_d_sql = 'SELECT * FROM `users` WHERE uid = ?';
                $user_d_stmt = $this->connect()->prepare($user_d_sql);
                $user_d_stmt->execute([$row1['uid']]);
                if ($user_d_stmt && $user_d_stmt->rowCount() > 0) {
                    foreach ($user_d_stmt as $user_d_row) {

                        if ($row1['type'] == 'write_up_regular') {

                            $set = array(
                                'username' => $user_d_row['username'],
                                'avatar' => $user_d_row['avatar'],
                                'text' => $row1['title'],
                                'post_id' => $row1['title'],
                                'time_ago' => time_ago($row1['time']),
                                'type' => $row1['type'],
                                'sub_type' => $row1['sub_type'],
                                'post_id' => $row1['post_id'],
                                'is_liked' => $is_liked,
                                'total_likes' => $num,
                                'total_comment' => $this->CommentCount(
                                    $row1['post_id']
                                ),
                                'post_type' => $row1['type'],
                                'saved_num' => $saved_num,
                                'post_saved' => $is_post_saved
                            );
                            $output[] = $set;
                        } else if ($row1['type'] == 'reference_post') {
                            $sql = 'SELECT * FROM `reference_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $ref_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $ref_row['text'],
                                        'post_id' => $row1['post_id'],
                                        'time_ago' => time_ago($ref_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'ref_by' => $ref_row['ref_by'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'classic_write_up') {
                            $sql = 'SELECT * FROM `classic_write_up` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $classic_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $classic_row['text'],
                                        'post_id' => $classic_row['post_id'],
                                        'time_ago' => time_ago($classic_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $classic_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $classic_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'typing_text') {
                            $sql = 'SELECT * FROM `typing_text_post` WHERE post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $typed_row) {

                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' =>  $typed_row['text'],
                                        'post_id' => $typed_row['post_id'],
                                        'time_ago' => time_ago($typed_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'bg' => $typed_row['bg'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved,
                                        'font' => $typed_row['font']
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'portrait_post') {
                            $sql = 'SELECT * FROM `portrait_post` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'image' => $port_row['image'],
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'regular_post') {
                            $sql = 'SELECT * FROM `regular_post_table` WHERE  post_id = ?';
                            $stmt = $this->connect()->prepare($sql);
                            $stmt->execute([$row1['post_id']]);
                            if ($stmt && $stmt->rowCount() > 0) {
                                foreach ($stmt->fetchAll() as $port_row) {
                                    $regMedia = $this->regMedia($port_row['post_id']);
                                    $set = array(
                                        'username' => $user_d_row['username'],
                                        'avatar' => $user_d_row['avatar'],
                                        'text' => $port_row['caption'],
                                        'post_id' => $port_row['post_id'],
                                        'time_ago' => time_ago($port_row['time']),
                                        'type' => $row1['type'],
                                        'sub_type' => $row1['sub_type'],
                                        'post_id' => $row1['post_id'],
                                        'is_liked' => $is_liked,
                                        'total_likes' => $num,
                                        'total_comment' => $this->CommentCount($row1['post_id']),
                                        'post_type' => $row1['type'],
                                        'images' => $regMedia,
                                        'saved_num' => $saved_num,
                                        'post_saved' => $is_post_saved
                                    );
                                    $output[] = $set;
                                }
                            }
                        } else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }

    public function createEvent($text, $media_type, $target_audience, $orientation, $num_of_part)
    {
        date_default_timezone_set('Africa/Lagos');
        $uid = $_SESSION['uid'];
        $username = $_SESSION['username'];
        $post_id = "peffet_event_" . bin2hex(random_bytes(65)) . time() . bin2hex(random_bytes(23));
        $time = date('m/d/Y h:i:s a');
        $url = "/detailview?user_id=$uid&&post_id=$post_id";
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "INSERT INTO `central_post_holder`
                (`uid`, `post_id`, `username`, `title`, `type`, `url`, `time`, `Location`) 
                VALUES (?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid, $post_id, $username, $text, 'peffet_event', $url, $time, $location]);
        if ($stmt) {
            $sql = "INSERT INTO `peffet_event_main_table`(`uid`, `username`, `eid`, `description`, `media_type`, `target_audience`, `orientation`, `num_of_part`, `time`, `stage`) VALUES (?,?,?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$uid, $username, $post_id, $text, $media_type, $target_audience, $orientation, $num_of_part, $time, 'application']);
            if ($stmt) {
                $this->NotifyUserCallPostCaption($username, $this->prepareSentence($text), $url, "post", $post_id);
                $this->notifyNewPostToFollower("peffet_event", $post_id, $username);
                $this->notifyUserPostCreated($post_id, $username, $uid);
                $sql = "SELECT * FROM users WHERE uid = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$uid]);
                if ($stmt) {
                    $output = array('error' => false, 'success' => true);
                } else {
                    $output = array('error' => true);
                }
            }
        }
        return json_encode($output);
    }
    public function updateEvtBxJoin($eid, $uid, $username)
    {
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $e_row = $stmt->fetch();
                if ($e_row['uid'] == $uid) {
                    $output = [
                        'error' => 'unknown'
                    ];
                } else {
                    $host_id = $e_row['uid'];
                    $host_name = $e_row['username'];
                    $target_audience = $e_row['target_audience'];
                    $orientation = $e_row['orientation'];
                    $media_type = $e_row['media_type'];
                    if ($target_audience !== 'All' && $target_audience !== $_SESSION['country_name']) {
                        $output = [
                            'error' => 'availability',
                        ];
                    } else {
                        $ap_sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `creator_id` = ? AND `uid` = ?";
                        $ap_stmt = $this->connect()->prepare($ap_sql);
                        $ap_stmt->execute([$eid, $host_id, $uid]);
                        if ($ap_stmt) {
                            if ($ap_stmt->rowCount() > 0) {
                                $output = [
                                    'error' => 'none',
                                    'status' => 'pending'
                                ];
                            } else {
                                $output = [
                                    'error' => 'none',
                                    'status' => 'null',
                                    'target_audience' => $target_audience,
                                    'media_type' => $media_type,
                                    'orientation' => $orientation,
                                    'cid' => $host_id,
                                    'event_id' => $eid
                                ];
                            }
                        }
                    }
                }
            } else {
                $output = [
                    'error' => 'unknown'
                ];
            }
        }
        return json_encode($output);
    }

    public function applyForEvent($filename, $fileTmpName, $error, $filesize)
    {
        date_default_timezone_set('Africa/Lagos');
        $uid = $_SESSION['uid'];
        $username = $_SESSION['username'];
        $host_id = $_POST['host_id'];
        $event_id = $_POST['event_id_val'];
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        $filetype = ['jpg', 'jpeg', 'png', 'mov', 'mp4', 'avi', 'ogg', 'mp3', 'flac', 'mp4a', 'wav'];
        $newfilename = "peffet_event_" . rand(1111, 9999) . time() . "." . $ext;
        $target = "media/event_media/" . basename($newfilename);
        $time = date('m/d/Y h:i:s a');
        if (!in_array($ext, $filetype)) {
            return 'invalid file format';
        } else if ($error) {
            return 'file error';
        } else {
            $upload = move_uploaded_file($fileTmpName, $target);
            if ($upload) {
                $sql = "INSERT INTO `peffet_event_application_table`(`eid`, `creator_id`, `uid`, `username`, `media`, `media_type`, `time`) VALUES (?,?,?,?,?,?,?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$event_id, $host_id, $uid, $username, $newfilename, $ext, $time]);
                if ($stmt) {
                    return 'successful';
                }
            } else {
                return 'error';
            }
        }
    }
    public function updateEvtBxManage($eid, $uid, $username)
    {
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ? AND `username` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $username, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $num_of_part = $stmt->fetch();
                $ap_sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `creator_id` = ? ORDER BY `time` DESC";
                $ap_stmt = $this->connect()->prepare($ap_sql);
                $ap_stmt->execute([$eid, $uid]);
                if ($ap_stmt) {
                    if ($ap_stmt->rowCount() > 0) {
                        foreach ($ap_stmt->fetchAll() as $row) {
                            $u_sql = "SELECT * FROM `users` WHERE `uid` = ?";
                            $u_Stmt = $this->connect()->prepare($u_sql);
                            $u_Stmt->execute([$row['uid']]);
                            if ($u_Stmt) {
                                $u_name = $u_Stmt->fetch();
                                $set = [
                                    'error' => 'none',
                                    'status' => 'applicans',
                                    'name' => $u_name['name'],
                                    'username' => $u_name['username'],
                                    'media' => $row['media'],
                                    'media_type' => $row['media_type'],
                                    'available_num' => $ap_stmt->rowCount(),
                                    'needed' => $num_of_part['num_of_part'],
                                    'event_id' => $eid,
                                    'applicant_id' => $u_name['uid']
                                ];
                                $output[] = $set;
                            }
                        }
                    } else {
                        $output = [
                            'error' => 'none',
                            'status' => 'no applicant'
                        ];
                    }
                }
            } else {
                $output = [
                    'error' => 'unknown'
                ];
            }
        }
        return json_encode($output);
    }
    public function decline_application($eid, $applicant_id)
    {
        $sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $applicant_id]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $row = $stmt->fetch();
                if (unlink("media/event_media/" . $row['media'])) {
                    $del_sql = "DELETE FROM `peffet_event_application_table` WHERE `eid` = ? AND `uid` = ?";
                    $del_stmt = $this->connect()->prepare($del_sql);
                    $del_stmt->execute([$eid, $applicant_id]);
                    if ($del_stmt) {
                        $sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$eid]);
                        if ($stmt) {
                            $output = [
                                'error' => 'none',
                                'num_of_applicants' => $stmt->rowCount()
                            ];
                        }
                    }
                }
            } else {
                $output = ['error' => 'empty'];
            }
        }
        return json_encode($output);
    }
    public function approve_event($eid)
    {
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $ap_sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `creator_id` = ? ORDER BY rand()";
                $ap_stmt = $this->connect()->prepare($ap_sql);
                $ap_stmt->execute([$eid, $uid]);
                if ($ap_stmt) {
                    if ($ap_stmt->rowCount() > 0) {
                        $m_row = $stmt->fetch();
                        $ap_row = $ap_stmt->rowCount();
                        if ($m_row['num_of_part'] == $ap_row) {
                            $up_sql = "UPDATE `peffet_event_main_table` SET `stage`= ? WHERE `eid` = ? AND `uid` = ? ";
                            $up_stmt = $this->connect()->prepare($up_sql);
                            $up_stmt->execute(['event', $eid, $uid]);
                            if ($up_stmt) {
                                foreach ($ap_stmt->fetchAll() as $pair_row) {
                                    $set[] = ['name' => $pair_row['username'], 'media' => $pair_row['media']];
                                }
                                $pairs_array = array_chunk($set, 2);
                                foreach ($pairs_array as $pair) {
                                    $pid = "peffet_event_pair_" . bin2hex(random_bytes(35));
                                    $time = date('m/d/Y h:i:s a');
                                    $p_sql = "INSERT INTO `peffet_event_pair`(`eid`, `pair_id`, `pair_one_name`, `pair_two_name`, `pair_one_media`, `pair_two_media`, `time`) VALUES (?,?,?,?,?,?,?)";
                                    $p_stmt = $this->connect()->prepare($p_sql);
                                    $p_stmt->execute([$eid, $pid, $pair[0]['name'], $pair[1]['name'], $pair[0]['media'], $pair[1]['media'], $time]);
                                    if ($p_stmt) {
                                        // 
                                    }
                                    $pr_sql_one = "INSERT INTO `peffet_event_reaction`(`eid`, `pair_id`, `media_type`, `description`, `pair_one_name`, `pair_two_name`, `like_for`, `uid`, `username`, `time`) VALUES (?,?,?,?,?,?,?,?,?,?)";
                                    $pr_stmt_one = $this->connect()->prepare($pr_sql_one);
                                    $pr_stmt_one->execute([$eid, $pid, '..', '..', $pair[0]['name'], $pair[1]['name'], 'pair_one', '...', '...', $time]);
                                    if ($pr_stmt_one) { }


                                    $pr_sql_two = "INSERT INTO `peffet_event_reaction`(`eid`, `pair_id`, `media_type`, `description`, `pair_one_name`, `pair_two_name`, `like_for`, `uid`, `username`, `time`) VALUES (?,?,?,?,?,?,?,?,?,?)";
                                    $pr_stmt_two = $this->connect()->prepare($pr_sql_two);
                                    $pr_stmt_two->execute([$eid, $pid, '..', '..', $pair[0]['name'], $pair[1]['name'], 'pair_two', '...', '...', $time]);
                                    if ($pr_stmt_two) { }
                                }
                                $output = [
                                    'error' => 'none',
                                    'status' => 'ready'
                                ];
                                foreach ($ap_stmt->fetchAll() as $value) {
                                    $nid = "event_notif_" . bin2hex(random_bytes(33));
                                    $time = date('m/d/Y h:i:s a');
                                    $sql = "INSERT INTO `notification`
                                (`nid`, `type`, `username`, `re_username`, `seen_one`, `seen_two`, `post_id`, `time`) 
                                VALUES (?,?,?,?,?,?,?,?)";
                                    $stmt = $this->connect()->prepare($sql);
                                    $stmt->execute([$nid, "event_ready", $_SESSION['username'], $value['username'], "unseen", "unseen", $eid, $time]);
                                    if ($stmt) {
                                        // 
                                    }
                                }
                            }
                        } else {
                            $output = [
                                'error' => 'none',
                                'status' => 'inadequate participants'
                            ];
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function concludeEvent($eid)
    {
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `peffet_event_main_table` WHERE `eid` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid, $uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $row = $stmt->fetch();
                $sql = "SELECT * FROM `peffet_event_reaction` WHERE `eid` = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$eid]);
                if ($stmt) {
                    if ($stmt->rowCount() > 0) {
                        foreach ($stmt->fetchAll() as $row) {
                            if ($row['like_for'] == 'pair_one') {
                                $set[] = ['name' => $row['pair_one_name'], 'like_for' => $row['like_for'], 'event_id' => $row['eid']];
                            } else if ($row['like_for'] == 'pair_two') {
                                $set[] = ['name' => $row['pair_two_name'], 'like_for' => $row['like_for'], 'event_id' => $row['eid']];
                            }
                        }
                        foreach ($set as $value) {
                            $n[] = implode("||", $value);
                        }
                        $s = array_count_values($n);
                        arsort($s);
                        foreach ($s as $x => $x_value) {
                            $ex = explode("||", $x);
                            $e[] = ['name' => $ex[0], 'number' => $x_value];
                        }
                        if ($e[0]['number'] == $e[1]['number']) {
                            $closable = false;
                        } else {
                            $closable = true;
                        }
                        if (!$closable) {
                            $output = ['error' => 'unknown'];
                        } else {
                            $n_sql = "SELECT * FROM `peffet_event_application_table` WHERE `eid` = ? AND `creator_id` = ? AND `username` != ?";
                            $n_stmt = $this->connect()->prepare($n_sql);
                            $n_stmt->execute([$eid, $uid, $e[0]['name']]);
                            if ($n_stmt) {
                                if ($n_stmt->rowCount() > 0) {
                                    foreach ($n_stmt->fetchAll() as $value) {
                                        $all_appliacts_media[] = [$value['media']];
                                        unlink("media/event_media/" . $value['media']);
                                    }
                                    $this->notifyUservictory($e[0]['name'], $_SESSION['username'], $eid);
                                    $up_sql = "UPDATE `peffet_event_main_table` SET `stage`= ? WHERE `eid` = ?";
                                    $up_stmt = $this->connect()->prepare($up_sql);
                                    $up_stmt->execute(['concluded', $eid]);
                                    if ($up_stmt) {
                                        // absolute deletion
                                        $del_app = "DELETE FROM `peffet_event_application_table` WHERE `eid` = ? AND `username` != ?";
                                        $del_stmt = $this->connect()->prepare($del_app);
                                        $del_stmt->execute([$eid, $e[0]['name']]);
                                        if ($del_stmt) { }

                                        $del_pair = "DELETE FROM `peffet_event_pair` WHERE `eid` = ?";
                                        $del_stmt = $this->connect()->prepare($del_pair);
                                        $del_stmt->execute([$eid]);
                                        if ($del_stmt) { }


                                        $output = ['error' => 'none', 'status' => 'success'];
                                    }
                                }
                            } else {
                                $output = ['error' => 'unknown'];
                            }
                        }
                    } else {
                        $output = ['error' => 'unknown'];
                    }
                }
            } else {
                $output = ['error' => 'unknown'];
            }
        }
        return json_encode($output);
    }

    public function notifyUservictory($winner, $host, $eid)
    {
        date_default_timezone_set('Africa/Lagos');
        $nid = "peffet_event_winner" . time() . bin2hex(random_bytes(15));
        $time = date('m/d/Y h:i:s a');
        $sql = "INSERT INTO `notification`(`nid`, `type`, `username`, `re_username`, `sub_type`,  `seen_one`, `seen_two`, `post_id`,`time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$nid, "winner_event", $host, $winner, "peffet_event", "unseen", "unseen", $eid, $time]);
        if (!$stmt) {
            # code...
        }
    }
    public function getAllEvents($eid)
    {
        $sql = "SELECT * FROM `central_post_holder` WHERE `post_id` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$eid]);
        if($stmt){
            if($stmt->rowCount() > 0){
                $row = $stmt->fetch();
                return $this->getPeffetEvent($row['uid'], $eid);
            }
        }
    }

}

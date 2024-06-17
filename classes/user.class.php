<?php
class user extends dbh
{
    public function getUserDetails($username)
    {
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username]);
        if (!$stmt) {
            $output = "error";
        } else {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $output = array('uid' => $row['uid'], 'username' => $row['username'], 'bio' => $row['bio'], 'name' => $row['name'], 'error' => "alive", 'avatar' => $row['avatar'], 'website' => $row['website']);
                }
            } else {
                $output = array('error' => "ghost");
            }
        }

        return $output;
    }
    public function getUserDetailsWithId($uid)
    {
        $sql = "SELECT * FROM users WHERE uid = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid]);
        if (!$stmt) {
            $output = "error";
        } else {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $is_active = $this->checkIfOnline($row['uid']);
                    $output = array('uid' => $row['uid'], 'username' => $row['username'], 'bio' => $row['bio'], 'name' => $row['name'], 'error' => "alive", 'avatar' => $row['avatar'], 'is_active' => $is_active, 'website' => $row['website'], 'check_fav' => $this->check_chat_fav($row['username'], $_SESSION['username']));
                }
            } else {
                $output = array('error' => "ghost");
            }
        }

        return $output;
    }
    public function check_chat_fav($saved_username, $saver_user)
    {
        $sel_sql = "SELECT * FROM `users_chat_fav` WHERE `saver_username` = ? AND `saved_username` = ?";
        $sel_stmt = $this->connect()->prepare($sel_sql);
        $sel_stmt->execute([$saver_user, $saved_username]);
        if ($sel_stmt) {
            if ($sel_stmt->rowCount() > 0) {
                return "added";
            } else {
                return "not added";
            }
        }
    }
    public function getUnameMatch($username)
    {
        $sql = 'SELECT * FROM users WHERE username LIKE ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$username%"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                $data[] = $row['username'];
            }
        } else {
            $data = ["not found"];
        }
        return json_encode($data);
    }
    public function getUnameQuery($username)
    {
        $sql = 'SELECT * FROM users WHERE `username` LIKE ? OR `name` LiKE ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$username%", "%$username%"]);
        if (!$stmt) {
            $output = "error";
        } else {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $arr = array('uid' => $row['uid'], 'username' => $row['username'], 'bio' => $row['bio'], 'name' => $row['name'], 'error' => "alive",  'avatar' => $row['avatar']);
                    $output[] = $arr;
                }
            } else {
                $output[] = array('error' => "ghost");
            }
        }
        return json_encode($output);
    }
    public function getUserTotalPost($type, $uid)
    {
        if ($type == "all") {

            $sql = "SELECT * FROM `central_post_holder` WHERE uid = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$uid]);
            if ($stmt) {
                return $stmt->rowCount();
            }
        }
    }
    public function updateUserPassword()
    {
        $oldpass = $_POST['oldpass'];
        $newpass = $_POST['newpass'];
        $newpassconfirm = $_POST['newpassconfirm'];
        if (empty($oldpass) || empty($newpass) || empty($newpassconfirm)) {
            echo "<em class='text-danger'>All fields are required!</em>";
        } else if ($newpass !== $newpassconfirm) {
            echo "<em class='text-danger'>Password confirm doesn't match!</em>";
        } else {
            $sql = "SELECT * FROM `users` WHERE `uid` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$_SESSION['uid']]);
            if ($stmt) {
                if ($stmt->rowCount() > 0) {
                    $row = $stmt->fetch();
                    if (!password_verify($oldpass . "david_is_a_very_nice_brother_to_i_love_him", $row['password'])) {
                        echo "<em class='text-danger'>Incorrect password!</em>";
                    } else {
                        $newpass_hash = password_hash($newpass . "david_is_a_very_nice_brother_to_i_love_him", PASSWORD_DEFAULT);
                        $sql = "UPDATE `users` SET `password`= ? WHERE `uid` = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$newpass_hash, $_SESSION['uid']]);
                        if ($stmt) {
                            echo "<em class='text-success'>Password reset successful!</em>";
                        } else {
                            echo "<em class='text-danger'>An error occured!</em>";
                        }
                    }
                } else {
                    echo "<em class='text-danger'>Account not found!</em>";
                }
            }
        }
    }
    public function updateUserinfoForm($c)
    {
        $name = htmlentities($_POST['name']);
        $bio = htmlentities($_POST['bio']);
        // $website = htmlentities($_POST['website']);
        if ($c == "yes") {
            $dp = $_FILES['dp']['name'];
            $size = $_FILES['dp']['size'];
            $error = $_FILES['dp']['error'];
            $ext = pathinfo($dp, PATHINFO_EXTENSION);
            $newfilename = "peffet_profile_image" . rand(1111, 9999) . time() . "." . $ext;
            $target = "media/dp/" . basename($newfilename);
            if (!empty($dp)) {
                if (in_array($ext, ['.png', '.jpeg', '.jpg', '.gif'])) {
                    echo "<em class='text-danger'>Invalid file type </em>";
                } else if ($size > 5000000) {
                    echo "<em class='text-danger'>File size too large </em>";
                } else if ($error) {
                    echo "<em class='text-danger'>An error occured </em>";
                } else {
                    $upload = move_uploaded_file($_FILES['dp']['tmp_name'], $target);
                    if ($upload) {
                        $sqlD = "SELECT * FROM users WHERE uid = ?";
                        $stmtD = $this->connect()->prepare($sqlD);
                        $stmtD->execute([$_SESSION['uid']]);
                        if ($stmtD) {
                            $avatar = $stmtD->fetch();
                        }
                        $sql = "UPDATE `users` SET avatar = ? WHERE uid = ?";
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute([$newfilename, $_SESSION['uid']]);
                        if ($stmt) {
                            $output = true;
                        }
                    }
                }
            }
        }

        $sql = "UPDATE `users` SET name = ?, bio = ? WHERE `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$name, $bio, $_SESSION['uid']]);
        if ($stmt) {
            $output = true;
        }
        if ($output) {
            echo "<em class='text-success'>Successful</em>";
        } else {
            echo "<em class='text-danger'>An error occured </em>";
        }
    }
    public function getNotif()
    {
        $sql = "SELECT * FROM `notification` WHERE re_username = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username']]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['type'] == "liked_your_post") {
                    // 
                } else {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                }
            }
        }else{
            $output = ['error' => 'empty'];
        }
        return json_encode($output);
    }
    public function getNotifActivity()
    {
        $sql = "SELECT * FROM `notification` WHERE re_username = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username']]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['type'] == "commented") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                } else if ($row['type'] == "replyed") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                } else if ($row['type'] == "new post") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                } else if ($row['type'] == "winner_event") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                }
            }
        }else{
            $output = ['error' => 'empty'];
        }
        return json_encode($output);
    }
    public function getNotifLikes()
    {
        $sql = "SELECT * FROM `notification` WHERE `re_username` = ? AND `type` = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username'], "liked_your_post"]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['type'] == "liked_your_post") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $outputs[] = $set;
                }
            }
            foreach ($outputs as $key => &$entry) {
                $output[$entry['post_id']][$key] = $entry;
            }
        }else{
            $output = ['error' => 'empty'];
        }
        return json_encode($output);
    }
    public function getNotifMention()
    {
        $sql = "SELECT * FROM `notification` WHERE `re_username` = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username']]);
        if ($stmt && $stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row) {
                if ($row['type'] == "post") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                } else if ($row['type'] == "comment") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                } else if ($row['type'] == "reply") {
                    $set = array(
                        'error' => false,
                        'username' => $row['username'],
                        'time_ago' => time_ago($row['time']),
                        'seen_one' => $row['seen_one'],
                        'seen_two' => $row['seen_two'],
                        'notif_id' => $row['nid'],
                        'type' => $row['type'],
                        'sub_type' => $row['sub_type'],
                        'post_id' => $row['post_id'],
                        'cid' => $row['cid'],
                        'repid' => $row['repid']
                    );
                    $output[] = $set;
                }
            }
        }else{
            $output = ['error' => 'empty'];
        }
        return json_encode($output);
    }
    public function f_system_get($sender, $reciever)
    {
        $sql = "SELECT * FROM `fanf` WHERE sender = ? AND reciever = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sender, $reciever]);
        if ($stmt->rowCount() > 0) {
            $sql = "SELECT * FROM `fanf` WHERE sender = ? AND reciever = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$reciever, $sender]);
            if ($stmt->rowCount() > 0) {
                $out = "friends";
            } else {
                $out = "following";
            }
        } else {
            $out = "follow";
        }
        return $out;
    }
    public function f_system($sender, $reciever)
    {
        $sql = "SELECT * FROM `fanf` WHERE `sender` = ? AND `reciever` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sender, $reciever]);
        if (!$stmt->rowCount() > 0) {
            $time = date('m/d/Y h:i:s a');
            $sql = "INSERT INTO `fanf`(`sender`, `reciever`, `notify_permision`, `time`) VALUES (?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$sender, $reciever, "all", $time]);

            if ($stmt) {
                $nid = "follow_notif_" . time() . bin2hex(random_bytes(15));
                $nsql = "INSERT INTO `notification`(`nid`, `type`,`username`, `re_username`, `seen_one`, `seen_two`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?)";
                $nstmt = $this->connect()->prepare($nsql);
                $nstmt->execute([$nid, "follow", $sender, $reciever, "unseen", "unseen", $time]);
                $sql = "SELECT * FROM `fanf` WHERE `sender` = ? AND `reciever` = ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$reciever, $sender]);
                if ($stmt->rowCount() > 0) {

                    $out = "friends";
                } else {
                    $out = "following";
                }
            }
        } else {
            $sql = "DELETE FROM `fanf` WHERE sender = ? AND reciever = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$sender, $reciever]);
            $nsql = "DELETE FROM `notification` WHERE username = ? AND re_username = ? AND type = ?";
            $nstmt = $this->connect()->prepare($nsql);
            $nstmt->execute([$sender, $reciever, "follow"]);
            $out = "follow";
        }
        return json_encode(array('return' => $out));
    }
    public function UserFollowersNum($username, $type)
    {
        if ($type == "follower") {
            $sql = "SELECT * FROM `fanf` WHERE `reciever` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username]);
            return $stmt->rowCount();
        } else if ($type == "following") {
            $sql = "SELECT * FROM fanf WHERE sender = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username]);
            return $stmt->rowCount();
        }
    }
    public function user_follow_notify_type($type, $sec, $username)
    {
        switch ($sec) {
            case 'reference':
                if ($type == "add") {
                    $sql = "UPDATE `fanf` SET `reference`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['notify', $_SESSION['username'], $username]);
                } else {
                    $sql = "UPDATE `fanf` SET `reference`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['', $_SESSION['username'], $username]);
                }

                break;
            case 'write_up':
                if ($type == "add") {
                    $sql = "UPDATE `fanf` SET `write_up`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['notify', $_SESSION['username'], $username]);
                } else {
                    $sql = "UPDATE `fanf` SET `write_up`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['', $_SESSION['username'], $username]);
                }

                break;
            case 'portrait':
                if ($type == "add") {
                    $sql = "UPDATE `fanf` SET `portrait`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['notify', $_SESSION['username'], $username]);
                } else {
                    $sql = "UPDATE `fanf` SET `portrait`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['', $_SESSION['username'], $username]);
                }

                break;
            case 'regular':
                if ($type == "add") {
                    $sql = "UPDATE `fanf` SET `regular`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['notify', $_SESSION['username'], $username]);
                } else {
                    $sql = "UPDATE `fanf` SET `regular`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['', $_SESSION['username'], $username]);
                }

                break;
            case 'peffet_event':
                if ($type == "add") {
                    $sql = "UPDATE `fanf` SET `peffet_event`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['notify', $_SESSION['username'], $username]);
                } else {
                    $sql = "UPDATE `fanf` SET `peffet_event`= ? WHERE sender = ? AND reciever = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute(['', $_SESSION['username'], $username]);
                }

                break;


            default:
                # code...
                break;
        }
    }
    public function getUserFollowerDetails($username)
    {
        $sql = "SELECT * FROM fanf WHERE reciever = ? AND sender = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username, $_SESSION['username']]);
        if (!$stmt) {
            $output = "error";
        } else {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $output = array('regular' => $row['regular'], 'portrait' => $row['portrait'], 'reference' => $row['reference'], 'write_up' => $row['write_up'], 'peffet_event' => $row['peffet_event'], 'error' => "none");
                }
            } else {
                $output = array('error' => "ghost");
            }
        }

        return $output;
    }
    public function searchforFollower($username)
    {

        $sql = 'SELECT * FROM fanf WHERE sender LIKE ? AND reciever = ?';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$username%", $_SESSION['username']]);
        if ($stmt) {
            if (!$stmt->rowCount() > 0) {
                $output = array('num' => "empty");
            } else {
                foreach ($stmt->fetchAll() as $fanf_row) {
                    $sql_users = "SELECT * FROM users WHERE username = ?";
                    $users_stmt = $this->connect()->prepare($sql_users);
                    $users_stmt->execute([$fanf_row['sender']]);
                    if ($users_stmt && $users_stmt->rowCount() > 0) {
                        foreach ($users_stmt as $users_row) {
                            $set = array('num' => "has_value", 'username' => $users_row['username'], 'name' => $users_row['name'], 'avatar' => $users_row['avatar'], 'uid' => $users_row['uid']);
                            $output[] = $set;
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function users_suggestion($username)
    {
        $sug_sql = "SELECT * FROM `fanf` WHERE  `sender` = ? ORDER BY rand() LIMIT 15";
        $sug_stmt = $this->connect()->prepare($sug_sql);
        $sug_stmt->execute([$username]);
        if ($sug_stmt && $sug_stmt->rowCount() > 0) {
            foreach ($sug_stmt->fetchAll() as $sug_values) {
                $set[] = $sug_values['reciever'];
            }
            $usernames_following_ = array_unique($set);
            $usernames_following = array_slice($usernames_following_, 0, 10);
            foreach ($usernames_following as $usernames) {
                $sql_to_get_ = "SELECT * FROM `fanf` WHERE  `sender` = ? AND `reciever` != ? ORDER BY rand() LIMIT 2";
                $stmt_to_get_ = $this->connect()->prepare($sql_to_get_);
                $stmt_to_get_->execute([$usernames, $username]);
                if ($stmt_to_get_ && $stmt_to_get_->rowCount() > 0) {
                    foreach ($stmt_to_get_->fetchAll() as $gotten_usernames_) {
                        $g_usernames[] = $gotten_usernames_['reciever'];
                    }
                }
            }
            $second_set_set = array_unique($g_usernames);
            foreach ($second_set_set as $validating_the_usernames) {
                $sql_to_validate_ = "SELECT * FROM `fanf` WHERE  `sender` = ? AND `reciever` = ?";
                $stmt_validate_ = $this->connect()->prepare($sql_to_validate_);
                $stmt_validate_->execute([$username, $validating_the_usernames]);
                if ($stmt_validate_) {
                    if ($stmt_validate_->rowCount() > 0) {
                        # code...
                    } else {
                        if ($username == $validating_the_usernames) {
                            # code...
                        } else {
                            $main_username = ['username' => $validating_the_usernames, 'error' => 'no'];
                            $main_usernames[] = $main_username;
                        }
                    }
                }
            }
            $output = $main_usernames;
        } else {
            $output = $this->getSuggByLocation($username);
        }
        return $output;
    }
    public function getSuggByLocation($username)
    {
        $location = $_SESSION['continent_name'] . ", " . $_SESSION['country_name'] . ", " . $_SESSION['city'];
        $sql = "SELECT * FROM `users` WHERE `location` LIKE ? AND `username` != ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$location%", $username]);
        if ($stmt) {
            if ($stmt->rowCount() < 10) {
                $output = $this->getSuggByRand($username);
            } else if ($stmt->rowCount() > 10) {
                foreach ($stmt->fetchAll() as $row) {
                    $set = [
                        'username' => $row['username'],
                        'error' => 'no',

                    ];
                    $output[] = $set;
                }
            } else {
                $output = ['error' => 'yes'];
            }
        }
        return $output;
    }
    public function getSuggByRand($username)
    {
        $sql = "SELECT * FROM `users` WHERE `username` != ? ORDER BY rand()";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $set = [
                        'username' => $row['username'],
                        'error' => 'no'
                    ];
                    $output[] = $set;
                }
            } else {
                $output = ['error' => 'yes'];
            }
        }
        return $output;
    }
    public function follow_btn_checker($username, $spec_id)
    {
        if ($username == $_SESSION['username']) {
            $output = ['response' => "hide", 'spec_id' => $spec_id, 'username' => $username];
        } else {
            $sql = "SELECT * FROM fanf WHERE reciever = ? AND sender = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username, $_SESSION['username']]);
            if (!$stmt) {
                $output = ['response' => "error", 'spec_id' => $spec_id, 'username' => $username];
            } else {
                if ($stmt->rowCount() > 0) {
                    $output = ['response' => "hide", 'spec_id' => $spec_id, 'username' => $username];
                } else {
                    $output = ['response' => "show", 'spec_id' => $spec_id, 'username' => $username];
                }
            }
        }
        return $output;
    }
    public function users_suggestion_manual($username)
    {
        $usernames = $this->users_suggestion($username);
        foreach ($usernames as $names) {
            $output[] = $this->getUserDetails($names['username']);
        }
        return json_encode($output);
    }
    public function get_followers_to_share_post_to()
    {
        $sql = "SELECT * FROM `fanf` WHERE `reciever` = ? LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $unames[] = $row['sender'];
                }
                foreach ($unames as $names) {
                    $sql = "SELECT * FROM `users` WHERE `username` = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$names]);
                    if ($stmt) {
                        if ($stmt->rowCount() > 0) {
                            foreach ($stmt->fetchAll() as $row) {
                                $output[] = [
                                    'avatar' => $row['avatar'],
                                    'username' => $row['username'],
                                    'name' => $row['name'],
                                    'reciever_id' => $row['uid'],
                                    'error' => 'nope'
                                ];
                            }
                        }
                    }
                }
            } else {
                $output = ['error' => "yep"];
            }
        }
        return json_encode($output);
    }public function get_followers_to_share_post_to_search($username)
    {
        $sql = "SELECT * FROM `fanf` WHERE `sender` LIKE ? AND `reciever` = ? LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$username%", $_SESSION['username']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    $unames[] = $row['sender'];
                }
                foreach ($unames as $names) {
                    $sql = "SELECT * FROM `users` WHERE `username` = ?";
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute([$names]);
                    if ($stmt) {
                        if ($stmt->rowCount() > 0) {
                            foreach ($stmt->fetchAll() as $row) {
                                $output[] = [
                                    'avatar' => $row['avatar'],
                                    'username' => $row['username'],
                                    'name' => $row['name'],
                                    'reciever_id' => $row['uid'],
                                    'error' => 'nope'
                                ];
                            }
                        }
                    }
                }
            } else {
                $output = ['error' => "yep"];
            }
        }
        return json_encode($output);
    }
    public function reactionGiven($username)
    {
        $sql = "SELECT * FROM `reaction_table` WHERE `username` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function reaction_gotten($username)
    {
        $sql = "SELECT * FROM `reaction_table` WHERE `poster_username` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username]);
        if ($stmt) {
            return $stmt->rowCount();
        }
    }
    public function getUserAbsoluteInfo()
    {
        $sql = "SELECT * FROM `users` WHERE `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $row = $stmt->fetch();
                $total_post = $this->getUserTotalPost('all', $_SESSION['uid']);
                $followers_num = $this->UserFollowersNum($_SESSION['username'], "follower");
                $following_num = $this->UserFollowersNum($_SESSION['username'], "following");
                $reaction_given = $this->reactionGiven($_SESSION['username']);
                $reaction_gotten = $this->reaction_gotten($_SESSION['username']);
                $output = [
                    'username' => $row['username'],
                    'name' => $row['name'],
                    'following_num' => $following_num,
                    'follower_num' => $followers_num,
                    'bio' => $row['bio'],
                    'total_post' => $total_post,
                    'joined' => $row['time'],
                    'location' => $row['location'],
                    'email' => $row['email'],
                    'reaction_given' => $reaction_given,
                    'reaction_gotten' => $reaction_gotten
                ];
            }
        }
        return $output;
    }
    public function is_active()
    {
        date_default_timezone_set('Africa/Lagos');
        $initial_time =  date("Y-m-d H:i:s", time());
        $time = date("Y-m-d H:i:s", strtotime("2 minutes"));
        $sql = "SELECT * FROM `is_online` WHERE `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['uid']]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $up_sql = "UPDATE `is_online` SET `time`= ?, `initial_time` = ? WHERE `uid` = ?";
                $up_stmt = $this->connect()->prepare($up_sql);
                $up_stmt->execute([$time, $initial_time, $_SESSION['uid']]);
                if ($up_stmt) {
                    // 
                }
            } else {
                $in_sql = "INSERT INTO `is_online`( `uid`, `username`, `time`, `initial_time`) VALUES (?, ?, ?, ?)";
                $in_stmt = $this->connect()->prepare($in_sql);
                $in_stmt->execute([$_SESSION['uid'], $_SESSION['username'], $time, $initial_time]);
                if ($in_stmt) {
                    // 
                }
            }
        }
    }
    public function checkIfOnline($uid)
    {

        $initial_time =  date("Y-m-d H:i:s", time());
        $time = date("Y-m-d H:i:s", strtotime("2 minutes"));
        $sql = "SELECT * FROM `is_online` WHERE `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$uid]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                foreach ($stmt->fetchAll() as $row) {
                    if (strtotime($row['time']) > strtotime($initial_time)) {
                        $output = ['status' => "online"];
                    } else {
                        $output = [
                            'status' => 'offline',
                            'last_seen' => time_ago($row['initial_time']),
                        ];
                    }
                }
            } else {
                $output = [
                    'status' => 'Offline'
                ];
            }
        }
        return $output;
    }
    public function chechIfUsersArefriends($user1, $user2)
    {
        $sql = "SELECT * FROM `fanf` WHERE `reciever` = ? AND `sender` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$user1, $user2]);
        if ($stmt) {
            if ($stmt->rowCount() > 0) {
                $sql2 = "SELECT * FROM `fanf` WHERE `reciever` = ? AND `sender` = ?";
                $stmt2 = $this->connect()->prepare($sql2);
                $stmt2->execute([$user2, $user1]);
                if ($stmt2) {
                    if ($stmt2->rowCount() > 0) {
                        $output = "friends";
                    } else {
                        $output = "follow";
                    }
                }
            } else {
                $sql2 = "SELECT * FROM `fanf` WHERE `reciever` = ? AND `sender` = ?";
                $stmt2 = $this->connect()->prepare($sql2);
                $stmt2->execute([$user2, $user1]);
                if ($stmt2) {
                    if ($stmt2->rowCount() > 0) {
                        $output = "following";
                    } else {
                        $output = "follow";
                    }
                }
            }
        }
        return $output;
    }
    public function fillFollowerFollowing($username, $type)
    {
        if ($type == "follower") {
            $sql = "SELECT * FROM `fanf` WHERE `reciever` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username]);
            if ($stmt) {
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $userDetails = $this->getUserDetails($row['sender']);
                        if ($userDetails['error'] == 'alive') {
                            $userConnDetails = $this->chechIfUsersArefriends($_SESSION['username'], $row['sender']);
                            $output[] = [
                                'uid' => $userDetails['uid'],
                                'username' => $userDetails['username'],
                                'name' => $userDetails['name'],
                                'connD' => $userConnDetails,
                                'avatar' => $userDetails['avatar'],
                            ];
                        }
                    }
                }
            }
        } else {
            $sql = "SELECT * FROM `fanf` WHERE `sender` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username]);
            if ($stmt) {
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        $userDetails = $this->getUserDetails($row['reciever']);
                        if ($userDetails['error'] == 'alive') {
                            $userConnDetails = $this->chechIfUsersArefriends($_SESSION['username'], $row['reciever']);
                            $output[] = [
                                'uid' => $userDetails['uid'],
                                'username' => $userDetails['username'],
                                'name' => $userDetails['name'],
                                'avatar' => $userDetails['avatar'],
                                'connD' => $userConnDetails,
                            ];
                        }
                    }
                }
            }
        }
        return json_encode($output);
    }
    public function getUnSeenNotifNum()
    {
        $sql = "SELECT * FROM `notification` WHERE `re_username` = ? AND `seen_one` = ? AND `type` != ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username'], 'unseen', 'liked_your_post']);
        if($stmt){
            if($stmt->rowCount() > 0){
                $output = ['status' => 'good', 'num' => $stmt->rowCount()];
            }else{
                $output = ['status' => 'empty'];
            }
        }
        return $output;
    }
}

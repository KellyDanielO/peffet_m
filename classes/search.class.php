<?php
class search extends post
{
    public function explore_search_($query)
    {
        if($query[0] == "@"){
            $q = substr($query, 1);
            $response = json_decode($this->users_search_suggestion($q));
            if(count($response) > 0){
                $output = $response;
            }else{
                $output = ['num' => 'no'];
            }
        }else{
            $output = json_decode($this->users_search_suggestion($query));

        }
        return json_encode($output);
    }
    public function explore_search_sug($query)
    {
        if($query[0] == "@"){
            $q = substr($query, 1);
            $response = json_decode($this->users_search_suggestion($q));
            if(count($response) < 1){
                $output = ['status' => 'empty'];
            }else{
                foreach ($response as $value) {
                    $set = [
                        'result' => "@" . $value->username,
                        'main_result' => "@" . $value->username
                    ];
                    $output[] = $set;
                }
            }
        }else{
            $sql = "SELECT * FROM `central_post_holder` WHERE `title` LIKE ? ORDER BY rand() LIMIT 100";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(["%$query%"]);
            if($stmt){
                if ($stmt->rowCount() > 0) {
                    foreach ($stmt->fetchAll() as $row) {
                        if($row['type'] == "typing_text"){
                            $exp = explode("||", $row['title']);
                            $imp = implode(" ", $exp);
                            $set = [
                                'result' => $imp,
                                'main_result' => $row['title']
                            ];
                            $output[] = $set;
                        }else{
                            $set = [
                                'result' => $row['title'],
                                'main_result' => $row['title']
                            ];
                            $output[] = $set;
                            
                        }
                    }
                }else{
                    $output = ['status' => 'empty'];
                }
            }

        }
        return json_encode($output);
    }
    public function getUserSearchPost($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `title` LIKE ? ORDER BY rand() LIMIT 20";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%"]);
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
                        }else if ($row1['type'] == 'peffet_event') {
                            $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
                        }
                    }
                }
            }
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function getUserSearchPort($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE  `title` LIKE ? AND type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%", "portrait_post"]);
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
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function getUserSearchWriteUp($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `title` LIKE ?  ORDER BY `time` DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%"]);
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
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function getUserSearchReference($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE `title` LIKE ? AND `type` = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%", "reference_post"]);
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
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function getUserSearchReg($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE  `title` LIKE ? AND type = ? ORDER BY time DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%", "regular_post"]);
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
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function users_search_suggestion($query)
    {
        $sql = "SELECT * FROM `users` WHERE `username` LIKE ? OR `name` LIKE ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%", "%$query%"]);
        if($stmt){
            if($stmt->rowCount() > 0){
                foreach ($stmt->fetchAll() as $row) {
                    $usernames[] = $row['username'];
                }
                foreach ($usernames as $uname) {
                    $u_sql = "SELECT * FROM `users` WHERE `username` = ?";
                    $u_stmt = $this->connect()->prepare($u_sql);
                    $u_stmt->execute([$uname]);
                    if($u_stmt){
                        if($u_stmt->rowCount() > 0){
                            foreach ($u_stmt->fetchAll() as $row) {
                                $set = [
                                    'username' => $row['username'],
                                    'uid' => $row['uid'],
                                    'name' => $row['name'],
                                    'bio' => $row['bio'],
                                    'avatar' => $row['avatar']
                                ];
                                $output[] = $set;
                            }
                        }
                    }
                }
            }else{
                $output = ['num' => "no"];
            }
        }
        return json_encode($output);
    }
    public function getUserSearchEvent($q)
    {
        if($q[0] == "@"){
            $query = substr($q, 1);
        }else{
            $query = $q;
        }
        $uid = $_SESSION['uid'];
        $sql = "SELECT * FROM `central_post_holder` WHERE  `title` LIKE ? AND `type` = ? ORDER BY `time` DESC LIMIT 10";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%", "peffet_event"]);
        if ($stmt->rowCount() > 0) {
            foreach ($stmt->fetchAll() as $row1) {
                $output[] = $this->getPeffetEvent($row1['uid'], $row1['post_id']);
            }
        }else{
            $output = ['num' => "no"];
        }
        return json_encode($output);
    }
    public function saveSearch($q)
    {
        $query = htmlentities($q);
        date_default_timezone_set('Africa/Lagos');
        $c_sql = "SELECT * FROM `user_search` WHERE `uid` = ? AND `text` = ?";
        $c_stmt = $this->connect()->prepare($c_sql);
        $c_stmt->execute([$_SESSION['uid'], $query]);
        if($c_stmt){
            if($c_stmt->rowCount() > 0){
                $time = date("Y/m/d H:i:s a");
                $sql = "UPDATE `user_search` SET `time`= ? WHERE `uid`= ? AND `text`= ?";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$time, $_SESSION['uid'], $query]);
                if($stmt){
                    // 
                }
            }else{
                $sid = "peffet_search_" . bin2hex(random_bytes(20));
                $time = date("Y/m/d H:i:s a");
                $sql = "INSERT INTO `user_search`(`uid`, `text`, `time`, `sid`) VALUES (?,?,?,?)";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$_SESSION['uid'], $query, $time, $sid]);
                if($stmt){
                    // 
                }
            }
        }
    }
    public function getSavedSearch()
    {
        $c_sql = "SELECT * FROM `user_search` WHERE `uid` = ? ORDER BY `time` DESC";
        $c_stmt = $this->connect()->prepare($c_sql);
        $c_stmt->execute([$_SESSION['uid']]);
        if($c_stmt){
            if($c_stmt->rowCount() > 0){
                foreach ($c_stmt as $value) {
                    $output[] = ['sid' => $value['sid'], 'text' => $value['text']];
                }
            }
        }
        return $output;
    }
    public function deleSearch($uid, $sid)
    {
        $c_sql = "DELETE FROM `user_search` WHERE `uid` = ? AND `sid` = ?";
        $c_stmt = $this->connect()->prepare($c_sql);
        $c_stmt->execute([$uid, $sid]);
        if($c_stmt){
            // 
        }
    }
    public function gethash_tags_details($query)
    {
        error_reporting(1);
        $sql = "SELECT * FROM `central_post_holder` WHERE `title` LIKE ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(["%$query%"]);
        if($stmt){
            if($stmt->rowCount() > 0){
                foreach ($stmt->fetchAll() as $row) {
                    $ex_text = explode(" ", $this->prepareSentence($row['title']));
                    foreach ($ex_text as $value) {
                        if($value[0] == "#"){
                            $new_arr[] = $value;
                        }
                    }
                }
                // $old_arr = [array_search($query, $new_arr, false)];
                $values = array_count_values($new_arr);
                arsort($values);
                foreach ($values as $key => $value) {
                    $output[] = ['tag' => $key, 'num' => $value];
                }
            }else{
                $output = ['status' => 'empty'];
            }
        }
        return $output;
    }
}

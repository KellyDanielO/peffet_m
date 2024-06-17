<?php
class auth extends dbh{
    public function logUserBack()
    {
        if (!isset($_SESSION['uid']) && isset($_COOKIE['peffet_logins'])) {
            $cookie_values = $_COOKIE['peffet_logins'];
            $arr = explode('|sep|', $cookie_values);
            $username = $arr[0];
            $user_agent = $arr[1];
            $remote_addr = $arr[2];
            $hash = $arr[3];
            $sql = "SELECT * FROM `saved_login` WHERE `username` = ? AND `user_agent` = ? AND `remote_addre` = ? AND `hash` = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username, $user_agent, $remote_addr, $hash]);
            if ($stmt && $stmt->rowCount() > 0) {
               foreach ($stmt->fetchAll() as $row) {
                    if($row['did_user_logout'] == "no"){
                        $_SESSION['uid'] = $row['uid'];
                        $_SESSION['username'] = $row['username'];
                        $this->setSessionLoc();
                    }
               }
            } else {
                # code...
            }
            
        }
    }
    private function setSessionLoc()
    {
        // $cip = '186.70.94.17';
        // $cip = '102.90.3.28';

        // $url = "https://api.ipgeolocation.io/ipgeo?apiKey=d0d19cf1c98c4571ad87f708c0ca1089&ip=$cip&fields=*&output=json";
        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // $results = curl_exec($ch);
        // if(curl_errno($ch)){
        //     echo curl_error($ch);
        // }else{
        //     $arr = json_decode($results, 1);
        //     $_SESSION['country_name'] = $arr['country_name'];
        //     $_SESSION['city'] = $arr['city'];
        //     $_SESSION['country_capital'] = $arr['country_capital'];
        //     $_SESSION['continent_name'] = $arr['continent_name'];
        // }
        // curl_close($ch);
            $_SESSION['country_name'] = "Nigeria";
            $_SESSION['city'] = "Lagos";
            $_SESSION['country_capital'] = "Abuja";
            $_SESSION['continent_name'] = "Africa";
            
    }
    private function getLocation()
    {
        // $cip = '186.70.94.17';
        // $cip = '102.90.3.28';

        // $url = "https://api.ipgeolocation.io/ipgeo?apiKey=d0d19cf1c98c4571ad87f708c0ca1089&ip=$cip&fields=*&output=json";
        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // $results = curl_exec($ch);
        // if(curl_errno($ch)){
        //     echo curl_error($ch);
        // }else{
        //     $arr = json_decode($results, 1);
        //     $country_name = $arr['country_name'];
        //     $city = $arr['city'];
        //     $country_capital = $arr['country_capital'];
        //     $continent_name = $arr['continent_name'];
        //     return $continent_name . ", " . $country_name . ", " . $city;
        // }
        // curl_close($ch);
            $country_name = "Nigeria";
            $city = "Lagos";
            $country_capital = "Abuja";
            $continent_name = "Africa";
            return $continent_name . ", " . $country_name . ", " . $city;
    }
    public function deleteloginset()
    {
        $sql = "DELETE FROM `saved_login` WHERE `username` = ? AND `uid` = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$_SESSION['username'], $_SESSION['uid']]);
        if ($stmt && $stmt->rowCount() > 0) {
            unset($_COOKIE['peffet_logins']);
            return true;
         }
    }
    public function addTosavedLogins($username)
    {
        if (isset($_COOKIE['peffet_switch_acc'])) {
            $arr = explode("|sep_names|", $_COOKIE['peffet_switch_acc']);
            foreach ($arr as $names) {
                $arrs[] = $names;
            }
            setcookie('peffet_switch_acc', implode("|sep_names|", $arrs) . "|sep_names|". $username, time() + (10 * 365 * 24 * 60 * 60), "/");
            
        }else{
            setcookie('peffet_switch_acc', $username, time() + (10 * 365 * 24 * 60 * 60), "/");
        }
        
    }
    public function switchAcc($username)
    {
        if (isset($_COOKIE['peffet_switch_acc'])) {
            $arr = explode("|sep_names|", $_COOKIE['peffet_switch_acc']);
            foreach ($arr as $names) {
                $arrs[] = $names;
            }
            if(in_array($username, $arrs)){
                $this->deleteloginset();
                $sql = "SELECT * FROM `users` WHERE `username` = ? ";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute([$username]);
                if($stmt && $stmt->rowCount() > 0){
                    foreach ($stmt->fetchAll() as $row) {
                        $_SESSION['uid'] = $row['uid'];
                        $_SESSION['username'] = $row['username'];
                        $this->setSessionLoc();
                        $this->loginSaveToDb($row['uid'], $row['username']);
                        return true;
                    }
                }
            }
           
            
        }
    }
    public function loginSaveToDb($uid, $username)
    {
        date_default_timezone_set('Africa/Lagos');
        $k = $_SERVER['HTTP_USER_AGENT'];
        $d = $_SERVER['REMOTE_ADDR'];
        $hash = md5(password_hash($k . $d, PASSWORD_BCRYPT)) . password_hash($k . $d, PASSWORD_BCRYPT) . bin2hex(random_bytes(10)) . time();
        $sql = "INSERT INTO `saved_login`( `uid`, `username`, `hash`, `user_agent`, `remote_addre`, `time`, `did_user_logout`) VALUES (?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $time = date("Y/m/d H:i:s a");
        $stmt->execute([$uid, $username, $hash, $k, $d, $time, "no"]);
        if ($stmt) {
            setcookie('peffet_logins', $username . "|sep|" .  $k . "|sep|" . $d . "|sep|" . $hash, time() + (10 * 365 * 24 * 60 * 60), "/");
            $this->addTosavedLogins($username);
            $this->setSessionLoc();
            return true;
        }else{
            return false;
        }
    }
    public function checkUsername($username)
    {
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$username]);
        if (!$stmt->rowCount() > 0) {
            $output =  false;
        }else{
            $output =  true;
        }
        return json_encode($output);
    }
    public function CreateAcc($username, $email, $password)
    {
        date_default_timezone_set('Africa/Lagos');
        if (empty($username) || empty($email) || empty($password)) {
            $output = "empty";
        }else if(json_decode($this->checkUsername($username))){
            $output = "username taken";
        }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $output = "invalid email";
        }else{
            $pass_salt = $password . "david_is_a_very_nice_brother_to_i_love_him";
            $spec = "NF,EMINEM,OPM,GOD,ME,CODING,OCD";
            $hashed_pass = password_hash($pass_salt, PASSWORD_DEFAULT);
            $uid = bin2hex(random_bytes(25));
            $vs = "unverified";
            $vc = rand(1111, 9999);
            $time = date("Y/m/d H:i:s", time());
            $a = "default.png";
            $loc = $this->getLocation();
            $sql = "INSERT INTO `users`(`uid`, `username`, `email`, `bio`, `password`, `verify_status`, `verify_code`, `avatar`, `spec`, `time`, `location`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$uid,htmlentities($username),$email,'no bio yet!',$hashed_pass,$vs, $vc, $a, $spec, $time, $loc]);
            if (!$stmt) {
                $output =  "error";
            } else {
                if ($this->loginSaveToDb($uid, $username)) {
                
                    $_SESSION['uid'] = $uid;
                    $_SESSION['username'] = $username;
                    $this->setSessionLoc();
                    $output =  "done";
                } else {
                    $output =  "error";
                }
            }
        }
        
        echo json_encode($output);
    }
    public function LoginAcc($username, $password)
    {
        date_default_timezone_set('Africa/Lagos');
        if (empty($username)  || empty($password)) {
            $output = "empty";
        }else if(!json_decode($this->checkUsername($username))){
            $output = "ghost username";
        }else{
            $sql = "SELECT * FROM `users` WHERE username = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username]);
            if (!$stmt) {
                $output =  "error";
            } else {
                if (!$stmt->rowCount() > 0) {
                    $output = "ghost username";
                }else{
                    foreach ($stmt->fetchAll() as $row) {
                        if (!password_verify($password . "david_is_a_very_nice_brother_to_i_love_him", $row['password'])) {
                            $output =  "incorrect password";
                        } else {
                            // session_start();
                            if ($this->loginSaveToDb( $row['uid'], $username)) {
                                $_SESSION['uid'] = $row['uid'];
                                $_SESSION['username'] = $row['username'];
                                $this->setSessionLoc();
                                $output =  "done";
                            } else {
                                $output =  "error";
                            }
                        }
                        
                    }
                }
            }
            

        }
        
        echo json_encode($output);
    }
}
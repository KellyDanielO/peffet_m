<?php
function country()
{
    $output = '';
    $countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
    foreach ($countries as $country) {
        $output .= '<option value="' . $country . '">' . $country . '</option>';
    }
    echo $output;
}

function time_ago($timestamp)
{
    date_default_timezone_set('Africa/Lagos');
    $time_ago = strtotime($timestamp);
    $current_time = time();
    $time_difference = $current_time - $time_ago;
    $seconds = $time_difference;
    $minutes = round($seconds / 60);
    $hours = round($seconds / 3600);
    $days = round($seconds / 86400);
    $weeks = round($seconds / 604800);
    $months = round($seconds / 2629440);
    $years = round($seconds / 31553280);
    if ($seconds <= 60) {
        return "now";
    } else if ($minutes <= 60) {
        if ($minutes == 1) {
            return "1 min ago";
        } else {
            return "$minutes mins ago";
        }
    } else if ($hours <= 24) {
        if ($hours == 1) {
            return "1 hr ago";
        } else {
            return "$hours hrs ago";
        }
    } else if ($days <= 7) {
        if ($days == 1) {
            return "yesterday";
        } else {
            return "$days days ago";
        }
    } else if ($weeks <= 4.3) {
        if ($weeks == 1) {
            return "a week ago";
        } else {
            return "$weeks wks ago";
        }
    } else if ($months <= 12) {
        if ($months == 1) {
            return "a month ago";
        } else {
            return "$months mons ago";
        }
    } else {
        if ($years == 1) {
            return "a year ago";
        } else {
            return "$years yrs ago";
        }
    }
}
function showSwitchAcc()
{
    $user = new user();
    if (isset($_COOKIE['peffet_switch_acc'])) {
        $arr = explode('|sep_names|', $_COOKIE['peffet_switch_acc']);
        foreach (array_unique($arr) as $username) {
            if ($user->getUserDetails($username)['error'] !== "ghost") {
                $avatar = $user->getUserDetails($username)['avatar'];
                $username = $user->getUserDetails($username)['username'];
                if ($user->getUserDetails($username)['name'] == "") {
                    $name = 'no name yet!';
                } else {
                    $name = $user->getUserDetails($username)['name'];
                }
                echo "
                        <a class='user' href='switch_acc?name=$username'>
                            <img src='media/dp/$avatar' alt=''>
                            <div class='text'>
                                <b>$username</b>
                                <small>$name</small>
                            </div>
                        </a>
                    ";
            }
        }
    }
}
function getTags()
{
    $post = new post();
    $tags = $post->hash_tags();
    foreach ($tags as $values) {
        $q = substr($values, 1);
        echo "<a href='explore?q=$q&&type=hash' class='tags'>$values</a>";
    }
}
function sideUser()
{

    $user = new user();
    $uvals = $user->getUserDetails($_SESSION['username']);
    if ($uvals['name'] == null) {
        $name = '..';
    } else {
        $name = $uvals['name'];
    }
    $avatar = $uvals['avatar'];
    $username = $uvals['username'];
    echo "
    <div class='user_d'>
        <img src='media/dp/$avatar' alt='@$username' onclick='location.href = \"@$username\" '>
        <div class='names'>
            <strong>$name</strong>
            <span>@$username</span>
        </div>
    </div>";
}
function getSearch(){
    $search = new search();
    $values = $search->getSavedSearch();
    foreach ($values as $value) {
        $sid = $value['sid'];
        $text = $value['text'];
        if($text[0] == "#"){
            $txt = substr($text, 1);
            if(strlen($text) > 20){
                $word = substr($text, 0, 50) . "....";
            }else{
                $word = $text;
            }
            echo "
                <span class='$sid'>
                    <a href='explore?q=$txt&&type=hash'>$word</a>
                    <i class='fa fa-times delete_search_sug' data-sug-id='$sid'></i>
                </span>
            ";
        }else{
            if(strlen($text) > 20){
                $txt = substr($text, 0, 50) . "..";
            }else{
                $txt = $text;
            }
            echo "
                <span class='$sid'>
                    <a href='explore?q=$text'>$txt</a>
                    <i class='fa fa-times delete_search_sug' data-sug-id='$sid'></i>
                </span>
            ";
        }
    }
}
function flatten(array $array) {
    $return = array();
    array_walk_recursive($array, function($a) use (&$return) { $return[] = $a; });
    return $return;
}
function removeDuplicates($arr){
    $dups = array_values(array_unique($arr));
    return $dups;
}
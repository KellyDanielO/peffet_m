function customAudioPlayerFun() {
    let audios = document.querySelectorAll(".evt_audio");
    audios.forEach(audio => {
        let sel_id = audio.getAttribute("data-audio-sel-id");
        var progress_range = document.querySelector(".audio_range_" + sel_id);
        var timestamp = document.querySelector(".tps_" + sel_id);
        var pause_or_play = document.querySelector(".pp_" + sel_id);
        var mute_or_umuted = document.querySelector(".mm_" + sel_id);
        //update progress & timestamp
        function updateProgress() {
            progress_range.value = (audio.currentTime / audio.duration) * 100;
            // get minutes
            let mins = Math.floor(audio.currentTime / 60);
            if (mins < 10) {
                mins = "0" + String(mins);
            }

            //get seconds
            let secs = Math.floor(audio.currentTime % 60);
            if (secs < 10) {
                secs = "0" + String(secs);
            }

            timestamp.innerHTML = `${mins}:${secs}`;
        }
        //set video time to progress
        function setAudioProgress() {
            audio.currentTime = (+progress_range.value * audio.duration) / 100;
        }

        function toggleBtn() {
            let audio_all = document.querySelectorAll(".spec_audio");
            if (audio.paused) {
                audio_all.forEach(au => {
                    au.pause();
                });
                pause_or_play.innerHTML = "<i class='fa fa-pause'></i>";
                audio.play();
            } else {
                audio_all.forEach(au => {
                    au.pause();
                });
                pause_or_play.innerHTML = "<i class='fa fa-play'></i>";
                audio.pause();
            }
        }

        function toggle_btn() {
            if (audio.paused) {
                pause_or_play.innerHTML = "<i class='fa fa-play'></i>";
            } else {
                pause_or_play.innerHTML = "<i class='fa fa-pause'></i>";
            }
        }

        function toggleSound() {
            if (audio.volume == 1) {
                audio.volume = 0;
                mute_or_umuted.innerHTML = `<i class="fa fa-volume-mute"></i>`;
            } else {
                audio.volume = 1;
                mute_or_umuted.innerHTML = `<i class="fa fa-volume-up"></i>`;
            }
        }

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("pause", toggle_btn);
        progress_range.addEventListener("change", setAudioProgress);
        pause_or_play.addEventListener("click", toggleBtn);
        mute_or_umuted.addEventListener("click", toggleSound);
    });
}

function validateUserName(username) {
    var usernameRegex = /^[a-zA-Z0-9-_]+$/;
    return usernameRegex.test(username);
}

function number_format(num, digits = 1) {
    var si = [{
            value: 1,
            symbol: ""
        },
        {
            value: 1e3,
            symbol: "k"
        },
        {
            value: 1e6,
            symbol: "M"
        },
        {
            value: 1e9,
            symbol: "G"
        },
        {
            value: 1e12,
            symbol: "T"
        },
        {
            value: 1e15,
            symbol: "P"
        },
        {
            value: 1e18,
            symbol: "E"
        }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    let value =
        (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    if (value == "0") {
        return "";
    } else {
        return value;
    }
}

function slider() {
    const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        coverflowEffect: {
            rotate: 30,
            slideShadows: false
        },
        loop: false,
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function getRandNum() {
    return Math.floor(1000 + Math.random() * 9000);
}

const wordCheck = word => {
    let exploded = word.split(" ");
    let arr = [];
    exploded.forEach(text_new => {
        if (text_new[0] === "#") {
            arr.push(
                `<a class="text-info" href="explore?q=${text_new.substr(1)}&&type=hash">${text_new}</a>`
            );
        } else if (text_new[0] === "@") {
            arr.push(`<a class="text-info" href="${text_new}">${text_new}</a>`);
        } else if (
            text_new.slice(0, 7) == "http://" ||
            text_new.slice(0, 8) == "https://"
        ) {
            arr.push(`<a class="text-info" href="${text_new}">${text_new}</a>`);
        } else if (
            text_new.toLowerCase() == "congratulations" ||
            text_new.toLowerCase() == "congratulation" ||
            text_new.toLowerCase() == "congrats" ||
            text_new.toLowerCase() == "congratulate"
        ) {
            arr.push(`<b class="text-success">${text_new}</b>`);
        } else if (text_new.toLowerCase() == "love") {
            arr.push(`<b class="text-danger">${text_new}</b>`);
        } else if (text_new.toLowerCase() == "happy") {
            arr.push(`<b class="text-warning">${text_new}</b>`);
        } else if (
            text_new.toLowerCase() == "unhappy" ||
            text_new.toLowerCase() == "sick" ||
            text_new.toLowerCase() == "heartbroken"
        ) {
            arr.push(`<b class="text-info">${text_new}</b>`);
        } else {
            arr.push(text_new);
        }
    });
    return arr.join(" ");
};

function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
}

function RadomString(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getUnameQueryClick() {
    let uname_search_clicks = document.querySelectorAll(".uname_search_click");
    let comment_bx = document.querySelector(".comment_bx");
    let replies_bx = document.querySelector(".replies_bx");
    uname_search_clicks.forEach(uname_search_click => {
        uname_search_click.addEventListener("click", () => {
            if (
                replies_bx.classList.contains("active") &&
                comment_bx.classList.contains("active")
            ) {
                document.querySelector("#rep_input").value =
                    "@" + uname_search_click.getAttribute("data-username") + " ";
            } else if (!replies_bx.classList.contains("active") &&
                comment_bx.classList.contains("active")
            ) {
                document.querySelector("#comment_input").value =
                    "@" + uname_search_click.getAttribute("data-username") + " ";
            }
            document.querySelector(".users_at_list").classList.remove("active");
        });
    });
}

function like_event(event_id, pair_id, type) {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            like_event: 1,
            like_for: type,
            pair_id: pair_id,
            event_id: event_id
        },
        success: data => {
            if (data.error == "none") {
                let s = new Audio("sounds/4.wav");
                s.play();
                let pair_ones = document.querySelectorAll(".pair_one_" + pair_id);
                let pair_twos = document.querySelectorAll(".pair_two_" + pair_id);
                if (data.like_for == "pair_one") {
                    pair_ones.forEach(pair_one => {
                        pair_one.classList.add("active");
                    });
                    pair_twos.forEach(pair_two => {
                        pair_two.classList.remove("active");
                    });
                } else if (data.like_for == "pair_two") {
                    pair_ones.forEach(pair_one => {
                        pair_one.classList.remove("active");
                    });
                    pair_twos.forEach(pair_two => {
                        pair_two.classList.add("active");
                    });
                } else {
                    pair_ones.forEach(pair_one => {
                        pair_one.classList.remove("active");
                    });
                    pair_twos.forEach(pair_two => {
                        pair_two.classList.remove("active");
                    });
                }
            }
        }
    });
}

function eventGet(username, text, sub_type, previlage, eid, res) {
    let temp;
    if (sub_type == "application") {
        if (previlage == "admin") {
            temp = `
        
            <div class="peffet_event box-s pre_event peffet_post_${eid} peffet_post_handler" data-post-id="${eid}">
                <div class="evt_header">
                    <strong>Event by <a href="@${username}" class="text-lime">@${username}</a></strong>
                    <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${eid}"></i>
                </div>
                <div class="description">
                    ${text}
                </div>
                <div class="group">
                    <button class="evt_act_btn manage_evt" data-event-id="${eid}">Manage event</button>
                </div>
            </div>
            `;
        } else if (previlage == "applicant") {
            temp = `
        
        
            <div class="peffet_event box-s pre_event peffet_post_${eid} peffet_post_handler" data-post-id="${eid}">
                <div class="evt_header">
                    <strong>Event by <a href="@${username}" class="text-lime">@${username}</a></strong>
                    <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${eid}"></i>
                </div>
                <div class="description">
                    ${text}
                </div>
                <div class="group">
                    <button class="evt_act_btn join_evt_btn" data-event-id="${eid}">Join event</button>
                </div>
            </div>
            `;
        }
    } else if (sub_type == "event") {
        let m_btn;
        if (res.is_creator) {
            m_btn = `<button class="evt_act_btn manage_event_pre" data-event-id="${eid}">Manage event</button>`;
        } else {
            m_btn = "";
        }
        let id = RadomString(25);
        let p_arr = [];
        res.media.forEach(each_pair => {
            let p_one, p_two;
            if (each_pair.like_for == "pair_one") {
                p_one = "active";
                p_two = "";
            } else if (each_pair.like_for == "pair_two") {
                p_two = "active";
                p_one = "";
            } else {
                p_one = "";
                p_two = "";
            }

            if (res.media_type == "picture") {
                p_arr.push(`
                    <div class="each_group">
                        <div class="group_sec">
                            <img src="media/event_media/${each_pair.pair_one_media}" alt="@${each_pair.pair_one_name}" class="classic_img_prev">
                        </div>
                        <div class="group_sec">
                            <img src="media/event_media/${each_pair.pair_two_media}" alt="@${each_pair.pair_two_name}" class="classic_img_prev">
                        </div>
                        <div class="group_sec_act_bx one">
                            <i class="fa fa-heart event_like_btn event_like_one ${p_one} pair_one_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_one_name}">@${each_pair.pair_one_name}</a></b>
                        </div>
                        <div class="group_sec_act_bx two">
                            <i class="fa fa-heart event_like_btn event_like_two ${p_two} pair_two_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_two_name}">@${each_pair.pair_two_name}</a></b>
                        </div>
                    </div>
                `);
            } else if (res.media_type == "video") {
                p_arr.push(`
                    <div class="each_group">
                        <div class="group_sec">
                            <video src="media/event_media/${each_pair.pair_one_media}" preload="buffer" class="video_viewer_btn"></video>
                        </div>
                        <div class="group_sec">
                            <video src="media/event_media/${each_pair.pair_two_media}" preload="buffer" class="video_viewer_btn"></video>
                        </div>
                        <div class="group_sec_act_bx one">
                            <i class="fa fa-heart event_like_btn event_like_one ${p_one} pair_one_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_one_name}">@${each_pair.pair_one_name}</a></b>
                        </div>
                        <div class="group_sec_act_bx two">
                            <i class="fa fa-heart event_like_btn event_like_two ${p_two} pair_two_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_two_name}">@${each_pair.pair_two_name}</a></b>
                        </div>
                        <div class="each_play_btn one">
                            <i class="fa fa-play"></i>
                        </div>
                        <div class="each_play_btn two">
                            <i class="fa fa-play"></i>
                        </div>
                    </div>
                `);
            }
        });
        temp = `
            <div class="peffet_event box-s ${res.orientation} ${res.media_type} peffet_post_handler" data-post-id="${eid}">
                <div class="evt_header">
                    <strong>Event by <a href="@${
                      res.host_name
                    }" class="text-lime">@${res.host_name}</a></strong>
                    <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${eid}"></i>
                </div>
                <div class="description">
                    ${text}
                </div>
                <div class="group gp_${id}">
                    <div class="group_navi navi_btn_prev" data-group-id="${id}">
                        <i class="fa fa-arrow-left navi_btn_prev" data-group-id="${id}"></i>
                    </div>
                    <div class="group_navi navi_btn_forward" data-group-id="${id}">
                        <i class="fa fa-arrow-right navi_btn_forward" data-group-id="${id}"></i>
                    </div>

                    ${p_arr.join("")}
                </div>
                <div class="btm_btns">
                    ${m_btn}
                    <span class="evt_act_btn" data-post-id="${eid}">View all</span>   
                </div>
            </div>
        `;
    } else if (sub_type == "concluded") {
        if (res.media_type == "picture") {
            temp = `            
                <div class="peffet_event box-s winner ${res.orientation} peffet_post_handler" data-post-id="${eid}">
                    <div class="evt_header">
                        <strong>Event by <a href="@${res.host_name}" class="text-lime">@${res.host_name}</a></strong>
                        <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${res.event_id}"></i>
                    </div>
                    <div class="description">
                        ${text}
                    </div>
                    <div class="group">
                        <div class="each_group">
                            <div class="group_sec">
                                <img src="media/event_media/${res.media}" alt="@${res.winner_name}" class="classic_img_prev">
                            </div>
                        </div>
                    </div>
                    <div class="btm_btns">                
                        <span class="winner_banner">WINNER <a href="@${res.winner_name}">@${res.winner_name.slice(0, 15)}</a></span>   
                    </div>
                </div>
            `;
        } else if (res.media_type == "video") {
            temp = `            
                <div class="peffet_event box-s video winner ${res.orientation} peffet_post_handler" data-post-id="${eid}">
                    <div class="evt_header">
                        <strong>Event by <a href="@${res.host_name}" class="text-lime">@${res.host_name}</a></strong>
                        <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${res.event_id}"></i>
                    </div>
                    <div class="description">
                        ${text}
                    </div>
                    <div class="group">
                        <div class="each_group">
                            <div class="group_sec">
                                <video src="media/event_media/${res.media}" preload="buffer" class="video_viewer_btn"></video>
                            </div>
                            <div class="each_play_btn winner">
                                <i class="fa fa-play"></i>
                            </div>
                        </div>
                    </div>
                    <div class="btm_btns">                
                        <span class="winner_banner">WINNER <a href="@${res.winner_name}">@${res.winner_name.slice(0, 15)}</a></span>   
                    </div>
                </div>
            `;
        }
    } else {
        temp = '';
    }

    return temp;
}

function writeUpGet(
    avatar,
    username,
    time_ago,
    post_id,
    text,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    saved_num,
    post_saved
) {
    let temp = `
    <div class="peffet_post box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
       <div class="post_header">
          <a class="user_info" href="@${username}">
              <img src="media/dp/${avatar}" alt="@${username}">
              <span>
                 <em>${username}</em>
                 <i>${time_ago}</i>
              </span>

          </a>
          <div>
            <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
            <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${post_id}"></i>
        </div>
       </div>

       <div class="post_content">
          <p>${text}</p>
       </div>
       <div class="post_act_point">
          <div class="first_point">
              <div class="like_act ">
                 <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                 <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
              </div>
              <div class="comment_point" data-post-id="${post_id}">
                 <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i> 
                 <!-- <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon> -->
                 <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}">${number_format(
    total_comment
  ) || ""}</em>
              </div>
              <div class="last_point">
                 <i class="fa fa-bookmark pin_post ${post_saved}" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                    <em class="${pin} pin_number pin_num_sel_${post_id}" data-post-id="${post_id}">${saved_num ||
    ""}</em>
              </div>
          </div>
       </div>
    </div>
   `;
    return temp;
}

function portraitGet(
    avatar,
    username,
    time_ago,
    post_id,
    text,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    image,
    saved_num
) {
    var temp = `
    <div class="peffet_portrait box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
        <div class="img_holder">
            <img src="media/portrait/${image}" alt="@${username}" class="classic_img_prev">
        </div>
        <div class="pt">

            <div class="d-flex justify-content-between flex-column text_area adfdsdsfsdf">
                <div class="d-flex justify-content-between align-items-center profile_details">
                    <div class="one d-flex justify-content-between align-items-center">
                        <a class="image_port_holder d-flex justify-content-between align-items-center" href="@${username}">
                            <img src="media/dp/${avatar}" alt="@${username}">
                        </a>
                        <b>${username}</b>
                    </div>
                    <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
                </div>
                <em class="caption m-2">${text}</em>
            </div>

            <div class="action_bar">
                <div class="like_act ">
                    <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                    <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
                </div>
                <div class="comment_point" data-post-id="${post_id}">
                <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i>
                <!-- <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon> -->
                    <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}">${number_format(
    total_comment
  ) || ""}</em>
                </div>
                <div class="last_point">
                    <i class="fa fa-ellipsis-h post_act_btn " data-post-id="${post_id}"></i>
                </div>
               
            </div>
        </div>
        </div>
   `;
    return temp;
}

function refPostGet(
    avatar,
    username,
    post_id,
    text,
    ref_by,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    saved_num,
    post_saved
) {
    let temp = `
        <article class=" peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
            <div class="holder_img">
                <img src="media/dp/${avatar}" alt="@${username}" style="cursor: pointer;" class="classic_img_prev">
            </div>
            <div class="content_bx_qoute">
                <a href="@${username}">@${username}</a>
                <em class="text">${text}</em>
                <b> - ${ref_by}</b>
                <div class="reaction_bx">
                    <div class="saved_sec">
                        <i class="fa fa-bookmark pin_post ${post_saved}" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                        <em class="${pin} pin_number pin_num_sel_${post_id}" data-post-id="${post_id}">${saved_num ||
    ""}</em>
                    </div>
                    <div class="like_sec">
                        <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                        <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
                    </div>
                    <i class="fa fa-share post_act_btn" data-post-id="${post_id}"></i>
                </div>
            </div>
        </article>
    `;
    return temp;
}

function classicPostTempGet(
    avatar,
    username,
    time_ago,
    post_id,
    bg,
    text,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    saved_num,
    post_saved,
    font
) {
    let temp = `
    <div class="peffet_post box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
        <div class="post_header">
        <a  href="@${username}" class="user_info">
            <img src="media/dp/${avatar}" alt="@${username}">
            <span>
                <em>${username}</em>
                <i>${time_ago}</i>
            </span>

        </a>
        <div>
        <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
            <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${post_id}"></i>
        </div>
        </div>
        <div class="post_content colorful ${bg}">
            <p class="${font}">${text}</p>
        </div>
        <div class="post_act_point">
            <div class="first_point">
                <div class="like_act ">
                    <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                    <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
                </div>
                <div class="comment_point" data-post-id="${post_id}">
                <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i>
                <!-- <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon> -->
                    <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}">${number_format(
    total_comment
  ) || ""}</em>
                </div>
                <div class="last_point">
                    <i class="fa fa-bookmark pin_post ${post_saved}" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                    <em class="${pin} pin_number pin_num_sel_${post_id}" data-post-id="${post_id}">${saved_num ||
    ""}</em>
                </div>
            </div>
        </div>
    </div>
    `;
    return temp;
}

function regula_post(
    avatar,
    username,
    time_ago,
    post_id,
    bg,
    text,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    imgs_array,
    saved_num,
    post_saved
) {
    let b = [];
    imgs_array.forEach(img_a => {
        if (img_a.type_of == "image") {
            b.push(`<div class="swiper-slide">
                    <img src="media/regular/${img_a.img}" alt="@${username}" class="classic_img_prev">
                </div>`);
        } else if (img_a.type_of == "video") {
            b.push(`
            <div class="swiper-slide">
		        <div class="video_wrapper">
                    <i class="fa fa-play peffet_vid_thumb"></i>
                    <video src="media/regular/${img_a.img}" preload="buffer" class="video_viewer_btn">
                    </video>
                </div>
            </div>`);
        }
    });
    let temp = `
        <div class="peffet_post box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
            <div class="post_header mt-2">
                <a  href="@${username}" class="user_info">
                    <img src="media/dp/${avatar}" alt="@${username}">
                    <span>
                        <em>${username}</em>
                        <i>${time_ago}</i>
                    </span>

                </a>
                <div>
                <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
                    <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${post_id}"></i>
                </div>
            </div>
            <div class="post_content">
                <p>${text}</p>
                <div class="swiper">
                    <div class="swiper-wrapper">${b.join("")}</div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="post_act_point">
                <div class="first_point">
                    <div class="like_act ">
                        <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                        <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
                    </div>
                    <div class="comment_point" data-post-id="${post_id}">
                    <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i>
                    <!-- <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon> -->
                        <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}">${number_format(
    total_comment
  ) || ""}</em>
                    </div>
                    <div class="last_point">
                        <i class="fa fa-bookmark pin_post ${post_saved}" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                        <em class="${pin} pin_number pin_num_sel_${post_id}" data-post-id="${post_id}">${saved_num ||
    ""}</em>
                    </div>
                </div>
            </div>
        </div>
        
    `;
    return temp;
}

function typing_get(
    avatar,
    username,
    time_ago,
    post_id,
    bg,
    text,
    id,
    pin,
    ac,
    total_likes,
    total_comment,
    saved_num,
    post_saved,
    font
) {
    var temp = `
        <div class="peffet_post box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
        <div class="post_header">
            <a  href="@${username}" class="user_info">
                <img src="media/dp/${avatar}" alt="@${username}">
                <span>
                    <em>${username}</em>
                    <i>${time_ago}</i>
                </span>

            </a>
            <div>
            <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
                <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${post_id}"></i>
            </div>
        </div>

        <div class="post_content colorful ${bg} typing_text">
            <p class="typing_text_${pin}_typing" data-font="${font}" data-words="${text}"></p>
            
        </div>
        <div class="post_act_point">
            <div class="first_point">
                <div class="like_act ">
                    <i class="fa fa-heart like_icon ${ac}" data-num-id="${id}" data-post-id="${post_id}"></i>
                    <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}">${number_format(
    total_likes
  ) || ""}</em>
                </div>
                <div class="comment_point" data-post-id="${post_id}">
                <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i>
                <!-- <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon> -->
                    <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}">${number_format(
    total_comment
  ) || ""}</em>
                </div>
                <div class="last_point">
                    <i class="fa fa-bookmark pin_post ${post_saved}" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                    <em class="${pin} pin_number pin_num_sel_${post_id}" data-post-id="${post_id}">${saved_num ||
    ""}</em>
                </div>
            </div>
        </div>
    </div>
    `;
    return temp;
}

function classicPostTemp(
    avatar,
    username,
    time_ago,
    post_id,
    bg,
    text,
    id,
    pin
) {
    var temp = `
    <div class="peffet_post box-s peffet_post_${post_id} peffet_post_handler" data-post-id="${post_id}">
       <div class="post_header">
           <a  href="@${username}" class="user_info">
              <img src="media/dp/${avatar}">
              <span>
                 <em>${username}</em>
                 <i>${time_ago}</i>
              </span>

           </a>
           <div>
           <button class="follow_btn m-2 follow_btn_sel_${username}_special_${id} d-none" data-spec-id="${id}"  data-post-username="${username}">follow</button>
                <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${post_id}"></i>
            </div>
       </div>
       <div class="post_content colorful ${bg}">
           <p>${text}</p>
       </div>
       <div class="post_act_point">
           <div class="first_point">
              <div class="like_act ">
                 <i class="fa fa-heart like_icon" data-num-id="${id}" data-post-id="${post_id}"></i>
                 <em class="${id} like_icon_num like_num_counter_${post_id}" data-post-id="${post_id}"></em>
              </div>
              <div class="comment_point"  data-post-id="${post_id}">
              <!-- <i class="fa fa-comment comment_point_icon" data-post-id="${post_id}"></i> -->
              <ion-icon name="chatbox-ellipses-outline" class="comment_point_icon" data-post-id="${post_id}"></ion-icon>
                 <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${post_id}"></em>
              </div>
              <div class="last_point">
                <i class="fa fa-bookmark pin_post" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                <em class="${pin} pin_number pin_num_sel_${post_id}"></em>
              </div>
           </div>
       </div>
    </div>
`;
    return temp;
}

function getCreatedPost() {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getCreatedPost: 1
        },
        success: data => {
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "write_up_regular") {
                    let text = res.text;
                    let word = wordCheck(text);

                    newtemp = writeUpGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "reference_post") {
                    newtemp = refPostGet(
                        res.avatar,
                        res.username,
                        res.post_id,
                        res.text,
                        res.ref_by,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "portrait_post") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "classic_write_up") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = classicPostTempGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "typing_text") {
                    let text = res.text;
                    newtemp = typing_get(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        text,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "regular_post") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = regula_post(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.images,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "peffet_event") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = eventGet(
                        res.username,
                        word,
                        res.sub_type,
                        res.previlage,
                        res.post_id,
                        res
                    );
                }

                document.querySelector(".posts_area").innerHTML += newtemp;
                slider();
            });
        }
    });
}

function getFollowingPost() {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getFollowingPost: 1
        },
        success: data => {
            if (data.number == false) {
                let newtemp = `
                    <div class="find_people_box">
                        <div class="box_bx first_bx">
                            Hello there, What's up
                        </div>
                        <div class="box_bx second_bx">
                            It seems you are alone on Peffet 😔. <br> Well that's a just sad
                        </div>
                        <div class="box_bx third_bx">
                            No worries, let's go find new friends to follow on Peffet. 
                        </div>
                        <img src='img/find_people.png' class='find_people'>
                        <a href="explore">Let's go</a>
                    </div>
                `;
                document.querySelector(".posts_area").innerHTML += newtemp;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    if (res.type == "write_up_regular") {
                        let text = res.text;
                        let word = wordCheck(text);

                        newtemp = writeUpGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "reference_post") {
                        newtemp = refPostGet(
                            res.avatar,
                            res.username,
                            res.post_id,
                            res.text,
                            res.ref_by,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "portrait_post") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = portraitGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.image,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "classic_write_up") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = classicPostTempGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "typing_text") {
                        let text = res.text;
                        newtemp = typing_get(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            text,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "regular_post") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = regula_post(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.images,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "peffet_event") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = eventGet(
                            res.username,
                            word,
                            res.sub_type,
                            res.previlage,
                            res.post_id,
                            res
                        );
                    }

                    let l = `<b class="text-lime text-center pf_loading" style="padding: 10px;">Loading</b>`;
                    document.querySelector(".posts_area").innerHTML += newtemp;
                    document.querySelector(".posts_area").innerHTML += l;
                    slider();
                });
            }
        }
    });
}

function getFollowingPostScroll() {
    let peffet_post_handler = document.querySelectorAll(".peffet_post_handler");
    let post_id_array = [];
    peffet_post_handler.forEach(peffet_post => {
        post_id_array.push(peffet_post.getAttribute("data-post-id"));
    });
    let l = `<b class="text-lime text-center pf_loading active" style="padding: 10px;"></b>`;
    let g_ls;
    g_ls = document.querySelectorAll(".pf_loading");
    let load_more;
    g_ls.forEach(g_l => {
        if (g_l.classList.contains("active")) {
            load_more = '';
        } else {
            load_more = 'yes';
        }
    });
    if (load_more == "yes") {
        let post_area = document.querySelector(".posts_area");
        post_area.innerHTML += l;
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                getFollowingPostScroll: 1,
                post_ids: post_id_array.join("||")
            },
            success: data => {
                if (data.number == false) {
                    let newtemp = `
                        <div class="find_people_box">
                            <div class="box_bx first_bx">
                                Hello there, What's up
                            </div>
                            <div class="box_bx second_bx">
                                It seems you are alone on Peffet 😔. <br> Well that's a sad
                            </div>
                            <div class="box_bx third_bx">
                                No worries, let's go find new friends to follow on Peffet. 
                            </div>
                            <img src='img/find_people.png' class='find_people'>
                            <a href="explore">Let's go</a>
                        </div>
                    `;
                    document.querySelector(".posts_area").innerHTML += newtemp;
                } else {
                    data.forEach(res => {
                        let id = "id" + RadomString(15);
                        let pin = "id" + RadomString(11);
                        var newtemp;
                        let ac;
                        if (res.is_liked) {
                            ac = "active";
                        } else {
                            ac = "";
                        }
                        if (res.type == "write_up_regular") {
                            let text = res.text;
                            let word = wordCheck(text);

                            newtemp = writeUpGet(
                                res.avatar,
                                res.username,
                                res.time_ago,
                                res.post_id,
                                word,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.saved_num,
                                res.post_saved
                            );
                        } else if (res.type == "reference_post") {
                            newtemp = refPostGet(
                                res.avatar,
                                res.username,
                                res.post_id,
                                res.text,
                                res.ref_by,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.saved_num,
                                res.post_saved
                            );
                        } else if (res.type == "portrait_post") {
                            let text = res.text;

                            let word = wordCheck(text);
                            newtemp = portraitGet(
                                res.avatar,
                                res.username,
                                res.time_ago,
                                res.post_id,
                                word,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.image,
                                res.saved_num,
                                res.post_saved
                            );
                        } else if (res.type == "classic_write_up") {
                            let text = res.text;

                            let word = wordCheck(text);
                            newtemp = classicPostTempGet(
                                res.avatar,
                                res.username,
                                res.time_ago,
                                res.post_id,
                                res.bg,
                                word,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.saved_num,
                                res.post_saved,
                                res.font
                            );
                        } else if (res.type == "typing_text") {
                            let text = res.text;
                            newtemp = typing_get(
                                res.avatar,
                                res.username,
                                res.time_ago,
                                res.post_id,
                                res.bg,
                                text,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.saved_num,
                                res.post_saved,
                                res.font
                            );
                        } else if (res.type == "regular_post") {
                            let text = res.text;

                            let word = wordCheck(text);
                            newtemp = regula_post(
                                res.avatar,
                                res.username,
                                res.time_ago,
                                res.post_id,
                                res.bg,
                                word,
                                id,
                                pin,
                                ac,
                                res.total_likes,
                                res.total_comment,
                                res.images,
                                res.saved_num,
                                res.post_saved
                            );
                        } else if (res.type == "peffet_event") {
                            let text = res.text;

                            let word = wordCheck(text);
                            newtemp = eventGet(
                                res.username,
                                word,
                                res.sub_type,
                                res.previlage,
                                res.post_id,
                                res
                            );
                        }

                        document.querySelector(".posts_area").innerHTML += newtemp;
                        slider();
                        g_ls = document.querySelectorAll(".pf_loading");
                        g_ls.forEach(g_l => {
                            g_l.classList.remove("active");
                        });
                    });
                }
            }
        });
    }
}

function createRef() {
    let ref_input = document.getElementById("reference_input");
    let ref_by = document.getElementById("ref_by");
    let ref_btn = document.querySelector(".ref_btn");
    let new_post_area = document.querySelector(".new_post_area");
    let full_screen_utility_handler = document.querySelector(
        ".full_screen_utility_handler"
    );

    if (
        ref_input.value == "" ||
        ref_input.value == " " ||
        ref_input.value == "   " ||
        ref_by.value == "" ||
        ref_by.value == " " ||
        ref_by.value == "   "
    ) {
        alert("All fields are required!");
    } else {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                createNewRef: 1,
                ref_value: ref_input.value,
                ref_by: ref_by.value
            },
            beforeSend: () => {
                $(".ref_btn").html("loading..");
            },
            success: res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                if (res.error == false) {
                    $(".ref_btn").html("successfull");
                    if (new_post_area) {
                        let temp = `
                            <article class="card_quote quote-bg2 d-flex justify-content-between align-items-center flex-column">
                            <div class="header_part_quote w-100">
                                <div class="dp_uname  d-flex  d-flex justify-content-between align-items-center ">
                                    <img src="media/dp/${res.avatar}" alt="">
                                    <em>${res.username}</em>
                                </div>
                            </div>
                            <div class="quote">
                                <i class="fa fa-quote-left"></i>
                                <caption>${res.text}</caption>
                                <i class="fa fa-quote-right"></i>
                            </div>
                            <div class="reaction_bar d-flex justify-content-between align-items-center w-100 flex-column">
                                <cite class=" d-flex justify-content-end align-items-center w-100">- NF</cite>
                                <div class="react d-flex justify-content-between align-items-center w-100">
                                    <div class="like_act ">
                                        <i class="fa fa-heart like_icon" data-num-id="${id}" data-post-id="${res.post_id}"></i>
                                        <em class="${id}"></em>
                                    </div>
                                    
                                    <div class="last_point">
                                        <i class="fa fa-bookmark pin_post" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                                        <em class="${pin} pin_number pin_num_sel_${post_id}"></em>
                                    </div>
                                </div>
                            </div>
                        </article>
                        `;
                        new_post_area.innerHTML += temp;
                    }
                    let body = document.querySelector("body");
                    body.classList.remove("active");
                    full_screen_utility_handler.classList.toggle("active");
                } else {
                    $(".ref_btn").html("An error occured!");
                    let body = document.querySelector("body");
                    body.classList.remove("active");
                    full_screen_utility_handler.classList.toggle("active");
                }
            }
        });
    }
}

function createNewTyped(typed_text, bg, font) {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            createNewTyped: 1,
            text: typed_text,
            bg: bg,
            font: font
        },
        beforeSend: () => {
            $(".saved_typed").html("loading..");
        },
        success: res => {
            let body = document.querySelector("body");
            body.classList.remove("active");
            let full_screen_utility_handler = document.querySelector(
                ".full_screen_utility_handler"
            );
            full_screen_utility_handler.classList.remove("active");
            $(".saved_typed").html(res);
        }
    });
}

function createClassWriteUp() {
    let write_up_text_box = document.querySelector(".write_up_text_box");
    let bg = write_up_text_box.getAttribute("data-write_up-bg");
    let font = write_up_text_box.getAttribute("data-font");
    let full_screen_utility_handler = document.querySelector(
        ".full_screen_utility_handler"
    );
    if (write_up_text_box.value.length <= 200) {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                create_write_up_classic: 1,
                text: write_up_text_box.value,
                bg: bg,
                font: font
            },
            beforeSend: () => {
                $(".write_up_classic_btn").html("loading..");
            },
            success: res => {
                let text = res.text;

                let word = wordCheck(text);
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);

                full_screen_utility_handler.classList.toggle("active");
                $(".new_post_area").html(
                    classicPostTemp(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin
                    )
                );
            }
        });
    } else {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                create_write_up: 1,
                text: write_up_text_box.value
            },
            beforeSend: () => {
                document.querySelector(".write_up_classic_btn").classList.toggle("active");
            },
            success: res => {
                let text = res.text;

                let word = wordCheck(text);
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var temp = `
    		   <div class="peffet_post box-s">
    			  <div class="post_header">
    				 <div class="user_info">
    					<img src="media/dp/${res.avatar}">
    					<span>
    					    <em>${res.username}</em>
    					    <i>${res.time_ago}</i>
    					</span>

    				 </div>
    				 <i class="fa fa-ellipsis-h post_act_btn" data-post-id="${res.post_id}"></i>
    			  </div>

    			  <div class="post_content">
    				 <p>${word}</p>
    			  </div>
    			  <div class="post_act_point">
    				 <div class="first_point">
    					<div class="like_act ">
    					    <i class="fa fa-heart like_icon" data-num-id="${id}" data-post-id="${res.post_id}"></i>
    					    <em class="${id}"></em>
    					</div>
    					<a class="comment_point"  data-post-id="${res.post_id}">
    					    <i class="fa fa-comment comment_point_icon" data-post-id="${res.post_id}"></i>
    					    <em class="comment_point_num comment_num_sel_${post_id}" data-post-id="${res.post_id}"></em>
    					</a>
    					<div class="last_point">
                            <i class="fa fa-bookmark pin_post" data-post-id="${post_id}" data-pin-id="${pin}"></i>
                            <em class="${pin} pin_number pin_num_sel_${post_id}"></em>
    					</div>
    				 </div>
    			  </div>
    		   </div>
    	   `;
                full_screen_utility_handler.classList.toggle("active");
                $(".new_post_area").html(temp);
                document.querySelector(".write_up_classic_btn").classList.toggle("active");
            }
        });
    }
}

function getUserPosts() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserPosts: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    if (res.type == "write_up_regular") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = writeUpGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "reference_post") {
                        newtemp = refPostGet(
                            res.avatar,
                            res.username,
                            res.post_id,
                            res.text,
                            res.ref_by,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "classic_write_up") {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = classicPostTempGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "portrait_post") {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = portraitGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.image,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "typing_text") {
                        let text = res.text;
                        newtemp = typing_get(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            text,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "regular_post") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = regula_post(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.images,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "peffet_event") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = eventGet(
                            res.username,
                            word,
                            res.sub_type,
                            res.previlage,
                            res.post_id,
                            res
                        );
                    }
                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="timelime_btn">${arr_con.join(
          ""
        )}</div>`;
                slider();
            }
        }
    });
}

function getSavedPost() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getSavedPost: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Saved Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    if (res.type == "write_up_regular") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = writeUpGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "reference_post") {
                        newtemp = refPostGet(
                            res.avatar,
                            res.username,
                            res.post_id,
                            res.text,
                            res.ref_by,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "classic_write_up") {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = classicPostTempGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "portrait_post") {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = portraitGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.image,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "typing_text") {
                        let text = res.text;
                        newtemp = typing_get(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            text,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "regular_post") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = regula_post(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.images,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "peffet_event") {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = eventGet(
                            res.username,
                            word,
                            res.sub_type,
                            res.previlage,
                            res.post_id,
                            res
                        );
                    }
                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="saved_btn">${arr_con.join(
          ""
        )}</div>`;
                slider();
            }
        }
    });
}

function getWriteUpUser() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserPostsWriteUP: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Write Up Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    if (res.type == "write_up_regular") {
                        let text = res.text;
                        let word = wordCheck(text);

                        newtemp = writeUpGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    } else if (res.type == "classic_write_up") {
                        let text = res.text;

                        let word = wordCheck(text);

                        newtemp = classicPostTempGet(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            word,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    } else if (res.type == "typing_text") {
                        let text = res.text;
                        newtemp = typing_get(
                            res.avatar,
                            res.username,
                            res.time_ago,
                            res.post_id,
                            res.bg,
                            text,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved,
                            res.font
                        );
                    }
                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="write_up">${arr_con.join(
          ""
        )}</div>`;
            }
        }
    });
}

function getPortPost() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getPortPost: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Portrait Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    let text = res.text;

                    let word = wordCheck(text);

                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );

                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="port_post">${arr_con.join(
          ""
        )}</div>`;
            }
        }
    });
}

function getRegPost() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getRegPost: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Regular Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    let text = res.text;

                    let word = wordCheck(text);

                    newtemp = regula_post(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.images,
                        res.saved_num,
                        res.post_saved
                    );

                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="port_post">${arr_con.join(
          ""
        )}</div>`;
                slider();
            }
        }
    });
}

function getEventPost() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getEventPost: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Event Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let text = res.text;

                    let word = wordCheck(text);
                    let newtemp = eventGet(
                        res.username,
                        word,
                        res.sub_type,
                        res.previlage,
                        res.post_id,
                        res
                    );
                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="event_post">${arr_con.join(
          ""
        )}</div>`;
                slider();
            }
        }
    });
}

function getUserRefPost() {
    var tab_content = document.querySelector(".tab_content");
    tab_content.innerHTML = "";
    var uid = document.querySelector(".uid");
    let arr_con = [];
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserRefPost: 1,
            uid: uid.getAttribute("data-uid")
        },
        success: data => {
            if (data.num_post) {
                tab_content.innerHTML = `
                <div class="timelime_btn">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="width: 90%; margin: 0 auto;">
                        <ion-icon name="albums-outline"  style="font-size: 8em;"></ion-icon>
                        <h1 style="font-size: 1.5em;">No Regular Post Yet!</h1>
                        <span style="padding: 5px 15px;background: limegreen;border-radius: 19px;font-size: 17px;" class="create_btn">create</span>
                    </div>
                </div>`;
            } else {
                data.forEach(res => {
                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = "active";
                    } else {
                        ac = "";
                    }
                    if (res.type == "reference_post") {
                        newtemp = refPostGet(
                            res.avatar,
                            res.username,
                            res.post_id,
                            res.text,
                            res.ref_by,
                            id,
                            pin,
                            ac,
                            res.total_likes,
                            res.total_comment,
                            res.saved_num,
                            res.post_saved
                        );
                    }
                    arr_con.push(newtemp);
                });

                tab_content.innerHTML = `<div class="reference_con">${arr_con.join(
          ""
        )}</div>`;
            }
        }
    });
}

function portCreate() {
    $("#port_form").submit(evt => {
        evt.preventDefault();
        $("#port_form").ajaxSubmit({
            dataType: "JSON",
            beforeSubmit: () => {
                $(".progress-bar").width("0%");
                document.querySelector(".progress").classList.remove("h");
            },
            uploadProgress: (event, position, total, percentageComplete) => {
                $(".progress-bar").animate({
                    width: percentageComplete + "%"
                }, {
                    duration: 1000
                });
            },
            success: data => {
                switch (data) {
                    case "invalid file format":
                        $(".submit_port").html("only .jpg, .jpeg, .png are allowed");
                        break;
                    case "file error":
                        $(".submit_port").html("Image error");
                        break;
                    case "successful":
                        document
                            .querySelector(".full_screen_utility_handler")
                            .classList.toggle("active");
                        document.querySelector("body").classList.remove("active");
                        document.querySelector(".create_area").classList.remove("active");
                        $(".submit_port").html("Successful");
                        break;

                    default:
                        break;
                }
            }
        });
    });
}

function RegCreate() {
    $("#reg_form").submit(evt => {
        evt.preventDefault();
        $("#reg_form").ajaxSubmit({
            dataType: "JSON",
            beforeSubmit: () => {
                $(".progress-bar").width("0%");
                document.querySelector(".progress").classList.remove("h");
            },
            uploadProgress: (event, position, total, percentageComplete) => {
                $(".progress-bar").animate({
                    width: percentageComplete + "%"
                }, {
                    duration: 1000
                });
            },
            contentType: false,
            procesData: false,
            success: data => {
                console.log(data);
                switch (data) {
                    case "invalid file format":
                        $(".submit_reg").html("only .jpg, .jpeg, .png are allowed");
                        break;
                    case "file error":
                        $(".submit_reg").html("Image error");
                        break;
                    case "successful":
                        document
                            .querySelector(".full_screen_utility_handler")
                            .classList.remove("active");
                        document.querySelector("body").classList.remove("active");
                        document.querySelector(".create_area").classList.remove("active");
                        $(".submit_reg").html("Successful");
                        break;

                    default:
                        break;
                }
            }
        });
    });
}

function userConnectionSys(reciever) {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            userConnectionSys: 1,
            reciever: reciever
        },
        beforeSend: () => {
            $(".f_or_f_btn").html("loading...");
        },
        success: data => {
            $(".f_or_f_btn").html(data.return);
        }
    });
}

function follow_user(reciever, btn) {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            userConnectionSys: 1,
            reciever: reciever
        },
        beforeSend: () => {
            btn.innerHTML = "loading..";
        },
        success: data => {
            console.log(data);
            // $(".").html(data.return)
        }
    });
}

function updateFollowingPermit(type, value, username) {
    switch (type) {
        case "reference":
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "add",
                        sec: "reference",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "remove",
                        sec: "reference",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            }
            break;
        case "portrait":
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "add",
                        sec: "portrait",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "remove",
                        sec: "portrait",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            }
            break;
        case "peffet_event":
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "add",
                        sec: "peffet_event",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "remove",
                        sec: "peffet_event",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            }
            break;
        case "regular":
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "add",
                        sec: "regular",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "remove",
                        sec: "regular",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            }
            break;
        case "write_up":
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "add",
                        sec: "write_up",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        user_follow_notify_type: 1,
                        type: "remove",
                        sec: "write_up",
                        username: username
                    },
                    success: () => {
                        //
                    }
                });
            }
            break;

        default:
            break;
    }
}
const getUserWishListAll = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListAll: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h">
                    <div class="ring_loader">
                    </div>
                    <span class="loader_text">Loading..</span>
                </div>
            `;
            bx.innerHTML = t;
        },
        success: data => {
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "write_up_regular") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = writeUpGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "reference_post") {
                    newtemp = refPostGet(
                        res.avatar,
                        res.username,
                        res.post_id,
                        res.text,
                        res.ref_by,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "classic_write_up") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = classicPostTempGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "portrait_post") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "typing_text") {
                    let text = res.text;
                    newtemp = typing_get(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        text,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "regular_post") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = regula_post(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.images,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "peffet_event") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = eventGet(
                        res.username,
                        word,
                        res.sub_type,
                        res.previlage,
                        res.post_id,
                        res
                    );
                }
                arr_con.push(newtemp);
            });
            setTimeout(() => {
                // bx.innerHTML = "";
                bx.innerHTML = `
                <div class="posts_bx">
                    ${arr_con.join("")}
                    <b class="text-lime text-center pf_loading" style="padding: 10px;"></b>
                </div>`;
                slider();
            }, 500);
        }
    });
};
const getUserWishListWriteUp = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListWriteUp: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
            // bx.innerHTML = t;
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "write_up_regular") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = writeUpGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "reference_post") {
                    newtemp = refPostGet(
                        res.avatar,
                        res.username,
                        res.post_id,
                        res.text,
                        res.ref_by,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "classic_write_up") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = classicPostTempGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "typing_text") {
                    let text = res.text;
                    newtemp = typing_get(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        text,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}
            <b class="text-lime text-center pf_loading" style="padding: 10px;"></b></div>`;
        }
    });
};
const getUserWishListPortrait = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListPortrait: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "portrait_post") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML = `<div class="posts_bx masonry_port">${arr_con.join("")}
            <b class="text-lime text-center pf_loading" style="padding: 10px;"></b></div>`;
        }
    });
};
const getUserWishListReg = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListReg: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "regular_post") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = regula_post(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.images,
                        res.saved_num,
                        res.post_saved
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}
            <b class="text-lime text-center pf_loading" style="padding: 10px;"></b></div>`;
            slider();
        }
    });
};
const getUserWishListEvent = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListEvent: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let text = res.text;

                let word = wordCheck(text);
                let newtemp = eventGet(
                    res.username,
                    word,
                    res.sub_type,
                    res.previlage,
                    res.post_id,
                    res
                );
                arr_con.push(newtemp);
            });

            bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}
            <b class="text-lime text-center pf_loading" style="padding: 10px;"></b></div>`;
            slider();
        }
    });
};

const getUserWishListReference = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserWishListReference: 1
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "reference_post") {
                    newtemp = refPostGet(
                        res.avatar,
                        res.username,
                        res.post_id,
                        res.text,
                        res.ref_by,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.post_saved
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}
            <b class="text-lime text-center pf_loading" style="padding: 10px;"></b></div>`;
        }
    });
};
const addToSaved = post_id => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            addToSaved: 1,
            post_id: post_id
        },
        success: data => {
            console.log(data);
        }
    });
};

function randomNotification() {
    const notifTitle = "test notify";
    const notifBody = `Created by kelly daniel`;
    const notifImg = `peffet_icons/xhdpi.png`;
    const options = {
        body: notifBody
    };
    new Notification(notifTitle, options);
    // setTimeout(randomNotification, 30000);
}
const notifs_ask = () => {
    Notification.requestPermission().then(result => {
        if (result === "granted") {
            randomNotification();
        }
    });
};
const users_suggestion = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            users_suggestion: 1
        },
        success: data => {
            let arr_con = [];
            data.forEach(res => {
                let id = RadomString(19);
                let g;
                if (res.name) {
                    g = `<b>${res.name}</b>
                <p>@${res.username}</p>`;
                } else {
                    g = `<b>@${res.username}</b>
                <p>${res.bio}</p>`;
                }
                let temp = `
                <div class="users_each">
                    <a href="@${res.username}" class="img_area">
                        <img src="media/dp/${res.avatar}">
                    </a>
                    <div class="username_and_bio">
                        ${g}
                        <button class="btn btn-outline-lime follow_btn follow_btn_sel_${res.username}_special_${id}" data-spec-id="${id}"  data-post-username="${res.username}">follow</button> 
                    </div>
                </div>
                `;
                arr_con.push(temp);
            });
            bx.innerHTML = `<div class="posts_bx user_sug">${arr_con.join("")}</div>`;
            setTimeout(() => {
                document.getElementById("user_sug").click();
            }, 500);
        }
    });
};
// notifs_ask();
// randomNotification();
const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
    } else {
        return (
            navigator.userLanguage ||
            navigator.language ||
            navigator.browserLanguage ||
            "en"
        );
    }
};

const show_or_hide_delete_button = post_id => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            show_or_hide_delete_button: 1,
            post_id: post_id
        },
        success: data => {
            let delete_post_btn = document.querySelector(".delete_post_btn");
            if (data.response == "show_delete") {
                delete_post_btn.setAttribute("data-post-id", post_id);
                delete_post_btn.classList.remove("d-none");
            } else if (data.response == "hide_delete") {
                console.log(delete_post_btn.classList.add("d-none"));
            }
        }
    });
};
const get_followers_to_share_post_to = post_id => {
    let get_followers_to_share_post_to_bx = document.querySelector(
        ".get_followers_to_share_post_to_bx"
    );
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            get_followers_to_share_post_to: 1,
            post_id: post_id
        },
        success: data => {
            get_followers_to_share_post_to_bx.innerHTML = "";
            let arr = [];
            data.forEach(res => {
                let temp = `
                <div class="friends">
                    <div class="left">
                        <img src="media/dp/${res.avatar}" alt="">
                        <div class="username_or_name">
                            <span>${res.name || "No Name"}</span>
                            <span>${res.username}</span>
                        </div>
                    </div>
                    <button class="send_share_post_btn" data-reciever-id="${
                      res.reciever_id
                    }" data-reciever-username="${
          res.username
        }" data-post-id="${post_id}">Send</button>
                </div>
                `;
                arr.push(temp);
            });
            get_followers_to_share_post_to_bx.innerHTML = arr.join("");
        }
    });
};

const send_post_to_msg = (button, reciever_id, reciever_username, post_id) => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            send_post_to_msg: 1,
            reciever_id: reciever_id,
            reciever_username: reciever_username,
            post_id: post_id
        },
        beforeSend: () => {
            button.innerHTML = "loading...";
        },
        success: data => {
            if (data.return) {
                button.classList.add("d-none");
            } else {
                //
            }
        }
    });
};
const explore_search = search_value => {
    let suggestions = document.querySelector(".suggestions");
    let search_bx_s = document.querySelector(".search_bx_s");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            explore_search_sug: 1,
            query: search_value
        },
        success: data => {
            if (suggestions) {
                suggestions.innerHTML = "";
            }
            if (data.status) {
                suggestions.innerHTML = `<h3 class="text-center">search result not found!</h3>`;
            } else {
                let arr = [];
                data.forEach(res => {
                    let id = RadomString(34);
                    let result = res.result;
                    let temp;
                    if (result.length > 35) {
                        let new_res = result.slice(0, 35) + "....";
                        temp = `
                        <span class="${id}">
                            <a href="explore?q=${res.main_result}">${new_res}</a>
                            <!-- <i class="fa fa-times delete_search_sug" data-sug-id="${id}"></i> -->
                        </span>
                        `;
                    } else {
                        temp = `
                        <span class="${id}">
                            <a href="explore?q=${
                              res.main_result
                            }">${result.slice(0, 40)}</a>
                            <!-- <i class="fa fa-times delete_search_sug" data-sug-id="${id}"></i> -->
                        </span>
                    `;
                    }
                    arr.push(temp);
                });
                search_bx_s.innerHTML = arr.join("");
                if (suggestions) {
                    suggestions.innerHTML = arr.join("");
                }
            }
        }
    });
};
const openFollowerFollowing = (username, type) => {
    let following_follower_bx = document.querySelector(".following_follower_bx");
    let body = document.querySelector("body");
    following_follower_bx.classList.add("active");
    let utl_follower_btn = document.querySelector("#utl_follower_btn");
    let utl_following_btn = document.querySelector("#utl_following_btn");
    body.classList.add("active");
    utl_following_btn.setAttribute("data-username", username);
    utl_follower_btn.setAttribute("data-username", username);
    if (type == "following") {
        document.getElementById("utl_following_btn").click();
    } else if (type == "follower") {
        document.getElementById("utl_follower_btn").click();
    }
};
const fillFollowerFollowing = (username, type) => {
    let utl_tab_contents = document.querySelector(".utl_tab_contents");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            fillFollowerFollowing: 1,
            username: username,
            type: type
        },
        success: data => {
            let arr = [];
            let temp;
            utl_tab_contents.innerHTML = "";
            data.forEach(res => {
                temp = `
					<div class="user_card">
                        <a href="@${res.username}" class="left">
                            <img src="media/dp/${res.avatar}" alt="${
          res.username
        }">
                            <div class="txt">
                                <b>${res.name.slice(0, 20) || ".."}</b>
                                <p>${res.username}</p>
                            </div>
                        </a>
                        <button class="utl_fanf_action_btn" data-username="${
                          res.username
                        }">${res.connD}</button>
                    </div>
                `;
                arr.push(temp);
            });
            utl_tab_contents.innerHTML = arr.join("");
        }
    });
};
const sendText = (msg, reciever_username, reciever_id) => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            sendNewTxtChat: 1,
            reciever_id: reciever_id,
            reciever_username: reciever_username,
            msg: msg
        },
        success: data => {
            if (data.return == false) {
                // $("#chat_msg_input").val("")
            } else {
                $("#chat_bx").val("");
            }
        }
    });
};
const evtBtnsListner = () => {
    eventSug();
    let media_type = document.querySelector(".media_type"),
        orientation = document.querySelector(".orient");
    media_type.addEventListener("change", () => {
        if (media_type.value == "audio") {
            orientation.classList.add("d-none");
        } else {
            orientation.classList.remove("d-none");
        }
    });
};
const createEvent = () => {
    let evt_description = document.querySelector(".evt_description"),
        media_type = document.querySelector(".media_type"),
        target_audience = document.querySelector(".target_audience"),
        orientation = document.querySelector(".orientation"),
        num_of_part = document.querySelector(".num_of_part"),
        evt_create_start = document.querySelector(".evt_create_start");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            createEvent: 1,
            evt_description: evt_description.value,
            media_type: media_type.value,
            target_audience: target_audience.value,
            orientation: orientation.value,
            num_of_part: num_of_part.value
        },
        success: data => {
            if (data.error == true) {
                evt_create_start.innerHTML = "error";
                evt_create_start.classList.replace("btn-primary", "btn-danger");
            } else {
                let body = document.querySelector("body");
                body.classList.remove("active");
                let full_screen_utility_handler = document.querySelector(
                    ".full_screen_utility_handler"
                );
                full_screen_utility_handler.classList.remove("active");
            }
        }
    });
};
const updateEvtBx = (type, event_id) => {
    if (type == "join_event") {
        updateEvtBxJoin(event_id);
    } else if (type == "manage_event") {
        updateEvtBxManage(event_id);
    } else if (type == "manage_event_pre") {
        updateEvtBxManagePre(event_id);
    }
};
const updateEvtBxManagePre = event_id => {
    let utl_bx_content = document.querySelector(".utl_bx_content");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            updateEvtBxManagePre: 1,
            event_id: event_id
        },
        beforeSend: () => {
            utl_bx_content.innerHTML = `
             
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
            `;
        },
        success: data => {
            console.log(data);
            if (data.error) {} else {
                let dis;
                if (!data.closable) {
                    dis = "disabled";
                } else {
                    dis = "";
                }
                let arr = [];
                data.ns.forEach(res => {
                    arr.push(`
                    <li class="each_pair">
                        <a href="@${res[0].name}" class="pair_one">
                            <strong>@${res[0].name}</strong>
                            <p>${res[0].number} likes</p>
                        </a>
                        <a href="@${res[1].name}"  class="pair_one">
                            <strong>@${res[1].name}</strong>
                            <p>${res[1].number} like</p>
                        </a>
                    </li>
                    `);
                });
                utl_bx_content.innerHTML = `
                <div class="utl_header">Manage Event</div>
                <ul class="pair_table">
                    ${arr.join("")}
                </ul>
                <button class="close_event" data-event-id="${
                  data.event_id
                }" ${dis}>Close event</button>
                `;
            }
        }
    });
};
const event_pic_upload_func = () => {
    $("#event_pic_upload").submit(evt => {
        evt.preventDefault();
        $("#event_pic_upload").ajaxSubmit({
            dataType: "JSON",
            uploadProgress: (event, position, total, percentageComplete) => {
                $(".event_pic_upload_btn").html(percentageComplete + "%");
            },
            success: data => {
                switch (data) {
                    case "invalid file format":
                        $(".event_pic_upload_btn").html(
                            "only .jpg, .jpeg, .png are allowed"
                        );
                        break;
                    case "file error":
                        $(".event_pic_upload_btn").html("Image error");
                        break;
                    case "file too big":
                        $(".event_pic_upload_btn").html("File size too big limit 200mb");
                        break;
                    case "successful":
                        document
                            .querySelector(".utl_event_manager_container")
                            .classList.remove("active");
                        document.querySelector("body").classList.remove("active");
                        $(".event_pic_upload_btn").html("Successful");
                        break;

                    default:
                        break;
                }
            }
        });
    });
};

const updateEvtBxJoin = event_id => {
    let utl_bx_content = document.querySelector(".utl_bx_content");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            updateEvtBxJoin: 1,
            event_id: event_id
        },
        beforeSend: () => {
            utl_bx_content.innerHTML = `
             
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
            `;
        },
        success: data => {
            utl_bx_content.innerHTML = "";
            if (data.error == "availability") {
                utl_bx_content.innerHTML = `
                    <div class="utl_bx_content">
                        <div class="utl_header">Join Event</div>
                        <div class="cont spec">
                            <h3 class="text-info text-center m-3 text-warning">Sorry, but you can't participate in this event from your country</h3>
                        </div>
                    </div>
                `;
            } else if (data.error == "unknown") {
                utl_bx_content.innerHTML = `
                    <div class="utl_bx_content">
                        <div class="utl_header">Join Event</div>
                        <div class="cont spec">
                            <h3 class="text-info text-center m-3 text-warning">Sorry, an error occured try again later</h3>
                        </div>
                    </div>
                `;
            } else if (data.error == "none") {
                if (data.status == "pending") {
                    utl_bx_content.innerHTML = `
                        <div class="utl_bx_content">
                            <div class="utl_header">Join Event</div>
                            <div class="cont spec">
                                <h3 class="text-primary text-center m-3 text-warning">Your application have been sent</h3>
                            </div>
                        </div>
                    `;
                } else {
                    if (data.media_type == "picture") {
                        let o;
                        if (data.orientation == "landscape") {
                            o = "landscape";
                        } else {
                            o = "";
                        }
                        utl_bx_content.innerHTML = `
                        <div class="utl_header">Join Event</div>
                        <form class="conts ${o}" method="POST" action="qs"  enctype="multipart/form-data" id="event_pic_upload" >
                            <input type="file" id="event_pic_sel" name="event_pic_sel" hidden accept="image/*">
                            <input type="text" id="event_id_val" name="event_id_val" hidden value="${data.event_id}">
                            <input type="text" id="host_id" name="host_id" hidden value="${data.cid}">
                            <label class="img_previ  ${o}" for="event_pic_sel"></label>
                            <i class="text-info" style="width: 90%">By clicking apply you will not be able to update the media anymore</i>
                            <button type="submit" class="event_pic_upload_btn">Apply</button>
                        </form>
                        `;
                    } else if (data.media_type == "video") {
                        let o;
                        if (data.orientation == "landscape") {
                            o = "landscape";
                        } else {
                            o = "";
                        }
                        utl_bx_content.innerHTML = `
                        <div class="utl_header">Join Event</div>
                        <form class="conts ${o} video" method="POST" action="qs"  enctype="multipart/form-data" id="event_pic_upload" >
                            <input type="file" id="event_pic_sel" name="event_pic_sel" hidden accept="video/*">
                            <input type="text" id="event_id_val" name="event_id_val" hidden value="${data.event_id}">
                            <input type="text" id="host_id" name="host_id" hidden value="${data.cid}">
                            <div style="width: 100%; padding:5px"><label class="btn btn-primary" le="
                            height: 2.2em;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 4em;
                        " for="event_pic_sel">Pick</label></div>
                            <label class="img_previ  ${o}" for="event_pic_sel"></label>
                            <i class="text-info" style="width: 90%">By clicking apply you will not be able to update the media anymore</i>
                            <button type="submit" class="event_pic_upload_btn">Apply</button>
                        </form>
                        `;
                    }
                }
            }

            updateEvtBxAct();
            event_pic_upload_func();
        }
    });
};

const updateEvtBxAct = () => {
    let media = document.querySelector("#event_pic_sel");
    if (media) {
        media.addEventListener("change", () => {
            var total_files = document.getElementById("event_pic_sel").files.length;
            var prev = document.querySelector(".img_previ");
            prev.innerHTML = "";
            for (let i = 0; i < total_files; i++) {
                var media = event.target.files[i];
                var m = event.target.files[i].name;
                var ext = m.substring(m.lastIndexOf(".") + 1);
                if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                    prev.innerHTML += `
                        <img src='${URL.createObjectURL(media)}' width="100%">
                    `;
                } else if (
                    ext == "mp4" ||
                    ext == "ogg" ||
                    ext == "MOV" ||
                    ext == "avi"
                ) {
                    prev.innerHTML += `
                        
                    <iframe src="player.php?src=${URL.createObjectURL(
                      media
                    )}" frameborder="0"></iframe>
                    
                        `;
                } else if (
                    ext == "mp4a" ||
                    ext == "wav" ||
                    ext == "flac" ||
                    ext == "mp3"
                ) {
                    var audio = document.createElement("audio");
                    audio.src = URL.createObjectURL(media);
                    audio.controls = "true";
                    prev.append(audio);
                }
            }
        });
    }
};

const updateEvtBxManage = event_id => {
    let utl_bx_content = document.querySelector(".utl_bx_content");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            updateEvtBxManage: 1,
            event_id: event_id
        },
        beforeSend: () => {
            utl_bx_content.innerHTML = `
             
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
            `;
        },
        success: data => {
            if (data.error == "unknown") {
                utl_bx_content.innerHTML = `
                    <div class="utl_bx_content">
                        <div class="utl_header">Join Event</div>
                        <div class="cont spec">
                            <h3 class="text-info text-center m-3 text-warning">Sorry, an error occured try again later</h3>
                        </div>
                    </div>
                `;
            } else if (data.status == "no applicant") {
                utl_bx_content.innerHTML = `
                    <div class="utl_bx_content">
                        <div class="utl_header">Join Event</div>
                        <div class="cont spec">
                            <h3 class="text-info text-center m-3 text-warning">Sorry, no applicant yet</h3>
                        </div>
                    </div>
                `;
            } else {
                let arr = [];
                data.forEach(res => {
                    if (res.status == "no applicant") {
                        utl_bx_content.innerHTML = `
                        <div class="utl_bx_content">
                            <div class="utl_header">Join Event</div>
                            <div class="cont spec">
                                <h3 class="text-primary text-center m-3 text-warning">No applicant yet!</h3>
                            </div>
                        </div>
                    `;
                    } else {
                        if (res.media_type == "jpg" || res.media_type == "jpeg" || res.media_type == "png") {
                            arr.push(`
                            <div class="slide slide_for_${res.username}">
                                <img src="media/event_media/${
                                  res.media
                                }" alt="@${res.username}">
                                <legend><span>${res.name.slice(0, 25) ||
                                  "..."}</span> <a href="@${res.username}">@${
                res.username
              }</a></legend>
                                <button class="btn btn-danger decline_application" data-event-id="${
                                  res.event_id
                                }" data-applicant-name="${
                res.username
              }" data-applicant-id="${res.applicant_id}">Decline</button>
                            </div>
                        `);
                        } else if (res.media_type == "mov" || res.media_type == "mp4" || res.media_type == "avi" || res.media_type == "ogg") {

                            arr.push(`
                            <div class="slide slide_for_${res.username}">
                                <video src="media/event_media/${
                                  res.media
                                }" class="video_viewer_btn"></video>
                                <legend><span>${res.name.slice(0, 25) ||
                                  "..."}</span> <a href="@${res.username}">@${
                res.username
              }</a></legend>
                                <button class="btn btn-danger decline_application" data-event-id="${
                                  res.event_id
                                }" data-applicant-name="${
                res.username
              }" data-applicant-id="${res.applicant_id}">Decline</button>
                            </div>
                        `);
                        }
                    }
                });
                let b;
                if (data[0].needed == data[0].available_num) {
                    b = `<button class="approve_event" data-event-id="${data[0].event_id}">Start</button>`;
                } else {
                    b = `<button class="approve_event" data-event-id="${data[0].event_id}" disabled>Start</button>`;
                }
                utl_bx_content.innerHTML = `
                <div class="utl_header">Manage Event</div>
                    <div class="info_display">Applicants <span class="applicants_num">${
                      data[0].available_num
                    }/${data[0].needed}</span></div>
                    <div class="navi utl_navi_left">
                        <i class="fa fa-arrow-left"></i>
                    </div>
                    <div class="navi utl_navi_right">
                        <i class="fa fa-arrow-right"></i>
                    </div>
                <div class="cont utl_cont">
                    ${arr.join("")}
                </div>
                ${b}
            `;
            }
        }
    });
};
const decline_application = (event_id, applicant_id, applicant_name) => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            decline_application: 1,
            event_id: event_id,
            applicant_id: applicant_id
        },
        success: data => {
            if (data.error == "none") {
                document
                    .querySelector(".slide_for_" + applicant_name)
                    .classList.remove("slide");
                document.querySelector(".slide_for_" + applicant_name).innerHTML = "";
                let applicants_num = document.querySelector(".applicants_num");
                let applicants_num_ex = applicants_num.textContent.split("/");
                if (data.num_of_applicants == applicants_num_ex[0]) {
                    document
                        .querySelector(".approve_event")
                        .setAttribute("disabled", false);
                } else {
                    document
                        .querySelector(".approve_event")
                        .setAttribute("disabled", true);
                }
                var n = data.num_of_applicants + "/" + applicants_num_ex[1];
                document.querySelector(".applicants_num").innerHTML = n;
            }
        }
    });
};
const approve_event = event_id => {
    let utl_bx_content = document.querySelector(".utl_bx_content");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            approve_event: 1,
            event_id: event_id
        },
        success: data => {
            if (data.error == "none" && data.status == "ready") {
                utl_bx_content.innerHTML = "";
                document
                    .querySelector(".utl_event_manager_container")
                    .classList.remove("active");
                document.querySelector("body").classList.remove("active");
            } else {
                document.querySelector(".approve_event").innerHTML = "error";
            }
        }
    });
};
const concludeEvent = event_id => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            concludeEvent: 1,
            event_id: event_id
        },
        success: data => {
            if (data.error == "unknown") {
                //
            } else {
                if (data.status == "success") {
                    let utl_bx_content = document.querySelector(".utl_bx_content");
                    utl_bx_content.innerHTML = "";
                    document
                        .querySelector(".utl_event_manager_container")
                        .classList.remove("active");
                    document.querySelector("body").classList.remove("active");
                }
            }
        }
    });
};
const getTrendingHash = () => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getTrendingHash: 1
        },
        success: data => {
            bx.innerHTML = "";
            let arr_con = [];
            data.forEach(res => {
                let str;
                if (res.num > 1) {
                    str = 'posts';
                } else {
                    str = 'post';
                }
                arr_con.push(`
                <a href="explore?q=${res.tag.slice(1, 30)}&&type=hash" class="d-flex justify-content-between align-items-center" style="width: 90%; margin: 0 auto; height: 5em;">
                    <b class="d-flex justify-content-between align-items-center">
                        <strong style="font-size: 3em; font-weight: 700; margin-right: 15px;">#</strong>
                        <p style="font-size: 1em;">${res.tag.substr(1)}</p>
                    </b> 
                    <p style="font-size: 1em">${number_format(res.num)} ${str}</p>
                </a>`);
            });
            console.log(data);
            bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}</div>`;
        }
    });
}
const getAllEvents = (post_id) => {
    let event_mv_conts = document.querySelector(".event_mv_conts");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getAllEvents: 1,
            post_id: post_id
        },
        beforeSend: () => {
            event_mv_conts.innerHTML = `
                <div class="loading_box">
                    <span class="text-lime">Loading...</span>
                </div>
            `;
        },
        success: res => {
            if (res.error == "none") {
                let eid = res.event_id;
                let id = RadomString(25);
                let p_arr = [];
                res.media.forEach(each_pair => {
                    let p_one, p_two;
                    if (each_pair.like_for == "pair_one") {
                        p_one = "active";
                        p_two = "";
                    } else if (each_pair.like_for == "pair_two") {
                        p_two = "active";
                        p_one = "";
                    } else {
                        p_one = "";
                        p_two = "";
                    }

                    if (res.media_type == "picture") {
                        p_arr.push(`
                    <div class="each_group">
                        <div class="group_sec">
                            <img src="media/event_media/${each_pair.pair_one_media}" alt="@${each_pair.pair_one_name}" class="classic_img_prev">
                        </div>
                        <div class="group_sec">
                            <img src="media/event_media/${each_pair.pair_two_media}" alt="@${each_pair.pair_two_name}" class="classic_img_prev">
                        </div>
                        <div class="group_sec_act_bx one">
                            <i class="fa fa-heart event_like_btn event_like_one ${p_one} pair_one_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_one_name}">@${each_pair.pair_one_name}</a></b>
                        </div>
                        <div class="group_sec_act_bx two">
                            <i class="fa fa-heart event_like_btn event_like_two ${p_two} pair_two_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_two_name}">@${each_pair.pair_two_name}</a></b>
                        </div>
                    </div>
                `);
                    } else if (res.media_type == "video") {
                        p_arr.push(`
                    <div class="each_group">
                        <div class="group_sec">
                            <video src="media/event_media/${each_pair.pair_one_media}" preload="buffer" class="video_viewer_btn"></video>
                        </div>
                        <div class="group_sec">
                            <video src="media/event_media/${each_pair.pair_two_media}" preload="buffer" class="video_viewer_btn"></video>
                        </div>
                        <div class="group_sec_act_bx one">
                            <i class="fa fa-heart event_like_btn event_like_one ${p_one} pair_one_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_one_name}">@${each_pair.pair_one_name}</a></b>
                        </div>
                        <div class="group_sec_act_bx two">
                            <i class="fa fa-heart event_like_btn event_like_two ${p_two} pair_two_${each_pair.pair_id}"  data-event-id="${eid}" data-pair-id="${each_pair.pair_id}"></i>
                            <b><a href="@${each_pair.pair_two_name}">@${each_pair.pair_two_name}</a></b>
                        </div>
                        <div class="each_play_btn one">
                            <i class="fa fa-play"></i>
                        </div>
                        <div class="each_play_btn two">
                            <i class="fa fa-play"></i>
                        </div>
                    </div>
                `);
                    }
                });
                event_mv_conts.innerHTML =
                    `
                    <div class="header_evt">
                        <span>All Pairs</span>
                    </div>
                    <div class="evt_ms">
                        ${p_arr.join(" ")}
                    </div>
                `;
            }
        }
    });
}
const getWishListScroll = () => {
    let nav_btns = document.querySelectorAll(".nav_btn");
    let which_tab;
    nav_btns.forEach(nav_btn => {
        if (nav_btn.classList.contains("active")) {
            which_tab = nav_btn.getAttribute("id");
        } else {
            // which_tab = '';
        }
    });
    let tabs = ['posts', 'event', 'portrait', 'regular', 'write_up', 'reference'];
    if (tabs.includes(which_tab)) {
        let peffet_post_handler = document.querySelectorAll(".peffet_post_handler");
        let post_id_array = [];
        peffet_post_handler.forEach(peffet_post => {
            post_id_array.push(peffet_post.getAttribute("data-post-id"));
        });
        let l = `<b class="text-lime text-center pf_loading active" style="padding: 10px;"></b>`;
        let g_ls;
        g_ls = document.querySelectorAll(".pf_loading");
        let load_more;
        g_ls.forEach(g_l => {
            if (g_l.classList.contains("active")) {
                load_more = '';
            } else {
                load_more = 'yes';
            }
        });
        if (load_more == "yes") {
            let posts_bx = document.querySelector(".posts_bx");
            console.log("Not loading");
            posts_bx.innerHTML += l;
            switch (which_tab) {
                case 'posts':
                    getWishListScrollPost(post_id_array);
                    break;
                case 'portrait':
                    getWishListScrollPortrait(post_id_array);
                    break;

                default:
                    break;
            }
        }
    }
}

const getWishListScrollPost = (post_ids) => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getWishListScrollPost: 1,
            post_ids: post_ids
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
            // bx.innerHTML = t;
        },
        success: data => {
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "write_up_regular") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = writeUpGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "reference_post") {
                    newtemp = refPostGet(
                        res.avatar,
                        res.username,
                        res.post_id,
                        res.text,
                        res.ref_by,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "classic_write_up") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = classicPostTempGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "portrait_post") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "typing_text") {
                    let text = res.text;
                    newtemp = typing_get(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        text,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.saved_num,
                        res.post_saved,
                        res.font
                    );
                } else if (res.type == "regular_post") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = regula_post(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        res.bg,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.images,
                        res.saved_num,
                        res.post_saved
                    );
                } else if (res.type == "peffet_event") {
                    let text = res.text;

                    let word = wordCheck(text);
                    newtemp = eventGet(
                        res.username,
                        word,
                        res.sub_type,
                        res.previlage,
                        res.post_id,
                        res
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML += arr_con.join("");
            slider();
            g_ls = document.querySelectorAll(".pf_loading");
            g_ls.forEach(g_l => {
                g_l.classList.remove("active");
            });
        }
    });
}
const getWishListScrollPortrait = (post_ids) => {
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getWishListScrollPortrait: 1,
            post_ids: post_ids
        },
        beforeSend: () => {
            let t = `
                <div class="loading_bx_h>
                    <p>Loading..</p>
                </div>
            `;
            // bx.innerHTML = t;
        },
        success: data => {
            console.log(data);
            let arr_con = [];
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                if (res.is_liked) {
                    ac = "active";
                } else {
                    ac = "";
                }
                if (res.type == "portrait_post") {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = portraitGet(
                        res.avatar,
                        res.username,
                        res.time_ago,
                        res.post_id,
                        word,
                        id,
                        pin,
                        ac,
                        res.total_likes,
                        res.total_comment,
                        res.image,
                        res.saved_num,
                        res.post_saved
                    );
                }
                arr_con.push(newtemp);
            });

            bx.innerHTML += arr_con.join("");
            slider();
            g_ls = document.querySelectorAll(".pf_loading");
            g_ls.forEach(g_l => {
                g_l.classList.remove("active");
            });
        }
    });
}
const getUsernameSearch = (username, type) => {
    let peffet_hash_and_at_bx = document.querySelector(".peffet_hash_and_at_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUsernameSearch: 1,
            username: username
        },
        success: data => {
            if (type == 'write_up_classic') {
                let arr = [];
                data.forEach(res => {
                    arr.push(`
                    <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="write_up_classic" data-value="@${res.username}">
                        <b class="peffet_hash_and_at_bx_value" data-which="write_up_classic" data-value="@${res.username}">@${res.username}</b>
                    </span>
                `);
                });
                if (data[0].error == 'ghost') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Username does not exist</b>
                        </span>
                    </div>
                    `;
                } else {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            } else if (type == 'regular_post') {
                let arr = [];
                data.forEach(res => {
                    arr.push(`
                    <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="regular_post" data-value="@${res.username}">
                        <b class="peffet_hash_and_at_bx_value" data-which="regular_post" data-value="@${res.username}">@${res.username}</b>
                    </span>
                `);
                });
                if (data[0].error == 'ghost') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Username does not exist</b>
                        </span>
                    </div>
                    `;
                } else {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            } else if (type == 'event_post') {
                let arr = [];
                data.forEach(res => {
                    arr.push(`
                    <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="event_post" data-value="@${res.username}">
                        <b class="peffet_hash_and_at_bx_value" data-which="event_post" data-value="@${res.username}">@${res.username}</b>
                    </span>
                `);
                });
                if (data[0].error == 'ghost') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Username does not exist</b>
                        </span>
                    </div>
                    `;
                } else {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">@user</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            }
        }
    });
}
const getHashSearch = (value, type) => {
    let peffet_hash_and_at_bx = document.querySelector(".peffet_hash_and_at_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getHashSearch: 1,
            value: value
        },
        success: data => {
            if (type == 'write_up_classic') {
                if (data.status == 'empty') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Tag not found</b>
                        </span>
                    </div>
                    `;
                } else {
                    let arr = [];
                    data.forEach(res => {
                        let l;
                        if (res.num > 1) {
                            l = res.num + ` posts`;
                        } else {
                            l = res.num + ` post`;
                        }
                        arr.push(`
                        <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="write_up_classic" data-value="${res.tag}">
                            <b class="peffet_hash_and_at_bx_value" data-which="write_up_classic" data-value="${res.tag}">${res.tag}</b>
                            <small class="peffet_hash_and_at_bx_value" data-which="write_up_classic" data-value="${res.tag}">${l}</small>
                        </span>
                    `);
                    });
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            } else if (type == 'regular_post') {
                if (data.status == 'empty') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Tag not found</b>
                        </span>
                    </div>
                    `;
                } else {
                    let arr = [];
                    data.forEach(res => {
                        let l;
                        if (res.num > 1) {
                            l = res.num + ` posts`;
                        } else {
                            l = res.num + ` post`;
                        }
                        arr.push(`
                        <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="regular_post" data-value="${res.tag}">
                            <b class="peffet_hash_and_at_bx_value" data-which="regular_post" data-value="${res.tag}">${res.tag}</b>
                            <small class="peffet_hash_and_at_bx_value" data-which="regular_post" data-value="${res.tag}">${l}</small>
                        </span>
                    `);
                    });
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            } else if (type == 'event_post') {
                if (data.status == 'empty') {
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        <span class="d-flex justify-content-center align-items-center w-100">
                            <b>Tag not found</b>
                        </span>
                    </div>
                    `;
                } else {
                    let arr = [];
                    data.forEach(res => {
                        let l;
                        if (res.num > 1) {
                            l = res.num + ` posts`;
                        } else {
                            l = res.num + ` post`;
                        }
                        arr.push(`
                        <span class="d-flex justify-content-between align-items-center w-100 peffet_hash_and_at_bx_value" data-which="event_post" data-value="${res.tag}">
                            <b class="peffet_hash_and_at_bx_value" data-which="event_post" data-value="${res.tag}">${res.tag}</b>
                            <small class="peffet_hash_and_at_bx_value" data-which="event_post" data-value="${res.tag}">${l}</small>
                        </span>
                    `);
                    });
                    peffet_hash_and_at_bx.innerHTML = `
                    <div class="peffet_hash_and_at_bx_header">#Tag</div>
                    <div class="bx">
                        ${arr.join(" ")}
                    </div>
                    `;
                }
            }
        }
    });
}
const writeTextFun = () => {
    $(".write_up_text_box").on('keyup', () => {
        let peffet_hash_and_at_bx = document.querySelector(".peffet_hash_and_at_bx");
        let text = $(".write_up_text_box").val();
        let exploded = text.split(" ");
        let text_new = exploded.pop();
        if (text_new[0] === "#") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getHashSearch(text_new, 'write_up_classic');
        } else if (text_new[0] === "@") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getUsernameSearch(text_new.substr(1), 'write_up_classic');
        } else {
            peffet_hash_and_at_bx.classList.remove("active");

        }

    });
}
const RegTextFun = () => {
    $("#caption_text").on('keyup', () => {
        let peffet_hash_and_at_bx = document.querySelector(".peffet_hash_and_at_bx");
        let text = $("#caption_text").val();
        let exploded = text.split(" ");
        let text_new = exploded.pop();
        if (text_new[0] === "#") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getHashSearch(text_new, 'regular_post');
        } else if (text_new[0] === "@") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getUsernameSearch(text_new.substr(1), 'regular_post');
        } else {
            peffet_hash_and_at_bx.classList.remove("active");

        }

    });
}
const eventSug = () => {
    $(".evt_description").on('keyup', () => {
        let peffet_hash_and_at_bx = document.querySelector(".peffet_hash_and_at_bx");
        let text = $(".evt_description").val();
        let exploded = text.split(" ");
        let text_new = exploded.pop();
        if (text_new[0] === "#") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getHashSearch(text_new, 'event_post');
        } else if (text_new[0] === "@") {
            peffet_hash_and_at_bx.classList.add("active");
            if (window.innerWidth >= 1025) {
                peffet_hash_and_at_bx.style = 'right: 12em; top: 1em';
            } else if (window.innerWidth >= 700) {
                peffet_hash_and_at_bx.style = 'right: 1em; top: 30em';
            } else {
                peffet_hash_and_at_bx.style = 'right: 0em;top: 5em; width: 74%;';
            }
            getUsernameSearch(text_new.substr(1), 'event_post');
        } else {
            peffet_hash_and_at_bx.classList.remove("active");

        }

    });
}
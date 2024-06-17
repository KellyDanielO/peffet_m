$(document).ready(() => {
    var all_chats_see = document.querySelector(".all_chats_see");
    var all_chats = document.querySelector(".all_chats");
    all_chats_see.addEventListener("click", () => {
        if (all_chats.classList.contains("active")) {
            all_chats.classList.remove("active");
            all_chats_see.textContent = "See all";
        } else {
            all_chats.classList.add("active");
            all_chats_see.textContent = "See less";
        }
    });
    document.querySelector("aside").style = "display: none !important";
    var msg_bx = document.querySelector(".chats_cont");
    msg_bx.scroll(0, msg_bx.scrollHeight);
    document.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("msg_act_bx")) {
            let msg_act_cont_bx = document.querySelector(".msg_act_cont_bx");
            msg_act_cont_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("copy_btn")) {
            navigator.clipboard.writeText(evt.target.getAttribute("data-to-copy"));
            swal("Copied to clipboard!");
        } else if (evt.target.classList.contains("msg_act")) {
            let msg_act_cont_bx = document.querySelector(".msg_act_cont_bx");
            let elip = evt.target.getAttribute("data-chat-content");
            let copy_btn = document.querySelector(".copy_btn");
            copy_btn.setAttribute(
                "data-to-copy",
                document.querySelector("." + elip).textContent
            );
            $.ajax({
                url: "qs",
                dataType: "JSON",
                method: "POST",
                data: {
                    check_msg_type: 1,
                    mid: evt.target.getAttribute("data-mid"),
                    reciever_id: evt.target.getAttribute("data-reciever-id"),
                },
                success: (data) => {
                    if (data.temp == "no") {
                        let time_area = document.querySelector(".time_area");
                        time_area.innerHTML = data.time;
                        let bx = document.querySelector(".bx_new_aea");
                        bx.innerHTML = "";
                        let foward_to_btn = document.querySelector(".foward_to_btn");
                        foward_to_btn.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        let deleted_msg_for_me = document.querySelector(
                            ".deleted_msg_for_me"
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-reciever-id",
                            data.reciever_id
                        );
                        deleted_msg_for_me.setAttribute("data-sender-id", data.sender_id);
                    } else if (data.temp == "yes") {
                        let bx = document.querySelector(".bx_new_aea");
                        bx.innerHTML = `<button style="margin: 0 auto;" class="unsend_msg" data-mid="${data.mid}"><i class="fa fa-trash unsend_msg" data-mid="${data.mid}"></i> Unsend</button>`;
                        let time_area = document.querySelector(".time_area");
                        time_area.innerHTML = data.time;
                        let foward_to_btn = document.querySelector(".foward_to_btn");
                        foward_to_btn.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        let deleted_msg_for_me = document.querySelector(
                            ".deleted_msg_for_me"
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-reciever-id",
                            data.reciever_id
                        );
                        deleted_msg_for_me.setAttribute("data-sender-id", data.sender_id);
                    }
                },
            });
            msg_act_cont_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("plus_ch")) {
            // let ch_add = document.querySelector(".ch_add");
            // let plus_chats_bx = document.querySelector(".plus_chats_bx");
            // plus_chats_bx.classList.toggle("active");
            // ch_add.classList.toggle("active");
            document.querySelector(".add_btn").classList.toggle("active");
            document.querySelector(".chats_footer").classList.toggle("active");
            document.querySelector(".add_contents").classList.toggle("active");
            document.querySelector(".reply_area").classList.remove("active");
        } else if (evt.target.classList.contains("clickable_chat_bx")) {
            let nw_conv_bx = document.querySelector(".nw_conv_bx");
            document.querySelector(".chats").classList.remove("d-none");
            document.querySelector(".chats").classList.remove("blur");
            document.querySelector(".status").classList.remove("blur");
            nw_conv_bx.classList.remove("active");
            document.querySelectorAll("#reciever_username")[0].setAttribute("value", evt.target.getAttribute("data-reciever-username"));
            document.querySelectorAll("#reciever_id")[0].setAttribute("value", evt.target.getAttribute("data-reciever-id"));
            document.querySelectorAll("#reciever_username")[1].setAttribute("value", evt.target.getAttribute("data-reciever-username"));
            document.querySelectorAll("#reciever_id")[1].setAttribute("value", evt.target.getAttribute("data-reciever-id"));
            updateLeftValue(evt.target.getAttribute("data-reciever-id"));
            openChatBox(
                evt.target.getAttribute("data-reciever-id"),
                evt.target.getAttribute("data-reciever-username"),
                evt.target.getAttribute("data-reciever-avatar")
            );
        } else if (evt.target.classList.contains("main_cont")) {
            document.querySelector(".forward_msg_cont").classList.toggle("active");
        } else if (evt.target.classList.contains("foward_msg")) {
            fowardMsg(
                evt.target.getAttribute("data-mid"),
                evt.target.getAttribute("data-reciever-id"),
                evt.target.getAttribute("data-reciever-username"),
                evt.target
            );
        } else if (evt.target.classList.contains("unsend_msg")) {
            unsend_msg(evt.target.getAttribute("data-mid"));
        } else if (evt.target.classList.contains("tenor_bx")) {
            document.querySelector(".tenor_bg_bx").classList.remove("active");
        } else if (evt.target.classList.contains("gif_each_img")) {
            let chats = document.querySelector(".chats");
            document.querySelector(".tenor_bg_bx").classList.remove("active");
            sendGif(
                evt.target.getAttribute("src"),
                chats.getAttribute("data-reciever-id"),
                chats.getAttribute("data-reciever-username")
            );
        } else if (evt.target.classList.contains("close_share")) {
            let share_pics = document.querySelector(".share_pics");
            share_pics.classList.remove("active");
            let imgs_ = document.querySelector(".imgs_");
            imgs_.innerHTML = '';
            document.querySelector("#caption_for_media").value = '';
            let sned = document.querySelector("#sned");
            sned.innerHTML = `<i class="fa fa-arrow-up send-arr"></i>`;
        } else if (evt.target.classList.contains("share_pics")) {
            let share_pics = document.querySelector(".share_pics");
            let imgs_ = document.querySelector(".imgs_");
            imgs_.innerHTML = '';
            share_pics.classList.remove("active");
            let sned = document.querySelector("#sned");
            document.querySelector("#caption_for_media").value = '';
            sned.innerHTML = `<i class="fa fa-arrow-up send-arr"></i>`;
        } else if (evt.target.classList.contains("close_vid_share")) {
            let share_vid = document.querySelector(".share_vid");
            share_vid.classList.remove("active");
            let imgs_ = document.querySelector(".imgs_")[1];
            imgs_.innerHTML = '';
            document.querySelectorAll("#caption_for_video")[1].value = '';
            let sned = document.querySelector("#send_vid");
            sned.innerHTML = `<i class="fa fa-arrow-up send-arr"></i>`;
        } else if (evt.target.classList.contains("share_vid")) {
            let share_vid = document.querySelector(".share_vid");
            let imgs_ = document.querySelectorAll(".imgs_")[1];
            imgs_.innerHTML = '';
            share_vid.classList.remove("active");
            let sned = document.querySelector("#send_vid");
            document.querySelectorAll("#caption_for_video")[1].value = '';
            sned.innerHTML = `<i class="fa fa-arrow-up send-arr"></i>`;
        }
    });
    var each_chat = document.querySelectorAll(".each_chat");
    each_chat.forEach((each_chat_bx) => {
        each_chat_bx.addEventListener("click", () => {
            let chats = document.querySelector(".chats");
            chats.classList.toggle("active");
        });
    });
    var foward_to_btn = document.querySelector(".foward_to_btn");
    foward_to_btn.addEventListener("click", () => {
        let forward_q = document.querySelector(".forward_q");
        $.ajax({
            url: "qs",
            method: "POSt",
            dataType: "JSON",
            data: {
                searchforFollower: 1,
                username: "",
            },
            success: (data) => {
                if (data.num == "empty") {
                    forward_q.innerHTML = `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">Follower not found!</h3>`;
                } else {
                    forward_q.innerHTML = "";
                    data.forEach((res) => {
                        let temp = `
                    <div class="d-flex justify-content-between align-items-center each_chat">
                        <div class="d-flex justify-content-between align-items-center left_side">
                            <img src="media/dp/${res.avatar}" alt="">
                            <div class="text">
                                <strong>${res.name || res.username}</strong>
                                <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>foward</small></div>
                            </div>
                        </div>
                        <div class="right_side">
                            <button class="btn btn-outline-primary foward_msg" data-mid="${foward_to_btn.getAttribute(
                              "data-mid"
                            )}" data-reciever-id="${
              res.uid
            }" data-reciever-username="${res.username}">forward</button>
                        </div>
                    </div>
                `;
                        forward_q.innerHTML += temp;
                    });
                }
            },
        });
        document.querySelector(".forward_msg_cont").classList.toggle("active");
    });
    var m_chats_back = document.querySelector(".m_chats_back");
    m_chats_back.addEventListener("click", () => {
        let chats = document.querySelector(".chats");
        chats.classList.toggle("active");
    });
    var chats_action_help = document.querySelector(".chats_action_help");
    chats_action_help.addEventListener("click", (evt) => {
        let status = document.querySelector(".status");
        status.classList.toggle("active");
        evt.target.classList.toggle("active");
    });
    var nw_conv = document.querySelector(".nw_conv");
    nw_conv.addEventListener("click", () => {
        let nw_conv_bx = document.querySelector(".nw_conv_bx");
        nw_conv_bx.classList.toggle("active");
    });
    var close_nw_conv_bx = document.querySelector(".close_nw_conv_bx");
    close_nw_conv_bx.addEventListener("click", () => {
        let nw_conv_bx = document.querySelector(".nw_conv_bx");
        nw_conv_bx.classList.toggle("active");
    });

    $("#new_conv_search_bar").on("keyup", () => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                searchforFollower: 1,
                username: $("#new_conv_search_bar").val(),
            },
            success: (data) => {
                if (data.num == "empty") {
                    let bx_search_result = document.querySelector(".bx_search_result");
                    bx_search_result.innerHTML = `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">Follower not found!</h3>`;
                } else {
                    let bx_search_result = document.querySelector(".bx_search_result");
                    bx_search_result.innerHTML = "";
                    data.forEach((res) => {
                        let temp = `
                    <div class="d-flex justify-content-between align-items-center each_chat clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                        <div class="d-flex justify-content-between align-items-center left_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            <img src="media/dp/${res.avatar}" alt="" class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}"  data-reciever-avatar="${res.avatar}">
                            <div class="text mx-1 clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                                <strong class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">${res.username}</strong>
                                <div class="clickable_chat_bx d-flex justify-content-between align-items-center" style="width:50%" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}"><small class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">message</small></div>
                            </div>
                        </div>
                        <div class="right_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            <i class="fa fa-arrow-right text-royal" style="font-size: calc(0.6rem + 1vw) clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}"></i>
                        </div>
                    </div>
                `;
                        bx_search_result.innerHTML += temp;
                    });
                }
            },
        });
    });
    $("#searchFollowerFoward").on("keyup", () => {
        let forward_q = document.querySelector(".forward_q");
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                searchforFollower: 1,
                username: $("#searchFollowerFoward").val(),
            },
            success: (data) => {
                if (data.num == "empty") {
                    forward_q.innerHTML = `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">Follower not found!</h3>`;
                } else {
                    forward_q.innerHTML = "";
                    data.forEach((res) => {
                        let temp = `
                    <div class="d-flex justify-content-between align-items-center each_chat">
                        <div class="d-flex justify-content-between align-items-center left_side">
                            <img src="media/dp/${res.avatar}" alt="">
                            <div class="text">
                                <strong>${res.name || res.username}</strong>
                                <div class="d-flex justify-content-between align-items-center" style="width:50%"><small>foward</small></div>
                            </div>
                        </div>
                        <div class="right_side">
                            <button class="btn btn-outline-primary foward_msg" data-mid="${foward_to_btn.getAttribute(
                              "data-mid"
                            )}" data-reciever-id="${
              res.uid
            }" data-reciever-username="${res.username}">forward</button>
                        </div>
                    </div>
                `;
                        forward_q.innerHTML += temp;
                    });
                }
            },
        });
    });

    const getChats = () => {
        let chats = document.querySelector(".chats");
        if (chats.classList.contains("active")) {
            // console.log("active");
        }
    };
    const fowardMsg = (mid, reciever_id, reciever_username, target) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                fowardMsg: 1,
                mid: mid,
                reciever_id: reciever_id,
                reciever_username: reciever_username,
            },
            success: (data) => {
                if (data.response == true) {
                    target.classList.add("d-none");
                }
            },
        });
    };

    const updateLeftValue = (reciever_id) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                updateLeftChatValue: 1,
                reciever_id: reciever_id,
            },
            success: (data) => {
                let status = document.querySelector(".status");
                status.querySelector("img").src = "media/dp/" + data.avatar;
                status.querySelector("h3").innerHTML = data.name || data.username;
                status.querySelector("h5").innerHTML = data.bio || "no bio yet!";
                status.querySelector("a").setAttribute("href", "@" + data.username);
                let chat_is_active = document.querySelector(".chat_is_active");
                if (data.is_active.status == "Offline") {
                    chat_is_active.innerHTML = "Offline";
                } else if (data.is_active.status == "offline") {
                    if (data.is_active.last_seen == 'now') {
                        chat_is_active.innerHTML = "Online";
                    } else {
                        chat_is_active.innerHTML = "Last seen " + data.is_active.last_seen;
                    }
                } else if (data.is_active.status == "online") {
                    chat_is_active.innerHTML = "online";
                }
                if (data.check_fav == "added") {
                    status
                        .querySelector(".add_user_to_fav")
                        .setAttribute("data-username", data.username);
                    status
                        .querySelector(".add_user_to_fav")
                        .setAttribute("data-uid", data.uid);
                    status.querySelector(
                        ".add_user_to_fav"
                    ).innerHTML = `<ion-icon name="heart-dislike-outline"></ion-icon> Remove from favourite`;
                } else if (data.check_fav == "not added") {
                    status
                        .querySelector(".add_user_to_fav")
                        .setAttribute("data-username", data.username);
                    status
                        .querySelector(".add_user_to_fav")
                        .setAttribute("data-uid", data.uid);
                    status.querySelector(
                        ".add_user_to_fav"
                    ).innerHTML = `<i class="fa fa-heart"></i> Add to favourite`;
                }
            },
        });
    };
    const updateChatBox = (data) => {
        let line_holder = document.querySelectorAll(".line_holder");
        if (line_holder.length !== data.length) {
            var chats_cont = document.querySelector(".chats_cont");
            if (data.num == "empty") {
                // chats_cont.innerHTML = `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">No Conversation Yet!</h3>`;
            } else {
                data.forEach((res) => {
                    let st;
                    if (res.reciever_view_status == "yes") {
                        st = "seen";
                    } else {
                        st = '';
                    }
                    let text = res.main_msg;
                    let word = wordCheck(text);
                    if (res.msg_type == "normal") {
                        var temp = `
                            <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                <small class="m-1">${res.time}</small>
                                <div class="main_bx_chat chat_mobile_bx ${st} chat_bx_${res.mid}" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}">${word}</div>
                            </div>
                        `;

                        chats_cont.innerHTML += temp;
                    } else if (res.msg_type == "gif") {
                        var temp = `
                            <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                <small class="m-1">${res.time}</small>
                                <img src="${res.main_msg}" class="chat_gif chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}">
                            </div>
                        `;

                        chats_cont.innerHTML += temp;
                    } else if (res.msg_type == "shared_images") {
                        let img_arr = [];
                        res.img_files.forEach(imgs => {
                            if (imgs.type == "image") {
                                img_arr.push(`<img src="media/chat_media/images/${imgs.name}" alt="" class=" classic_img_prev">`);
                            } else if (imgs.type == "video") {
                                img_arr.push(`<div class="video_wrapper">
                                            <i class="fa fa-play peffet_vid_thumb"></i>
                                            <video src="media/chat_media/images/${imgs.name}" preload="buffer" class="video_viewer_btn">
                                            </video>
                                        </div>`);
                            }
                        });
                        var temp = `
                        <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                            <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                            <small class="m-1">${res.time}</small>
                            <div class="main_bx_chat ${st} images">
                              <div class="sent_img">
                                ${img_arr.join("")}
                              </div>
                              <div style="max-width: 100%" class="main_bx_chat ${st} chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}">${word}</div>
                            </div>
                        </div>
                    `;

                        chats_cont.innerHTML += temp;
                    } else if (res.msg_type == "post_attachment") {
                        let post_detect = res.main_msg.slice(0, 3);
                        let iframe_height;
                        if (post_detect == "reg") {
                            iframe_height = "regular";
                        } else if (post_detect == "por") {
                            iframe_height = "portrait";
                        } else if (post_detect == "typ") {
                            iframe_height = "typing_text";
                        } else if (post_detect == "cla") {
                            iframe_height = "classic_write_up";
                        } else if (post_detect == "ref") {
                            iframe_height = "reference";
                        } else {
                            iframe_height = "write_up_regular";
                        }
                        var temp = `
                            <div class="line_holder ${st} ${res.vt} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                <small class="m-1">${res.time}</small>
                                <div class="iframe_bx"  data-location="${res.main_msg}">
                                    <div class="cover_bx chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}"></div>
                                    <iframe src="detailedview?post_id=${res.main_msg}" frameborder="0" class="${iframe_height}">
                                </div>
                            </div>
                        `;

                        chats_cont.innerHTML += temp;
                        addListenerToIframe();
                        lineholderS()
                    }
                    setTimeout(() => {
                        msg_bx.scroll(0, 100000000);
                    }, 500);
                });
            }
        }
    };
    const sendMsg = (msg, reciever_id, reciever_username) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                sendNewChat: 1,
                reciever_id: reciever_id,
                reciever_username: reciever_username,
                msg: msg,
            },
            success: (data) => {
                if (data.return == false) {
                    // $("#chat_msg_input").val("")
                } else {
                    $("#chat_msg_input").val("");
                }
            },
        });
    };
    const sendGif = (gif_url, reciever_id, reciever_username) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                sendNewGifChat: 1,
                reciever_id: reciever_id,
                reciever_username: reciever_username,
                gif_url: gif_url,
            },
            success: (data) => {
                if (data.return == false) {
                    // $("#chat_msg_input").val("")
                } else {
                    $("#chat_msg_input").val("");
                }
            },
        });
    };
    const openChatBox = (reciever_id, reciever_username, avatar) => {
        let chats = document.querySelector(".chats");
        let reciever_avatar = document.querySelector(".reciever_avatar");
        reciever_avatar.src = `media/dp/${avatar}`;
        let reciever_uname = document.querySelector(".reciever_uname");
        reciever_uname.innerHTML = reciever_username;
        chats.classList.toggle("active");
        chats.setAttribute("data-reciever-id", reciever_id);
        chats.setAttribute("data-reciever-username", reciever_username);
        getAllUsersChats(reciever_id, reciever_username);
    };
    const getAllUsersChats = (reciever_id, reciever_username) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                getAllUsersChats: 1,
                reciever_id: reciever_id,
                reciever_username: reciever_username,
            },
            success: (data) => {
                var chats_cont = document.querySelector(".chats_cont");
                chats_cont.innerHTML = "";
                if (data.num == "empty") {
                    chats_cont.innerHTML = `<small class="text-center mt-4" style="color: royalblue; font-family: Arial;">No Conversation Yet!</small>`;
                } else {
                    let arr_b = [];
                    chats_cont.innerHTML = '';
                    data.forEach((res) => {
                        let text = res.main_msg;
                        let word = wordCheck(text);
                        if (res.vt == "reciever" && res.deleted_for_reciever == "yes") {
                            var hi = "d-none";
                        } else if (res.vt == "sender" && res.deleted_for_sender == "yes") {
                            var hi = "d-none";
                        } else {
                            var hi = "";
                        }

                        let st;
                        if (res.reciever_view_status == "yes") {
                            st = "seen";
                        } else {
                            st = '';
                        }
                        if (res.msg_type == "normal") {
                            var temp = `
                                <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid} ${hi}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                    <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                    <small class="m-1">${res.time}</small>
                                    <div class="main_bx_chat chat_mobile_bx  ${st} chat_bx_${res.mid}" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}">${word}</div>
                                </div>
                            `;
                            arr_b.push(temp);
                        } else if (res.msg_type == "gif") {
                            var temp = `
                                <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                    <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                    <small class="m-1">${res.time}</small>
                                    <img src="${res.main_msg}" class="chat_gif chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}">
                                </div>
                            `;
                            arr_b.push(temp);
                        } else if (res.msg_type == "shared_images") {
                            let img_arr = [];
                            res.img_files.forEach(imgs => {
                                if (imgs.type == "image") {
                                    img_arr.push(`<img src="media/chat_media/images/${imgs.name}" alt="" class=" classic_img_prev">`);
                                } else if (imgs.type == "video") {
                                    img_arr.push(`<div class="video_wrapper">
                                  <i class="fa fa-play peffet_vid_thumb"></i>
                                  <video src="media/chat_media/images/${imgs.name}" preload="buffer" class="video_viewer_btn">
                                  </video>
                              </div>`);
                                }
                            });
                            var temp = `
                            <div class="line_holder ${res.vt} ${st} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                <small class="m-1">${res.time}</small>
                                <div class="main_bx_chat ${st} images">
                                    <div class="sent_img">
                                    ${img_arr.join("")}
                                    </div>
                                    <div style="max-width: 100%" class="main_bx_chat  ${st} chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}">${word}</div>
                                </div>
                            </div>
                        `;
                            arr_b.push(temp);
                        } else if (res.msg_type == "post_attachment") {
                            let post_detect = res.main_msg.slice(0, 3);
                            let iframe_height;
                            if (post_detect == "reg") {
                                iframe_height = "regular";
                            } else if (post_detect == "por") {
                                iframe_height = "portrait";
                            } else if (post_detect == "typ") {
                                iframe_height = "typing_text";
                            } else if (post_detect == "cla") {
                                iframe_height = "classic_write_up";
                            } else if (post_detect == "ref") {
                                iframe_height = "reference";
                            } else {
                                iframe_height = "write_up_regular";
                            }
                            var temp = `
                                <div class="line_holder ${st} ${res.vt} deleting_id_${res.mid}" data-mid="${res.mid}" data-reciever-id="${res.reciever_id}">
                                    <i class="fa fa-ellipsis-h msg_act m-3" data-mid="${res.mid}" data-chat-content="chat_bx_${res.mid}"></i>
                                    <small class="m-1">${res.time}</small>
                                    <div class="iframe_bx"  data-location="${res.main_msg}">
                                        <div class="cover_bx chat_mobile_bx chat_bx_${res.mid}" data-mid="${res.mid}"></div>
                                        <iframe src="detailedview?post_id=${res.main_msg}" frameborder="0" class="${iframe_height}">
                                    </div>
                                </div>
                            `;

                            chats_cont.innerHTML += temp;
                            addListenerToIframe();
                            lineholderS()
                        }
                    });
                    chats_cont.innerHTML = arr_b.join("");
                    setTimeout(() => {
                        msg_bx.scroll(0, 100000000);
                    }, 500);
                }
            },
        });
    };
    const addListenerToIframe = () => {
        let iframes = document.querySelectorAll(".iframe_bx");
        iframes.forEach(iframe => {
            iframe.addEventListener("click", () => {
                document.querySelector(".peffet_trans_two").classList.add("is_active");
                setTimeout(() => {
                    window.location.href = "post_view?post_id=" + iframe.getAttribute("data-location");
                }, 500);
            });
        });
    }
    const getAllChatList = () => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                getAllChatList: 1,
            },
            success: (data) => {
                let all_chats_area = document.querySelector(".all_chats_area");
                all_chats_area.innerHTML = "";
                if (data.num == "empty") {
                    let ms_bx = document.querySelector(".ms_bx");
                    document.querySelector(".recent_chats").classList.add("d-none");
                    document.querySelector(".fav_chats").classList.add("d-none");
                    document.querySelector(".all_chats").classList.add("d-none");
                    ms_bx.innerHTML += `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">No Conversation Yet!</h3>`;
                    let chats = document.querySelector(".chats");
                    let status = document.querySelector(".status");
                } else {
                    let chats = document.querySelector(".chats");
                    let status = document.querySelector(".status");
                    chats.classList.remove("d-none");
                    status.classList.remove("d-none");
                    data.forEach((res) => {
                        let id = RadomString(14);
                        let temp = `
                    <div class="d-flex justify-content-between align-items-center each_chat clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                        <div class="d-flex justify-content-between align-items-center left_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            <img src="media/dp/${res.avatar}" alt="" class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}"  data-reciever-avatar="${res.avatar}">
                            <div class="text mx-1 clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                                <strong class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">${res.username}</strong>
                                <div class="clickable_chat_bx d-flex justify-content-between align-items-center" style="width:50%" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}"><small class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">message</small></div>
                            </div>
                        </div>
                        <div class="right_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            <div class="num chat_unread_number unread_sel_${id}" data-unread-sel="${id}" data-reciever-username="${res.username}"></div>
                        </div>
                    </div>
                `;
                        all_chats_area.innerHTML += temp;
                    });
                }
            },
        });
    };
    const unsend_msg = (mid) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                unsend_msg: 1,
                mid: mid,
            },
            success: (res) => {
                if (res.response == true) {
                    document.querySelector(".msg_act_cont_bx").classList.remove("active");
                    document.querySelector(`.deleting_id_${mid}`).innerHTML = "";
                }
            },
        });
    };
    let deleted_msg_for_me = document.querySelector(".deleted_msg_for_me");
    deleted_msg_for_me.addEventListener("click", (e) => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                unsend_for_me: 1,
                mid: e.target.getAttribute("data-mid"),
                reciever_id: e.target.getAttribute("data-reciever-id"),
                sender_id: e.target.getAttribute("data-sender-id"),
            },
            success: (res) => {
                if (res.response == true) {
                    document.querySelector(".msg_act_cont_bx").classList.remove("active");
                    document.querySelector(
                        `.deleting_id_${e.target.getAttribute("data-mid")}`
                    ).innerHTML = "";
                }
            },
        });
    });

    const getAllRecentChat = (data) => {
        let recent_chats_bx = document.querySelector(".recent_chats_bx");
        // console.log(recent_chats_bx);
        recent_chats_bx.innerHTML = "";
        // console.log("recent", data)
        if (data.num == "empty") {
            let recent_chats_bx = document.querySelector(".recent_chats_bx");
            // recent_chats_bx.innerHTML = `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">No Conversation Yet!</h3>`;
            let chats = document.querySelector(".chats");
            let status = document.querySelector(".status");
            // chats.classList.add("d-none");
            // status.classList.add("d-none");
        } else {
            let chats = document.querySelector(".chats");
            let status = document.querySelector(".status");
            chats.classList.remove("d-none");
            status.classList.remove("d-none");
            data.forEach((res) => {
                let t;
                if (res.number_of_unread !== 0) {
                    t = `<div class="num">${res.number_of_unread}</div>`;
                } else {
                    t = `<div class="num d-none">${res.number_of_unread}</div>`;
                }
                let temp = `
                    <div class="d-flex justify-content-between align-items-center each_chat clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                        <div class="d-flex justify-content-between align-items-center left_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            <img src="media/dp/${res.avatar}" alt="" class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}"  data-reciever-avatar="${res.avatar}">
                            <div class="text mx-1 clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                                <strong class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">${res.username}</strong>
                                <div class="clickable_chat_bx d-flex justify-content-between align-items-center" style="width:50%" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}"><small class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">message</small></div>
                            </div>
                        </div>
                        <div class="right_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                            ${t}
                        </div>
                    </div>
                `;
                recent_chats_bx.innerHTML += temp;
            });
        }
    }

    const updateUnreadChatNumber = (res) => {

        res.forEach(data => {
            let num = document.querySelector(".unread_sel_" + data.sel_id);
            if (data.total !== 0) {
                num.classList.remove("d-none");
                num.innerHTML = data.total;
            } else {
                num.classList.add("d-none");
            }
        });
    };
    document.addEventListener("contextmenu", (evt) => {
        if (evt.target.classList.contains("chat_mobile_bx")) {
            let msg_act_cont_bx = document.querySelector(".msg_act_cont_bx");
            let elip = evt.target.getAttribute("data-chat-content");
            let copy_btn = document.querySelector(".copy_btn");
            copy_btn.setAttribute(
                "data-to-copy",
                document.querySelector("." + elip).textContent
            );
            $.ajax({
                url: "qs",
                dataType: "JSON",
                method: "POST",
                data: {
                    check_msg_type: 1,
                    mid: evt.target.getAttribute("data-mid"),
                    reciever_id: evt.target.getAttribute("data-reciever-id"),
                },
                success: (data) => {
                    if (data.temp == "no") {
                        let time_area = document.querySelector(".time_area");
                        time_area.innerHTML = data.time;
                        let bx = document.querySelector(".bx_new_aea");
                        bx.innerHTML = "";
                        let foward_to_btn = document.querySelector(".foward_to_btn");
                        foward_to_btn.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        let deleted_msg_for_me = document.querySelector(
                            ".deleted_msg_for_me"
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-reciever-id",
                            data.reciever_id
                        );
                        deleted_msg_for_me.setAttribute("data-sender-id", data.sender_id);
                    } else if (data.temp == "yes") {
                        let bx = document.querySelector(".bx_new_aea");
                        bx.innerHTML = `<button style="margin: 0 auto;" class="unsend_msg" data-mid="${data.mid}"><i class="fa fa-trash unsend_msg" data-mid="${data.mid}"></i> Unsend</button>`;
                        let time_area = document.querySelector(".time_area");
                        time_area.innerHTML = data.time;
                        let foward_to_btn = document.querySelector(".foward_to_btn");
                        foward_to_btn.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        let deleted_msg_for_me = document.querySelector(
                            ".deleted_msg_for_me"
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-mid",
                            evt.target.getAttribute("data-mid")
                        );
                        deleted_msg_for_me.setAttribute(
                            "data-reciever-id",
                            data.reciever_id
                        );
                        deleted_msg_for_me.setAttribute("data-sender-id", data.sender_id);
                    }
                },
            });
            msg_act_cont_bx.classList.toggle("active");
        }
    });
    var add_user_to_fav = document.querySelector(".add_user_to_fav");
    add_user_to_fav.addEventListener("click", () => {
        let username = add_user_to_fav.getAttribute("data-username");
        let uid = add_user_to_fav.getAttribute("data-uid");
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                add_to_fav: 1,
                username: username,
                uid: uid,
            },
            success: (data) => {
                if (data == "added") {
                    add_user_to_fav.innerHTML = `<ion-icon name="heart-dislike-outline"></ion-icon> Remove from favourite`;
                } else if (data == "deleted") {
                    add_user_to_fav.innerHTML = `<i class="fa fa-heart"></i> Add to favourite`;
                }
            },
        });
    });
    const getAllFavChatList = () => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                getAllFavChatList: 1,
            },
            success: (data) => {
                // console.log(data);
                let all_chats_area = document.querySelector(".fav_chats");
                // all_chats_area.innerHTML = "";
                if (data.num == "empty") {
                    let ms_bx = document.querySelector(".ms_bx");
                    document.querySelector(".recent_chats").classList.add("d-none");
                    document.querySelector(".fav_chats").classList.add("d-none");
                    document.querySelector(".all_chats").classList.add("d-none");
                    ms_bx.innerHTML += `<h3 class="text-center mt-4" style="color: royalblue; font-family: Arial;">No Conversation Yet!</h3>`;
                    let chats = document.querySelector(".chats");
                    let status = document.querySelector(".status");
                } else {
                    let chats = document.querySelector(".chats");
                    let status = document.querySelector(".status");
                    let fav_chats = document.querySelector(".fav_chats");
                    chats.classList.remove("d-none");
                    status.classList.remove("d-none");
                    fav_chats.classList.remove("d-none");
                    data.forEach((res) => {
                        let id = RadomString(16);
                        let temp = `
                  <div class="d-flex justify-content-between align-items-center each_chat clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                      <div class="d-flex justify-content-between align-items-center left_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                          <img src="media/dp/${res.avatar}" alt="" class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}"  data-reciever-avatar="${res.avatar}">
                          <div class="text mx-1 clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                              <strong class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">${res.username}</strong>
                              <div class="clickable_chat_bx d-flex justify-content-between align-items-center" style="width:50%" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}"><small class="clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">message</small></div>
                          </div>
                      </div>
                      <div class="right_side clickable_chat_bx" data-reciever-id="${res.uid}" data-reciever-username="${res.username}" data-reciever-avatar="${res.avatar}">
                          <div class="num chat_unread_number unread_sel_${id}" data-unread-sel="${id}" data-reciever-username="${res.username}"></div>
                      </div>
                  </div>
              `;
                        all_chats_area.innerHTML += temp;
                    });
                }
            },
        });
    };
    var send_btn_chat = document.querySelector(".send_btn_chat");
    send_btn_chat.addEventListener("click", () => {
        let chats = document.querySelector(".chats");
        sendMsg(
            $("#chat_msg_input").val(),
            chats.getAttribute("data-reciever-id"),
            chats.getAttribute("data-reciever-username")
        );
        document.querySelector(".send_opt").classList.add("active");
        document.querySelector(".send_btn_chat").classList.remove("active");
    });
    $("#chat_msg_input").on("keydown", () => {
        let chat_msg_input = document.getElementById("chat_msg_input").value;
        if (chat_msg_input.length >= 2) {
            document.querySelector(".send_opt").classList.remove("active");
            document.querySelector(".send_btn_chat").classList.add("active");
        } else {
            document.querySelector(".send_opt").classList.add("active");
            document.querySelector(".send_btn_chat").classList.remove("active");
        }
    });
    // url Async requesting function
    function httpGetAsync(theUrl, callback) {
        // create the request object
        var xmlHttp = new XMLHttpRequest();

        // set the state change callback to capture when the response comes in
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(xmlHttp.responseText);
            }
        };

        // open as a GET call, pass in the url and set async = True
        xmlHttp.open("GET", theUrl, true);

        // call send with no params as they were passed in on the url string
        xmlHttp.send(null);

        return;
    }

    // callback for trending top 10 GIFs
    function tenorCallback_trending(responsetext) {
        // parse the json response
        var response_objects = JSON.parse(responsetext);
        top_10_gifs = response_objects["results"];

        let gifs = document.querySelector(".gifs");
        gifs.innerHTML = '';
        let arr = [];
        response_objects.results.forEach((gifs_each) => {
            let imgs = `<img src="${gifs_each["media"][0]["nanogif"]["url"]}" class="gif_each_img">`;
            arr.push(imgs);
        });
        gifs.innerHTML = arr.join("");
        return;
    }

    function grab_data() {
        // set the apikey and limit
        var apikey = "LIVDSRZULELA";
        var lmt = 21;
        var locale = getNavigatorLanguage();
        var trending_url =
            "https://g.tenor.com/v1/trending?key=" + apikey + "&limit=" + lmt + "&locale=" + locale;
        httpGetAsync(trending_url, tenorCallback_trending);
        return;
    }

    var gif_bx = document.querySelector(".gif_bx");
    gif_bx.addEventListener("click", () => {
        grab_data();
        document.querySelector(".tenor_bg_bx").classList.add("active");
    });

    // url Async requesting function
    function search_httpGetAsync(theUrl, callback) {
        // create the request object
        var xmlHttp = new XMLHttpRequest();

        // set the state change callback to capture when the response comes in
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(xmlHttp.responseText);
            }
        }

        // open as a GET call, pass in the url and set async = True
        xmlHttp.open("GET", theUrl, true);

        // call send with no params as they were passed in on the url string
        xmlHttp.send(null);

        return;
    }

    // callback for the top 8 GIFs of search
    function search_tenorCallback_search(responsetext) {
        // Parse the JSON response
        var response_objects = JSON.parse(responsetext);
        top_10_gifs = response_objects["results"];

        let gifs = document.querySelector(".gifs");
        gifs.innerHTML = '';
        let arr = [];
        response_objects.results.forEach((gifs_each) => {
            let imgs = `<img src="${gifs_each["media_formats"]["gif"]["url"]}" class="gif_each_img">`;
            arr.push(imgs);
        });
        gifs.innerHTML = arr.join("");

        return;

    }


    // function to call the trending and category endpoints
    function search_grab_data() {
        // set the apikey and limit
        var apikey = "AIzaSyBgUVRDojOZmJIJ2GQoJEZZ2fyHD1sHwEU";
        var clientkey = "my_test_app";
        var lmt = 21;

        // test search term
        var search_term = getSearchTerm();

        // using default locale of en_US
        var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" +
            apikey + "&client_key=" + clientkey + "&limit=" + lmt;

        search_httpGetAsync(search_url, search_tenorCallback_search);

        // data will be loaded by each call's callback
        return;
    }


    // SUPPORT FUNCTIONS ABOVE
    // MAIN BELOW
    function getSearchTerm() {

        let tenor_search = document.getElementById("tenor_search").value;
        return tenor_search;
    }
    // start the flow

    var search_tenor = document.querySelector("#search_tenor");
    search_tenor.addEventListener("click", () => {

        search_grab_data();
    });

    var shareImage = document.querySelector("#shareImage");
    var share_image = document.querySelector(".share_image");
    share_image.addEventListener("click", () => {
        document.querySelector(".share_pics").classList.add("active");
        let img_input = document.getElementById("shareImage");
        img_input.accept = "image/*";
        img_input.multiple = true;
        img_input.click();
    });
    if (shareImage) {
        shareImage.addEventListener("change", sharePrev);
    }
    var shareVideo = document.querySelector("#shareVideo");
    var share_vid_btn = document.querySelector(".share_vid_btn");
    share_vid_btn.addEventListener("click", () => {
        document.querySelector(".share_vid").classList.add("active");
        let img_input = document.getElementById("shareVideo");
        img_input.accept = "video/*";
        img_input.click();
    });
    if (shareVideo) {
        shareVideo.addEventListener("change", shareVidPrev);
    }

    function sharePrev() {

        var total_files = document.getElementById("shareImage").files.length;
        var prev = document.querySelector(".imgs_");
        prev.innerHTML = "";
        for (let i = 0; i < total_files; i++) {

            var media = event.target.files[i]
            var m = event.target.files[i].name
            var ext = m.substring(m.lastIndexOf('.') + 1)
            if (ext == 'jpg' || ext == 'png' || ext == 'jpeg' || ext == 'gif') {
                prev.innerHTML += `
                <img src='${URL.createObjectURL(media)}'>
            `
            } else if (ext == 'mp4' || ext == 'ogg' || ext == 'MOV' || ext == 'avi') {
                // var vid = document.createElement("video")
                // vid.src = URL.createObjectURL(media);
                // vid.controls = "true";
                // prev.append(vid)
                prev.innerHTML += `
                
            <iframe src="player.php?src=${URL.createObjectURL(media)}}" frameborder="0"></iframe>
            
                `
            } else if (ext == 'mp4a' || ext == 'wav' || ext == 'flac' || ext == 'mp3') {
                // var audio = document.createElement("audio")
                // audio.src = URL.createObjectURL(media);
                // audio.controls = "true";
                // prev.append(audio)

            }

        }
    }

    function shareVidPrev() {

        var total_files = document.getElementById("shareVideo").files.length;
        var prev = document.querySelectorAll(".imgs_")[1];
        prev.innerHTML = "";
        for (let i = 0; i < total_files; i++) {

            var media = event.target.files[i]
            var m = event.target.files[i].name
            var ext = m.substring(m.lastIndexOf('.') + 1)
            if (ext == 'jpg' || ext == 'png' || ext == 'jpeg' || ext == 'gif') {
                prev.innerHTML += `
              <img src='${URL.createObjectURL(media)}'>
          `
            } else if (ext == 'mp4' || ext == 'ogg' || ext == 'MOV' || ext == 'avi') {
                // var vid = document.createElement("video")
                // vid.src = URL.createObjectURL(media);
                // vid.controls = "true";
                // prev.append(vid)
                prev.innerHTML += `
              
          <iframe src="player.php?src=${URL.createObjectURL(media)}" frameborder="0"></iframe>
          
              `
            } else if (ext == 'mp4a' || ext == 'wav' || ext == 'flac' || ext == 'mp3') {
                // var audio = document.createElement("audio")
                // audio.src = URL.createObjectURL(media);
                // audio.controls = "true";
                // prev.append(audio)

            }

        }
    }

    function share_pics() {
        let sned = document.querySelector("#sned");
        let send_arr = document.querySelector(".send-arr");
        $("#share_pics").submit(evt => {
            evt.preventDefault();
            $("#share_pics").ajaxSubmit({
                dataType: "JSON",
                beforeSubmit: () => {
                    send_arr.classList.add("active");
                    setTimeout(() => {
                        send_arr.innerHTML = '';
                    }, 500);
                },
                uploadProgress: (event, position, total, percentageComplete) => {
                    // $(".progress-bar").animate({
                    //     width: percentageComplete + "%"
                    // }, {
                    //     duration: 1000
                    // });
                    sned.innerHTML = percentageComplete + "%";
                },
                contentType: false,
                procesData: false,
                success: (data) => {
                    // console.log(data)
                    switch (data) {
                        case "invalid file format":
                            $("#sned").html("only .jpg, .jpeg, .png are allowed");
                            break;
                        case "file error":
                            $("#sned").html("Image error");
                            break;
                        case "successful":
                            $("#sned").html("Successful");
                            document.getElementById("close_share").click();
                            break;

                        default:
                            break;
                    }
                }
            })
        })
    }

    function share_vid() {
        let send_vid = document.querySelector("#send_vid");
        let send_arr = document.querySelectorAll(".send-arr")[1];
        $("#share_vid").submit(evt => {
            evt.preventDefault();
            $("#share_vid").ajaxSubmit({
                dataType: "JSON",
                beforeSubmit: () => {
                    send_arr.classList.add("active");
                    setTimeout(() => {
                        send_arr.innerHTML = '';
                    }, 500);
                },
                uploadProgress: (event, position, total, percentageComplete) => {
                    // $(".progress-bar").animate({
                    //     width: percentageComplete + "%"
                    // }, {
                    //     duration: 1000
                    // });
                    send_vid.innerHTML = percentageComplete + "%";
                },
                contentType: false,
                procesData: false,
                success: (data) => {
                    // console.log(data)
                    switch (data) {
                        case "invalid file format":
                            $("#send_vid").html("only .mp4, .avi, .mov are allowed");
                            break;
                        case "file error":
                            $("#send_vid").html("Video error");
                            break;
                        case "successful":
                            $("#send_vid").html("Successful");
                            document.getElementById("close_vid_share").click();
                            break;

                        default:
                            break;
                    }
                }
            })
        })
    }
    share_vid();
    share_pics();
    // const toastTrigger = document.getElementById('sned')
    // const toastLiveExample = document.getElementById('liveToast')
    // if (toastTrigger) {
    //   toastTrigger.addEventListener('click', () => {
    //     const toast = new bootstrap.Toast(toastLiveExample)

    //     toast.show()
    //   })
    // }
    setInterval(() => {
        // updateUnreadChatNumber();
        all_query();
    }, 10000);
    document.addEventListener("click", () => {
        all_query();
    });
    document.addEventListener("scroll", () => {
        all_query();
    });

    document.addEventListener("dbclick", () => {
        all_query();
    });
    document.addEventListener("touchmove", () => {
        all_query();
    });
    document.addEventListener("touchend", () => {
        all_query();
    });
    document.addEventListener("touchmove", () => {
        all_query();
    });
    const all_query = () => {
        let chats = document.querySelector(".chats");
        let mid_array = [];
        if (chats.classList.contains("active")) {
            let line_holders = document.querySelectorAll(".line_holder");
            line_holders.forEach((line_holder) => {
                mid_array.push(line_holder.getAttribute("data-mid"));
            });
        } else {
            mid_array = [''];
        }
        let chat_unread_number = document.querySelectorAll(".chat_unread_number");
        let un_arr = [];
        chat_unread_number.forEach((num) => {
            let sel_id = num.getAttribute("data-unread-sel");
            let reciever_username = num.getAttribute("data-reciever-username");
            un_arr.push({
                'reciever_username': reciever_username,
                'sel_id': sel_id
            });
        });
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                all_query: 1,
                getAllRecentChatQuery: 1,
                updateUnreadChatNumberQuery: un_arr,
            },
            success: (data) => {
                data.forEach(res => {
                    if (res.getAllRecentChatQuery) {
                        // console.log(res.getAllRecentChatQuery);
                        getAllRecentChat(res.getAllRecentChatQuery);
                    } else if (res.updateCurrentChatBoxQuery) {
                        updateChatBox(res.updateCurrentChatBoxQuery);
                    } else if (res.updateUnreadChatNumberQuery) {
                        updateUnreadChatNumber(res.updateUnreadChatNumberQuery);
                    }
                });
            }
        });
    }
    setInterval(() => {
        chat_bx_query();
    }, 500);
    const chat_bx_query = () => {
        let chats = document.querySelector(".chats");
        let mid_array = [];
        if (chats.classList.contains("active")) {
            let line_holders = document.querySelectorAll(".line_holder");
            line_holders.forEach((line_holder) => {
                mid_array.push(line_holder.getAttribute("data-mid"));
            });
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    all_query: 1,
                    updateCurrentChatBoxQuery: { 'existing_msg_id': mid_array, 'reciever_id': chats.getAttribute("data-reciever-id") },
                    setAsRead: 1
                },
                success: (data) => {
                    data.forEach(res => {
                        if (res.updateCurrentChatBoxQuery) {
                            updateChatBox(res.updateCurrentChatBoxQuery);
                        }
                    });
                }
            });
        } else {
            mid_array = [''];
        }
    }
    getAllChatList();
    getAllFavChatList();
    var bx_left = document.querySelector(".bx_left");
    var bx_right = document.querySelector(".bx_right");
    var imgs_ = document.querySelector(".imgs_");
    bx_left.addEventListener("click", () => {
        imgs_.scrollLeft -= 600;
    });
    bx_right.addEventListener("click", () => {
        imgs_.scrollLeft += 600;
    });
    setTimeout(() => {
        document.getElementById("xchat_bx").click();
    }, 500);
    var sender_area_x = document.querySelector(".sender_area_x");
    sender_area_x.addEventListener("touches", (e) => {
        console.log(e)
    });
    setInterval(() => {
        lineholderS();
    }, 500);

    function lineholderS() {
        // /
    }
    document.addEventListener("dblclick", evt => {
        if (evt.target.classList.contains("main_bx_chat")) {
            console.log(evt.target.getAttribute("data-mid"));
            console.log(evt.target.textContent);
            let reply_area = document.querySelector(".reply_area"),
                add_contents = document.querySelector(".add_contents"),
                sender_area_x = document.querySelector(".chats_footer"),
                reply_msg = document.querySelector(".reply_msg");

            reply_msg.setAttribute("data-mid", evt.target.getAttribute("data-mid"));
            reply_msg.innerHTML = evt.target.textContent;
            add_contents.classList.remove("active");
            sender_area_x.classList.add("active");
            reply_area.classList.add("active");
        }
    });
});
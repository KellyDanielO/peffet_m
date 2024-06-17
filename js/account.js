var write_up = document.querySelector("#write_up");
var portrait = document.querySelector("#portrait");
var timeline = document.querySelector("#timeline");
var reference = document.querySelector("#reference");
var regular = document.querySelector("#regular");
var saved = document.querySelector("#saved");
var event = document.querySelector("#event");
if (timeline) {
    timeline.addEventListener("click", () => {

        getUserPosts();
    });
    document.getElementById('timeline').click();
}
if (write_up) {
    write_up.addEventListener("click", () => {

        getWriteUpUser();
    });
}
if (reference) {
    reference.addEventListener("click", () => {

        getUserRefPost();
    });
}
if (portrait) {
    portrait.addEventListener("click", () => {

        getPortPost();
    });
}
if (regular) {
    regular.addEventListener("click", () => {

        getRegPost();
    });
}
if (saved) {
    saved.addEventListener("click", () => {

        getSavedPost();
    });
}
if (event) {
    event.addEventListener("click", () => {

        getEventPost();
    });
}
var nav_btns = document.querySelectorAll(".nav_btn");
nav_btns.forEach(nav_btn => {

    nav_btn.addEventListener("click", e => {
        nav_btns.forEach(k => {
            k.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})
var reference_two = document.getElementById("reference");
document.onclick = evt => {
    if (evt.target.classList.contains("getUserFollowers")) {
        openFollowerFollowing(evt.target.getAttribute("data-owner-uname"), "follower");
    } else if (evt.target.classList.contains("getUserFollowing")) {
        openFollowerFollowing(evt.target.getAttribute("data-owner-uname"), "following");
    } else if (evt.target.classList.contains("get_notif_of_user")) {
        document.querySelector("body").classList.toggle("active");
        document.querySelector(".notify_box_user").classList.toggle("active");
    } else if (evt.target.classList.contains("m_b")) {
        document.querySelector("body").classList.toggle("active");
        document.querySelector(".notify_box_user").classList.toggle("active");
    } else if (evt.target.classList.contains("following_follower_bx_cont")) {
        document.querySelector("body").classList.toggle("active");
        document.querySelector(".following_follower_bx").classList.toggle("active");
    } else if (evt.target.classList.contains("utl_fanf_action_btn")) {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                userConnectionSys: 1,
                reciever: evt.target.getAttribute("data-username")
            },
            beforeSend: () => {
                evt.target.innerHTML = 'loading..';

            },
            success: (data) => {
                evt.target.innerHTML = data.return;
            }
        });
    } else if (evt.target.classList.contains("send_msg_acc")) {
        document.querySelector("body").classList.toggle("active");
        document.querySelector(".utl_send_msg").classList.toggle("active");

    } else if (evt.target.classList.contains("utl_send_msg_bx")) {
        document.querySelector("body").classList.toggle("active");
        document.querySelector(".utl_send_msg").classList.toggle("active");
    }
}
var ref_check = document.querySelector("input[id=ref_check]");
ref_check.addEventListener("change", () => {
    updateFollowingPermit("reference", ref_check.checked, document.querySelector("#username_body").getAttribute("data-username"));
})
var wri_check = document.querySelector("input[id=wri_check]");
wri_check.addEventListener("change", () => {
    updateFollowingPermit("write_up", wri_check.checked, document.querySelector("#username_body").getAttribute("data-username"));
})
var port_check = document.querySelector("input[id=port_check]");
port_check.addEventListener("change", () => {
    updateFollowingPermit("portrait", port_check.checked, document.querySelector("#username_body").getAttribute("data-username"));
})
var reg_check = document.querySelector("input[id=reg_check]");
reg_check.addEventListener("change", () => {
    updateFollowingPermit("regular", reg_check.checked, document.querySelector("#username_body").getAttribute("data-username"));
})
var event_check = document.querySelector("input[id=event_check]");
event_check.addEventListener("change", () => {
    updateFollowingPermit("peffet_event", event_check.checked, document.querySelector("#username_body").getAttribute("data-username"));
})
var tab_buttons = document.querySelectorAll(".tab_button");
tab_buttons.forEach(tab_button => {
    tab_button.addEventListener("click", () => {
        tab_buttons.forEach(tb => {
            tb.classList.remove("active")
        });
        tab_button.classList.add("active");
    });
});
var utl_follower_btn = document.querySelector("#utl_follower_btn");
var utl_following_btn = document.querySelector("#utl_following_btn");
utl_follower_btn.addEventListener("click", () => {
    fillFollowerFollowing(utl_follower_btn.getAttribute("data-username"), "follower");
});
utl_following_btn.addEventListener("click", () => {
    fillFollowerFollowing(utl_following_btn.getAttribute("data-username"), "following");
});
var send_txt = document.querySelector("#send_txt");
send_txt.addEventListener("click", () => {
    let chat_bx = document.querySelector("#chat_bx");
    sendText(chat_bx.value, send_txt.getAttribute("data-owner-uname"), send_txt.getAttribute("data-user-id"));
});
$(document).ready(() => {
    // setInterval(realTime, 1000);
    document.addEventListener("click", () => {
        follow_btn_checker();
        realTime();
    });

    function realTime() {
        var comment_point = document.querySelectorAll(".comment_point_num");
        let arr = [];
        if (comment_point.length > 0) {
            comment_point.forEach((cp) => {
                arr.push(cp.getAttribute("data-post-id"));
            });
        }
        let pin_numbers = document.querySelectorAll(".pin_number");
        let pin_arr = [];
        if (pin_numbers.length > 0) {
            pin_numbers.forEach((pin_number) => {
                pin_arr.push(pin_number.getAttribute("data-post-id"));
            });
        }
        let like_icon_nums = document.querySelectorAll(".like_icon_num");
        let like_arr = [];
        if (like_icon_nums.length > 0) {
            like_icon_nums.forEach((like_icon_num) => {
                like_arr.push(like_icon_num.getAttribute("data-post-id"));
            });
        }
        let replies_num = document.querySelectorAll('.replies_num');
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                realTime: 1,
                comments: { 'cid': arr },
                pins: { 'post_id': pin_arr },
                post_like: { 'post_id': like_arr },
                is_active: 1,
                getUnSeenNotifNum: 1,
                getUnseenChatNumGlob: 1
            },
            success: (data) => {
                data.forEach(res => {
                    if (res.comments) {
                        updateCommentNum(res.comments);
                    } else if (res.pins) {
                        updatepinNum(res.pins);
                    } else if (res.post_like) {
                        updateLikeNum(res.post_like);
                    } else if (res.getUnSeenNotifNum) {
                        let notif_nums = document.querySelectorAll(".notif_num_handler");
                        if (res.getUnSeenNotifNum.status == 'good') {
                            notif_nums.forEach(notif_num => {
                                notif_num.classList.remove("d-none");
                                if (res.getUnSeenNotifNum.num > 99) {
                                    notif_num.innerHTML = '99+';
                                } else {
                                    notif_num.innerHTML = res.getUnSeenNotifNum.num;
                                }
                            });
                        } else {
                            notif_nums.forEach(notif_num => {
                                notif_num.classList.add("d-none");
                            });
                        }
                    } else if (res.getUnseenChatNumGlob) {
                        let notif_nums = document.querySelectorAll(".chats_num");
                        if (res.getUnseenChatNumGlob.status == 'good') {
                            notif_nums.forEach(notif_num => {
                                notif_num.classList.remove("d-none");
                                if (res.getUnseenChatNumGlob.num > 99) {
                                    notif_num.innerHTML = '99+';
                                } else {
                                    notif_num.innerHTML = res.getUnseenChatNumGlob.num;
                                }
                            });
                        } else {
                            notif_nums.forEach(notif_num => {
                                notif_num.classList.add("d-none");
                            });
                        }
                    }
                });
            },
        });
    }

    function updateCommentNum(data) {
        data.forEach((res) => {
            let cm_nums = document.querySelectorAll(
                ".comment_num_sel_" + res.post_id
            );
            cm_nums.forEach(cm_num => {
                cm_num.innerHTML = number_format(res.num);
            });

        });

    }

    function follow_btn_checker() {
        let follow_btns = document.querySelectorAll(".follow_btn");
        let follow_arr = [];
        if (follow_btns.length > 0) {
            follow_btns.forEach(btn => {
                follow_arr.push({
                    'username': btn.getAttribute("data-post-username"),
                    'spec_id': btn.getAttribute("data-spec-id")
                });
            });
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    follow_btn_checker: 1,
                    data: follow_arr
                },
                success: (data) => {
                    data.forEach(res => {
                        if (res.response == "hide") {
                            document.querySelector(".follow_btn_sel_" + res.username + "_special_" + res.spec_id).classList.add("d-none");
                        } else if (res.response == "show") {
                            document.querySelector(".follow_btn_sel_" + res.username + "_special_" + res.spec_id).classList.remove("d-none");
                        }
                    });
                },
            });
        }
    }

    function updatepinNum(data) {

        data.forEach((res) => {
            let pin_nums = document.querySelectorAll(".pin_num_sel_" + res.post_id);
            pin_nums.forEach(pin_num => {
                pin_num.innerHTML = number_format(res.num);
            });
        });

    }

    function updateLikeNum(data) {

        data.forEach((res) => {
            let like_nums = document.querySelectorAll(".like_num_counter_" + res.post_id);
            like_nums.forEach(like_num => {
                like_num.innerHTML = number_format(res.num);
            });

        });

    }
});
function getNotif() {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserNotif: 1
        },
        success: (data) => {
            let con = document.querySelector(".quick_notif_block");
            con.innerHTML = '';
            let arr = [];
            data.forEach(res => {
                switch (res.type) {
                    case "post":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                <div class="icon_area">
                                    <i class="">@</i>
                                </div>
                                <div class="msg_area">
                                    ${res.username} mentioned you in a post
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "comment":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&type='comment'">
                                <div class="icon_area">
                                    <i class="">@</i>
                                </div>
                                <div class="msg_area">
                                    ${res.username} mentioned you in a comment
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        break;
                    case "reply":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                <div class="icon_area">
                                    <i class="">@</i>
                                </div>
                                <div class="msg_area">
                                    ${res.username} mentioned you in a reply
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "replyed":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                    <div class="icon_area">
                                        <i class="">@</i>
                                    </div>
                                    <div class="msg_area">
                                        ${res.username} replied your comment
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                        arr.push(temp);
                        break;
                    case "commented":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                    <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                        <div class="icon_area">
                                            <i class="">@</i>
                                        </div>
                                        <div class="msg_area">
                                            ${res.username} commented on your post
                                        </div>
                                        <div class="view_notif">
                                            >>
                                        </div>
                                    </a>
                                    `;
                        arr.push(temp);
                        break;
                    case "new post":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                <div class="icon_area">
                                    <i class="fa fa-plus"></i>
                                </div>
                                <div class="msg_area">
                                    new post from @${res.username}
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "winner_event":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                    <div class="icon_area">
                                        <i class="fa fa-smile"></i>
                                    </div>
                                    <div class="msg_area">
                                        Hurray you won @${res.username}'s event
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                        arr.push(temp);
                        break;
                    case "follow":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s" href="@${res.username}">
                                <div class="icon_area">
                                    <i class="fa fa-rss text-info"></i>
                                </div>
                                <div class="msg_area">
                                    @${res.username} followed you..
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "event_ready":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s" href="post_view?post_id=${res.post_id}">
                                <div class="icon_area">
                                    <i class="fa fa-rss text-info"></i>
                                </div>
                                <div class="msg_area">
                                    @${res.username}'s event is ready and your participating..
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    default:
                        break;
                }
            })
            con.innerHTML = arr.join("");

        }
    });
}
getNotif();

var nav_btns = document.querySelectorAll(".nav_btn");
nav_btns.forEach(nav_btn => {

    nav_btn.addEventListener("click", e => {
        nav_btns.forEach(k => {
            k.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})
const post_likes = document.querySelector("#post_likes");
const all = document.querySelector("#all");
const mentions = document.querySelector("#mentions");
const activity = document.querySelector("#activity");
all.addEventListener("click", () => {
    getNotif();
})
post_likes.addEventListener("click", () => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserNotifLikes: 1
        },
        success: (data) => {
            let bg = "normal";
            let arr = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    let arr_ = []
                    for (const key_ in element) {
                        if (element.hasOwnProperty(key_)) {
                            const ele = element[key_];
                            arr_.push(ele)
                        }
                    }
                    arr.push(arr_)
                }
            }
            let con = document.querySelector(".quick_notif_block");
            con.innerHTML = '';

            arr.forEach(ar => {
                let res = ar[Math.floor(Math.random() * ar.length)];
                if (res.seen_two == "unseen") {
                    bg = 'shady';
                }
                let tx;
                if (Number(ar.length) - 1 == 0) {
                    tx = `@${res.username} liked your post`
                } else {
                    tx = `@${res.username} and ${Number(ar.length)} others liked your post`
                }
                temp = `
                        <a class="notifs box-s" href="post_view?post_id=${res.post_id}">
                            <div class="icon_area">
                                <i class="fa fa-heart text-danger"></i>
                            </div>
                            <div class="msg_area">
                                ${tx}
                            </div>
                            <div class="view_notif">
                                >>
                            </div>
                        </a>
                        `;
                con.innerHTML += temp;

            })

        }
    });
});
mentions.addEventListener("click", () => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserNotifMentions: 1
        },
        success: (data) => {
            let con = document.querySelector(".quick_notif_block");
            con.innerHTML = '';
            let arr = [];
            data.forEach(res => {
                switch (res.type) {
                    case "post":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                <div class="icon_area">
                                    <i class="">@</i>
                                </div>
                                <div class="msg_area">
                                    ${res.username} mentioned you in a post
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "comment":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&type='comment'">
                                    <div class="icon_area">
                                        <i class="">@</i>
                                    </div>
                                    <div class="msg_area">
                                        ${res.username} mentioned you in a comment
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                    case "reply":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                    <div class="icon_area">
                                        <i class="">@</i>
                                    </div>
                                    <div class="msg_area">
                                        ${res.username} mentioned you in a comment
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                        arr.push(temp);
                        break;
                    case "reply":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                    <div class="icon_area">
                                        <i class="">@</i>
                                    </div>
                                    <div class="msg_area">
                                        ${res.username} mentioned you in a comment
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                        arr.push(temp);
                        break;
                    default:
                        break;
                }
            })
            con.innerHTML = arr.join("");

        }
    });
});
activity.addEventListener("click", () => {
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserNotifActivity: 1
        },
        success: (data) => {
            let con = document.querySelector(".quick_notif_block");
            con.innerHTML = '';
            let arr = [];
            data.forEach(res => {
                switch (res.type) {
                    case "replyed":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                    <div class="icon_area">
                                        <i class="">@</i>
                                    </div>
                                    <div class="msg_area">
                                        ${res.username} replied your comment
                                    </div>
                                    <div class="view_notif">
                                        >>
                                    </div>
                                </a>
                                `;
                        arr.push(temp);
                        break;
                    case "commented":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                    <a class="notifs box-s ${bg}" href="detailview?post_id=${res.post_id}&&cid=${res.cid}&&repid=${res.repid}&&type='reply'">
                                        <div class="icon_area">
                                            <i class="">@</i>
                                        </div>
                                        <div class="msg_area">
                                            ${res.username} commented on your post
                                        </div>
                                        <div class="view_notif">
                                            >>
                                        </div>
                                    </a>
                                    `;
                        arr.push(temp);
                        break;
                    case "new post":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                            <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                <div class="icon_area">
                                    <i class="fa fa-plus"></i>
                                </div>
                                <div class="msg_area">
                                    new post from @${res.username}
                                </div>
                                <div class="view_notif">
                                    >>
                                </div>
                            </a>
                            `;
                        arr.push(temp);
                        break;
                    case "winner_event":
                        if (res.seen_two == "unseen") {
                            bg = 'shady';
                        }
                        temp = `
                                    <a class="notifs box-s ${bg}" href="post_view?post_id=${res.post_id}">
                                        <div class="icon_area">
                                            <i class="fa fa-smile"></i>
                                        </div>
                                        <div class="msg_area">
                                            Hurray you won @${res.username}'s event
                                        </div>
                                        <div class="view_notif">
                                            >>
                                        </div>
                                    </a>
                                    `;
                        arr.push(temp);
                        break;
                    default:
                        break;
                }
            })
            con.innerHTML = arr.join("");

        }
    });
});
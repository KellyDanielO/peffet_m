const getUserSearchPost = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q")
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchPost: 1,
            query: query
        },
        success: (data) => {
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {

                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = 'active';
                    } else {
                        ac = '';
                    }
                    if (res.type == 'write_up_regular') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = writeUpGet(res.avatar, res.username, res.time_ago, res.post_id, word, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                    } else if (res.type == 'reference_post') {
                        newtemp = refPostGet(res.avatar, res.username, res.post_id, res.text, res.ref_by, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                    } else if (res.type == 'classic_write_up') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = classicPostTempGet(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved, res.font);
                    } else if (res.type == 'portrait_post') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = portraitGet(res.avatar, res.username, res.time_ago, res.post_id, word, id, pin, ac, res.total_likes, res.total_comment, res.image, res.saved_num, res.post_saved);
                    } else if (res.type == 'typing_text') {
                        let text = res.text;
                        newtemp = typing_get(res.avatar, res.username, res.time_ago, res.post_id, res.bg, text, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved, res.font);
                    } else if (res.type == 'regular_post') {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = regula_post(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.images, res.saved_num, res.post_saved);
                    } else if (res.type == 'peffet_event') {

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
                    }
                    arr_con.push(newtemp);

                })

                bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}</div>`;
                slider();

            }
        }
    });
}
const getUserSearchReg = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchReg: 1,
            query: query
        },
        success: (data) => {
            console.log(data);
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {

                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = 'active';
                    } else {
                        ac = '';
                    }
                    if (res.type == 'regular_post') {
                        let text = res.text;

                        let word = wordCheck(text);
                        newtemp = regula_post(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.images, res.saved_num, res.post_saved);
                    }
                    arr_con.push(newtemp);

                })

                bx.innerHTML = `<div class="posts_bx">${arr_con}</div>`;
                slider();

            }
        }
    });
}
const getUserSearchEvent = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchEvent: 1,
            query: query
        },
        success: (data) => {
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {
                    if (res.type == "peffet_event") {
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
                    }
                })

                bx.innerHTML = `<div class="posts_bx">${arr_con}</div>`;

            }
        }
    });
}
const getUserSearchReference = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q")
    console.log(query)
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchReference: 1,
            query: query
        },
        success: (data) => {
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {

                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = 'active';
                    } else {
                        ac = '';
                    }
                    if (res.type == 'reference_post') {
                        newtemp = refPostGet(res.avatar, res.username, res.post_id, res.text, res.ref_by, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                    }
                    arr_con.push(newtemp);

                })

                bx.innerHTML = `<div class="posts_bx">${arr_con.join('')}</div>`;
                slider();

            }
        }
    });
}
const getUserSearchWriteUp = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchWriteUp: 1,
            query: query
        },
        success: (data) => {
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {

                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = 'active';
                    } else {
                        ac = '';
                    }
                    if (res.type == 'write_up_regular') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = writeUpGet(res.avatar, res.username, res.time_ago, res.post_id, word, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                    } else if (res.type == 'classic_write_up') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = classicPostTempGet(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved, res.font);
                    } else if (res.type == 'typing_text') {
                        let text = res.text;
                        newtemp = typing_get(res.avatar, res.username, res.time_ago, res.post_id, res.bg, text, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved, res.font);
                    }
                    arr_con.push(newtemp);

                })

                bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}</div>`;
                slider();

            }
        }
    });
}

const getUserSearchPort = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q")
    console.log(query)
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getUserSearchPort: 1,
            query: query
        },
        success: (data) => {
            let bx = document.querySelector(".content_bx");
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                bx.innerHTML = '';
                let arr_con = [];
                data.forEach(res => {

                    let id = "id" + RadomString(15);
                    let pin = "id" + RadomString(11);
                    var newtemp;
                    let ac;
                    if (res.is_liked) {
                        ac = 'active';
                    } else {
                        ac = '';
                    }

                    if (res.type == 'portrait_post') {
                        let text = res.text;
                        let word = wordCheck(text);
                        newtemp = portraitGet(res.avatar, res.username, res.time_ago, res.post_id, word, id, pin, ac, res.total_likes, res.total_comment, res.image, res.saved_num, res.post_saved);
                    }

                    arr_con.push(newtemp);

                })

                bx.innerHTML = `<div class="posts_bx">${arr_con.join('')}</div>`;
                slider();

            }
        }
    });
}
const users_search_suggestion = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q")
    let bx = document.querySelector(".content_bx");
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            users_search_suggestion: 1,
            query: query
        },
        success: (data) => {
            if (data.num) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {
                let arr_con = [];
                data.forEach(res => {
                    let g;
                    if (res.name) {
                        g = `<b>${res.name}</b>
                            <p>@${res.username}</p>`;
                    } else {
                        g = `<b>@${res.username}</b>
                            <p>${res.bio}</p>`;
                    }
                    let id = RadomString(11);
                    let temp = `
                        <div class="users_each search">
                            <div class="one">
                                <a href="@${res.username}" class="img_area">
                                    <img src="media/dp/${res.avatar}">
                                </a>
                                <div class="username_and_bio">
                                    ${g}                        
                                </div>
                            </div>
                            <button class="btn search_follow d-none follow_btn follow_btn_sel_${res.username}_special_${id}" data-spec-id="${id}" data-post-username="${res.username}">follow</button> 
                        </div>
                    `;
                    arr_con.push(temp);
                });
                bx.innerHTML = `<div class="posts_bx user_sug">${arr_con.join('')}</div>`;
                setTimeout(() => {
                    document.getElementById("user_sug").click();
                }, 500);

            }

        }
    });
}

const getRelatedHashTag = () => {
    let url_string = location.href;
    let url = new URL(url_string);
    let query = url.searchParams.get("q")
    let type = url.searchParams.get("type")
    let bx = document.querySelector(".content_bx");
    let q;
    if (type) {
        if (type == 'hash') {
            q = "#" + query;
        } else {
            q = query;
        }
    } else {
        q = query;
    }
    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getRelatedHashTag: 1,
            q: q
        },
        success: data => {
            if (data.status) {
                bx.innerHTML = `
                <div class="not_found">
                    <img src="img/404.png">
                    <h1>Search Result Not Found!</h1>
                </div>
                `;
            } else {

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
                bx.innerHTML = `<div class="posts_bx">${arr_con.join("")}</div>`;
            }
        }
    });
}
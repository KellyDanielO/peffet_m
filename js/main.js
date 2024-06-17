$(document).ready(() => {
    var share_user_post = document.querySelector(".share_user_post");
    if (share_user_post) {
        share_user_post.addEventListener("click", () => {
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    share_post_to_third_party: 1,
                    post_id: share_user_post.getAttribute("data-post-id")
                },
                success: data => {
                    console.log(data);
                    if (navigator.share) {
                        navigator
                            .share({
                                title: data.title,
                                text: data.text,
                                url: data.url
                            })
                            .then(() =>
                                swal("Successful!", "Post have been shared!", "success")
                            )
                            .catch(error => console.log("Error sharing", error));
                    }
                }
            });
        });
    }
    var copy_post_link = document.querySelector(".copy_post_link");
    if (copy_post_link) {
        copy_post_link.addEventListener("click", () => {
            navigator.clipboard.writeText("yo bro what's up");
            swal("Copied");
        });
    }

    var full_screen_utility_handler = document.querySelector(
        ".full_screen_utility_handler"
    );
    if (full_screen_utility_handler) {
        full_screen_utility_handler.addEventListener("click", e => {
            if (e.target.classList.contains("full_screen_utility_handler")) {
                full_screen_utility_handler.classList.toggle("active");
            }
        });
    }
    document.addEventListener("contextmenu", evt => {
        if (!evt.target.classList.contains("classic_img_prev")) {
            evt.preventDefault();
        }
        console.log(evt.target);
    });

    var create_bx = document.querySelector(".create_area");

    let lyrical = document.querySelector(".lyrical");
    document.addEventListener("click", evt => {
        console.log(evt.target);
        var write_up_text_box = document.querySelector(".write_up_text_box");
        if (write_up_text_box) {
            write_up_text_box.addEventListener("keyup", evt => {
                let words = write_up_text_box.value;
                let bg_bx = document.querySelector(".bg_bx");
                if (words.length >= 200) {
                    write_up_text_box.classList.add("limit_r``each``ed");
                    bg_bx.classList.remove("active");
                } else if (words.length <= 200) {
                    write_up_text_box.classList.remove("limit_reached");
                    bg_bx.classList.add("active");
                }
            });
        }

        if (evt.target.classList.contains("typing_text")) {
            var typed = new Typed(
                "." + evt.target.querySelector("p").getAttribute("class"), {
                    strings: evt.target
                        .querySelector("p")
                        .getAttribute("data-words")
                        .split("||"),
                    typeSpeed: 50,
                    backSpeed: 0,
                    loop: true,
                    showCursor: false,
                    cursorChar: "",
                    fadeOut: true
                }
            );
            typed.destroy();
            if (!evt.target.classList.contains("active")) {
                evt.target.classList.add("active");
                typed.reset();
            } else {
                evt.target.classList.remove("active");
                typed.destroy();
            }
        } else if (evt.target.classList.contains("regular_create")) {
            openCreateModal(`
                <div class="utl_container create_box">
                    <div class="utl_header">
                        <div class="left_header">
                            <div class="utl_close_btn">&times;</div>
                            <h3>Regular</h3>
                        </div>
                        <div class="right_header">
                        </div>
                    </div>
                    <form class="utl_content portrait" method="POST" action="qs" id="reg_form" enctype="multipart/form-data">
                        <div class="progress h">
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" width="45%"></div>
                        </div>
                        <button class="prev_reg_btn box-s" type="button">Preview</button>
                        <div class="file_prev_box">
                        </div>
                        <button class="caption_reg_btn box-s" type="button">Caption</button>
                        <div class="caption_reg_area">
                            <textarea name="caption_reg" placeholder="write something #tags @friends anything" id="caption_text"></textarea>
                            <div class="buttons d-flex justify-content-between align-content-center flex-wrap">
                                <input type="file" id="media" maxlength="15" name="media[]" hidden>
                                <span class="tag">#tag</span>
                                <span class="at_user">@user</span>
                                <label class="images_lable"> <i class="fa fa-images images_lable"></i> Photos</label>
                                <label class="video_label"> <i class="fa fa-video video_label"></i> Video</label>
                            </div>
                            <button class="btn btn-outline-lime submit_reg" type="submit" > <i class="fa fa-plus-circle"></i> Post</button>
                        </div>
                    </form>
                </div>
            `);
            RegTextFun();
            var media = document.querySelector("#media");
            imageFun();
            media.accept = "image/*";
            media.multiple = true;
            document.getElementById("media").click();

            RegCreate();
        } else if (evt.target.classList.contains("utl_close_btn")) {
            let create_area = document.querySelector(".create_area");
            create_area.classList.remove("active");
            let body = document.querySelector("body");
            body.classList.remove("active");
            full_screen_utility_handler.classList.toggle("active");
        } else if (evt.target.classList.contains("images_lable")) {
            var prev = document.querySelector(".file_prev_box");
            prev.classList.add("active");
            appendAttribute("image");
        } else if (evt.target.classList.contains("video_label")) {
            var prev = document.querySelector(".file_prev_box");
            prev.classList.add("active");
            appendAttribute("video");
        } else if (evt.target.classList.contains("audio_label")) {
            var prev = document.querySelector(".file_prev_box");
            prev.classList.add("active");
            appendAttribute("audio");
        } else if (evt.target.classList.contains("create_area")) {
            document.querySelector("body").classList.remove("active");
            create_bx.classList.remove("active");
        } else if (evt.target.classList.contains("submit_reg")) {
            //
        } else if (evt.target.classList.contains("create_btn")) {
            document.querySelector("body").classList.add("active");
            create_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("tag")) {
            var caption_text = document.querySelector("#caption_text");
            caption_text.value += "#";
        } else if (
            evt.target.classList.contains("toggle_peffet") ||
            evt.target.classList.contains("toggle")
        ) {
            document.querySelector(".side_nav").classList.toggle("active");
            document.querySelector("body").classList.toggle("active");
        } else if (evt.target.classList.contains("side_bx")) {
            document.querySelector(".side_nav").classList.toggle("active");
            document.querySelector("body").classList.toggle("active");
        } else if (evt.target.classList.contains("at_user")) {
            var caption_text = document.querySelector("#caption_text");
            caption_text.value += "@";
        } else if (evt.target.classList.contains("typing_create")) {
            openCreateModal(`
            <div class="utl_container create_box">
                <div class="utl_header">
                    <div class="left_header">
                        <div class="utl_close_btn">&times;</div>
                        <h3>Typing</h3>
                    </div>
                    <div class="right_header">
                        <button class="btn btn-primary saved_typed">Done</button>
                    </div>
                </div>
                <div class="utl_content">
                    <div class="d-flex justify-content-around align-items-center m-auto typing_btns">
                        <div class="lyrics_btn box-s" id="lyrics_btn">Texts</div>
                        <div class="bg_typing_btn  box-s">Context</div>
                        <div class="typing_prev_btn  box-s">Preview</div>
                    </div>
                    <div class="bg_variable_div d-none" data-typing-bg="type_pb_main"></div>
                    <div class="font_var d-none" data-typing-font="roboto_fonts"></div>
                    <div class="lyrical">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <button class="add_line btn btn-primary"><i class="fa fa-plus add_line_plus"> </i> Line 
                            </button>
                        </div>
                        <div class="lyrical_field">
                            <input type="text" class="line_input" maxlength="100" placeholder="something goes here...">
                        </div>
                    </div>
                    <div class="bgs_for_text">
                        <div class="bg_bx active">
                            <div class="typing_t_bg type_pb_main"></div>
                            <div class="typing_t_bg type_pb1"></div>
                            <div class="typing_t_bg type_pb2"></div>
                            <div class="typing_t_bg type_pb3"></div>
                            <div class="typing_t_bg type_pb4"></div>
                            <div class="typing_t_bg type_pb5"></div>
                            <div class="typing_t_bg type_pb6"></div>
                            <div class="typing_t_bg type_pb_one"></div>
                            <div class="typing_t_bg type_pb_two"></div>
                            <div class="typing_t_bg type_pb7"></div>
                            <div class="typing_t_bg type_pb_three"></div>
                            <div class="typing_t_bg type_pb_four"></div>
                            <div class="typing_t_bg type_pb_five"></div>
                            <div class="typing_t_bg type_pb_six"></div>
                            <div class="typing_t_bg type_pb_seven"></div>
                            <div class="typing_t_bg type_pb_eight"></div>
                            <div class="typing_t_bg type_pb_nine"></div>
                        </div>
                        <strong>Font</strong>
                        <div class="font_style_bx">
                            <div class="typing_fonts roboto_fonts">Roboto</div>
                            <div class="typing_fonts lato_fonts">Lato</div>
                            <div class="typing_fonts mochiy_fonts">Mochiy Pop One</div>
                            <div class="typing_fonts kanit_fonts">Kanit</div>
                            <div class="typing_fonts oleo_fonts">Oleo Script Swash Caps</div>
                            <div class="typing_fonts oswald_fonts">Oswald</div>
                            <div class="typing_fonts poppins_fonts">Poppins</div>
                            <div class="typing_fonts silkscreen_fonts">Silkscreen</div>
                            <div class="typing_fonts roboto_mono_fonts">Roboto Mono</div>
                        </div>
                    </div>
                    <div class="typing_prev">
                        <div class="prev_bx"></div>
                    </div>
                </div>
                <div class="lyr_prev"></div>
            </div>

            `);
            let ly = document.getElementById("lyrics_btn");
            ly.click();
        } else if (evt.target.classList.contains("reference_create")) {
            openCreateModal(`
                    <div class="utl_container create_box">
                    <div class="utl_header">
                        <div class="left_header">
                            <div class="utl_close_btn">&times;</div>
                            <h3>Reference</h3>
                        </div>
                        <div class="right_header">
                            <button class="btn btn-primary ref_btn">Done</button>
                        </div>
                    </div>
                    <div class="utl_content reference">
                        <textarea id="reference_input" placeholder="write something here"></textarea>
                        <div class="rt d-flex justify-content-around align-items-center flex-column">
                            <input type="text" placeholder="By" id="ref_by"><br>
                            <!-- <input type="text" placeholder="Details" id="ref_details"> -->
                        </div>
                    </div>
                </div>
           `);
        } else if (
            evt.target.classList.contains("add_line") ||
            evt.target.classList.contains("add_line_plus")
        ) {
            //lyrical line
            console.log("yes");
            let lyrical = document.querySelector(".lyrical");
            // appending the js created div
            var lyrical_div = document.createElement("div");
            lyrical_div.classList.add("lyrical_field");
            lyrical.append(lyrical_div);
            // appending the input to the div
            var input = document.createElement("input");
            input.setAttribute("maxlength", "100");
            input.placeholder = "something goes here...";
            input.classList.add("line_input");
            lyrical_div.append(input);
        } else if (evt.target.classList.contains("like_icon")) {
            var like = document.querySelector("#like");
            var unlike = document.querySelector("#unlike");
            let post_id = evt.target.getAttribute("data-post-id");
            let s = new Audio("sounds/4.wav");
            s.play();
            if (evt.target.classList.contains("active")) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToPost: 1,
                        post_id: post_id
                    },
                    success: res => {
                        if (res) {
                            unlike.classList.add("active_unlike");
                            evt.target.classList.remove("active");

                            setTimeout(() => {
                                unlike.classList.remove("active_unlike");
                            }, 2000);
                        }
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToPost: 1,
                        post_id: post_id
                    },
                    success: res => {
                        if (res) {
                            like.classList.add("active_like");
                            evt.target.classList.add("active");

                            setTimeout(() => {
                                like.classList.remove("active_like");
                            }, 2000);
                        }
                    }
                });
            }
        } else if (evt.target.classList.contains("pin_post")) {
            addToSaved(evt.target.getAttribute("data-post-id"));
            if (evt.target.classList.contains("active")) {
                evt.target.classList.remove("active");
            } else {
                evt.target.classList.add("active");
            }
        } else if (evt.target.classList.contains("port_create")) {
            openCreateModal(`
                <div class="utl_container create_box">
                <div class="utl_header">
                    <div class="left_header">
                        <div class="utl_close_btn">&times;</div>
                        <h3>Portrait</h3>
                    </div>
                    <div class="right_header">
                    </div>
                </div>
                <form class="utl_content portrait" method="POST" action="qs" id="port_form" enctype="multipart/form-data">
                    <input type="file" name="port_input" id="port_input" accept=".jpg, .png, .jpeg" hidden>
                    <div class="progress h">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <label for="port_input" class="btn btn-outline-primary m-2">Add</label>
                    <button class="prev_btn box-s" type="button">Preview</button>
                    <div class="image_prev">
                    </div>
                    <button class="caption_btn box-s" type="button">Caption</button>
                    <div class="caption_area">
                    <textarea placeholder="Caption" name="cap"></textarea>
                        <button class="btn btn-primary submit_port" type="submit" name="testUp">Done</button>
                    </div>
        
                </form>
            </div>
            `);
            let port_input = document.getElementById("port_input");
            imageFun();
            port_input.click();
            portCreate();
            // full_screen_utility_handler.classList.toggle("active");
        } else if (evt.target.classList.contains("writeup_create_main")) {
            openCreateModal(newLocal);
            writeTextFun();
        } else if (
            evt.target.classList.contains("pb_")) {
            if (write_up_text_box) {

                let write_up_text_box = document.querySelector(".write_up_text_box");
                write_up_text_box.setAttribute("data-write_up-bg", evt.target.classList[1]);
            }
        } else if (evt.target.classList.contains("classic_fonts")) {
            if (write_up_text_box) {
                write_up_text_box.setAttribute("data-font", evt.target.classList[1]);
            }
        } else if (
            evt.target.classList.contains("comment_point_icon") ||
            evt.target.classList.contains("comment_point_num") ||
            evt.target.classList.contains("comment_point")
        ) {
            let comment_input = document.getElementById("comment_input");
            let comment_bx = document.querySelector(".comment_bx");
            comment_input.setAttribute(
                "data-post-id",
                evt.target.getAttribute("data-post-id")
            );
            comment_bx.setAttribute(
                "data-post-id",
                evt.target.getAttribute("data-post-id")
            );
            let content_cm = document.querySelector(".content_cm");
            let post_id = evt.target.getAttribute("data-post-id");
            content_cm.innerHTML = "";
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    getComments: 1,
                    post_id: post_id
                },
                success: data => {
                    comment_input.value = "";
                    data.forEach(res => {
                        if (res.error !== "empty") {
                            let text = res.comment;
                            let exploded = text.split(" ");
                            let arr = [];

                            let id = "id" + RadomString(15);
                            let pin = "id" + RadomString(11);
                            let div_id = "div_id" + RadomString(11);
                            let sw;
                            if (res.show_ac_bx) {
                                sw = `<i class="fa fa-ellipsis-v comment_act_opt" data-comment-id="${res.comment_id}" data-post-id="${res.post_id}" data-div-id="${div_id}">  <em>${res.time_ago}</em> </i>`;
                            } else {
                                sw = `<em>${res.time_ago}</em>`;
                            }
                            let word = wordCheck(text);
                            let temp = `
                                <div class="d-flex justify-content-between each_comment comment_handler_${
                                  res.comment_id
                                }">
                                <div class="left_side">
                                <img src="media/dp/${res.avatar}" alt="@${res.username}" onclick="location.href = '@${res.username}'">
                                </div>
                                <div class="right_side">
                                <div class="uname_time_row d-flex justify-content-between align-items-center">
                                    <b class="text-lime" onclick="location.href = '@${res.username}'">@${res.username}   .  </b> ${sw}
                                </div>
                                <div class="comment_row" style="word-break: break-all;">${word}</div>
                                <div class="d-flex justify-content-between align-items-center act_row">
                                    <div class="main_side">
                                    <strong class="reply_comment" data-comment-id="${
                                      res.comment_id
                                    }" data-username-comment="${
                res.username
              }" data-comment-id="${res.comment_id}">reply</strong>
                                    </div>
                                    <div class="liked_side d-flex justify-content-between align-items-center">
                                    <div class="likes ">
                                        <i class="fa fa-reply show_replies" data-comment-id="${
                                          res.comment_id
                                        }" data-post-id="${res.post_id}"></i>
                                        <b class="show_replies replies_num" data-comment-id="${
                                          res.comment_id
                                        }" data-post-id="${
                res.post_id
              }">${number_format(res.total_comment_reply)}</b>
                                    </div>
                                    <div class="likes">
                                        <i class="fa fa-heart like_reply ${id} ${
                res.user_liked_comment
              }" data-like-btn-id="${id}"  data-num-id="num_id_${pin}" data-post-id="${
                res.post_id
              }" data-comment-id="${res.comment_id}"></i>
                                        <em class="num_id_${pin}">${number_format(
                res.total_comments_reaction
              )}</em>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                                `;
                            content_cm.innerHTML += temp;
                        }
                    });
                }
            });

            comment_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("comment_exit_btn")) {
            let comment_bx = document.querySelector(".comment_bx");
            comment_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("like_reply")) {
            let like_icon = evt.target.getAttribute("data-like-btn-id");
            let num = evt.target.getAttribute("data-num-id");
            let num_main = document.querySelector("." + num);
            if (evt.target.classList.contains("active")) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToComment: 1,
                        cid: evt.target.getAttribute("data-comment-id"),
                        post_id: evt.target.getAttribute("data-post-id")
                    },
                    success: res => {
                        console.log(res);
                        document.querySelector("." + like_icon).classList.toggle("active");
                        if (Number(num_main.textContent) - 1 == 0) {
                            num_main.innerHTML = "";
                        } else {
                            num_main.innerHTML = Number(num_main.textContent) - 1;
                        }
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToComment: 1,
                        cid: evt.target.getAttribute("data-comment-id"),
                        post_id: evt.target.getAttribute("data-post-id")
                    },
                    success: res => {
                        console.log(res);
                        document.querySelector("." + like_icon).classList.toggle("active");
                        num_main.innerHTML = Number(num_main.textContent) + 1;
                    }
                });
            }
        } else if (evt.target.classList.contains("show_replies")) {
            let comment_input = document.getElementById("comment_input");
            let rep_cm = document.querySelector(".rep_cm");
            let post_id = evt.target.getAttribute("data-post-id");
            let cid = evt.target.getAttribute("data-comment-id");
            document.getElementById("rep_input").setAttribute("data-comment-id", cid);
            document
                .getElementById("rep_input")
                .setAttribute("data-post-id", post_id);
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    getReplies: 1,
                    cid: cid,
                    post_id: post_id
                },
                success: data => {
                    comment_input.value = "";
                    rep_cm.innerHTML = "";
                    console.log(data);
                    data.forEach(res => {
                        if (res.error !== "empty") {
                            let text = res.reply;
                            let exploded = text.split(" ");
                            let arr = [];

                            let id = "rep_id" + RadomString(15);
                            let pin = "rep_id" + RadomString(11);
                            let div_id = "rep_div_id" + RadomString(11);
                            let sw;
                            if (res.show_ac_bx) {
                                sw = `<i class="fa fa-ellipsis-v reply_act_opt" data-comment-id="${res.comment_id}" data-post-id="${res.post_id}" data-rep-id="${res.repid}" data-div-id="${div_id}">  <em>${res.time_ago}</em> </i>`;
                            } else {
                                sw = `<em>${res.time_ago}</em>`;
                            }
                            exploded.forEach(text_new => {
                                if (text_new[0] === "#") {
                                    arr.push(
                                        `<a class="text-info" href="search?q=${text_new}">${text_new}</a>`
                                    );
                                } else if (text_new[0] === "@") {
                                    arr.push(
                                        `<a class="text-info" href="${text_new}">${text_new}</a>`
                                    );
                                } else {
                                    arr.push(text_new);
                                }
                            });
                            let temp = `
                                <div class="d-flex justify-content-between each_comment  reply_handler_${
                                  res.repid
                                }">
                                    <div class="left_side">
                                        <img src="media/dp/${
                                          res.avatar
                                        }"  alt="@${res.username}" onclick="location.href = '@${res.username}'">
                                    </div>
                                <div class="right_side">
                                <div class="uname_time_row d-flex justify-content-between align-items-center">
                                    <b class="text-lime" onclick="location.href = '@${res.username}'">@${res.username}   .  </b> ${sw}
                                </div>
                                <div class="comment_row">${arr.join(" ")}</div>
                                <div class="d-flex justify-content-between align-items-center act_row">
                                    <div class="main_side">
                                    <strong class="men reply_reply" data-username-comment="${
                                      res.username
                                    }">reply</strong>
                                    </div>
                                    <div class="liked_side d-flex justify-content-between align-items-center">
                                    <div class="likes">
                                        <i class="fa fa-heart like_reply_main ${id} ${
                res.user_liked_rep
              }" data-like-btn-id="${id}"  data-num-id="num_id_${pin}" data-post-id="${
                res.post_id
              }" data-comment-id="${res.comment_id}" data-rep-id="${
                res.repid
              }"></i>
                                        <em class="num_id_${pin}">${res.total_replies_reaction ||
                ""}</em>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                                `;
                            rep_cm.innerHTML += temp;
                        }
                    });
                }
            });

            let replies_bx = document.querySelector(".replies_bx");
            replies_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("reply_exit")) {
            let replies_bx = document.querySelector(".replies_bx");
            replies_bx.classList.toggle("active");
        } else if (evt.target.classList.contains("reply_comment")) {
            let comment_input = document.getElementById("comment_input");
            comment_input.setAttribute(
                "data-comment-id",
                evt.target.getAttribute("data-comment-id")
            );
            comment_input.value =
                "reply @" + evt.target.getAttribute("data-username-comment") + " ";
        } else if (evt.target.classList.contains("at_user_reply")) {
            let comment_input = document.getElementById("rep_input");
            comment_input.value += "@";
        } else if (evt.target.classList.contains("at_user_comment")) {
            let comment_input = document.getElementById("comment_input");
            comment_input.value += "@";
        } else if (evt.target.classList.contains("create_comment")) {
            let comment_input = document.getElementById("comment_input");
            let post_id = comment_input.getAttribute("data-post-id");
            let content_cm = document.querySelector(".content_cm");
            let val_input = comment_input.value.split(" ");
            if (
                val_input[0] == "reply" &&
                val_input[1][0] == "@" &&
                comment_input.getAttribute("data-comment-id") !== null
            ) {
                val_input.shift();
                let reply = val_input.join(" ");
                let cid = comment_input.getAttribute("data-comment-id");
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        createNewReply: 1,
                        post_id: post_id,
                        cid: cid,
                        reply: reply
                    },
                    success: res => {
                        console.log(res);
                        if (res.return == true) {
                            comment_input.value = "";
                            // alert("Reply sent")

                            swal("Good job!", "Reply sent!", "success");
                        } else {
                            comment_input.value = "error";
                        }
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        createNewComment: 1,
                        post_id: post_id,
                        comment: comment_input.value
                    },
                    success: res => {
                        comment_input.value = "";
                        let text = res.comment;
                        let exploded = text.split(" ");
                        let arr = [];

                        let id = "id" + RadomString(15);
                        let pin = "id" + RadomString(11);
                        let div_id = "div_id" + RadomString(11);
                        let sw;
                        if (res.show_ac_bx) {
                            sw = `<i class="fa fa-ellipsis-v comment_act_opt" data-comment-id="${res.comment_id}" data-post-id="${res.post_id}" data-div-id="${div_id}">  <em>${res.time_ago}</em> </i>`;
                        } else {
                            sw = `<em>${res.time_ago}</em>`;
                        }
                        exploded.forEach(text_new => {
                            if (text_new[0] === "#") {
                                arr.push(
                                    `<a class="text-info" href="search?q=${text_new}">${text_new}</a>`
                                );
                            } else if (text_new[0] === "@") {
                                arr.push(
                                    `<a class="text-info" href="${text_new}">${text_new}</a>`
                                );
                            } else {
                                arr.push(text_new);
                            }
                        });
                        let temp = `
                        <div class="d-flex justify-content-between each_comment  comment_handler_${
                          res.comment_id
                        }">
                            <div class="left_side">
                                <img src="media/dp/${res.avatar}" alt="@${res.username}" onclick="location.href = '@${res.username}'">
                            </div>
                            <div class="right_side">
                                <div class="uname_time_row d-flex justify-content-between align-items-center">
                                    <b class="text-lime" onclick="location.href = '@${res.username}'">@${res.username}   .  </b> ${sw}
                                </div>
                                <div class="comment_row">${arr.join(" ")}</div>
                            <div class="d-flex justify-content-between align-items-center act_row">
                                <div class="main_side">
                                    <strong class="reply_comment" data-comment-id="${
                                      res.comment_id
                                    }" data-username-comment="${
              res.username
            }" data-comment-id="${res.comment_id}">reply</strong>
                                </div>
                                <div class="liked_side d-flex justify-content-between align-items-center">
                                <div class="likes ">
                                    <i class="fa fa-reply show_replies" data-comment-id="${
                                      res.comment_id
                                    }" data-post-id="${res.post_id}"></i>
                                    <b class="show_replies replies_num" data-comment-id="${
                                      res.comment_id
                                    }" data-post-id="${res.post_id}"></b>
                                </div>
                                <div class="likes">
                                    <i class="fa fa-heart like_reply ${id}" data-like-btn-id="${id}"  data-num-id="num_id_${pin}"  data-num-id="num_id_${pin}" data-post-id="${
              res.post_id
            }" data-comment-id="${res.comment_id}"></i>
                                    <em class="num_id_${pin}"></em>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
                        content_cm.innerHTML += temp;
                    }
                });
            }
        } else if (evt.target.classList.contains("comment_act_opt")) {
            let bx = document.querySelector(".delete_comment");
            bx.setAttribute(
                "data-comment-id",
                evt.target.getAttribute("data-comment-id")
            );
            bx.setAttribute("data-post-id", evt.target.getAttribute("data-post-id"));
            document.querySelector(".comment_action_box").classList.toggle("active");
        } else if (evt.target.classList.contains("reply_act_opt")) {
            let bx = document.querySelector(".delete_reply");
            bx.setAttribute(
                "data-comment-id",
                evt.target.getAttribute("data-comment-id")
            );
            bx.setAttribute("data-post-id", evt.target.getAttribute("data-post-id"));
            bx.setAttribute("data-rep-id", evt.target.getAttribute("data-rep-id"));
            document.querySelector(".reply_action_box").classList.toggle("active");
        } else if (evt.target.classList.contains("comment_action_box")) {
            document.querySelector(".comment_action_box").classList.toggle("active");
        } else if (evt.target.classList.contains("reply_action_box")) {
            document.querySelector(".reply_action_box").classList.toggle("active");
        } else if (evt.target.classList.contains("delete_comment")) {
            let bx = document.querySelector(".delete_comment");
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    deleteComment: 1,
                    cid: bx.getAttribute("data-comment-id"),
                    post_id: bx.getAttribute("data-post-id")
                },
                success: res => {
                    if (res.return) {
                        document.querySelector(
                            ".comment_handler_" + bx.getAttribute("data-comment-id")
                        ).innerHTML = "";
                        swal("Good job!", "Comment deleted!", "success");
                        document
                            .querySelector(".comment_action_box")
                            .classList.toggle("active");
                    }
                }
            });
        } else if (evt.target.classList.contains("delete_reply")) {
            let bx = document.querySelector(".delete_reply");
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    deleteReply: 1,
                    cid: bx.getAttribute("data-comment-id"),
                    repid: bx.getAttribute("data-rep-id"),
                    post_id: bx.getAttribute("data-post-id")
                },
                success: res => {
                    if (res.return) {
                        document.querySelector(
                            ".reply_handler_" + bx.getAttribute("data-rep-id")
                        ).innerHTML = "";
                        swal("Good job!", "Reply deleted!", "success");
                        document
                            .querySelector(".reply_action_box")
                            .classList.toggle("active");
                    }
                }
            });
        } else if (evt.target.classList.contains("like_reply_main")) {
            let like_icon = evt.target.getAttribute("data-like-btn-id");
            let num = evt.target.getAttribute("data-num-id");
            let num_main = document.querySelector("." + num);
            if (evt.target.classList.contains("active")) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToReply: 1,
                        cid: evt.target.getAttribute("data-comment-id"),
                        post_id: evt.target.getAttribute("data-post-id"),
                        repid: evt.target.getAttribute("data-rep-id")
                    },
                    success: res => {
                        document.querySelector("." + like_icon).classList.toggle("active");
                        if (Number(num_main.textContent) - 1 == 0) {
                            num_main.innerHTML = "";
                        } else {
                            num_main.innerHTML = Number(num_main.textContent) - 1;
                        }
                    }
                });
            } else {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        reactToReply: 1,
                        cid: evt.target.getAttribute("data-comment-id"),
                        post_id: evt.target.getAttribute("data-post-id"),
                        repid: evt.target.getAttribute("data-rep-id")
                    },
                    success: res => {
                        document.querySelector("." + like_icon).classList.toggle("active");
                        num_main.innerHTML = Number(num_main.textContent) + 1;
                    }
                });
            }
        } else if (evt.target.classList.contains("reply_reply")) {
            let rep_input = document.getElementById("rep_input");
            rep_input.value =
                "@" + evt.target.getAttribute("data-username-comment") + " ";
        } else if (evt.target.classList.contains("reply_btn_sender")) {
            let rep_input = document.getElementById("rep_input");
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    createNewReply: 1,
                    post_id: rep_input.getAttribute("data-post-id"),
                    cid: rep_input.getAttribute("data-comment-id"),
                    reply: rep_input.value
                },
                success: res => {
                    let rep_cm = document.querySelector(".rep_cm");
                    if (res.error !== "empty") {
                        rep_input.value = "";
                        // alert("Reply sent")

                        swal("Good job!", "Reply sent!", "success");
                        let text = res.reply;
                        let exploded = text.split(" ");
                        let arr = [];

                        let id = "rep_id" + RadomString(15);
                        let pin = "rep_id" + RadomString(11);
                        let div_id = "rep_div_id" + RadomString(11);
                        let sw;
                        if (res.show_ac_bx) {
                            sw = `<i class="fa fa-ellipsis-v reply_act_opt" data-comment-id="${res.comment_id}" data-post-id="${res.post_id}" data-rep-id="${res.repid}" data-div-id="${div_id}">  <em>${res.time_ago}</em> </i>`;
                        } else {
                            sw = `<em>${res.time_ago}</em>`;
                        }
                        exploded.forEach(text_new => {
                            if (text_new[0] === "#") {
                                arr.push(
                                    `<a class="text-info" href="search?q=${text_new}">${text_new}</a>`
                                );
                            } else if (text_new[0] === "@") {
                                arr.push(
                                    `<a class="text-info" href="${text_new}">${text_new}</a>`
                                );
                            } else {
                                arr.push(text_new);
                            }
                        });
                        let temp = `
                            <div class="d-flex justify-content-between each_comment  reply_handler_${
                              res.repid
                            }">
                                <div class="left_side">
                                    <img src="media/dp/${res.avatar}"  alt="@${res.username}" onclick="location.href = '@${res.username}'">
                                </div>
                            <div class="right_side">
                            <div class="uname_time_row d-flex justify-content-between align-items-center">
                                <b class="text-lime" onclick="location.href = '@${res.username}'">@${res.username}   .  </b> ${sw}
                            </div>
                            <div class="comment_row">${arr.join(" ")}</div>
                            <div class="d-flex justify-content-between align-items-center act_row">
                                <div class="main_side">
                                <strong class="men reply_reply" data-username-comment="${
                                  res.username
                                }">reply</strong>
                                </div>
                                <div class="liked_side d-flex justify-content-between align-items-center">
                                <div class="likes">
                                    <i class="fa fa-heart like_reply_main ${id} ${
              res.user_liked_rep
            }" data-like-btn-id="${id}"  data-num-id="num_id_${pin}" data-post-id="${
              res.post_id
            }" data-comment-id="${res.comment_id}" data-rep-id="${
              res.repid
            }"></i>
                                    <em class="num_id_${pin}">${res.total_replies_reaction ||
              ""}</em>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                            `;
                        rep_cm.innerHTML += temp;
                    } else {
                        swal("Sorry!", "An error occured!", "error");
                    }
                }
            });
        } else if (evt.target.classList.contains("ref_btn")) {
            createRef();
        } else if (evt.target.classList.contains("post_act_btn")) {
            let post_act_utl = document.querySelector(".post_act_utl");
            let body = document.querySelector("body");
            document
                .querySelector(".share_user_post")
                .setAttribute("data-post-id", evt.target.getAttribute("data-post-id"));
            show_or_hide_delete_button(evt.target.getAttribute("data-post-id"));
            get_followers_to_share_post_to(evt.target.getAttribute("data-post-id"));
            body.classList.add("active");
            post_act_utl.classList.toggle("active");
        } else if (evt.target.classList.contains("post_act_utl_con")) {
            let post_act_utl = document.querySelector(".post_act_utl");
            let body = document.querySelector("body");
            post_act_utl.classList.toggle("active");
            body.classList.remove("active");
        } else if (evt.target.classList.contains("write_up_classic_btn")) {
            createClassWriteUp();
        } else if (evt.target.classList.contains("act_toggle")) {
            document
                .querySelector("." + evt.target.getAttribute("data-toggler"))
                .classList.toggle("active");
            evt.target.classList.toggle("active");
        } else if (evt.target.classList.contains("caption_btn")) {
            document.querySelector(".caption_area").classList.toggle("active");
            document.querySelector(".image_prev").classList.toggle("active");
        } else if (evt.target.classList.contains("prev_btn")) {
            document.querySelector(".caption_area").classList.toggle("active");
            document.querySelector(".image_prev").classList.toggle("active");
        } else if (evt.target.classList.contains("caption_reg_btn")) {
            document.querySelector(".caption_reg_area").classList.toggle("active");
            document.querySelector(".file_prev_box").classList.toggle("active");
        } else if (evt.target.classList.contains("prev_reg_btn")) {
            document.querySelector(".caption_reg_area").classList.toggle("active");
            document.querySelector(".file_prev_box").classList.toggle("active");
        } else if (evt.target.classList.contains("f_or_f_btn")) {
            document.querySelector(".get_notif_of_user").classList.toggle("active");
            userConnectionSys(evt.target.getAttribute("data-owner-uname"));
        } else if (evt.target.classList.contains("lyrics_btn")) {
            document.querySelector(".typing_prev").classList.remove("active");
            document.querySelector(".bgs_for_text").classList.remove("active");
            document.querySelector(".lyrical").classList.add("active");
        } else if (evt.target.classList.contains("bg_typing_btn")) {
            document.querySelector(".typing_prev").classList.remove("active");
            document.querySelector(".bgs_for_text").classList.add("active");
            document.querySelector(".lyrical").classList.remove("active");
        } else if (evt.target.classList.contains("typing_prev_btn")) {
            document.querySelector(".typing_prev").classList.add("active");
            document.querySelector(".bgs_for_text").classList.remove("active");
            document.querySelector(".lyrical").classList.remove("active");
            let bg_variable_div = document.querySelector(".bg_variable_div");
            let font_var = document.querySelector(".font_var");
            let prev_bx = document.querySelector(".prev_bx");
            let bg = bg_variable_div.getAttribute("data-typing-bg");
            let font = font_var.getAttribute("data-typing-font");
            prev_bx.setAttribute("data-typing-bg", bg);
            let line_input = document.querySelectorAll(".line_input");
            let arr_for_line = [];
            line_input.forEach(each_input => {
                arr_for_line.push(each_input.value);
            });
            let new_line = arr_for_line.join("||");
            prev_bx.innerHTML = `<p data-words="${new_line}" data-font="${font}"  class="prev_p"></p>`;
            var typed = new Typed(".prev_p", {
                strings: document
                    .querySelector(".prev_p")
                    .getAttribute("data-words")
                    .split("||"),
                typeSpeed: 50,
                backSpeed: 0,
                loop: true,
                showCursor: false,
                cursorChar: "|",
                fadeOut: true
            });
        } else if (evt.target.classList.contains("typing_t_bg")) {
            let bg_variable_div = document.querySelector(".bg_variable_div");
            bg_variable_div.setAttribute("data-typing-bg", evt.target.classList[1]);
        } else if (evt.target.classList.contains("typing_fonts")) {
            let font_var = document.querySelector(".font_var");
            font_var.setAttribute("data-typing-font", evt.target.classList[1]);
        } else if (evt.target.classList.contains("saved_typed")) {
            let line_input = document.querySelectorAll(".line_input");
            let arr_for_line = [];
            line_input.forEach(each_input => {
                arr_for_line.push(each_input.value);
            });
            let new_line = arr_for_line.join("||");
            let bg_variable_div = document
                .querySelector(".bg_variable_div")
                .getAttribute("data-typing-bg");
            let font_var = document
                .querySelector(".font_var")
                .getAttribute("data-typing-font");
            createNewTyped(new_line, bg_variable_div, font_var);
        } else if (evt.target.classList.contains("viewer_img")) {
            let img_viewer = document.querySelector(".img_viewer");
            let img_viewer_cont = document.querySelector(".img_viewer_cont");
            img_viewer.classList.toggle("active");
            img_viewer_cont.innerHTML = `<img src="${evt.target.getAttribute(
        "src"
      )}">`;
            img_viewer_cont.innerHTML += `<i class="fa fa-arrow-left img_close"></i>`;
        } else if (evt.target.classList.contains("img_viewer_cont")) {
            let img_viewer = document.querySelector(".img_viewer");
            img_viewer.classList.toggle("active");
        } else if (evt.target.classList.contains("video_viewer_btn")) {
            let video_viewer = document.querySelector(".video_viewer");
            let video_viewer_cont = document.querySelector(".video_viewer_cont");
            video_viewer_cont.innerHTML = `
            <iframe src="player.php?src=${evt.target.getAttribute(
              "src"
            )}" frameborder="0"></iframe>
            `;
            video_viewer.classList.toggle("active");
            video_viewer_cont.innerHTML += `<i class="fa fa-arrow-left video_close"></i>`;
        } else if (evt.target.classList.contains("video_viewer_cont")) {
            let video_viewer = document.querySelector(".video_viewer");
            let video_viewer_cont = document.querySelector(".video_viewer_cont");
            video_viewer_cont.innerHTML = "";
            video_viewer.classList.toggle("active");
        } else if (evt.target.classList.contains("img_close")) {
            let img_viewer = document.querySelector(".img_viewer");
            img_viewer.classList.toggle("active");
        } else if (evt.target.classList.contains("video_close")) {
            let video_viewer = document.querySelector(".video_viewer");
            let video_viewer_cont = (document.querySelector(
                ".video_viewer_cont"
            ).innerHTML = "");
            video_viewer.classList.toggle("active");
        } else if (evt.target.classList.contains("classic_img_prev")) {
            let preview = document.querySelector(".preview");
            preview.querySelector("img").src = evt.target.src; //getting the clicked image and inserting it into the box
            preview.classList.toggle("active");
            document.querySelector("body").classList.toggle("active");
        } else if (evt.target.classList.contains("preview_cont")) {
            let preview = document.querySelector(".preview");
            preview.classList.toggle("active");
            document.querySelector("body").classList.toggle("active");
        } else if (evt.target.classList.contains("preview_cont_close")) {
            let preview = document.querySelector(".preview");
            preview.classList.toggle("active");
            document.querySelector("body").classList.toggle("active");
        } else if (evt.target.classList.contains("follow_btn")) {
            follow_user(evt.target.getAttribute("data-post-username"), evt.target);
        } else if (evt.target.classList.contains("send_share_post_btn")) {
            send_post_to_msg(
                evt.target,
                evt.target.getAttribute("data-reciever-id"),
                evt.target.getAttribute("data-reciever-username"),
                evt.target.getAttribute("data-post-id")
            );
        } else if (evt.target.classList.contains("navi_btn_forward")) {
            let group = document.querySelector(".gp_" + evt.target.getAttribute("data-group-id"));
            group.scrollLeft += group.clientWidth;
        } else if (evt.target.classList.contains("navi_btn_prev")) {
            let group = document.querySelector(".gp_" + evt.target.getAttribute("data-group-id"));
            group.scrollLeft -= group.clientWidth;
        } else if (evt.target.classList.contains("event_create")) {
            openCreateModal(event_template);
            evtBtnsListner();
        } else if (evt.target.classList.contains("evt_create_start")) {
            createEvent();
        } else if (evt.target.classList.contains("utl_event_bx")) {
            document.querySelector(".utl_event_manager_container").classList.remove("active");
            document.querySelector("body").classList.remove("active");
        } else if (evt.target.classList.contains("join_evt_btn")) {
            updateEvtBx("join_event", evt.target.getAttribute("data-event-id"));
            document.querySelector(".utl_event_manager_container").classList.add("active");
            document.querySelector("body").classList.add("active");
        } else if (evt.target.classList.contains("manage_evt")) {
            updateEvtBx("manage_event", evt.target.getAttribute("data-event-id"));
            document.querySelector(".utl_event_manager_container").classList.add("active");
            document.querySelector("body").classList.add("active");
        } else if (evt.target.classList.contains("utl_navi_left")) {
            let group = document.querySelector(".utl_cont");
            group.scrollLeft -= group.clientWidth;
        } else if (evt.target.classList.contains("utl_navi_right")) {
            let group = document.querySelector(".utl_cont");
            group.scrollLeft += group.clientWidth;
        } else if (evt.target.classList.contains("decline_application")) {
            decline_application(evt.target.getAttribute("data-event-id"), evt.target.getAttribute("data-applicant-id"), evt.target.getAttribute("data-applicant-name"));
        } else if (evt.target.classList.contains("approve_event")) {
            approve_event(evt.target.getAttribute("data-event-id"));
        } else if (evt.target.classList.contains("event_like_one")) {
            like_event(evt.target.getAttribute("data-event-id"), evt.target.getAttribute("data-pair-id"), 'pair_one');
        } else if (evt.target.classList.contains("event_like_two")) {
            like_event(evt.target.getAttribute("data-event-id"), evt.target.getAttribute("data-pair-id"), 'pair_two');
        } else if (evt.target.classList.contains("manage_event_pre")) {
            updateEvtBx("manage_event_pre", evt.target.getAttribute("data-event-id"));
            document.querySelector(".utl_event_manager_container").classList.add("active");
            document.querySelector("body").classList.add("active");
        } else if (evt.target.classList.contains("close_event")) {
            concludeEvent(evt.target.getAttribute("data-event-id"));
        } else if (evt.target.classList.contains("tab_left")) {
            let group = document.querySelector(".tab_bx");
            group.scrollLeft -= group.clientWidth;
        } else if (evt.target.classList.contains("tab_right")) {
            let group = document.querySelector(".tab_bx");
            group.scrollLeft += group.clientWidth;
        } else if (evt.target.classList.contains("search_bx")) {
            document.querySelector(".universal_search").classList.remove("active");
        } else if (evt.target.classList.contains("evt_act_btn")) {
            getAllEvents(evt.target.getAttribute("data-post-id"));
            document.querySelector(".event_full_view").classList.add("active");
            document.querySelector("body").classList.add("active");
        } else if (evt.target.classList.contains("event_mv_close")) {
            document.querySelector(".event_full_view").classList.remove("active");
            document.querySelector("body").classList.remove("active");
        } else if (evt.target.classList.contains("event_mv_bx")) {
            document.querySelector(".event_full_view").classList.remove("active");
            document.querySelector("body").classList.remove("active");
        } else if (evt.target.classList.contains("peffet_hash_and_at_bx_value")) {
            let value = evt.target.getAttribute("data-value");
            let which = evt.target.getAttribute("data-which");
            if (which == 'write_up_classic') {
                let write_up_text_box = document.querySelector(".write_up_text_box");
                let ex = write_up_text_box.value.split(" ");
                ex.pop();
                document.querySelector(".peffet_hash_and_at_bx").classList.remove("active");
                write_up_text_box.value = ex.join(" ") + " " + value + " ";
            } else if (which == 'regular_post') {
                let caption_text = document.querySelector("#caption_text");
                let ex = caption_text.value.split(" ");
                ex.pop();
                document.querySelector(".peffet_hash_and_at_bx").classList.remove("active");
                caption_text.value = ex.join(" ") + " " + value + " ";
            } else if (which == 'event_post') {
                let evt_description = document.querySelector(".evt_description");
                let ex = evt_description.value.split(" ");
                ex.pop();
                document.querySelector(".peffet_hash_and_at_bx").classList.remove("active");
                evt_description.value = ex.join(" ") + " " + value + " ";
            }
        }
    });


    document.addEventListener("dblclick", evt => {
        if (evt.target.classList.contains("line_input")) {
            evt.target.remove();
        }
    });

    function openCreateModal(tempplate) {
        let body = document.querySelector("body");
        body.classList.add("active");
        full_screen_utility_handler.innerHTML = tempplate;
        full_screen_utility_handler.classList.toggle("active");
    }

    function imageFun() {

        var media = document.querySelector("#media");
        if (media) {
            media.addEventListener("change", (event) => {

                var total_files = document.getElementById("media").files.length;
                var prev = document.querySelector(".file_prev_box");
                prev.innerHTML = "";
                for (let i = 0; i < total_files; i++) {
                    var media = event.target.files[i];
                    var m = event.target.files[i].name;
                    var ext = m.substring(m.lastIndexOf(".") + 1);
                    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                        prev.innerHTML += `
                    <img src='${URL.createObjectURL(media)}' width="100%">
                `;
                    } else if (ext == "mp4" || ext == "ogg" || ext == "MOV" || ext == "avi") {
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
        var port_input = document.querySelector("#port_input");
        if (port_input) {
            port_input.addEventListener("change", (event) => {

                var total_files = document.getElementById("port_input").files.length;
                var prev = document.querySelector(".image_prev");
                prev.innerHTML = "";
                for (let i = 0; i < total_files; i++) {
                    var media = event.target.files[i];
                    var m = event.target.files[i].name;
                    var ext = m.substring(m.lastIndexOf(".") + 1);
                    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                        prev.innerHTML += `
                    <img src='${URL.createObjectURL(media)}' width="100%">
                `;
                    } else if (ext == "mp4" || ext == "ogg" || ext == "MOV" || ext == "avi") {
                        // var vid = document.createElement("video")
                        // vid.src = URL.createObjectURL(media);
                        // vid.controls = "true";
                        // prev.append(vid)
                        prev.innerHTML += `
                    
                <iframe src="player.php?src=${URL.createObjectURL(
                  media
                )}}" frameborder="0"></iframe>
                
                    `;
                    } else if (
                        ext == "mp4a" ||
                        ext == "wav" ||
                        ext == "flac" ||
                        ext == "mp3"
                    ) {
                        // var audio = document.createElement("audio")
                        // audio.src = URL.createObjectURL(media);
                        // audio.controls = "true";
                        // prev.append(audio)
                    }
                }
            });
        }
    }

    // function PreviewImage() {}

    // function portPrev() {}

    function appendAttribute(type) {
        let media = document.querySelector("#media");
        switch (type) {
            case "image":
                media.accept = "image/*";
                media.multiple = true;
                document.getElementById("media").click();
                break;
            case "video":
                media.accept = "video/*";
                media.multiple = false;
                document.getElementById("media").click();
                break;

            case "audio":
                media.accept = "audio/*";
                media.multiple = false;
                document.getElementById("media").click();
                break;
        }
    }
    $(".post_btn_main").on("click", () => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                create_write_up: 1,
                text_posted: $("#quick_write_up").val()
            },
            beforeSend: () => {
                document.querySelector(".post_btn_main").classList.toggle("active");
            },
            success: res => {
                $("#quick_write_up").val("");
                swal("Post creation", "was successful", "success");
            }
        });
    });

    $("#comment_input").on("keyup", () => {
        let users_at_list = document.querySelector(".users_at_list");
        let text = $("#comment_input").val();
        let exploded = text.split(" ");
        let arr = [];
        exploded.forEach(text_new => {
            if (text_new[0] === "#") {
                users_at_list.classList.add("active");
            } else if (text_new[0] === "@") {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        getUnameQuery: 1,
                        username: text_new.substring(1).toString()
                    },
                    success: data => {
                        users_at_list.innerHTML = " ";
                        data.forEach(res => {
                            if (res.error !== "ghost") {
                                let g;
                                if (res.name) {
                                    g = `<b>${res.name}</b>
                                    <p>@${res.username}</p>`;
                                } else {
                                    g = `<b>@${res.username}</b>
                                    <p>${res.bio}</p>`;
                                }

                                let temp = `
                                <div class="users_eachs uname_search_click" data-username="${res.username}">
                                    <div href="@${res.username}" class="img_area">
                                        <img src="media/dp/${res.avatar}">
                                    </div>
                                    <div class="username_and_bio">
                                        ${g}
                                        <button class=" btn btn-outline-lime " style="display: none;"></button>
                                    </div>
                                </div>
                            `;
                                users_at_list.innerHTML += temp;
                                getUnameQueryClick();
                            } else {
                                users_at_list.innerHTML = `<b class="text-danger"> user does not exist!</b>`;
                            }
                        });
                    }
                });
                users_at_list.classList.add("active");
            } else {
                users_at_list.classList.remove("active");
            }
        });
    });
    $("#rep_input").on("keyup", () => {
        let users_at_list = document.querySelector(".users_at_list");
        let text = $("#rep_input").val();
        let exploded = text.split(" ");
        let arr = [];
        exploded.forEach(text_new => {
            if (text_new[0] === "#") {
                users_at_list.classList.add("active");
            } else if (text_new[0] === "@") {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        getUnameQuery: 1,
                        username: text_new.substring(1).toString()
                    },
                    success: data => {
                        users_at_list.innerHTML = " ";
                        data.forEach(res => {
                            if (res.error !== "ghost") {
                                if (res.error !== "ghost") {
                                    let g;
                                    if (res.name) {
                                        g = `<b>${res.name}</b>
                                            <p>@${res.username}</p>`;
                                    } else {
                                        g = `<b>@${res.username}</b>
                                            <p>${res.bio}</p>`;
                                    }

                                    let temp = `
                                    <div class="users_eachs uname_search_click" data-username="${res.username}">
                                        <div href="@${res.username}" class="img_area">
                                            <img src="media/dp/${res.avatar}">
                                        </div>
                                        <div class="username_and_bio">
                                            ${g}
                                            <button class=" btn btn-outline-lime " style="display: none;"></button>
                                        </div>
                                    </div>
                                    `;
                                    users_at_list.innerHTML += temp;
                                    getUnameQueryClick();
                                } else {
                                    users_at_list.innerHTML = `<b class="text-danger"> user does not exist!</b>`;
                                }
                            } else {
                                users_at_list.innerHTML = `<b class="text-danger"> user does not exist!</b>`;
                            }
                        });
                    }
                });
                users_at_list.classList.add("active");
            } else {
                users_at_list.classList.remove("active");
            }
        });
    });
    var pc_notifications = document.querySelector(".pc_notifications");
    pc_notifications.addEventListener("click", () => {
        let notification_bx = document.querySelector(".notification_bx");
        notification_bx.classList.toggle("active");
    });
    $(".uni_search").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            document.querySelector(".universal_search").classList.remove("active");
            let search_value = $(".uni_search").val();
            if (search_value !== "") {
                if (search_value[0] == "#") {

                    setTimeout(() => {
                        location.href = "explore?q=" + search_value.slice(1) + "&&type=hash";
                    }, 500);
                } else {
                    const peffet_trans = document.querySelector(".peffet_trans");
                    peffet_trans.classList.add("is_active");
                    setTimeout(() => {
                        location.href = "explore?q=" + $(".uni_search").val();
                    }, 500);
                }
            }
        }
    });
    var delete_search_sugs = document.querySelectorAll(".delete_search_sug");
    delete_search_sugs.forEach(delete_search_sug => {
        delete_search_sug.addEventListener("click", () => {
            let id = delete_search_sug.getAttribute("data-sug-id");
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    deleSearch: 1,
                    sid: id
                },
                success: (data) => {
                    // 
                }
            });
            document.querySelectorAll("." + id)[0].innerHTML = '';
            document.querySelectorAll("." + id)[1].innerHTML = '';
        });
    });
    $(".uni_search_btn").on('click', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            document.querySelector(".universal_search").classList.remove("active");
            let search_value = $(".uni_search").val();
            if (search_value !== "") {
                if (search_value[0] == "#") {
                    const peffet_trans = document.querySelector(".peffet_trans");
                    peffet_trans.classList.add("is_active");
                    setTimeout(() => {
                        location.href = "explore?q=" + search_value.slice(1) + "&&type=hash";
                    }, 500);
                } else {
                    const peffet_trans = document.querySelector(".peffet_trans");
                    peffet_trans.classList.add("is_active");
                    setTimeout(() => {
                        location.href = "explore?q=" + $(".uni_search").val();
                    }, 500);
                }
            }
        }
    });
    $(".uni_search").on('click', function(e) {
        document.querySelector(".universal_search").classList.add("active");
    });
    $(".uni_search").on("keyup", () => {
        let search_value = $(".uni_search").val();
        explore_search(search_value);
    });

    var delete_post_btn = document.querySelector(".delete_post_btn");
    delete_post_btn.addEventListener("click", () => {
        let post_id = delete_post_btn.getAttribute("data-post-id");
        let post_div = document.querySelector(".peffet_post_" + post_id);
        swal("Are you sure you want to delete this post?", {
            buttons: ["No", "Yes"]
        }).then(value => {
            if (value == true) {
                $.ajax({
                    url: "qs",
                    method: "POST",
                    dataType: "JSON",
                    data: {
                        delete_post: 1,
                        post_id: post_id
                    },
                    success: data => {
                        if (data.response == "deleted") {
                            post_div.classList.add("d-none");
                            post_div.innerHTML = "";
                            swal("Done!", "Your post have been deleted!", "success");
                            document
                                .querySelector(".post_act_utl")
                                .classList.remove("active");
                            document.querySelector("body").classList.remove("active");
                        } else if (data.response == "error") {
                            swal("Sorry!", "An error occured!", "error");
                            document
                                .querySelector(".post_act_utl")
                                .classList.remove("active");
                            document.querySelector("body").classList.remove("active");
                        }
                    }
                });
            } else {
                document.querySelector(".post_act_utl").classList.remove("active");
                document.querySelector("body").classList.remove("active");
            }
        });
    });
    var theme_toggles = document.querySelectorAll(".theme_toggle");
    theme_toggles.forEach(theme_toggle => {
        theme_toggle.addEventListener("change", () => {
            let body = document.querySelector("body");
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    toggleTheme: 1
                },
                success: data => {
                    if (data.res) {
                        if (body.classList.contains("bg-light")) {
                            body.classList.replace("bg-light", "bg-dark");
                        } else {
                            body.classList.replace("bg-dark", "bg-light");
                        }
                    }
                }
            });
        });
    });

    function customAudioPlayer() {
        let audios = document.querySelectorAll(".evt_audio");
        audios.forEach(audio => {
            let sel_id = audio.getAttribute("data-audio-sel-id");
            var progress_range = document.querySelector(".audio_range_" + sel_id);
            var timestamp = document.querySelector('.tps_' + sel_id);
            var pause_or_play = document.querySelector(".pp_" + sel_id);
            var mute_or_umuted = document.querySelector(".mm_" + sel_id);
            //update progress & timestamp
            function updateProgress() {
                progress_range.value = (audio.currentTime / audio.duration) * 100;
                // get minutes
                let mins = Math.floor(audio.currentTime / 60);
                if (mins < 10) {
                    mins = '0' + String(mins);
                }

                //get seconds
                let secs = Math.floor(audio.currentTime % 60);
                if (secs < 10) {
                    secs = '0' + String(secs);
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
                    mute_or_umuted.innerHTML = `<i class="fa fa-volume-up"></i>`
                }
            }

            audio.addEventListener("timeupdate", updateProgress);
            audio.addEventListener("pause", toggle_btn);
            progress_range.addEventListener("change", setAudioProgress);
            pause_or_play.addEventListener("click", toggleBtn);
            mute_or_umuted.addEventListener("click", toggleSound);
        });
    }
    customAudioPlayer();
    $("#search_input_bx").on("keyup", () => {
        let value = $("#search_input_bx").val();
        let get_followers_to_share_post_to_bx = document.querySelector(
            ".get_followers_to_share_post_to_bx"
        );
        let post_id = document.querySelector(".share_user_post").getAttribute("data-post-id");
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                get_followers_to_share_post_to_search: 1,
                username: value
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
    });
});
function getSpecPost() {

    let url_string = location.href;
    let url = new URL(url_string);
    let post_id = url.searchParams.get("post_id")

    $.ajax({
        url: "qs",
        method: "POST",
        dataType: "JSON",
        data: {
            getSpecPost: 1,
            post_id: post_id
        },
        success: (data) => {
            data.forEach(res => {
                let id = "id" + RadomString(15);
                let pin = "id" + RadomString(11);
                var newtemp;
                let ac;
                document.querySelector(".top_nav_text").innerHTML = `By @${res.username || res.host_name}`;
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
                } else if (res.type == 'portrait_post') {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = portraitGet(res.avatar, res.username, res.time_ago, res.post_id, word, id, pin, ac, res.total_likes, res.total_comment, res.image, res.saved_num, res.post_saved);
                } else if (res.type == 'classic_write_up') {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = classicPostTempGet(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                } else if (res.type == 'typing_text') {
                    let text = res.text;
                    newtemp = typing_get(res.avatar, res.username, res.time_ago, res.post_id, res.bg, text, id, pin, ac, res.total_likes, res.total_comment, res.saved_num, res.post_saved);
                } else if (res.type == 'regular_post') {
                    let text = res.text;
                    let word = wordCheck(text);
                    newtemp = regula_post(res.avatar, res.username, res.time_ago, res.post_id, res.bg, word, id, pin, ac, res.total_likes, res.total_comment, res.images, res.saved_num, res.post_saved);
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
                document.querySelector(".post_view_page").innerHTML = newtemp;
                slider();
            })

        }
    });
}
getSpecPost();
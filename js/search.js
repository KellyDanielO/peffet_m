var search_timer = document.querySelector(".search_timer");
var main_search_bar = document.querySelector(".main_search_bar");
var close_search_bar = document.querySelector(".close_search_bar");
search_timer.addEventListener("click", () => {
    let search_box = document.getElementById("search_box");
    main_search_bar.classList.toggle("active");
    setTimeout(() => {
        search_box.click();
    }, 500);
})
close_search_bar.addEventListener("click", () => {
    main_search_bar.classList.toggle("active");
})
document.addEventListener("click", evt => {
    if (evt.target.classList.contains("list_cat")) {
        // 
    }
});


var nav_btns = document.querySelectorAll(".nav_btn");
nav_btns.forEach(nav_btn => {

    nav_btn.addEventListener("click", e => {
        nav_btns.forEach(k => {
            k.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})
let search_posts_btn = document.querySelector("#search_posts");
search_posts_btn.addEventListener("click", () => {
    getUserSearchPost();
});
let search_write_up = document.querySelector("#search_write_up");
search_write_up.addEventListener("click", () => {
    getUserSearchWriteUp();
})
let search_portrait = document.querySelector("#search_portrait");
search_portrait.addEventListener("click", () => {
    getUserSearchPort();
})
let search_reference = document.querySelector("#search_reference");
search_reference.addEventListener("click", () => {
    getUserSearchReference();
})
let search_users = document.querySelector("#search_users");
search_users.addEventListener("click", () => {
    users_search_suggestion();
})
let search_regular = document.querySelector("#search_regular");
search_regular.addEventListener("click", () => {
    getUserSearchReg();
})
let search_event = document.querySelector("#search_event");
search_event.addEventListener("click", () => {
    getUserSearchEvent();
})

var exp_notif = document.querySelector(".exp_notif");
exp_notif.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
        window.location.href = "notification";
    } else {
        document.getElementById("pc_notifications").click();
    }
});
var search_btn = document.querySelector(".search_btn");
search_btn.addEventListener("click", evt => {
    evt.preventDefault();
    let search_value = $("#search_box").val();
    if (search_value !== "") {
        if (search_value[0] == "#") {
            const peffet_trans = document.querySelector(".peffet_trans");
            main_search_bar.classList.toggle("active");
            peffet_trans.classList.add("is_active");
            setTimeout(() => {
                location.href = "explore?q=" + search_value.slice(1) + "&&type=hash";
            }, 500);
        } else {
            const peffet_trans = document.querySelector(".peffet_trans");
            main_search_bar.classList.toggle("active");
            peffet_trans.classList.add("is_active");
            setTimeout(() => {
                location.href = "explore?q=" + $("#search_box").val();
            }, 500);
        }
    }
});
$("#search_box").on("keyup", () => {
    let search_value = $("#search_box").val();
    explore_search(search_value);
});

let url_string = location.href;
let url = new URL(url_string);
let query = url.searchParams.get("q")
let type = url.searchParams.get("type")
if (type) {
    if (type == "hash") {
        document.querySelector(".search_q").innerHTML = "#" + query.slice(0, 80) + "..";
    }
} else {
    document.querySelector(".search_q").innerHTML = query.slice(0, 80) + "..";
}
let hash_tags_btn = document.querySelector("#search_hash_tags");
hash_tags_btn.addEventListener("click", () => {
    getRelatedHashTag();
});
var search_timer = document.querySelector(".search_timer");
var main_search_bar = document.querySelector(".main_search_bar");
var close_search_bar = document.querySelector(".close_search_bar");
search_timer.addEventListener("click", () => {
    let search_box = document.getElementById("search_box");
    main_search_bar.classList.toggle("active");
    setTimeout(() => {
        search_box.click();
    }, 500);
});
close_search_bar.addEventListener("click", () => {
    main_search_bar.classList.toggle("active");
});
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
        });
        e.target.classList.add("active");
    });
});
let posts_btn = document.querySelector("#posts");
posts_btn.addEventListener("click", () => {
    getUserWishListAll();
});
let write_up_btn = document.querySelector("#write_up");
write_up_btn.addEventListener("click", () => {
    getUserWishListWriteUp();
});
let portrait_btn = document.querySelector("#portrait");
portrait_btn.addEventListener("click", () => {
    getUserWishListPortrait();
});
let reference_btn = document.querySelector("#reference");
reference_btn.addEventListener("click", () => {
    getUserWishListReference();
});
// let users_btn = document.querySelector("#users");
// users_btn.addEventListener("click", () => {
//     users_suggestion();
// });
let regular_btn = document.querySelector("#regular");
regular_btn.addEventListener("click", () => {
    getUserWishListReg();
});
let event_btn = document.querySelector("#event");
event_btn.addEventListener("click", () => {
    getUserWishListEvent();
});
let hash_tags_btn = document.querySelector("#hash_tags");
hash_tags_btn.addEventListener("click", () => {
    getTrendingHash();
});
document.getElementById("posts").click();

var delete_search_sugs = document.querySelectorAll(".delete_search_sug");
delete_search_sugs.forEach(delete_search_sug => {
    delete_search_sug.addEventListener("click", () => {
        let id = delete_search_sug.getAttribute("data-sug-id");
        document.querySelector("." + id).innerHTML = "";
    });
});

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
if (window.innerWidth >= 1025) {
    let cont = document.querySelector(".cont_home")
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) + cont.scrollHeight / 1 / 3 >= cont.scrollHeight) {
            getWishListScroll();
        }
    }
} else {
    window.onscroll = function(ev) {
        if (window.innerHeight + window.scrollY + document.body.offsetHeight / 1 / 3 >= document.body.offsetHeight) {
            getWishListScroll();
        }
    }
}
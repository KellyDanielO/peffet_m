$("#fm").submit(evt => {
    evt.preventDefault();
    $("#fm").ajaxSubmit({
        // dataType: "JSON",
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
        success: (data) => {
            document.querySelector(".progress").classList.add("h");
            $(".results").html(data);


        }
    });
});
$("#editPass").submit(evt => {
    evt.preventDefault();
    $("#editPass").ajaxSubmit({
        // dataType: "JSON",
        beforeSubmit: () => {
            // $("#editPassBtn").html("Loading...");
        },
        contentType: false,
        procesData: false,
        success: (data) => {
            document.querySelector(".progress").classList.add("h");
            $(".pass_results").html(data);
            $("#editPassBtn").html("Reset");
            let edit_password = document.querySelector(".edit_password");
            let inputs = edit_password.querySelectorAll("input");
            inputs.forEach(input => {
                input.value = '';
            });
        }
    })
});
var media = document.querySelector("#img_change");

function PreviewImage() {

    var total_files = document.getElementById("img_change").files.length;
    var prev = document.querySelector("#img_prev");
    prev.innerHTML = "";
    for (let i = 0; i < total_files; i++) {
        var media = event.target.files[i]
        var m = event.target.files[i].name
        var ext = m.substring(m.lastIndexOf('.') + 1)
        if (ext == 'jpg' || ext == 'png' || ext == 'jpeg' || ext == 'gif') {
            prev.src = URL.createObjectURL(media);
        }

    }
}
media.addEventListener("change", PreviewImage);

var list_items = document.querySelectorAll(".list_item");
list_items.forEach(list_item => {
    list_item.addEventListener("click", () => {
        list_items.forEach(item => {
            item.classList.remove("active");
        });
        list_item.classList.add("active");
    });
});
var edit_profile = document.querySelector("#edit_profile");
var reset_password = document.querySelector("#reset_password");
var manage_acc_btn = document.querySelector("#manage_acc");
var account_info = document.querySelector("#account_info");
var blacklist_btn = document.querySelector("#blacklist");
var security = document.querySelector("#security");
var about = document.querySelector("#about");
var invite = document.querySelector("#invite");
var t_and_c = document.querySelector("#t_and_c");
var boxes = document.querySelectorAll(".boxes");

var edit_profile_bx = document.querySelector(".edit_profile_bx");
var reset_pass = document.querySelector(".reset_pass");
var manage_acc = document.querySelector(".manage_acc");
var acc_info = document.querySelector(".acc_info");
var blacklist = document.querySelector(".blacklist");
var about_page = document.querySelector(".about_page");
var secu = document.querySelector(".secu");
var back_btn = document.querySelector(".back_btn");
var right = document.querySelector(".right");
edit_profile.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    edit_profile_bx.classList.add('active');
    document.querySelector(".right").classList.add("active");
});
back_btn.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.remove("active");
});
reset_password.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.add('active');
    reset_pass.classList.add('active');
});
manage_acc_btn.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.add('active');
    manage_acc.classList.add('active');
});
account_info.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.add('active');
    acc_info.classList.add('active');
});
blacklist_btn.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.remove('active');
    blacklist.classList.add('active');
});
about.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.remove('active');
    about_page.classList.add('active');
});
security.addEventListener("click", () => {
    boxes.forEach(bx => {
        bx.classList.remove("active");
    });
    right.classList.remove('active');
    secu.classList.add('active');
});
if (window.innerWidth > 800) {
    document.getElementById("edit_profile").click();
}
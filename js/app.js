$(document).ready(() => {

    $("#username_field_log").on("keyup", () => {
        let uname_check = document.querySelector(".uname_check");
        if (validateUserName($("#username_field_log").val())) {
            uname_check.style = "color: limegreen";
            uname_check.classList.replace("fa-times", "fa-check");
        } else {
            uname_check.style = "color: red";
            uname_check.classList.replace("fa-check", "fa-times");
            // console.log("no")
        }
    })
    $("#email_field").on("keyup", () => {
        let email_check = document.querySelector(".email_check");
        if (validateEmail($("#email_field").val())) {
            email_check.style = "color: limegreen";
            email_check.classList.replace("fa-times", "fa-check");
        } else {
            email_check.style = "color: red";
            email_check.classList.replace("fa-check", "fa-times");
            // console.log("no")
        }
    })
    $(".password_view").on("click", () => {
        let password_view = document.querySelector(".password_view");
        let password_field = document.querySelector("#password_field");
        if (password_field.type === "text") {
            password_field.type = "password";
            password_view.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            password_field.type = "text";
            password_view.classList.replace("fa-eye-slash", "fa-eye");

        }
    })
    $(".validate_username").on("keyup", () => {
        $.ajax({
            url: "qs",
            method: "POST",
            dataType: "JSON",
            data: {
                valUserName: 1,
                username: $(".validate_username").val()
            },
            success: (res) => {
                if (res === false && validateUserName($("#username_field").val())) {
                    let uname_check = document.querySelector(".uname_check");
                    uname_check.classList.replace("fa-check", "fa-check-circle");
                    uname_check.style = "color: limegreen";

                } else {
                    let uname_check = document.querySelector(".uname_check");
                    uname_check.style = "color: red";

                }

            }
        });
    });
    $(".signup_btn").on("click", () => {
        if ($(".validate_username").val() !== "" || $("#email_field").val() !== "" || $("#password_field").val() !== "") {
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    SignupNewUser: 1,
                    username: $(".validate_username").val(),
                    email: $("#email_field").val(),
                    password: $("#password_field").val(),
                },
                beforeSend: () => {
                    $(".signup_btn").html("loading..");
                },
                success: (res) => {
                    switch (res) {
                        case "empty":
                            $(".signup_btn").html("All fields are required!");
                            break;
                        case "invalid email":
                            $(".signup_btn").html("Invalid E-mail!");
                            break;
                        case "username taken":
                            $(".signup_btn").html("Username taken!");
                            break;
                        case "error":
                            $(".signup_btn").html("An error occured!");
                            break;
                        case "done":
                            swal("Good job!", "Registration successful!", "success");
                            $(".signup_btn").html("Successful!");
                            window.location.href = "home";
                            break;

                        default:
                            break;
                    }

                }
            });
        } else {
            $(".signup_btn").html("All fields are required!");

        }

    })
    $(".login_btn").on("click", () => {
        if ($("#username_field_log").val() !== "" !== "" || $("#password_field").val() !== "") {
            $.ajax({
                url: "qs",
                method: "POST",
                dataType: "JSON",
                data: {
                    LoginUser: 1,
                    username: $("#username_field_log").val(),
                    password: $("#password_field").val(),
                },
                beforeSend: () => {
                    $(".login_btn").html("loading..");
                },
                success: (res) => {
                    switch (res) {
                        case "empty":
                            $(".login_btn").html("All fields are required!");
                            break;
                        case "ghost username":
                            $(".login_btn").html("Username not found!");
                            break;
                        case "incorrect password":
                            $(".login_btn").html("Incorrect password!");
                            break;
                        case "error":
                            $(".login_btn").html("An error occured!");
                            break;
                        case "done":
                            swal("Good job!", "Login successful!", "success");
                            $(".login_btn").html("Successful!");
                            window.location.href = "home";
                            break;

                        default:
                            break;
                    }

                }
            });
        } else {
            $(".login_btn").html("All fields are required!");

        }

    })

})
$(document).ready(() => {
    localStorage.setItem("me", "me")

    function validateUserName(username) {
        var usernameRegex = /^[a-zA-Z0-9-_.]+$/;
        return usernameRegex.test(username);
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateUserNameQuery(username) {
        $.ajax({
            url: "query.script.php",
            method: "POSt",
            data: {
                checkUsername: 1,
                username: username
            },
            success: (res) => {
                $(".uc").html(res);
            }
        });
    }
    var username = document.querySelector("#username");
    username.addEventListener("keyup", () => {
        if (validateUserName(username.value) == false) {
            username.style = "border-bottom: 1px solid red;";
        } else {
            username.style = '';
            validateUserNameQuery(username.value);

        }
    });
    var signup = document.querySelector("#signup");


    var email = document.querySelector("#email");
    if (email) {
        email.addEventListener("keydown", () => {
            if (validateEmail(email.value) == false) {
                email.style = "border-bottom: 1px solid red;";
            } else {
                email.style = "";
            }
        });
    }

});
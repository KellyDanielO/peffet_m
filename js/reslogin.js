var login = document.querySelector("#login");

function validateUserName(username) {
    var usernameRegex = /^[a-zA-Z0-9-_.]+$/;
    return usernameRegex.test(username);
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
login.addEventListener("click", () => {
    let username = $("#username");
    let password = $("#password");
    if (username == "" || password == "") {
        error.innerHTML = "All fields are required";
    } else if (validateUserName(username.val()) == false) {
        error.innerHTML = "Invalid username";
    } else {
        $.ajax({
            url: "query.script.php",
            method: "POSt",
            data: {
                loginUser: 1,
                username: username.val(),
                password: password.val()
            },
            success: function(res) {

                $(".error_res").html(res);
            }
        });
    }

});
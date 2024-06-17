var signup = document.querySelector("#signup");

function otp(email) {
    emailjs.init('user_j9YNgCviV2OlwriYmRWPk')
    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_vwunxte';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
}


signup.addEventListener("click", () => {
    var error = document.querySelector(".error_res");
    var a = Math.floor(100000 + Math.random() * 900000);
    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let otp = a;
    if (username == "" || email == "" || password == "") {
        error.innerHTML = "All fields are required";
    } else if (validateUserName(username) == false) {
        error.innerHTML = "Invalid username";
    } else {
        $.ajax({
            url: "query.script.php",
            method: "POSt",
            data: {
                signupUser: 1,
                username: username,
                email: email,
                password: password,
                otp: otp
            },
            success: (res) => {
                password.val(" ")
                $(".error_res").html(res);

            }
        });
    }

});
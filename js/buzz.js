var box = document.querySelector(".main_content_for_buzz")
var cont = document.documentElement.clientHeight;
box.addEventListener("scroll", CheckViewPort)
CheckViewPort();

function CheckViewPort() {
    var bx = document.querySelectorAll(".media_holder");
    for (var i = bx.length - 1; i >= 0; i--) {
        var ib = bx[i]
        if (ib.getBoundingClientRect().top >= 0 && ib.getBoundingClientRect().bottom < cont) {
            var vido_element = ib.querySelector("video");
            vido_element.play();
        } else {
            var vido_element = ib.querySelector("video");
            vido_element.pause();

        }
    }
}

var video = document.querySelectorAll("video");
video.forEach(video_element => {
    video_element.addEventListener("click", () => {
        if (!video_element.paused) {
            video_element.pause();
        } else {
            video_element.play()
        }
    })
})
// $(document).ready(() => {
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
// });
window.onload = () => {
    const peffet_trans = document.querySelector(".peffet_trans");
    const anchors = document.querySelectorAll("a");
    setTimeout(() => {
        peffet_trans.classList.remove("is_active");
    }, 500);
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            let target = anchor.href;
            peffet_trans.classList.add("is_active");
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })

    }
}
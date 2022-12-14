const menuBtn = document.querySelector("[data-menu-button]");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menu.classList.remove("closed");
        menuBtn.classList.add("open");
        menu.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menu.classList.remove("open");
        menuOpen = false;
        menu.addEventListener(
            "transitionend",
            () => {
                console.log("here");
                menu.classList.add("closed");
            }, { once: true }
        );
    }
});
const menu = document.querySelector("[data-menu]");

Array.from(document.querySelectorAll("[data-menu-item]")).forEach(
    (item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        };
    }
);

menu.addEventListener("transitionend", () => {});
const menu = document.querySelector("[data-menu]");
const menuItems = document.querySelector("[data-menu-items]");

console.log(`Inner html:           ${menuItems.innerHTML}`);
const menuLinks = [{
        name: "home",
        link: "./",
    },
    {
        name: "about",
        link: "",
    },
    {
        name: "music",
        link: "./music.html",
    },
];

menuItems.innerHTML = "";

for (const link of menuLinks) {
    if (link.link == "") {
        link.link = "#";
    }
    menuItems.innerHTML += `<a href="${link.link}" class="menu-item" data-menu-item>${link.name}</a>`;
}

Array.from(document.querySelectorAll("[data-menu-item]")).forEach(
    (item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
            menu.style.setProperty("--bg-pos-y", index * -25 - 25 + "%");
        };
    }
);

menu.addEventListener("transitionend", () => {});
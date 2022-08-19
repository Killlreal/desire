// const btnOpen = document.querySelector(".js-header__btn");
// const btnClose = document.querySelector(".js-popup__close");
// const popup = document.querySelector(".popup");

// btnOpen.addEventListener("click", function (e) {
//     e.preventDefault();
//     popup.classList.add("is-open");
// });
// btnClose.addEventListener("click", () => {
//     popup.classList.remove("is-open");
// });

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".js-popup__close");

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; ++index) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        // const popupActive = document.querySelector(".popup.is-open");
        // console.log(popupActive);
        // если у нас в попапе ссылка на другой попап
        // if(popupAcitve){
        //     popupClose(popuAcitve, false);
        // } else {
        //     bodyLock();
        // }
        currentPopup.classList.add("is-open");
        body.classList.add("is-lock");
        // при клике на область вне попапа, закрывается popup
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("is-open");
        body.classList.remove("is-lock");
        // if (doUnlock) {
        //     bodyUnlock();
        // }
    }
}
// закрываем попап на esc
document.addEventListener("keydown", function (e) {
    const popupActive = document.querySelector(".popup.is-open");
    if (e.code == "Escape" && popupActive) {
        popupClose(popupActive);
    }
});

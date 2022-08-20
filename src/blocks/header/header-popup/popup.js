const popupLinks = document.querySelectorAll(".js-popup-link");
const body = document.body;
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 400;

popupLinks.forEach((item) => {
    item.addEventListener("click", function (e) {
        const popupName = item.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        e.preventDefault();
    });
});

const popupCloseIcon = document.querySelectorAll(".js-popup__close");

popupCloseIcon.forEach((item) => {
    item.addEventListener("click", function (e) {
        popupClose(item.closest(".popup"));
        e.preventDefault();
    });
});

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector(".popup.is-open");
        // если у нас в попапе ссылка на другой попап
        if(popupActive){
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add("is-open");
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
        if (doUnlock) {
            bodyUnlock();
        }
    }
}


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    lockPadding.forEach((item) =>{
        item.style.lockPaddingRight = lockPaddingValue;
    });
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("is-lock");
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function() {
        lockPadding.forEach((item) =>{
            item.style.lockPaddingRight = "0px";
            console.log(item.style.lockPaddingRight);
            
        });
        body.style.paddingRight = "0px";
        body.classList.remove("is-lock");
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


// закрываем попап на esc
document.addEventListener("keydown", function (e) {
    const popupActive = document.querySelector(".popup.is-open");
    if (e.code == "Escape" && popupActive) {
        popupClose(popupActive);
    }
});

export class Popup {
    element;
    constructor(popupSelector) {
        this.element = document.querySelector(popupSelector);
    }
    open() {
        this.element.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.element.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };
    setEventListeners() {
        this.element.addEventListener("click", (evt) => {
            const target = evt.target;
            if (target.classList.contains("popup_is-opened") ||
                target.classList.contains("popup__close")) {
                this.close();
            }
        });
    }
}
//# sourceMappingURL=Popup.js.map
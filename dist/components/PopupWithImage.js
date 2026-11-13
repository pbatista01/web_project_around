import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    image;
    caption;
    constructor(popupSelector) {
        super(popupSelector);
        this.image = this.element.querySelector(".popup__image");
        this.caption = this.element.querySelector(".popup__caption");
    }
    open(data) {
        if (data) {
            this.image.src = data.link;
            this.image.alt = data.name;
            this.caption.textContent = data.name;
        }
        super.open();
    }
}
//# sourceMappingURL=PopupWithImage.js.map
export class Card {
    data;
    templateSelector;
    handleCardClick;
    element;
    cardImage;
    cardTitle;
    likeButton;
    deleteButton;
    constructor(data, templateSelector, handleCardClick) {
        this.data = data;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.templateSelector);
        const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
        return cardElement;
    }
    getElements() {
        this.cardImage = this.element.querySelector(".card__image");
        this.cardTitle = this.element.querySelector(".card__title");
        this.likeButton = this.element.querySelector(".card__like-button");
        this.deleteButton = this.element.querySelector(".card__delete-button");
    }
    setCardData() {
        const title = this.data.name || "Sin titulo";
        const image = this.data.link || "./images/placeholder.jpg";
        this.cardImage.src = image;
        this.cardImage.alt = title;
        this.cardTitle.textContent = title;
    }
    handleLike() {
        this.likeButton.classList.toggle("card__like-button_is-active");
    }
    handleDelete() {
        this.element.remove();
    }
    setEventListeners() {
        this.likeButton.addEventListener("click", () => this.handleLike());
        this.deleteButton.addEventListener("click", () => this.handleDelete());
        this.cardImage.addEventListener("click", () => this.handleCardClick({
            name: this.cardTitle.textContent ?? "",
            link: this.cardImage.src,
        }));
    }
    generateCard() {
        this.element = this.getTemplate();
        this.getElements();
        this.setCardData();
        this.setEventListeners();
        return this.element;
    }
}
//# sourceMappingURL=Card.js.map
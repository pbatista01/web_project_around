import type {CardData} from "../types/types.js";

export class Card{
        private data : CardData;
        private templateSelector : string;
        private handleCardClick: (data : CardData) => void;
        private element! : HTMLElement;
        private cardImage! :HTMLImageElement;
        private cardTitle! : HTMLElement;
        private likeButton! : HTMLButtonElement;
        private deleteButton! : HTMLButtonElement;

        constructor (data:CardData, templateSelector:string, handleCardClick : (data : CardData) => void){
            this.data = data;
            this.templateSelector = templateSelector;
            this.handleCardClick = handleCardClick;
        }

        private getTemplate() : HTMLElement{
            const cardTemplate = document.querySelector(this.templateSelector) as HTMLTemplateElement;
            const cardElement = cardTemplate.content.querySelector(".card")!.cloneNode(true) as HTMLElement;
            
            return cardElement;
        }

        private getElements(){
            this.cardImage = this.element.querySelector(".card__image") as HTMLImageElement;
            this.cardTitle = this.element.querySelector(".card__title") as HTMLElement;
            this.likeButton = this.element.querySelector(".card__like-button") as HTMLButtonElement;
            this.deleteButton = this.element.querySelector(".card__delete-button") as HTMLButtonElement;
        }

        private setCardData():void{
            const title = this.data.name || "Sin titulo";
            const image = this.data.link || "./images/placeholder.jpg";

            this.cardImage.src = image;
            this.cardImage.alt = title;
            this.cardTitle.textContent=title;

        }

        private handleLike():void{
            this.likeButton.classList.toggle("card__like-button_is-active");
        }

        private handleDelete() : void{
            this.element.remove();
        }

        private setEventListeners():void{
            this.likeButton.addEventListener("click", () => this.handleLike());
            this.deleteButton.addEventListener("click", () => this.handleDelete());
            this.cardImage.addEventListener("click", () => 
                this.handleCardClick({
                    name: this.cardTitle.textContent ?? "",
                    link: this.cardImage.src,
                })
            );
        }

        public generateCard() : HTMLElement{
            this.element = this.getTemplate();
            this.getElements();
            this.setCardData();
            this.setEventListeners();
            return this.element;
        }

}

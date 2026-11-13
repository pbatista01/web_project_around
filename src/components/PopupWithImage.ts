import { Popup } from "./Popup.js";
import type { CardData } from "../types/types.js"

export class PopupWithImage extends Popup{
    private image: HTMLImageElement;
    private caption : HTMLElement;

    constructor(popupSelector:string){
        super(popupSelector);
        this.image = this.element.querySelector(".popup__image") as HTMLImageElement;
        this.caption = this.element.querySelector(".popup__caption") as HTMLElement;
    }

    public override open(data?:CardData) : void{
        if(data){
            this.image.src = data.link;
            this.image.alt = data.name;
            this.caption.textContent = data.name;
        }
        super.open();
    }
}
export class Popup{
    protected element! : HTMLElement;

    constructor(popupSelector:string){
        this.element = document.querySelector(popupSelector) as HTMLElement;
    }

    public open():void{
        this.element.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    
    public close():void{
        this.element.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }

    private handleEscClose = (evt:KeyboardEvent):void => {
        if(evt.key === "Escape"){
        this.close();
       }
    }

    public setEventListeners():void{
        this.element.addEventListener("click", (evt: MouseEvent) =>{
            const target = evt.target as HTMLElement;
            if(
                target.classList.contains("popup_is-opened") || 
                target.classList.contains("popup__close")
            ){
                this.close();
            }
        });
    }

}
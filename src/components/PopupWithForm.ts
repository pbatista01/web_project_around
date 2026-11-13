import { Popup } from "./Popup.js"
import type {FormValues} from "../types/types.js";

export type FormSubmitHandler = (values:FormValues) => void;

export class PopupWithForm extends Popup{
    private handleFormSubmit: FormSubmitHandler;
    private form : HTMLFormElement;
    private inputList: HTMLInputElement[];

    constructor(popupSelector: string, handleFormSubmit: FormSubmitHandler){
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this.form = this.element.querySelector(".popup__form") as HTMLFormElement;
        this.inputList = Array.from(
            this.form.querySelectorAll(".popup__input")) as HTMLInputElement[];
    }

    public getInputValues():FormValues{
        const values: FormValues = {};
        this.inputList.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    public override setEventListeners():void{
        super.setEventListeners();
        this.form.addEventListener("submit", (evt: SubmitEvent) => {
            evt.preventDefault();
            this.handleFormSubmit(this.getInputValues());
            this.close();
        });
    }

    public override close():void{
        super.close();
        this.form.reset();
    }

}
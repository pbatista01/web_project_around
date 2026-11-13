import type {FormConfig} from "../types/types.js";

export class FormValidator {
    private formConfig : FormConfig;
    private formElement : HTMLFormElement;
    private inputList : HTMLInputElement[];
    private buttonElement : HTMLButtonElement;

    constructor(formConfig : FormConfig, formElement: HTMLFormElement){
        this.formConfig = formConfig;
        this.formElement = formElement;

        this.inputList = Array.from(this.formElement.querySelectorAll<HTMLInputElement>(this.formConfig.inputSelector));
        
        const buttonElement = this.formElement.querySelector<HTMLButtonElement>(this.formConfig.submitButtonSelector);
        if(!buttonElement) {
            throw new Error("No se encuentra el boton de envio");
        }
        this.buttonElement = buttonElement;
       
    }

    private showInputError(inputElement : HTMLInputElement , errorMessage : string) : void{
    const errorElement = this.formElement.querySelector<HTMLElement>(`#${inputElement.id}-error`);
    inputElement.classList.add(this.formConfig.inputErrorClass);
    if(errorElement){
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.formConfig.errorClass);
    }
    }


    private hideInputError(inputElement : HTMLInputElement ): void {
    const errorElement = this.formElement.querySelector<HTMLElement>(`#${inputElement.id}-error`);
    inputElement.classList.remove(this.formConfig.inputErrorClass);
    if(errorElement){
        errorElement.textContent = "";
        errorElement.classList.remove(this.formConfig.errorClass);
    }
    }

   private checkInputValidity(inputElement : HTMLInputElement) : void{
    if(!inputElement.validity.valid){
        this.showInputError(inputElement, inputElement.validationMessage);
    } else {
        this.hideInputError(inputElement);
    }
   }

   private hasInvalidInput() : boolean{
    return this.inputList.some((inputElement : HTMLInputElement) => !inputElement.validity.valid);
    }

    private toggleButtonState() : void{
    if(this.hasInvalidInput()){
        this.buttonElement.classList.add(this.formConfig.inactiveButtonClass);
        this.buttonElement.disabled = true;
    } else {
        this.buttonElement.classList.remove(this.formConfig.inactiveButtonClass);
        this.buttonElement.disabled = false;
    }
    }

    private setEventListeners():void{
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", (evt : Event) => {
            const target = evt.target as HTMLInputElement;
            this.checkInputValidity(target);
            this.toggleButtonState();
        });
    });
    }

    public enableValidation():void{
        this.setEventListeners();
    }

    public resetValidation():void{
    this.inputList.forEach((inputElement) => {
        this.hideInputError(inputElement);
    });
    this.toggleButtonState();
    }
}



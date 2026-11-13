export class FormValidator {
    formConfig;
    formElement;
    inputList;
    buttonElement;
    constructor(formConfig, formElement) {
        this.formConfig = formConfig;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.formConfig.inputSelector));
        const buttonElement = this.formElement.querySelector(this.formConfig.submitButtonSelector);
        if (!buttonElement) {
            throw new Error("No se encuentra el boton de envio");
        }
        this.buttonElement = buttonElement;
    }
    showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this.formConfig.inputErrorClass);
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this.formConfig.errorClass);
        }
    }
    hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this.formConfig.inputErrorClass);
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.classList.remove(this.formConfig.errorClass);
        }
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this.hideInputError(inputElement);
        }
    }
    hasInvalidInput() {
        return this.inputList.some((inputElement) => !inputElement.validity.valid);
    }
    toggleButtonState() {
        if (this.hasInvalidInput()) {
            this.buttonElement.classList.add(this.formConfig.inactiveButtonClass);
            this.buttonElement.disabled = true;
        }
        else {
            this.buttonElement.classList.remove(this.formConfig.inactiveButtonClass);
            this.buttonElement.disabled = false;
        }
    }
    setEventListeners() {
        this.toggleButtonState();
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", (evt) => {
                const target = evt.target;
                this.checkInputValidity(target);
                this.toggleButtonState();
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
    }
    resetValidation() {
        this.inputList.forEach((inputElement) => {
            this.hideInputError(inputElement);
        });
        this.toggleButtonState();
    }
}
//# sourceMappingURL=FormValidator.js.map
import type { FormConfig } from "../types/types.js";
export declare class FormValidator {
    private formConfig;
    private formElement;
    private inputList;
    private buttonElement;
    constructor(formConfig: FormConfig, formElement: HTMLFormElement);
    private showInputError;
    private hideInputError;
    private checkInputValidity;
    private hasInvalidInput;
    private toggleButtonState;
    private setEventListeners;
    enableValidation(): void;
    resetValidation(): void;
}
//# sourceMappingURL=FormValidator.d.ts.map
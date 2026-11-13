import { Popup } from "./Popup.js";
import type { FormValues } from "../types/types.js";
export type FormSubmitHandler = (values: FormValues) => void;
export declare class PopupWithForm extends Popup {
    private handleFormSubmit;
    private form;
    private inputList;
    constructor(popupSelector: string, handleFormSubmit: FormSubmitHandler);
    getInputValues(): FormValues;
    setEventListeners(): void;
    close(): void;
}
//# sourceMappingURL=PopupWithForm.d.ts.map
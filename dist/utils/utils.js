import { Card } from "../components/Card.js";
import { cardTemplateSelector } from "./constants.js";
export function createCard(data, handleCardClick) {
    const card = new Card(data, cardTemplateSelector, handleCardClick);
    return card.generateCard();
}
export function fillProfileForm(nameInput, jobInput, data) {
    nameInput.value = data.name;
    jobInput.value = data.job;
}
//# sourceMappingURL=utils.js.map
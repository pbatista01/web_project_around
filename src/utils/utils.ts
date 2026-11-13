import { Card } from "../components/Card.js";
import { cardTemplateSelector } from "./constants.js";
import type { CardData } from "../types/types.js";

export function createCard(
data: CardData,
handleCardClick : (data: CardData) => void
): HTMLElement {
    const card = new Card(data, cardTemplateSelector, handleCardClick);
    return card.generateCard();
}

export function fillProfileForm(
    nameInput: HTMLInputElement,
    jobInput: HTMLInputElement,
    data: { name: string; job: string}
):void {
    nameInput.value = data.name;
    jobInput.value = data.job;
}


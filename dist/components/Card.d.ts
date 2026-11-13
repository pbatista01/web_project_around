import type { CardData } from "../types/types.js";
export declare class Card {
    private data;
    private templateSelector;
    private handleCardClick;
    private element;
    private cardImage;
    private cardTitle;
    private likeButton;
    private deleteButton;
    constructor(data: CardData, templateSelector: string, handleCardClick: (data: CardData) => void);
    private getTemplate;
    private getElements;
    private setCardData;
    private handleLike;
    private handleDelete;
    private setEventListeners;
    generateCard(): HTMLElement;
}
//# sourceMappingURL=Card.d.ts.map
type RendererFunction<T> = (item: T) => void;
export declare class Section<T> {
    private items;
    private renderer;
    private container;
    constructor({ items, renderer }: {
        items: T[];
        renderer: RendererFunction<T>;
    }, containerSelector: string);
    renderItems(): void;
    addItem(element: HTMLElement): void;
}
export {};
//# sourceMappingURL=Section.d.ts.map
export class Section {
    items;
    renderer;
    container;
    constructor({ items, renderer }, containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.items = items;
        this.renderer = renderer;
    }
    renderItems() {
        this.items.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        this.container.prepend(element);
    }
}
//# sourceMappingURL=Section.js.map
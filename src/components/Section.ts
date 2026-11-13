type RendererFunction<T> = (item:T) => void;

export class Section<T>{
    private items: T[];
    private renderer: RendererFunction<T>;
    private container: HTMLElement;

    constructor({items, renderer}:{items: T[]; renderer: RendererFunction<T>}, containerSelector: string){
        this.container = document.querySelector(containerSelector) as HTMLElement;
        this.items = items;
        this.renderer = renderer;
    }

    public renderItems():void{
        this.items.forEach((item) =>{
            this.renderer(item);
        });
    }

    public addItem(element: HTMLElement) : void{
        this.container.prepend(element);
    }
}
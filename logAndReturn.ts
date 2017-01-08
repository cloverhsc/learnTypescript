function logAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

let loR: number = logAndReturn<number>(100);
let lr: string = logAndReturn<string>("clover");

// 也可以傳自己的class
class Book {
    public title: string;
    constructor() {
        this.title = "This is a book";
    }
}

let newbook = new Book();
let bk: Book = logAndReturn<Book>(newbook);

// class 的generic
interface ShelfTitle {
    title: string;
}
class Shelf<T extends ShelfTitle> {
    private _items: Array<T> = new Array<T>();
    add(item: T): void { this._items.push(item); }
    printTitles(): void {
        this._items.forEach(
            item => console.log(item.title)
        );
    }
}

let myShelf = new Shelf<Book>();
myShelf.add(bk);
myShelf.printTitles();

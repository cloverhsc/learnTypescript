function logAndReturn(thing) {
    console.log(thing);
    return thing;
}
var loR = logAndReturn(100);
var lr = logAndReturn("clover");
// 也可以傳自己的class
var Book = (function () {
    function Book() {
        this.title = "This is a book";
    }
    return Book;
}());
var newbook = new Book();
var bk = logAndReturn(newbook);
var Shelf = (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) { this._items.push(item); };
    Shelf.prototype.printTitles = function () {
        this._items.forEach(function (item) { return console.log(item.title); });
    };
    return Shelf;
}());
var myShelf = new Shelf();
myShelf.add(bk);
myShelf.printTitles();

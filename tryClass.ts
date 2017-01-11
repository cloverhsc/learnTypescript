class MyClass {
    private isTrue = true;
    public myname: string = '';

    constructor() {
        this.changeName();
    }

    changeName() {
        if (this.isTrue)
        {
            this.myname = 'Clover';
        }
        else
        {
            this.myname = 'Hsc';
        }
    }
}

var mc = new MyClass();
console.log(mc);

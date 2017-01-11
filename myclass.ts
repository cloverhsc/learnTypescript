class Info {
    id: number;
    name: string;
}
class Ation {
    public branch;

    constructor() {
        this.branch = new Branch();
    }
}

let newloc = new Ation();
newloc.branch.id = 1;
newloc.branch.name = 'clover';

console.log(newloc);

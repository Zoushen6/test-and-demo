class Dep {
    constructor() {
        this.a = () => {
        console.log(23156456)
    }
    }
    
}
Dep.target = 1222
console.log(Dep.target);
const dep = new Dep()
dep.a()
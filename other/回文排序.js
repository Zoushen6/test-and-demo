// tactcoa
//true ： 可以组成回文  tacocat  atcocta

    let str = 'tactcoa';
    
    let obj = {};
    for (let i of str) {
        obj[i] = obj[i] ? 0 : 1;
    }
    //obj:{ t: 0, a: 0, c: 0, o: 1 }
    console.log(obj);
    let result = Object.values(obj).filter(i => i === 1).length < 2
    console.log(result);
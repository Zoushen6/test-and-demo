let f = function (c,d) {
    this.a = 1;
    this.b = 2;
    console.log(c+d);
 }
 let c = [5,5]
//  console.log(f);
f.apply(this,c);
// f.call(this,5,5)
 console.log(this.a);
 console.log(this.b);
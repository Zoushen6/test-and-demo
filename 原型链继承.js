function Parent(){
    this.name = "parent";
    this.list = ['a'];
  }
  Parent.prototype.sayHi = function(){
    console.log('hi');
  }
  function Child(){
   
  }
  Child.prototype = new Parent();
  var child = new Child();
  child.list.push('modify') 
  console.log(Child.prototype);
  console.log(child.name);
  child.sayHi();
  var child2 = new Child();
  console.log(Child.prototype);
  console.log(child2.name);
  child2.sayHi();
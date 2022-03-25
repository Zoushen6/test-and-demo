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
  console.log(Child.prototype);
  console.log(child.name);
  child.sayHi();
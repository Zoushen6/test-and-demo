let num = 0;
function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(function(){
            console.log(this.num);
        }.bind(this), 1000)    //利用bind()将this绑定到这个函数上
    }
}
console.log(this);
obj.getNum();//1　　打印的为obj.num，值为1
obj.getNumLater()//1　　打印的为obj.num，值为1 不用bind的话，setTimeout默认指向window  会输出0
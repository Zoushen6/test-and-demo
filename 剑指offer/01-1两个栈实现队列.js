let Queue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

Queue.prototype.appendTail = function(value) {
    this.stack1.push(value);
    return this.stack1;
};

Queue.prototype.deleteHead = function() {
    if(this.stack2.length){
        return this.stack2.pop();
    };
    if(!this.stack1.length)
        return -1;
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();

    //shift直接做到从数组最前面删除
    // if(this.stack1.length){
    //     return this.stack1.shift();
    // }else {
    //     return -1;
    // };
};

let que = new Queue();
que.appendTail(1)
que.appendTail(2)
que.appendTail(3)
console.log(que);
console.log(que.deleteHead());
console.log(que.deleteHead());
console.log(que);


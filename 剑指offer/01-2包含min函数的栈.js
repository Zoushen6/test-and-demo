var MinStack = function() {
    this.stack = [];
    this.minnum = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    // this.minnum = Math.min(...this.stack)
    if(this.stack.length === 1)
    this.minnum = x;
    else 
    this.minnum = Math.min(this.minnum,x)
    
    console.log(this.minnum);
    console.log(Math.min(this.minnum,x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popnum = this.stack.pop();
    if(popnum == this.minnum) {
        this.minnum = Math.min(...this.stack)
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length-1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {  
    return this.minnum;
};

var obj = new MinStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
console.log(obj.min());

// console.log(obj.pop());

// console.log(obj.min());


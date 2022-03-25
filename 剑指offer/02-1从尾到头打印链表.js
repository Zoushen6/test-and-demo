function ListNode(val) {
    this.val = val;
    this.next = null;
}

//辅助栈
var reversePrint = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let res = [],i=0;
    while(i<arr.length){
        res.push(arr.pop());
        i++;
    }
    return res
};

//递归简化
var reversePrint = function(head, arr = []) {
    return head == null ? [] : reversePrint(head.next).concat(head.val);
};
  

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head==null){
        return null
    }
    let res =  head;
    let resHead = head; 
    let arr = [];
    while(head){
        arr.push(head.val);
        head= head.next;
    };
    while(res){
        res.val = arr.pop();
        res = res.next;
    };
    return resHead;
};

//遍历更改next指针
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    //这里的prev其实是原链表的最后一个节点  只不过指针指向翻转  成了新链表的头节点
    return prev;
 
    //es6简化语法
    let [p, c] = [null, head]
    //p = null  c = head 
    //这个和迭代有个很重要的区别点， = [p, c, c.next] js会先计算=号右边的， 所以c.next的值也会被保存下来，
    // 迭代是用next不断的保存c.next, 注意在=号左边c.next 一定要在c之前， 保证c.next指向p之后在重新赋值c
    while (c) [c.next, p, c] = [p, c, c.next]
    return p

};
    //递归

    //  令F(node)为问题:反转以node为头节点的单向链表；
    // 一般，我们需要考虑F(n)和F(n-1)的关系，那么这里，如果n代表以node为头节点的单向链表，那么n-1就代表以node.next为头节点的单向链表.
    // 所以，我们令F(node.next)为问题：反转以node.next为头节点的单向链表；
    // 那么，F(node)和F(node.next)之间的关系是？这里我们来简单画个图，假设我们反转3个节点的链表：
    // 1 -> 2 -> 3
    // 那么，F(node=1)=F(node=2)+?
    // 这里假设子问题F(node=2)已经解决，那么我们如何解决F(node=1)：
    // 很明显，我们需要反转node=2和node=1， 即 node.next.next=node; 同时 node.next=null;
    // 所以，这个问题就可以是：F(node=1)=F(node=2)+ 反转node=2和node=1

var reverseList = function(head) {
    if(head == null || head.next == null)
    return head
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead
}

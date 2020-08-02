function ListNode(val) {
    this.val = val;
    this.next = null;
}
function getNode(l1){
    let arr = []
    while(true){
        if(l1.next===null){
            arr.push(l1.val)
            return arr
        }
        arr.push(l1.val)
        l1 = l1.next
        getNode(l1)
    }
}
function checkNode(num){
    let arr= String(num).split("").reverse()
    let node = new ListNode("head")
    let temp = node
    arr.forEach(item=>{
        temp.next = new ListNode(item)
        temp = temp.next
    })
    return node.next
}
//会超出JS的精度问题,js的精度为2的53次方
var addTwoNumbers = function(l1, l2) {
    let num1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    .reverse().toString().replace(/,/g,"");
    let num2 = getNode(l2).reverse().toString().replace(/,/g,"")
    console.log(BigInt(Number(num1)),Number(num2))
    return checkNode(BigInt(Number(num1))+BigInt(Number(num2)))
};
const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)
const node4 = new ListNode(5)
const node5 = new ListNode(6)
const node6 = new ListNode(4)
node1.next=node2
node2.next=node3
node = node4
node.next = node5
node5.next=node6
const n= getNode(node)
console.log(addTwoNumbers(node1,node))
// console.log(checkNode(123))


var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('head');
    let temp = node;//哑结点
    let add = 0;//是否进一
    let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

    //遍历，直到最长的都为空
    while(l1 || l2){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        temp.next = new ListNode(sum % 10);//取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    add && (temp.next = new ListNode(add));
    return node.next;
};
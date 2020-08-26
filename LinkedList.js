//make new list

function ListNode(val, next) {
    this.val = (val === undefined ? undefined : val)
    this.next = (next === undefined ? null : next)
}

const filing = (list, val) => {
    let tail;
    if (list.val) {
        tail = list.next;
        if (tail.val) {
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = new ListNode(val);
        } else {
            tail.val = val;
        }
    } else {
        list.val = val;
        list.next = new ListNode();
    }
    return list;
}

function running(list) {
    let tail = list;
    const arr = [];
    while (tail) {

        arr.push(tail.val);
        tail = tail.next;
    }
    return arr;
}


const list = new ListNode();
const list2 = new ListNode();

const la2 = [2, 6, 7, 8]
const la1 = [1, 2, 3, 4, 5, 9, 10];
la1.forEach(x => {
    filing(list, x)
})


la2.forEach(x => {
    filing(list2, x)
})
// console.log(list)
// console.log(list2)


//class realization

// class ListNode{
//     constructor(val,next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }
//
// class LinkedList{
//     constructor() {
//         this.head=null;
//         this.length=0;
//     }
//     add(val){
//         const node= new ListNode(val);
//         let tail=null;
//         if(!this.head){
//             this.head=node;
//         }else{
//             tail=this.head;
//             while(tail.next){
//                 tail=tail.next;
//             }
//             tail.next=node;
//         }
//         this.length++;
//     }
// }
//
// const list=new LinkedList();
//
// headOne.forEach(element=>{
//     list.add(element)
// })

//----------------------------------------------------------------------------------------------------------------------


function reverseLinkedList(head) {
    let pointer = head.next;
    head.next = null;
    let node = head;
    while (pointer) {
        console.log(head)
        head = pointer;
        pointer = head.next;
        head.next = node;
        node = head;
    }
    // console.log(running(list))
    return head;
}

//
//
// console.log(running(list))
// console.log(reverseLinkedList(list))
// console.log(running(list))

//----------------------------------------------------------------------------------------------------------------------

// [2,6,7,8]
// [1,2,3,4,5,9,10];

function mergeLinkedLists(headOne, headTwo) {
    let list = headOne.val > headTwo.val ? headTwo : headOne;
    let tail = list;
    let t1 = headOne.val < headTwo.val ? headTwo : headOne;
    console.log(list, t1)
    while (t1 && tail) {
// console.log(t1,tail)
        if (t1.val < tail.val) {
            const temp = new ListNode(tail.val, tail.next);
            tail.val = t1.val;
            tail.next = temp;
            t1 = t1.next;
            // console.log(tail.next)
            if (tail.next) {
                tail = tail.next;
            } else {
                break;
            }
        } else {
            if (tail.next) {
                tail = tail.next;
            } else {
                break;
            }
        }
    }

    while (t1) {
        tail.next = new ListNode(t1.val)
        tail = tail.next;
        t1 = t1.next;
    }
    console.log(list)

}

//
// mergeLinkedLists(list,list2)
// console.log(running(list));

//------------------------------------------------------------------------------------------------------------------

//CREATES NEW LIST!
var mergeTwoLists = function (l1, l2) {
    let list = new ListNode();
    let tail1 = l1;
    let tail2 = l2;
    let tailR = list;
    while (tail1 || tail2) {
        // console.log(!!tail1,!!tail2)
        let val1;
        let val2;
        if (tail1.val > tail2.val) {
            val1 = tail2.val;
            val2 = tail1.val;
        } else {
            val1 = tail1.val;
            val2 = tail2.val;
        }
        if (tailR.val) {
            tailR.next = new ListNode(val1);
            tailR = tailR.next;
            tailR.next = new ListNode(val2);
            tailR = tailR.next;
        } else {
            tailR.val = val1;
            tailR.next = new ListNode(val2);
            tailR = tailR.next;
        }
        // console.log(tailR)
        tail1 = tail1.next;
        tail2 = tail2.next;
        // console.log('list!!!',list);
    }

    return list;
};

//
// console.log('res',running(mergeTwoLists(list,list2)));

function mergeLinkedListsTwo(headOne, headTwo) {
    let head1=headOne;
    let head2=headTwo;
    let previous;
    while(head2!==null && head1!==null){
        if(head1.val<head2.val){
            previous=head1;
            head1=head1.next;
        }else{
            if(previous) {
                previous.next=head2;
            }
                previous=head2;
                head2=head2.next;
                previous.next=head1

        }
    }
    if(!head1) previous.next=head2;
    return headOne.val<headTwo.val? headOne:headTwo;
}

console.log('res', running(mergeLinkedListsTwo(list, list2)));

//----------------------------------------------------------------------------------------------------------------------------

function removeKthNodeFromEnd(head, n) {
    let f = head;
    let s = f;
    let tail;
    let count = 0;
    while (s !== null) {
        if (count === n) {
            tail = f;
            f = f.next;
            s = f;
            count = 0;
        } else {
            count++;
            s = s.next;
        }
    }
    if (!tail) {
        head.val = head.next.val;
        head.next = head.next.next;
    } else {
        tail.next = f.next;
    }
    return head
}

//
//
// removeKthNodeFromEnd(list,5)
// console.log(list)

//----------------------------------------------------------------------------------------------------------------------------


let algoArr = [1, 2, 3, 4, 5, 6];
let list3 = {}
algoArr.forEach(x => {
    filing(list3, x)
})


function shiftLinkedList(head, n) {
    const length = calcLength(head, n);
    let moveIndx = 0;
    if (n === length) return head
    console.log(moveIndx, length)
    if (n > 0) {
        moveIndx = n % length === n ? length - n : length - n % length;
    } else if (n < 0) {
        moveIndx = Math.abs(n) % length === n ? n * -1 : Math.abs(n) % length;
    }

    if (moveIndx === 0 || moveIndx === length) return head
    for (let i = 1; i <= moveIndx; i++) {
        if (i === moveIndx) {
            let tail = head;
            head = head.next;
            tail.next = null;
        } else {
            head = head.next;
        }
    }
    return head
}

const calcLength = (list, n) => {
    if (n === 0) return 0;
    n = Math.abs(n)
    let length = 0;
    let tail = list;
    while (tail) {
        length++;
        console.log(!tail.next && length !== n && n % length !== 0)
        if (!tail.next && length !== n && n % length !== 0) {
            tail.next = list;
            break;
        }
        tail = tail.next;
    }

    return length;
}


// console.log(running(shiftLinkedList(list3, 18)));

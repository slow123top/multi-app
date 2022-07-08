function mergeTwo(pHead1, pHead2) {
    let pHead = new ListNode();
    pHead.val = Math.min(pHead1.val, pHead2.val);
    let guad1 = pHead1.next;
    let guad2 = pHead2.next;
    let pre = pHead;
    while (guad1) {
        if (!guad2 && guad1) {
            pHead.next = guad1;
            break;
        }
        if (guad1.val < guad2.val) {
            pHead.next = guad1;
            guad1 = guad1.next;
        } else {
            pHead.next = guad2;
            guad2 = guad2.next;
        }
        // 注意这里
        pre = pre.next;
    }
    if (guad2) {
        pHead.next = guad2;
    }
    return pHead;
}

function ListNode() {
    this.val = '';
    this.next = null;
}




function getCount() {
    let count = 0;
    for (let i = 0; i <= 25; i++) {
        if ((100 - 4 * i) % 2 === 0) {
            count++;
        }
    }
    return count;
}

function getCount1() {
    let count = 0;
    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= 50; j++) {
            if ((i * 4 + j * 2) === 100) {
                count++;
            }
        }
    }
    return count;
}

console.log(getCount());
console.log(getCount1());
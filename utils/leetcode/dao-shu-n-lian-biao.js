function daoshu(head, n) {
    let size = 0;
    let res = [];
    while (head) {
        res[size] = head;
        size++;
        head = head.next;
    }
    const current = res[size + 1 - n];
    const realHead = res[0];
    if (realHead.val === current.val && realHead.next === current.next) {
        return [];
    }
    const pre = res[size - n];
    pre.val = current.val;
    pre.next = current.next;
    return realHead;
}
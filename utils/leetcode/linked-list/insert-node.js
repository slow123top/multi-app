function insertNode(pHead, nodeToInsert, node) {
    let pre = null;
    while (pHead) {
        if (pHead.next === node) {
            pre = pHead;
            break;
        }
        pHead = pHead.next;
    }
    nodeToInsert.next = node;
    pre.next = nodeToInsert;
}
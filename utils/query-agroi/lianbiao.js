function LBNode(val) {
    this.value = val;
    this.next = null
}

function lianbiao(pHead) {
    let nextNode = pHead.next;
    pHead.next = null;
    let lastNode = pHead;
    while (!nextNode) {
        const tempNode = nextNode.next;
        nextNode.next = lastNode;
        lastNode = nextNode;
        nextNode = tempNode;
    }
}
function reverse(pHead) {
    if (!pHead) {
        return pHead;
    }
    return zhuanhuan(pHead);
}

function zhuanhuan(pNode, nextA = null) {
    let next = pNode.next;
    pNode.next = nextA;
    if (next === null) {
        return pNode;
    }
    return zhuanhuan(next, pNode);
}
console.log(reverse());

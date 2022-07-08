function hasCircle(pHead) {
    if (!pHead || pHead.next === null) {
        return false;
    }
    let p = pHead;
    let hasVisited = new Map();
    while (p !== null) {
        if (!hasVisited(p)) {
            hasVisited.set(p, true);
            p = p.next;
        } else {
            return true;
        }
    }
    return false;
}
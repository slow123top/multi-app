function mergeK(nodeList) {
    const headList = [];
    for (let node of nodeList) {
        headList.push(node);
    }
    let min = null;
    let pHead = null, p = pHead;
    while (headList.length) {
        // 从小到大排列
        headList.sort((a, b) => a.val - b.val);
        // 获取最小的
        min = headList.shift();
        if (pHead === null) {
            // 如果是头节点
            pHead = min;
            p = pHead;
        } else {
            // 如果后继节点
            p.next = min;
            p = p.next;
        }
        if (min.next) {
            headList.push(min.next);
        }
        
    }
    return pHead;
}
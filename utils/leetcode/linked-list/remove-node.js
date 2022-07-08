function removeLinkNode(pHead, nodeToRemoved) {
    // 链表为空
    if (!pHead || pHead.next == null) {
        return;
    }

    if (!nodeToRemoved) {
        // 要删除的节点不存在
        return pHead;
    }

    if (nodeToRemoved.next === null) {
        // 删除的节点是尾部 直接置为空
        nodeToRemoved = null;
        return pHead;
    }
    // 如果是中间节点  把要删除的节点修改为删除节点的下一个节点  就不用从头遍历了
    nodeToRemoved.val = nodeToRemoved.next.value;
    nodeToRemoved.next = nodeToRemoved.next.next;
    return pHead;
}
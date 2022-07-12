function cengxu(root) {
    const queue = [root];
    const result = [];
    // 最大深度
    let count = 1;
    while (queue.length > 0) {
        let len = queue.length;
        let a = [];
        for (let i = len - 1; i >= 0; i--) {
            const current = queue[i];
            a.push(current);
            if (current.left) {
                queue.push(current);
            }
            if (current.right) {
                queue.push(current);
            }
        }
        if (a.length) {
            count++;
        }
        result.push(a);
    }
    return result;
}
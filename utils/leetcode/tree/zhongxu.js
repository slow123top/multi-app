function zhongxu(root, ret = []) {
    // const ret = [];
    if (!root) {
        ret.push();
        return ret;
    }
    zhongxu(root.left, ret);
    ret.push(root.val);
    zhongxu(root.right, ret);
    return ret;
}

const tree = {
    val: 44,
    left: {
        val: 55,
        left: {
            val: 66,
            left: {
                val: 22
            },
            right: {
                left: {
                    val: 6
                },
                right: {
                    val: 76
                },
                val: 77
            }
        }
    },
    right: {
        val: 0,
        left: {
            val: 33
        }
    }
};

function zhongxuIterator(root) {
    const stack = [];
    const res = [];
    // 左子树入栈
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length > 0) {
        const last = stack[stack.length - 1];
        if (!last.right) {
            stack.length--;
            res.push(last.val);
           
        }
        if (last.right) {
            root = last.right;
            // 收集根节点
            res.push(stack.pop().val);
            while (root) {
                stack.push(root);
                root = root.left;
            }
        }
    }

    return res;
}

console.log(zhongxu(tree));
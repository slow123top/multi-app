// function houxu(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     const stack = [];
//     const result = [];
//     let start = 0;
//     stack.push(arr[start]);
//     // 入栈左子树
//     while (arr[start] !== undefined && arr[start] !== null) {
//         stack.push(start);
//         start = start * 2 + 1;
//     }
//     // 出栈
//     let len = stack.length
//     while (len) {
//         const last = stack[len - 1];
//         last * 2 + 2
//         if () {

//         }
//     }
// }
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

function houxuIterator(root) {
    const stack = [];
    const res = [];
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length > 0) {
        const last = stack[stack.length - 1];
        if (!last.right) {
            res.push(stack.pop().val);
            // if (last.parent) {
            // res.push(stack.pop().val);
            // }
        }
        // 
        if (last.right) {
            // 添加右子节点的所有
            root = last.right;
            last.right = null;
            while (root) {
                stack.push(root);
                root = root.left;
            }
        }
    }
    return res;
}

console.log(houxuIterator(tree));
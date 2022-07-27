function binaryTree(arr) {
    // const layer = Math.floor(Math.log2(arr.length + 1));
    const tree = buildTree(arr, 0);
    return tree;
}

function buildTree(arr, i) {
    const result = [];
    if (arr[i]) {
        result.push({
            data: arr[i],
            left: buildTree(arr, 2 * i + 1),
            right: buildTree(arr, 2 * i + 2)
        })
    }
    return result;
}
console.log(binaryTree(['a', 'c', 'd', 'e', 'g']));

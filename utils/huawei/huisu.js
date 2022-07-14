// 给定一个的字符数组chars ，返回其 所有可能的排列组合 ，重复的排列只返回一个。
// 用例1，输入：chars = ['a', 'b', 'c']，输出
// ：[['a', 'b', 'c'],[ 'a', 'c', 'b'],
// [ 'c', 'a', 'b'],[ 'b', 'a', 'c'],[ 'b', 'c', 'a'],[ 'c', 'b', 'a']]
// 用例2，输入：chars = ['a', 'b', 'a']，
// 输出：[['a', 'b', 'a'], [ 'a', 'a', 'b'],[ 'b', 'a', 'a'],[ 'b', 'a', 'a']]
// 用例3，输入: chars = ['a', 'b']，输出：[['a', 'b'],[ 'b', 'a']]
// 用例4：/输入：nums = ['a']，输出：[['a']]

function getGroup(list) {
    if (!list || !list.length) {
        return [];
    }
    const len = list.length;
    // d代表n个元素数组组成的排列组合  去重
    if (len === 1) {
        return [[list[0]]];
    }
    const dup = {};
    const result = [];
    for (let i = 0; i < list.length; i++) {
        const current = list[i];
        const rest = [...list.slice(0, i), ...list.slice(i + 1)];
        const restGroup = getGroup(rest);
        for (let j = 0; j < restGroup.length; j++) {
            const currentGroup = restGroup[j];
            for (let k = 0; k < currentGroup.length + 1; k++) {
                currentGroup.splice(k, 0, current);
                const str = currentGroup.join('');
                if (!dup[str]) {
                    dup[str] = true;
                    result.push([...currentGroup]);
                }
                currentGroup.splice(k, 1);
            }
        }
    }
    // result.map();
    return result;
}

console.log(getGroup(['a', 'b', 'c', 'a', 'd']));

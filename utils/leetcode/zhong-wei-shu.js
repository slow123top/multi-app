const quickSort = require('../sort-agri/quick-sort');

/**
 * 两个正序数组的中位数
 */
function zhongweishu(nums1, nums2) {
    const arr = nums1.concat(nums2);
    const finalArr = quickSort(arr);
    const mod = Math.floor(finalArr.length % 2);
    const mid = Math.floor(finalArr.length / 2)
    if (mod === 1) {
        return finalArr[mid];
    }
    return (finalArr[mid - 1] + finalArr[mid]) / 2;
}

exports.zhongweishu = zhongweishu;


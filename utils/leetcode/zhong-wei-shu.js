// 中位数  正序
const zhongweishu = (num1, num2) => {
    const m = num1.length;
    const n = num2.length;
    let mNum = [...num1];
    let nNum = [...num2];
    // 两个数组排序  如何排序
    const total = m + n;
    let midK;
    // 第k小
    let k;
    // 第k+1小
    let kLast;
    let zhongweishuArr = [];
    if (Math.floor(total % 2) === 1) {
        // 奇数
        k = Math.floor((total + 1) / 2);
        // 获取第k小的数
        midK = Math.floor(k / 2);
        while (k !== 1) {
            zhongweishuArr = [];
            if (mNum[midK - 1] === undefined || mNum[midK - 1] >= nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(nNum.slice(0, midK));
                nNum = nNum.slice(midK);
            }
            if (nNum[midK - 1] === undefined || mNum[midK - 1] <= nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(mNum.slice(0, midK));
                mNum = mNum.slice(midK);
            }
            k -= midK;
            midK = Math.floor(k / 2);
        }
        return zhongweishuArr[0];
    } else {
        // 偶数
        k = Math.floor(total / 2);
        kLast = k + 1;
        // 偶数第k小
        midK = Math.floor(k / 2);
        while (k !== 0) {
            zhongweishuArr = [];
            if (k === 1) {
                midK = 1;
            }
            if (mNum[midK - 1] === undefined || mNum[midK - 1] > nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(nNum.slice(0, midK));
                nNum = nNum.slice(midK);
            }
            if (nNum[midK - 1] === undefined || mNum[midK - 1] <= nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(mNum.slice(0, midK));
                mNum = mNum.slice(midK);
            }
            k -= midK;
            midK = Math.floor(k / 2)
        }
        const zhongweishu1 = zhongweishuArr[0];
        // 偶数第k+1小
        mNum = [...num1];
        nNum = [...num2];
        midK = Math.floor(kLast / 2);
        while (kLast !== 0) {
            zhongweishuArr = [];
            if (kLast === 1) {
                midK = 1;
            }
            if (mNum[midK - 1] === undefined || mNum[midK - 1] > nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(nNum.slice(0, midK));
                nNum = nNum.slice(midK);
            }
            if (nNum[midK - 1] === undefined || mNum[midK - 1] <= nNum[midK - 1]) {
                zhongweishuArr = zhongweishuArr.concat(mNum.slice(0, midK));
                mNum = mNum.slice(midK);
            }
            kLast -= midK;
            midK = Math.floor(kLast / 2)
        }
        return (zhongweishu1 + zhongweishuArr[0]) / 2;
    }

}

console.log(zhongweishu([1], [1, 2, 3, 4, 5, 6]))
const groupData = (dataSource, groupField) => {
    return dataSource.reduce((total, nextItem) => {
        if (!total[nextItem[groupField]]) {
            total[nextItem[groupField]] = [];
        }
        const groupDataItem = total[nextItem[groupField]];
        if (!groupDataItem.length) {
            groupDataItem.push(nextItem);
        } else {
            const current = groupDataItem.find(dataItem => dataItem.id === nextItem.id);
            if (!current) {
                groupDataItem.push(nextItem);
            }
        }
        return total;
    }, {});
};

const data = [
    { id: '001', code: '001', name: 'a', age: 12 },

    { id: '004', code: '001', name: 'd', age: 12 },

    { id: '002', code: '002', name: 'b', age: 12 },
    { id: '003', code: '003', name: 'c', age: 12 },

    { id: '005', code: '005', name: 'e', age: 13 },
    { id: '006', code: '006', name: 'f', age: 13 },
    { id: '007', code: '002', name: 'g', age: 13 }
]
const groupFields = ['age', 'code', 'name'];

const dataSource = data;
const groupDataCommon = (groupFields, temp, layer) => {
    const field = groupFields[layer];
    if (field) {
        if (layer === 0) {
            return groupData(dataSource, field)
        }
        const keyList = Object.keys(temp);
        keyList.forEach(key => {
            temp[key] = groupData(temp[key], field);
            temp[key] = groupDataCommon(groupFields, temp[key], layer + 1);
        });
    }

    return temp;
}



console.log(groupDataCommon(groupFields, groupDataCommon(groupFields, {}, 0), 1));
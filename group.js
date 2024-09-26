const groupData = (dataSource, groupField) => {
    return dataSource.reduce((total, nextItem) => {
        if (!total[nextItem[groupField]]) {
            total[nextItem[groupField]] = [];
        }
        const groupDataItem = total[nextItem[groupField]];
        if (!groupDataItem.length) {
            groupDataItem.push(nextItem);
        } else {
            const current = groupDataItem.find(
                (dataItem) => dataItem.id === nextItem.id
            );
            if (!current) {
                groupDataItem.push(nextItem);
            }
        }
        return total;
    }, {});
};

const data = [
    { id: "001", code: "001", name: "a", age: 12, sex: "男" },

    { id: "004", code: "001", name: "d", age: 12, sex: "男" },

    { id: "002", code: "002", name: "b", age: 12, sex: "男" },
    { id: "003", code: "003", name: "c", age: 12, sex: "男" },

    { id: "005", code: "005", name: "e", age: 13, sex: "男" },
    { id: "006", code: "006", name: "f", age: 13, sex: "男" },
    { id: "007", code: "002", name: "g", age: 13, sex: "男" },
];
const groupFields = ["age", "code", 'name'];

const dataSource = data;
const resultArray = [];
const groupDataCommon = (groupFields, temp, layer) => {
    const field = groupFields[layer];
    if (field) {
        if (layer === 0) {
            return groupData(temp, field);
        }
        const keyList = Object.keys(temp);
        keyList.forEach((key) => {
            temp[key] = groupData(temp[key], field);
            temp[key] = groupDataCommon(groupFields, temp[key], layer + 1);
        });
    }
    return temp;
};
// 组成树节点
const createTreeNodes = (groupData, parent = "", layer = 0) => {
    const result = [];
    if (!Array.isArray(groupData)) {
        const keyList = Object.keys(groupData);
        if (keyList.length) {
            keyList.forEach((key) => {
                result.push({
                    id: key, layer, parent,
                    children: createTreeNodes(groupData[key], key, layer + 1)
                });
            });
        }
    } else {
        // result[result.length - 1].children = groupData;
        result.push(...groupData);
    }
    return result;
};
// 平铺树结构
const flatTreeNodes = (treeNodes, result) => {
    for (const treeNode of treeNodes) {
        result.push(treeNode);
        if (Array.isArray(treeNode.children)) {
            flatTreeNodes(treeNode.children, result)
        }
    }
}
const groupedData = groupDataCommon(
    groupFields,
    groupDataCommon(groupFields, data, 0),
    1
);

const getAllChildrenByNode = (node,result) => {
    const children  = node.children;
    if(children && children.length) {
        result.push(...children);
        children.forEach(child=> {
            getAllChildrenByNode(child,result);
        })
    }
    // return result;
}
const result = [];
const treeNodes = createTreeNodes(groupedData);
flatTreeNodes(treeNodes, resultArray);
getAllChildrenByNode(resultArray[0],result);

console.log(resultArray.filter(item=>!result.includes(item)));

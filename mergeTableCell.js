//https://blog.csdn.net/weixin_44135121/article/details/108277720
let data = [
    {
        'type': '通用分级',
    },
    {
        'type': '通用分级',
    },
    {
        'type': '通用分级',
    },
    {
        'id': 1,
        'type': '通用分级1',
    },
    {
        'type': '通用分级1',
    },
    {
        'type': '通用分级3',
    },
    {
        'type': '通用分级3',
    },
    {
        'type': '通用分级1',
    },
    {
        'type': '通用分级1',
    },
    {
        'type': '通用分级1',
    },
]

const changeData = (data, field) => {
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
        var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
        if (!item.rowSpan) {
            item.rowSpan = 1;//初始化为1
        }
        if (item[field] === data[indexCount][field]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
            item.rowSpan++;
            data[indexCount].rowSpan = 0;
        } else {
            count = indexCount;
        }
        indexCount++;
    }
}
changeData(data, 'type')
console.log(data);


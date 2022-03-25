/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let res = [],minVal = Number.MAX_VALUE;
    let map = new Map()
    for(let i = 0;i < list1.length;i++){
        map.set(list1[i],i);
    }
    for(let i = 0;i < list2.length; i++) {
        if(map.has(list2[i])) {
            let min = i + map.get(list2[i]);
            if(min < minVal) {
                minVal = min;
                console.log(minVal);
                res = [];
                res.push(list2[i]);
            }else if(min === minVal){
                res.push(list2[i])
            }
        }
    }
    console.log(res);
    return res
};

findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KFC", "Shogun", "Burger King"])
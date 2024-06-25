let edges = [[1,2],[5,1],[1,3],[1,4]];
let list = new Array(edges.length+2).fill(0) ;
edges.forEach(item => {
   list[item[0]]++;
   list[item[1]]++;
})
console.log(list);

for(let i = 1;i< list.length;i++){
    if(list[i] == edges.length)
    console.log(i);
}




setTimeout(() => {
    console.log(5);
}, 0);
process.nextTick(() => {
    console.log(1); 
});
new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log(2);
});
process.nextTick(() => {
    console.log(3); 
});

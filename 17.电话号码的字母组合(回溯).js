const letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }
    const len = digits.length;
    const map = new Map();
    map.set('2', 'abc');
    map.set('3', 'def');
    map.set('4', 'ghi');
    map.set('5', 'jkl');
    map.set('6', 'mno');
    map.set('7', 'pqrs');
    map.set('8', 'tuv');
    map.set('9', 'wxyz');
    const result = [];

    function generate(i, str) {
        if (i == len) {
            result.push(str);
            return;
        }
        const tmp = map.get(digits[i]);
        for (let r = 0; r < tmp.length; r++) {
            generate(i + 1, str + tmp[r]);
        }
    }
    generate(0, '');
    return result;
};

console.log(letterCombinations('233'));

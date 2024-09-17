
const Mission1 = (arr) => {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(Mission1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));





const Mission2 = (arrStr) => {
    let count = 0;
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length == 4) {
            count++;
        }
    }
    return `יש לך ${count} מילים עם 4 אותיות`;
}


// console.log(Mission2(['a', 'abcd', 'abcde', 'abc', 'ab']));


const Mission3 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}


// console.log(Mission3([[1, 2, 3], [4, 5, 6]]));







const Mission6 = (num) => {
    let arr = [0, 1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr[num];
}

// console.log(Mission6(10));




module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission6,
}

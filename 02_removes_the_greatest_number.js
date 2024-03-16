function deleteGreatestValue(array) {
    for (let i = 0; i < array.length; i++) {
        const max = Math.max(...array[i]);
        const maxIndex = array[i].indexOf(max);
        array[i].splice(maxIndex, 1);
    }
    return array;

}

const arr = [[1, 4, 4], [2, 6, 3], [9, 2, 7]]
console.log(deleteGreatestValue(arr))
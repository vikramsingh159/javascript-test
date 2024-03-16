function sortPeople(names, heights) {
    const array = [];

    for (let [i, name] of names.entries()) {
        array.push([name, heights[i]]);
    }

    // Sort the array based on heights
    array.sort((a, b) => b[1] - a[1]);

    //  names after sorting
    const sortedNames = array.map(([name]) => name);

    return sortedNames;
}

const names = ['John', 'Maria', 'Alexa', 'Robert'];
const heights = [180, 160, 165, 187];

console.log(sortPeople(names, heights));
function removeFirstTwo(list) {
    let [,, ...shorterList] = list;
    console.log(shorterList);
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Using a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice()
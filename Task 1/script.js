const mostFrequent = (arr) => {
    //create a frequency array
    const frequency = arr.map(s=>s.length);
    //count the frequency of each element
    const frequencyCount = frequency.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});
    //find the maximum frequency
    const maxCount = Math.max(...Object.values(frequencyCount));
    //find the length of the most frequent element
    const mostFrequentLength = Object.keys(frequencyCount).filter(key => frequencyCount[key] === maxCount).map(Number);
    const result = arr.filter(s => mostFrequentLength.includes(s.length));
    return result;
};
console.log(mostFrequent(['a', 'ab', 'abc', 'cd', 'def', 'gh']));  // ['ab', 'cd', 'gh']
console.log(mostFrequent(['apple', 'bat', 'cat', 'dog', 'elephant']));  // ['bat', 'cat', 'dog']
console.log(mostFrequent(['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));  // ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']
console.log(mostFrequent(['hello', 'world', 'hi', 'there', 'python']));  // ['hello', 'world', 'there']
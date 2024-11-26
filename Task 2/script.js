const sumTwoMax = (arr) => {
    if(arr.length < 2){
        throw new Error('Array must contain at least two elements');
    };
    if(arr.length === 2) return arr[0] + arr[1];
    arr.sort((a,b) => b-a);
    return arr[0] + arr[1];
}
console.log(sumTwoMax([1, 2]));
console.log(sumTwoMax([1, 4, 2, 3, 5]));  
console.log(sumTwoMax([10, 20, 30, 40]));
console.log(sumTwoMax([100, 500, 300]));
console.log(sumTwoMax([-5, -2, -10, -7]));
console.log(sumTwoMax([1]));
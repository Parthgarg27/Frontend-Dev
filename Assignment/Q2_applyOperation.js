// Q2: applyOperation with callbacks
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const nums = [1,2,3,4];

const doubled = applyOperation(nums, n => n*2);
const squared = applyOperation(nums, n => n*n);

console.log("Doubled:", doubled);
console.log("Squared:", squared);

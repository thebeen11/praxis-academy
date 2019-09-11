let list =[1, 2, 3, 4, 5];
let accumulator = 0;

function sum(list, accumulator) {
    if (list.length == 0) {
        return accumulator;
    }
    return sum(list.slice(1), accumulator + list[0]);
}


console.log(sum(list, accumulator));
console.log(list);
console.log(accumulator);



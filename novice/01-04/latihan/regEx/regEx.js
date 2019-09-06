//var re = /ab+c/;

var re = new RegExp('ab+c');
console.log(re);

var p = 'A* a* ab?';


console.log(p.replace(/[.*+?^${}()|[\]\\]/g, '\$&'));


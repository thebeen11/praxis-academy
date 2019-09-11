let orang = [
    {nama:"ayu", umur: 20},
    {nama: "bima", umur: 22},
    {nama: "widya", umur: 17}
];

let peopleSentenses = [];

for (let i = 0; i < orang.length; i++) {
    let sentense = orang[i].nama + " is "+ orang[i].umur + " years old";
    peopleSentenses.push(sentense);
}

console.log(peopleSentenses);

let shoppingCart =[
    {productTitle: "Product 1", type:"books", amount: 10},
    {productTitle: "Product 2", type:"eletronics", amount: 30},
    {productTitle: "Product 3", type:"fashion", amount: 20},
    {productTitle: "Product 4", type:"books", amount: 60},
]

const byBooks =(order) => order.type == "books";
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
    return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

console.log(getTotalAmount(shoppingCart));

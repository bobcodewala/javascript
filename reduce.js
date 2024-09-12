const cart = [
    {
        cart_item : "Iphone15 Pro",
        price : 1000,
    },

    {
        cart_item : "Boult Smart Watch",
        price : 999,
    },
    {
        cart_item : "Hp-laptop",
        price : 1000,
    },
]

const Total_price = cart.reduce(  (cur , cart) => cart.price + cur ,0 )
console.log(Total_price);

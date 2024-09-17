//Create an Inventory Array of Product Objects
const inventory = [
    {name:'Latte', price:'7.99', quantity:'80' },
    {name:'Pastry', price:'5.99', quantity:'50' },
    {name:'Tea', price:'6.99', quantity:'60' },
    {name:'Mug', price:'15.99', quantity:'25' }
];

//Create an Orders Array of Order Objects
const orders= [
    {
    customerName: "Patrick Star",
    items: [
        {name: "Latte", quantity:3},
        {name: "Pastry", quantity:4}
    ],
    status: "Pending"
}
];

//Create a Function to Place an Order
function placeOrder(customerName, orderedItems) {
    for (const item of orderedItems) {
        const product = inventory.find(p=> p.name===item.productname);
        if (!product || product.stock < item.quantity) {
            console.error('Not suffice stock. Order cannot be placed');
        return false;
        }
        }
        orderedItems.forEach (item => {
            const product = inventory.find(p=> p.name === item.productname);
        product.stock -= item.quantity;
        });
        const newOrder= {
            customerName: customerName,
            items: orderedItems,
            status: 'Pending'
        };
    orders.push(newOrder);
    console.log ('Order successfully placed');
    return true;
}

//Create a Function to Calculate Total for an Order
function calculateOrderTotal (order){
    return order.items.reduce((total, item) => {
        const product = inventory.find (p=> p.name === item.name);
        if (product) {
            return total + (+product.price * item.quantity);
        }
        return total;
    },0);
    }



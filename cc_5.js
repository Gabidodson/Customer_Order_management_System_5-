//Create an Inventory Array of Product Objects
const inventory = [
    {name:'Latte', price:7.99, quantity:80 },
    {name:'Pastry', price:5.99, quantity:50 },
    {name:'Tea', price:6.99, quantity:60 },
    {name:'Mug', price:15.99, quantity:25 }
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
        const product = inventory.find(p=> p.name===item.name);
        if (!product || product.quantity < item.quantity) {
            console.error('Insufficient stock. Order cannot be placed');
        return false;
        }
        }
        orderedItems.forEach (item => {
            const product = inventory.find(p=> p.name === item.name);
        product.quantity -= item.quantity;
        });
        const newOrder= {
            customerName,
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
            return total + (product.price * item.quantity);
        }
        return total;
    },0);
    }

//Create a Function to Mark an Order as Completed
function completeOrder (customerName){
    const orderIndex =orders.findIndex(order => order.customerName === customerName);
    if (orderIndex === -1) {
        console.error ('No order found');
        return false;
    }
    orders[orderIndex].status= 'Completed';
    console.log(`Order for ${customerName} is completed`);
    return true;
}

//Create a Function to Check Pending Orders
function checkPendingOrders () {
    const pendingOrders = orders.filter(order=> order.status === 'Pending');
if (pendingOrders.length===0) {
    console.log ('No pending orders');
    return;
}
console.log('Pending Orders:');
pendingOrders.forEach(order =>{
    const total = calculateOrderTotal (order);
    const itemSummary = order.items.map(item=> `${item.quantity} ${item.name}`).join(',');
    console.log(`${order.customerName}:${itemSummary}- Total: $${total.toFixed(2)}`);

});
}

// Write a function called calculateSalesTotals()
//  which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.


let sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];


function calculateSalesTotal(item,stock,cost,discount){
  let obj = {};
  let data = [];
  obj.item = item;
  obj.stock = stock;
  obj.original = cost;

  let sale,total;

  if(discount){
    sale = (cost-(cost*discount));
    total = sale*stock;
  }else{
    sale = cost;
    total = sale * stock;
  }
  obj.sale = sale;
  obj.total = total;
  data.push(obj);
  console.log(data);
}

calculateSalesTotal('PS4 Pro',3,399.99);
calculateSalesTotal('Xbox One X',1,499.99,0.1);
calculateSalesTotal('Nintendo Switch',1,299.99,0.8);
calculateSalesTotal('PS2 Console',1,299.99,0.8);
calculateSalesTotal('Nintendo 64',2,199.99,0.65);



//code for the table "prices/size/flavor"


let froyoFlavors = {
  availableFlavors: ["Strawberry","Chocolate","Coffee","Vanilla"],
  specialSale:true,
  price: 5,
}
console.table(froyoFlavors)
  

//prompt 

const inputString = prompt ( "Enter your order seperated by commas ',' Our flavors are", froyoFlavors.availableFlavors,)

let flavors = inputString.split (',')

const orders = [];
for (let i = 0; i < flavors.length; i++){
  const ord = flavors[i];
  const order = parseInt(ord);
  orders.push (order);
 
}
console.log(flavors)




for (i = 0; i < flavors.length; i++){
if (specialSale = true)
 console.log(froyoFlavors.price * flavors.length)};


let flavorsOrdered=(froyoFlavors)
for (i = 0; i < froyoFlavors.length;i++){froyoFlavors[i]>flavorsOrdered
  flavorsOrdered = froyoFlavors[i];
}
function howMany(flavors){
  (flavors)
  flavors= [0]
  for (let i = 0; i<flavors.length;i++)
    if (flavors<flavors[i])
      flavors=flavors[i]
    return flavors
}
howMany()

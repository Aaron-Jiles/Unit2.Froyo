
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
console.log(`You have given ${howMany(flavors)}`);


let flavorsOrdered=[]
for (i = 0; i < flavors.length; i++){
  if (flavors[i]<flavorsOrdered){
  flavorsOrdered=flavors[i];}

if (specialSale = true)
 console.log(froyoFlavors.price * flavors.length)};

 function howMany(flavors){
  (flavors)
  let flavorsOrdered=[]
  flavors= [0]
  for (let i = 0; i<flavorsOrdered.length;i++)
    if (flavors<flavorsOrdered[i]){
      flavors+=flavorsOrdered[i]};
    return flavors
}
howMany(flavors)
console.table (flavors)


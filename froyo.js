
//code for the table "prices/size/flavor"



  

//prompt 

const inputString = prompt ( "Enter your order seperated by commas ',' ")


let flavors = inputString.split (',')

const orders = [];
for (let i = 0; i < flavors.length; i++){
  const ord = flavors[i];
  const order = parseInt(ord);
  orders.push (order);
}

const froyo = {
  flavors: ["chocolate","vanilla","coffee","strawberry","greentea"],
  price: 5
}

console.table(froyo)

function howManyOfEach(flavors){(flavors)
  let numberOf=[]
  for (const key in froyo)
  for (let i = 0; i < flavors.length;i++)
    if (flavors[i]=numberOf){
      numberOf=flavors[i]
    }
}

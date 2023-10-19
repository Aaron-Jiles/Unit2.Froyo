
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

function ordersFlavors(flavors){
  (flavors)
      let order=[]
        for (let i = 0;i <flavors.length;i++)
          if (flavors[i]<order){
            order=flavors[i]}
        console.log (orders)
}
  for (const key in froyo)
    {
      froyo.numberOf= []
    }
console.table (froyo)

  function numberOfEach(flavors){(flavors)
  let number=froyo.numberOf
    for (let i=0;i<flavors.length;i++)
      if (flavors[i]<number)
        number=flavors[i]
  }
  for (const key in froyo) 
      if (froyo.numberOf > 0)
       froyo.numberOf =[orders]
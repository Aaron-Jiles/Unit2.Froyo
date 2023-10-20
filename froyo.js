
//code for the table "prices/size/flavor"



  

//prompt 

let inputString = prompt ( "Enter your order seperated by commas ',' ")

console.log (inputString)
console.log (inputString.split (','))

function createorder(str){
  const flavors = str.split (',')
}

const froyo = {
}

for (let i = 0; i<flavors.length;i++){  let orderFlavor = flavors[i]

if (orderFlavor in order){
 order[orderFlavor]++
}
else{ order[newFlavors]=1

}
  return order
}
console.log (order)


// console.table(froyo)

// function getFlavor(orders){
//   (orders)
//   orders=[0]
//     for (let i = 0;i<flavors.length;i++)
//       if (orders=flavors[i])
//       orders=flavors[i]
//     return orders
   
// }
// for (const key in froyo){
//     if (orders===froyo.flavors)
//  froyo.amount=[]
// }

// console.table(froyo)
// //console.log (flavors)

  
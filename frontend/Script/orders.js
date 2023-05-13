console.log("order page")

let order_details=document.getElementById("order_details")



let myname1 = localStorage.getItem("name");
console.log(n=myname1)

async function getorders(){

    try {
        let res = await fetch("https://busy-cyan-cheetah-garb.cyclic.app/order");
        data = await res.json()
        console.log(data)

        console.log(data[0].name)

        for(let i=0;i<data.length;i++){
            if(data[i].name=="Amaan"){
                // console.log(data[i].order)
                let arr=data[i].order
                console.log(arr)
                renderorderdetails(arr)
                // console.log("after rendering data")
            }
            
        }

      
        
    } catch (error) {
        console.log(error)
    }
}

getorders()

let arr=[{
    MRP:4.5,
    category:"fgfg",
    color:"color",
    name:"name",
    price:"price",
    rating:"rating",
    size:"size"

}]
// renderorderdetails(arr)



function renderorderdetails(arr){
    order_details.innerHTML=""

    order_details.innerHTML = arr.map((element)=>{
        return `
        <div id="order-details">
            <div class="order-item">
              <span class="mrp">MRP:${element.MRP}</span>
              <span class="category">Category: ${element.category}</span>
              <span class="color">Color: ${element.color}</span>
              <img  src=${element.image1}  alt="Product Image" class="product-image">
              <span class="name">ProductName:- ${element.name}</span>
              <span class="price">Price: ${element.price}</span>
              <span class="rating">Rating: ${element.rating}</span>
              <span class="size">Size: ${element.size}</span>
            </div>
          </div>`
    }).join("")
    
}
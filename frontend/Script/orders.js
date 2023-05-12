console.log("order page")

async function getorders(){

    try {
        let res = await fetch("https://busy-cyan-cheetah-garb.cyclic.app/order");
        data = await res.json()
        console.log(data)
        
    } catch (error) {
        
    }
}

getorders()
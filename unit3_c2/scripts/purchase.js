document.getElementById("wallet_balance").innerText=`Wallet balance is Rs ${JSON.parse(localStorage.getItem("balance"))}`
document.getElementById("balance").innerText=`Remaining Wallet balance is Rs ${JSON.parse(localStorage.getItem("balance"))}`

let data=JSON.parse(localStorage.getItem("purchase"));
console.log(data)
let container=document.getElementById("purchased_vouchers")
data.forEach(function(el){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let name=document.createElement('p');
    name.innerText=el.name;
    let price=document.createElement("p");
    price.innerText=el.price;
    console.log(price,image,name)
    div.append(image,name,price);
    container.append(div)
})

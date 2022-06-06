async function appenddata(){
    // event.preventDefault();
    try{
        let url='https://masai-vouchers-api.herokuapp.com/api/vouchers'
let res= await fetch(url);
let data =await res.json();
console.log(data)
append(data[0].vouchers)
    }catch(err){
        console.log(err)
    }





}
function append(data){
    // console.log(data[0]) 
    let container=document.getElementById("voucher_list");
    data.forEach(function(el,index){
        
            // console.log(el)
            console.log(el.name)
        let div=document.createElement('div');
        div.className="voucher";
        let name=document.createElement("p")
        name.innerText=el.name;
        let image=document.createElement("img")
         image.src=el.image;
        let price=document.createElement('p')
        price.innerText=el.price;
        let btn=document.createElement('button');
        btn.innerText="Buy Voucher"
        btn.style.cursor="pointer"
        btn.className="buy_voucher"
        btn.addEventListener("click",function(){
            buyvoucher(el,index)
        })
        // console.log(image,name,price)
        div.append(image,name,price,btn)
        container.append(div)
        document.getElementById("wallet_balance").innerText=`Wallet balance is Rs ${JSON.parse(localStorage.getItem("balance"))}`
    
        
    })
    
}
appenddata()

function buyvoucher(e,i){
    let user=JSON.parse(localStorage.getItem("balance"))
    console.log(user)
    if(user >= Number(e.price)){
        user=user-Number(e.price);
        document.getElementById("wallet_balance").innerText=`Wallet balance is Rs ${JSON.parse(localStorage.getItem("balance"))}`
        
        localStorage.setItem("balance",(user))
        document.getElementById("wallet_balance").innerText=`Wallet balance is Rs ${JSON.parse(localStorage.getItem("balance"))}`

let data=JSON.parse(localStorage.getItem("purchase")) || [] ;
let buyobj={};
    buyobj.name=e.name;
    buyobj.image=e.image;

    buyobj.price=e.price;
    console.log(buyobj)
    data.push(buyobj)
    localStorage.setItem("purchase", JSON.stringify(data))
    alert("Hurray! purchase successful")
    }else{
        alert( "Sorry! insufficient balance" )       
    }
}
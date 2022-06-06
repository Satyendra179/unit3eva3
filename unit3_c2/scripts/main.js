function user(n,e,a,w){
    this.name=n;
    this.email=e; 
    this.address=a;
    this.wallet_balance=w;
}
function signup(){
    event.preventDefault();
    userdata=JSON.parse(localStorage.getItem("user"))||[];
   let balance=JSON.parse(localStorage.getItem("balance")) || 0;
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("email").value;
    let wallet_balance=document.getElementById("amount").value;
    let walletb=balance+Number(wallet_balance);
    localStorage.setItem("balance",(walletb))
    let u=new user(name,email,address,wallet_balance)
// console.log(u)
    userdata.push(u);
    localStorage.setItem("user",JSON.stringify(userdata))

   
    // window.location.href="voucher.html"    

    window.location.reload();


}
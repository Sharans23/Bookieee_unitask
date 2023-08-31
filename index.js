$(".time>button").click(function(){
    t=prompt("Enter no. of tickets");
    alert("Total Amount"+t*300);
})
$(".free").click(function(){
    a=prompt("enter your Email");
   b=prompt("enter your mobile number");
  alert("registration successfull");
})
$(".silver").click(function(){

   prompt("enter your Email");
   prompt("enter your mobile number");
   prompt("Mode of payment?");
    alert("Total Amount: $15"); 
})
$(".gold").click(function(){
    prompt("enter your Email");
   prompt("enter your mobile number");
   prompt("Mode of payment?");
    alert("Total Amount: $29"); 
})
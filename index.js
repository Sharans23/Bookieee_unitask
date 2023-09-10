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


fetch('https://se-tasks.vercel.app/events').then((data)=>{

    return data.json();
}).then((completedata)=>{
    console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card" style="width: 18rem;">
        
            <h3>${values.name}</h3>
            <p>Description:- ${values.description}</p>
            <p>Date:- ${values.date}</p>
            <p>Time:- ${values.time}</p>
            <p>Venue:- ${values.venue}</p>
            <p>Price:- ${values.ticketPrice}</p>
            <p>Total tickets:- ${values.totalTickets}</p>
            <p>Available tickets:- ${values.availableTickets}</p>
           <button type="button" class="btn ex-but btn-dark">Book</button>
        
      </div>`
    });
    document.getElementById("cards1").innerHTML=data1;
}).catch((err)=>{
    console.log(err);;
})



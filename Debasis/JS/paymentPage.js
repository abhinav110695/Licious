var cartamount = JSON.parse(localStorage.getItem("sachindata"));
   document.querySelector("#totalamount1").innerHTML += cartamount;
   document.querySelector("#totalamount2").innerHTML += cartamount;
   
    
   function myFunction(){
       event.preventDefault();
       window.location.href="paymentsuccess.html";
   };
   function myFunction2(){
       event.preventDefault();
       window.location.href="paymentfailed.html";
   };

  
   function myFunction3(){
        
       document.getElementById("billnm").value="Abhinav";
       document.getElementById("addnm").value="87/4 delhi champa gali, saket";
       document.getElementById("bill3").value="438955";
       document.getElementById("bill4").value="Saket";
       document.getElementById("bill5").value="Delhi";
       document.getElementById("bill6").value="India";
       document.getElementById("bill7").value="909945464";
       document.getElementById("bill8").value="abhinav@gmail.com";
       document.getElementById("notes").value="Billing Information Provided";
       
        
   };
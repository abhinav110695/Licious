var CartData = [
  {
    imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/2/prod_display_image/1631077710.8126--2021-09-0810:38:30--1818",

    name:"Chicken Mince - Keema",
    des: "Chicken Mince consists of Chicken Breast Fillets ground to p",
    net_tag: "Net wt:",
    net: "450",
    gross_tag: "Gross:",
    gross: "564",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "305",
    strikePrice: "239",
    off: "15",
    off_tag: "%OFF",
  },

  {
    imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fmhkgtbdprx/11/prod_image/1631077251.0632--2021-09-0810:30:51--1818",

    name: "Chicken Breast Boneless - Large Pack",
    des: "Chicken Breast is one of the meatier cuts of a Chicken,....",

    net_tag: "Net wt:",
    net: "900",
    gross_tag: "Gross:",
    gross: "1200",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "525",
    strikePrice: "239",
    off: "15",
    off_tag: "%OFF",
  }
];

CartData.forEach(function(el){
     var tr = document.createElement("tr");

     var td1 = document.createElement("td");
     td1.setAttribute("class","td1Data");

     var div1 = document.createElement("div");
     var image = document.createElement("img");
     image.setAttribute("class","cartimage")
     image.setAttribute("src",el.imgUrl);
     div1.append(image)
     
     var div2 = document.createElement("div");
     
     var ul1 = document.createElement("ul");
     var li1 = document.createElement("li");
     li1.innerText = el.des;
     var li2 = document.createElement("li");
     li2.innerText = "Read Detail";
     
     ul1.append(li1,li2);
     div2.append(ul1);
     td1.append(div1,div2);

     var td2 = document.createElement("td");
     td2.setAttribute("class",td2);
     td2.textContent = "₹ "+el.price;//5
     td2.style.color = "gray";

     var td3 = document.createElement("td");
     var div3 = document.createElement("div");
     div3.setAttribute("class","wrapper");

     var minus = document.createElement("span");
     var minusImg = document.createElement("img"); 
     minusImg.setAttribute("class","minusImage")
     minusImg.setAttribute("src","https://assets.sg.content-cdn.io/css/Zone03/storeui/martjack/images/qtyminus-btn.png"); 
     minus.append(minusImg); 
     minus.setAttribute("class","minus");
    //  minus.innerText="-";

     var num = document.createElement("span");
     num.setAttribute("class","num");
     num.innerText= 1; //5

     var add = document.createElement("span");
     var addImg = document.createElement("img"); 
     addImg.setAttribute("class","minusImage")
     addImg.setAttribute("src","https://assets.sg.content-cdn.io/css/Zone03/storeui/martjack/images/qtyplus-btn.png"); 
     add.append(addImg);  
     add.setAttribute("class","add");
    //  add.innerText="+";

     let a = 1;
     CartData.forEach(function(el){
      el["cartItemQuantity"] = a;
      localStorage.setItem("CartData",JSON.stringify(CartData));
    
    })
     add.addEventListener("click",function(){
         a++;
         num.innerText = a;
         td4.innerText = a*el.price;
        
         updateSubTotal(); // Initial call

         function updateSubTotal() {
           var table = document.getElementById("table-cart");
           let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
             return total + parseFloat(row.cells[3].innerHTML);
           }, 0);
           document.getElementById("cartTotalPrice").innerHTML = "₹ " + subTotal.toFixed(2);

           document.querySelector("#totalCartAmount").innerText = "₹ "+subTotal.toFixed(2);

           document.querySelector("#cartGst12").innerText = "₹ "+subTotal*(0.12).toFixed(2);

           document.querySelector("#cartGst18").innerText = "₹ "+subTotal*(0.18).toFixed(2);
         } 
         var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
        //  console.log(cartTotalAmount);
         
         CartData.forEach(function(el){
           el["cartTotalamountAdd"] = cartTotalAmount;
           el["cartItemQuantity"] = a;
           localStorage.setItem("CartData",JSON.stringify(CartData));
         
         })
         
     })
     minus.addEventListener("click",function(){
         
         if(a>0){
          a--;
          num.innerText = a;
          td4.innerText = a*el.price;
         }

         updateSubTotal(); // Initial call

         function updateSubTotal() {
           var table = document.getElementById("table-cart");
           let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
             return total + parseFloat(row.cells[3].innerHTML);
           }, 0);
           document.getElementById("cartTotalPrice").innerHTML = "₹ " + subTotal.toFixed(2);

           document.querySelector("#totalCartAmount").innerText = "₹ "+subTotal.toFixed(2);

           document.querySelector("#cartGst12").innerText = "₹ "+subTotal*(0.12).toFixed(2);

           document.querySelector("#cartGst18").innerText = "₹ "+subTotal*(0.18).toFixed(2);
         }

         var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
        // console.log(cartTotalAmount);

        CartData.forEach(function(el){
        el["cartTotalamountAdd"] = cartTotalAmount;
        localStorage.setItem("CartData",JSON.stringify(CartData));

})
     })
     
     div3.append(minus,num,add);
     td3.append(div3);
    

     var td4 = document.createElement("td");
     td4.innerText = el.price;
     td4.style.color="gray"

     var td5 = document.createElement("td");
     var removeImage = document.createElement("img");
     removeImage.style.cursor="pointer";
     removeImage.setAttribute("src","https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/img_griddelete.gif")
     removeImage.addEventListener("click",function(){
       deleteTrData(el);
       tr.innerHTML = "";
     })
     td5.append(removeImage);

     tr.append(td1,td2,td3,td4,td5);
     document.querySelector("#table-data").append(tr);

     

 })

 function deleteTrData(el){
  CartData = CartData.filter(function(element){
   return element.id != el.id;
  })
  localStorage.setItem("CartData",JSON.stringify(CartData));
}



var table = document.getElementById("table-cart"),
sumVal = 0;
for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML);
  
}  

var cartTotalPrice = document.querySelector("#cartTotalPrice");
cartTotalPrice.innerText = "₹ "+sumVal.toFixed(2);

document.querySelector("#totalCartAmount").innerText = "₹ "+sumVal.toFixed(2);

document.querySelector("#cartGst12").innerText = "₹ "+sumVal*(0.12).toFixed(2);

document.querySelector("#cartGst18").innerText = "₹ "+sumVal*(0.18).toFixed(2);

//   var cartVoucherInput = document.querySelector("cartVoucherInput").value;
// console.log(cartVoucherInput);

var cartApply = document.querySelector("#cart1ReddemApply");
cartApply.style.cursor="pointer";
cartApply.addEventListener("click",function(){
var cartVoucherInput = document.querySelector("#cartVoucherInput").value;
if(cartVoucherInput == "NEW50" || cartVoucherInput == "Debasis"){
  document.querySelector("#totalCartAmount").innerText = "₹ "+(sumVal-100).toFixed(2);
}
else{
  alert("Yehhh, Bhaag yahaan se Coupon Code is Wrong")
}
})

var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
// console.log(cartTotalAmount);

CartData.forEach(function(el){
el["cartTotalamountAdd"] = cartTotalAmount;
localStorage.setItem("CartData",JSON.stringify(CartData));

})
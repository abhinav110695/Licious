
var vishwa_url_abc;
if(document.title=="Chicken_Page") 
{
     vishwa_url_abc="http://localhost:3000/api/Chicken_data"
}
else if(document.title=="Todays_Deal")
{
     vishwa_url_abc="http://localhost:3000/api/bestSeller"
}
else if(document.title=="Fish_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Mutton_Page")
{
     vishwa_url_abc="http://localhost:3000/api/Mutton_data"
}
else if(document.title=="Ready_To_Cook_Page")
{
     vishwa_url_abc="http://localhost:3000/api/Dishes_of_chicken"
}
else if(document.title=="Prawns_Page")
{
     vishwa_url_abc="http://localhost:3000/api/sauce"
}

else if(document.title=="Cold_Cuts_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Spreads_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Eggs_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Biryani_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Combo_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}
else if(document.title=="Featured_Collection_Page")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
}

let vishwa_product_head_name=document.querySelector
("#vishwa_product_head_name");

let data;
let vishwa_getdata=async()=>{
let response = await fetch(vishwa_url_abc);
data=await response.json();

//     console.log(data)
vishwa_append(data)
}
vishwa_getdata();

function vishwa_append(value)
{
     var count=0;
     let vishwa_products_grid=document.querySelector("#vishwa_products_grid");
     vishwa_products_grid.innerHTML=null;
     value.forEach(function (ele){
        let vishwa_cart=document.createElement("div");
        vishwa_cart.setAttribute("class","vishwa_cart")
        
        let name=document.createElement("p");
        name.innerText=ele.name;
        name.setAttribute("class","vishwa_name")
        
        let img=document.createElement("img");
        img.src=ele.imgUrl;
        img.setAttribute("class","vishwa_img")

        let details=document.createElement("p");
        details.innerText=ele.des;
        details.setAttribute("class","vishwa_details")

        let net_wt=document.createElement("p");
        net_wt.setAttribute("class","vishwa_net_wt")
        net_wt.innerText=ele.net_tag  + " "+ ele.net +"   "+
         ele.unit;
        
        let gross_tag=document.createElement("p");
        gross_tag.innerText=ele.gross_tag +"   " +
         ele.gross+ "  " + ele.unit;
    
        let quantity=document.createElement("div")
        quantity.setAttribute("class","vishwa_quantity")
        quantity.append(net_wt,gross_tag)

      
        let price=document.createElement("p");
        price.innerText="MRP "+"₹:" + ele.price;
        price.setAttribute("class","vishwa_price")

        let vishwa_striked_price=document.createElement("p");
        vishwa_striked_price.innerText="MRP"+ "₹:" + ele.strikedPrice;
        vishwa_striked_price.setAttribute("class","vishwa_striked_price")

        var a111=Math.random()
        var  m111= (Math.ceil(a111*35)); 
     //    console.log(m1)

        let vishwa_off=document.createElement("p");
        vishwa_off.innerText=m111+"%"+"OFF"
        vishwa_off.setAttribute("class","vishwa_off")

        let vishwa_mrp_div=document.createElement("div");
        vishwa_mrp_div.setAttribute("class","vishwa_mrp_div");

        let timimg_div=document.createElement("div");
        timimg_div.setAttribute("class","timing_div");

        let timimg_img=document.createElement("img");
        timimg_img.src="https://www.licious.in/img/rebranding/express_delivery.svg"
        timimg_img.setAttribute("class","timimg_img")
        timimg_text=document.createElement("p");
        timimg_text.innerText="Today in 90 min"
        timimg_text.setAttribute("class","timimg_text")
        
         let div_3_wala=document.createElement("div");
        div_3_wala.setAttribute("id","div_3_wala")

        let vishwa_addtocartbtn=document.createElement("button");
        vishwa_addtocartbtn.innerText="ADD TO CART"; 
        vishwa_addtocartbtn.setAttribute("id","vishwa_addtocartbtn")
              
        vishwa_addtocartbtn.addEventListener("click",()=>{
          count=count+ (+ele.price);
         
        })

        
        div_3_wala.append(vishwa_addtocartbtn)

        vishwa_mrp_div.append(price,vishwa_striked_price,vishwa_off,div_3_wala);

          timimg_div.append(timimg_img,timimg_text)
       
        vishwa_cart.append(img,name,details,quantity,vishwa_mrp_div,timimg_div);
        vishwa_products_grid.append(vishwa_cart); 

    })

}

let getData=async()=>{
     let res=await fetch("http://localhost:3000/api/Chicken_data");
     let data=await res.json();
    
}
 getData()

function vishwa_sort_by_price_button(){
          
     data=data.sort(function (a, b) {
           
     return a.price - b.price;
});
vishwa_append(data)
// console.log(data)
}

function vishwa_sort_by_weight_button(){

data=data.sort(function (a, b) {

return a.net - b.net;
});
vishwa_append(data)
// console.log(length)
console.log(data)
}

function vishwa_sort_by_name_button(){   
{
     data=data.sort(function(a,b){
     let c=a.name.toUpperCase();
     let cc=b.name.toUpperCase();
     if(c<cc){ return -1}
     if(c>cc){return 1}
     // return 0;
     })   
}
vishwa_append(data)
}


   


var vishwa_url_abc;
if(document.title=="Chicken_Page") 
{
     vishwa_url_abc="http://localhost:3000/api/Chicken_data"
}
else if(document.title=="Todays_Deal")
{
     vishwa_url_abc="http://localhost:3000/api/fish"
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
     vishwa_url_abc="http://localhost:3000/api/Mutton_data"
}
else if(document.title=="Prawns_Page")
{
     vishwa_url_abc="http://localhost:3000/api/Mutton_data"
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





let vishwa_getdata=async()=>{
    let response = await fetch(vishwa_url_abc);
    let data=await response.json();
    console.log(data)
   vishwa_append(data)
}
vishwa_getdata();

function vishwa_append(value)
{
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
        net_wt.innerText=ele.net_tag +":" + " "+ ele.net +"   "+
         ele.unit;
        console.log(ele.net)
      
        // let net_value=document.createElement("p");
        // net_value.innerText=ele.net;
        
        let gross_tag=document.createElement("p");
        gross_tag.innerText=ele.gross_tag +"   " +
         ele.gross+ "  " + ele.unit;
    
        let quantity=document.createElement("div")
        quantity.setAttribute("class","vishwa_quantity")
        quantity.append(net_wt,gross_tag)

        // let rate_nums=document.createElement("div")
        // rate_nums.setAttribute("class","rate_nums")

        let price=document.createElement("p");
        price.innerText="MRP "+"₹ : " + ele.price;
        price.setAttribute("class","vishwa_price")

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
    //   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  // 
        

         let div_3_wala=document.createElement("div");
        div_3_wala.setAttribute("class","div_3_wala")

        let vishwa_addtocartbtn=document.createElement("button");
        vishwa_addtocartbtn.innerText="ADD TO CART"; 
        vishwa_addtocartbtn.setAttribute("class","vishwa_addtocartbtn")
        var count=0;
        


        vishwa_addtocartbtn.addEventListener("click",()=>{
            
            if(vishwa_addtocartbtn.innerHTML="ADD TO CART")
            {
                // count++;
                vishwa_addtocartbtn.innerText="added" + "  " + count; 
            }
            
            
        })
        div_3_wala.append(vishwa_addtocartbtn)

       
     



        vishwa_mrp_div.append(price,div_3_wala);

        


timimg_div.append(timimg_img,timimg_text)
       
        vishwa_cart.append(img,name,details,quantity,vishwa_mrp_div,timimg_div);
        vishwa_products_grid.append(vishwa_cart); 

        // vishwa_cart.addEventListener("click",function(){{
        //     fun_vishwa_cart()
        // }})
    })

}

function plus_minus_addtocart(){
    let v_plus =document.createElement("button");
    v_plus.innerText="+";
    v_plus.setAttribute("class","v_plus");

    let v_minus =document.createElement("button");
    v_minus.innerText="-";
    v_minus.setAttribute("class","v_minus");

    v_plus.addEventListener("click",()=>{
        count++;
        document.querySelector(".vishwa_addtocartbtn").innerText=count;

    })

    v_minus.addEventListener("click",()=>{
        count--;
        document.querySelector(".vishwa_addtocartbtn").innerText=count;

    })



}

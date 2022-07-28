
import navbar from "../../../silly-authority-4051/Debasis/component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


let searchquery=document.querySelector("#search_bar")
   
searchquery.addEventListener("keypress",()=>{
    if(event.key=="Enter"){
    pressing();
    }
})


let pressing=async()=>{
    let query=document.querySelector("#search_bar").value;
    query.toLowerCase()
    let res = await fetch(`http://localhost:3000/api/${query}`);
    let data = await res.json();
    
    localStorage.setItem("searchresult",JSON.stringify(data))
    console.log(query)
    window.location.href="./abhinav/searcdata.html"
}


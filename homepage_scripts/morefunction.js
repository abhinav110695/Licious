
let append=(data,container)=>{
    data.forEach(({img,title})=>{
        let div=document.createElement("div");
        div.addEventListener("click",()=>{
            onhome2();
        })

        let onhome2=()=>{
            if(title=="Today's Deal"){
                window.location.href=""
            }else if(title=="Chicken"){
                window.location.href=""
            }else if(title=="Fish & Seafood"){
                window.location.href=""
            }else if(title=="Mutton"){
                window.location.href=""
            }else if(title=="Ready to Cook"){
                window.location.href=""
            }else if(title=="Prawns"){
                window.location.href=""
            }else if(title=="Cold Cuts"){
                window.location.href=""
            }else if(title=="Spreads"){
                window.location.href=""
            }else if(title=="Eggs"){
                window.location.href=""
            }else if(title=="Biryani & Kebab"){
                window.location.href=""
            }else if(title=="Combos"){
                window.location.href=""
            }else if(title=="Featured Collections"){
                window.location.href=""
            }
        }

        let image=document.createElement("img");
        image.src=img;
        let h2=document.createElement("p");
        h2.innerText=title;
        div.append(image,h2);
        container.append(div)
        // console.log(data)
    });
}

export default append;
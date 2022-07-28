
let homeappend=(data,container)=>{
    data.forEach(({img,title})=>{
        let div=document.createElement("div");
        div.addEventListener("click",()=>{
            onhome2();
        })

        let onhome2=()=>{
            if(title=="Today's Deal"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk1_todays_deal.html"
            }else if(title=="Chicken"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk2_chicken.html"
            }else if(title=="Fish & Seafood"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk3_fish.html"
            }else if(title=="Mutton"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk4_mutton.html"
            }else if(title=="Ready to Cook"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk5_ready_to_cook.html"
            }else if(title=="Prawns"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk6_prawn.html"
            }else if(title=="Cold Cuts"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk7_cold_cuts.html"
            }else if(title=="Spreads"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk8_spreads.html"
            }else if(title=="Eggs"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk9_eggs.html"
            }else if(title=="Biryani & Kebab"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk10_biryani_kabab.html"
            }else if(title=="Combos"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk11_combos.html"
            }else if(title=="Featured Collections"){
                window.location.href="silly-authority-4051-fw18_1115_day-5/viswanath/1115_all_days/vk12_featured_clctn.html"
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

export default homeappend;
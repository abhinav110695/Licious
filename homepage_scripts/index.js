import append from "./morefunction.js"


// #home_1
let home1=document.querySelector("#home_1")
let banner_img=document.createElement("img")
banner_img.src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62c7158f31f30"
home1.append(banner_img)
home1.addEventListener("click",()=>{
    banner()
})
let banner=()=>{
    window.location.href=""
}


// #home_2
let home2arr=[
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png",title:"Today's Deals"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png",title:"Chicken"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png",title:"Fish & Seafood"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png",title:"Mutton"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png",title:"Ready to Cook"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png",title:"Prawns"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png",title:"Cold Cuts"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png",title:"Spreads"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png",title:"Eggs"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png",title:"Biryani & Kebab"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png",title:"Combos"},
{img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png",title:"Featured Collections"}
]
let home2=document.querySelector("#home_2")
append(home2arr,home2)

//#home_3
let home3=document.querySelector("#home_3")
let ads_img=document.createElement("img")
ads_img.src="../homepage_ss/ads.png"
home3.append(ads_img)



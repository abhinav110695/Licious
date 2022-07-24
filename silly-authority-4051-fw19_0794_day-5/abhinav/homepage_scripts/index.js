

import navbar from "../../../silly-authority-4051/Debasis/component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



import footerTal from "../../../silly-authority-4051/Debasis/component/footer.js";

document.getElementById("footer").innerHTML = footerTal();



import homeappend from "../homepage_scripts/morefunction.js"


// #home_1
let home1=document.querySelector("#home_1")
let banner_img=document.createElement("img")
banner_img.src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62c7158f31f30"
home1.append(banner_img)
home1.addEventListener("click",()=>{
    banner()
})
let banner=()=>{
    window.location.href="index.html"
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
homeappend(home2arr,home2)

//#home_3
let home3=document.querySelector("#home_3")
let ads_img=document.createElement("img")
ads_img.src="../silly-authority-4051-fw19_0794_day-5/abhinav/homepage_ss/ads.png"
home3.append(ads_img)
home3.addEventListener("click",()=>{
    ad()
})
let ad=()=>{
    window.location.href="index.html"
}



//#home_5
let home5=document.querySelector("#home_5")
let ads2_img=document.createElement("img")
ads2_img.src="../silly-authority-4051-fw19_0794_day-5/abhinav/homepage_ss/ads2.png"
home5.append(ads2_img)

//#home_6
let home6arr=[
    {img:"https://dao54xqhg9jfa.cloudfront.net/Category/782aa584-4978-2e46-e38a-4aff56f10800/original/1603885852.4258--2020-10-2817_20_52--738.jpeg?format=webp",title:"Today's Deal"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/840ded78-a6e8-c768-4069-9abde900b5ea/original/Chicken_(1).png?format=webp",title:"Chicken"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b297aada-cd28-8357-f0e1-2ae25d3dd1ee/original/FishSeafood.png?format=webp",title:"Fish & Seafood"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b4b90104-3976-ee97-7cdd-812a4916c0e6/original/Mutton.jpg?format=webp",title:"Mutton"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1db15fd5-a5d3-b275-1579-2e3b2edc0d30/original/RTC.png?format=webp",title:"Ready to Cook"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/Category/2105beee-e9a9-3efd-4912-2b9657f32d99/original/1604284739.3526--2020-11-0208_08_59--472.jpeg?format=webp",title:"Prawns"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/db686e9b-3609-a719-49a6-435a883a1d59/original/Cold-Cuts_(1).png?format=webp",title:"Cold Cuts"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/a73279cf-eb46-a552-c7bd-10361814ae92/original/Spread.png?format=webp",title:"Spreads"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/Category/bdfca08e-566b-4439-0aac-9c100704cb0b/original/1603646527.5457--2020-10-2522_52_07--738.jpeg?format=webp",title:"Eggs"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ecf1b530-d791-c509-b17c-43ccaabf9921/original/1.jpg?format=webp",title:"Biryani & Kebab"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/Category/8209cc57-cc85-4e5d-ac6b-4d8f2f36c1ce/original/1604645369.2866--2020-11-0612_19_29--738.jpeg?format=webp",title:"Combos"},
    {img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/050c5580-8e16-30f3-213f-f109d86be44a/original/cat-image_(1).jpg?format=webp",title:"Featured Collections"}
    ]
let home6=document.querySelector("#home_6")
homeappend(home6arr,home6)


//#home_8
let home8arr=[
    {img:"https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg",title:"Wait a Minute! Don't Buy Shawarma Anymore, Make it at Home Instead!"},
    {img:"https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2055615416.jpg",title:"This Creamy Herbed Chicken Recipe is the Perfect Meal Any Day of the Week!"},
    {img:"https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2040426830.jpg",title:"Savour a Mouth-Watering Paprika Roast Chicken On a Lazy Weekend!"}
    ]
let home8=document.querySelector("#home_8")
homeappend(home8arr,home8)

//#home_9
let home9=document.querySelector("#home_9")
let banner2=document.createElement("img")
banner2.src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34be7b89a3"
home9.append(banner2)

//#home_10
let home10=document.querySelector("#home_10")
let banner3div=document.createElement("div")
let banner3img=document.createElement("img")
banner3img.src="https://d2407na1z3fc0t.cloudfront.net/Banner/Rebranding_homepage_madewithLicious.png"
let banner3h2=document.createElement("h2")
banner3h2.innerText="#MadeWithLicious"
let banner3p=document.createElement("p")
banner3p.innerText="Cooking with Licious meats is more fun now! Post a picture of your Licious dish on our Instagram page, tag us and use #MadeWithLicious for a chance to be featured on our Instagram page! Happy Cooking!"
banner3div.append(banner3img,banner3h2,banner3p)
home10.append(banner3div)


// let GoToSantosh = document.getElementsByClassName("home_product-card")

// onc8.addEventListener("click",()=>{
//     window.location.href = "Product_pages.html"

// })




      
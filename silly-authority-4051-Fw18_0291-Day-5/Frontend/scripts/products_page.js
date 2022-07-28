


let getdata = async () => {
  let res = await fetch("http://localhost:3000/api/tempo");
  let data = await res.json();
  //   console.log(data);
  appenvalue(data);
  // floatCartData(data);
  localStorage.setItem("tempo", JSON.stringify(data));
  // getdatsasa(data);
};
getdata();

let CartAllDetials = JSON.parse(localStorage.getItem("CartDetails")) || [];

appenvalue = (value) => {
  let sum2 = 0;
  let box = document.getElementById("div1_ptodct");
  value.forEach((val) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div1_images");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div1_desction");

    let image = document.createElement("img");
    image.src = val.imgUrl;
    let image2 = document.createElement("img");
    image2.src = val.imgUrl1;
    let image3 = document.createElement("img");
    image3.src = val.imgUrl2;

    let name = document.createElement("h3");
    name.innerHTML = val.name;

    let desc = document.createElement("p");
    desc.innerHTML = val.description;

    let desc2 = document.createElement("h4");
    desc2.innerHTML = val.des;

    let No_off_pices = document.createElement("h5");
    No_off_pices.innerHTML = "No. of Pieces : " + val.No_off_pices;

    let No_off_piceslogo = document.createElement("img");
    No_off_piceslogo.src = val.No_off_piceslogo;
    No_off_piceslogo.setAttribute("id", "weigthLogo");

    let Serves = document.createElement("h5");
    Serves.innerHTML = "Serves " + val.Serves;

    let Serveslogo = document.createElement("img");
    Serveslogo.src = val.Serveslogo;
    Serveslogo.setAttribute("id", "weigthLogo1");

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div1_weigth");

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div1_weigth1");
    div4.append(No_off_piceslogo, No_off_pices, Serveslogo, Serves);

    let gross_wt = document.createElement("h5");
    gross_wt.innerHTML = "Gross Wt." + val.gross_wt;

    let gross_wtlogo = document.createElement("img");
    gross_wtlogo.src = val.gross_wtlogo;
    gross_wtlogo.setAttribute("id", "weigthLogo1");

    let net_wt = document.createElement("h5");
    net_wt.innerHTML = "Net wt." + val.net;

    let netwetlogo = document.createElement("img");
    netwetlogo.src = val.netwetlogo;
    netwetlogo.setAttribute("id", "weigthLogo1");

    let div5 = document.createElement("div");
    div5.setAttribute("id", "div1_weigth2");
    div5.append(gross_wtlogo, gross_wt, netwetlogo, net_wt);

    let div6 = document.createElement("div");
    div6.setAttribute("id", "div1_weigthlast");

    let div7 = document.createElement("div");
    div7.setAttribute("id", "div1_weigthlast2");

    let price_tag = document.createElement("h5");
    price_tag.innerHTML = val.price_tag;
    price_tag.setAttribute("id", "div1_weigthlastpricetag");

    let price = document.createElement("h3");
    price.innerHTML = " ₹ " + val.price;
    price.setAttribute("id", "div1_weigthlastprice");
    console.log(val.price);

    let CartButton2 = document.createElement("div");
    CartButton2.setAttribute("id", "stylingBtn1");

    let substruct = document.createElement("button");
    substruct.setAttribute("id", "div_3CartBtn4");
    substruct.innerHTML = "-";
    // console.log(substruct);

    let center = document.createElement("button");
    center.setAttribute("id", "div_3CartBtn5");
    center.innerHTML = "Add to cart";
    // console.log(center.innerHTML);

    let jor = document.createElement("button");
    jor.setAttribute("id", "div_3CartBtn6");
    jor.innerText = "+";

    center.addEventListener("click", () => {
      // alert("click");
      if (center.innerHTML == "Add to cart") {
        center.innerHTML = 0;
        CartAllDetials.push(val);
        localStorage.setItem("CartDetails", JSON.stringify(CartAllDetials));
        jor.style.display = "inline-block";
        substruct.style.display = "inline-block";
        // console.log(margeprice)
      }
    });
    substruct.addEventListener("click", () => {
      let substaract = (center.innerHTML = center.innerHTML - 1);
      // console.log(center.innerHTML)
      sum2 = val.price;
      totalPrice = substaract * sum2;
      let LOgoOfprice = "₹"
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(`${LOgoOfprice}${totalPrice}`);
      if (center.innerHTML < 1) {
        substruct.style.display = "none";
      } else if (center.innerHTML == -1 && center.innerHTML == 0) {
        jor.style.display = "inline-block";
        center.innerHTML == "Add to cart";
      }
    });
    jor.addEventListener("click", () => {
      let number = (center.innerHTML = +center.innerHTML + +1);
      sum2 = val.price;
      totalPrice = number * sum2;
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(totalPrice);
      if (center.innerHTML == 6) {
        jor.style.display = "none";
      } else if (center.innerHTML == -1 && center.innerHTML == 0) {
        center.innerHTML == "Add to cart";
      }
    });

    let bikelogo = document.createElement("img");
    bikelogo.src = val.bikelogo;

    let bikeContnt = document.createElement("p");
    bikeContnt.innerHTML = val.bikeContnt;

    let div8 = document.createElement("div");
    div8.setAttribute("id", "div1_imageslast");

    let div9 = document.createElement("div");

    let span1 = document.createElement("span");
    span1.setAttribute("class", "SlideShowdot");
    let span2 = document.createElement("span");
    span2.setAttribute("class", "SlideShowdot");
    let span3 = document.createElement("span");
    span3.setAttribute("class", "SlideShowdot");

    div7.append(bikelogo, bikeContnt);

    CartButton2.append(substruct, center, jor);

    div6.append(price_tag, price, CartButton2);

    div3.append(div4, div5);

    div8.append(image, image2, image3);

    div9.append(span1, span2, span3);
    div2.append(name, desc2, desc, div3, div6, div7);
    box.append(div, div2);
  });

  showSlides();

  function showSlides() {
    let i;
    let dots = document.getElementsByClassName("SlideShowdot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
};

//---------------------------------------------------------------------------------------------------------------

let getSlideData = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/bestSeller");
    let users = await response.json();
    appendSlideNews(users);
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
};
getSlideData();

let totalsum;

appendSlideNews = (dated) => {
  let sum = 0;
  dated.forEach((e) => {
    let card2 = document.createElement("div");
    let div = document.createElement("div");
    div.setAttribute("id", "div3_cont");

    let img = document.createElement("img");
    img.setAttribute("src", e.imgUrl);
    img.setAttribute("id", "div_3image");

    let name = document.createElement("h4");
    name.innerText = e.name;

    let des = document.createElement("p");
    des.innerText = e.des;

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div_3wight");

    let div4 = document.createElement("div");
    div4.setAttribute("id", "bikelogosantosh");

    let net_tag = document.createElement("h6");
    net_tag.innerText = e.net_tag;

    let net = document.createElement("h6");
    net.innerText = e.net;

    let n_gm = document.createElement("h6");
    n_gm.innerText = e.unit;

    let gross_tag = document.createElement("h6");
    gross_tag.innerText = e.gross_tag;

    let gross = document.createElement("h6");
    gross.innerText = e.gross;

    let g_gm = document.createElement("h6");
    g_gm.innerText = e.unit;

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div_3priceCart");

    let price_tag = document.createElement("h5");
    price_tag.innerText = e.price_tag;

    let cuurency = document.createElement("h5");

    let price = document.createElement("h5");
    price.innerText = e.price;

    let strikePrice = document.createElement("strike");
    strikePrice.innerText = "₹" + e.strikedPrice;

    let minus = document.createElement("button");
    minus.setAttribute("id", "div_3CartBtn1");
    minus.innerHTML = "-";

    let main = document.createElement("button");
    main.setAttribute("id", "div_3CartBtn2");
    main.innerHTML = "Add to cart";

    let add = document.createElement("button");
    add.setAttribute("id", "div_3CartBtn3");
    add.innerText = "+";

    let newbutton = document.createElement("button");
    newbutton.innerHTML = "fhg";

    main.addEventListener("click", () => {
      // alert("click");
      if (main.innerHTML == "Add to cart") {
        main.innerHTML = 0;
        CartAllDetials.push(e);
        localStorage.setItem("CartDetails", JSON.stringify(CartAllDetials));
        add.style.display = "inline-block";
        minus.style.display = "inline-block";
      }
    });
    minus.addEventListener("click", () => {
      let substaract = (main.innerHTML = main.innerHTML - 1);
      sum = e.price;
      totalPrice = substaract * sum;
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(totalPrice);
      if (main.innerHTML < 1) {
        minus.style.display = "none";
        main.innerHTML == "Add to cart";
      }
      if (main.innerHTML == -1 && main.innerHTML == 0) {
        add.style.display = "inline-block";
        main.innerHTML == "Add to cart";
      }
    });
    add.addEventListener("click", () => {
      let number = (main.innerHTML = +main.innerHTML + +1);
      sum = e.price;
      totalPrice = number * sum;
      // console.log(sum2)
      console.log(totalPrice);
      document.getElementById("totalpriceShow").innerHTML = null;
      document.getElementById("totalpriceShow").append(totalPrice);
      if (main.innerHTML == 6) {
        add.style.display = "none";
      } else if (main.innerHTML == -1 && main.innerHTML == 0) {
        main.innerHTML == "Add to cart";
      }
    });

    let CartButton = document.createElement("div");
    CartButton.setAttribute("id", "stylingBtn");
    CartButton.append(minus, main, add);

    let bikelogosantosh = document.createElement("img");
    bikelogosantosh.src =
      "https://www.licious.in/img/rebranding/express_delivery.svg";

    let bikelogoTimingsantosh = document.createElement("p");
    bikelogoTimingsantosh.innerText = "Tommorow 8AM - 11AM";

    div4.append(bikelogosantosh, bikelogoTimingsantosh);

    div2.append(net_tag, net, n_gm, gross_tag, gross, g_gm);
    div3.append(price_tag, cuurency, price, strikePrice);

    div.append(img, name, des, div2, div3, CartButton, div4);

    card2.append(div);
    document.getElementById("slideNews").append(card2);
  });
};

//<!-----------------------------Slide bar in home page----------------------------------------->

let button = document.getElementById("next_home");

button.onclick = () => {
  let container = document.getElementById("slideNews");
  sideScroll(container, "right", 25, 100, 10);
};

let back = document.getElementById("prev_home");
back.onclick = () => {
  let container = document.getElementById("slideNews");
  sideScroll(container, "left", 25, 100, 10);
};

sideScroll = (element, direction, speed, distance, step) => {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

// <!-------------------------------------------------------------------------------------------------------------------------------------->

let LiciousData = async () => {
  let res = await fetch("http://localhost:3000/api/TheLicious_way");
  let data = await res.json();
  // console.log(data);
  LiciousDataappend(data);
};
LiciousData();

LiciousDataappend = (data) => {
  let box = document.getElementById("Licious");
  data.forEach((e) => {
    let div = document.createElement("div");

    name.innerHTML = " The Licious Way";
    let img = document.createElement("img");
    img.setAttribute("src", e.imgUrl);

    let des = document.createElement("span");
    des.innerText = e.desc;

    div.append(img, des);

    box.append(div);
  });
};

////-------------------------------------------------------------

$(document).ready(function () {
  $("#headerVideoLink").magnificPopup({
    type: "inline",
    midClick: true,
  });
});

// --------------------------------------------------------------------------------------------------------

let socailmediadata = async () => {
  let res = await fetch("http://localhost:3000/api/socailMedia");
  let data = await res.json();
  //   console.log(data);
  scoailmedaiDataappend(data);
};
socailmediadata();

scoailmedaiDataappend = (data) => {
  let box = document.getElementById("slideNews1");
  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div4_cont");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div4_dataNmae");

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div4_datapara");

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4_dataparaimage");

    let img = document.createElement("img");
    img.src = e.imgUrl;
    img.setAttribute("id", "socailmedaiIMage");

    let image = document.createElement("img");
    image.src = e.insatphto;

    let image_name = document.createElement("h4");
    image_name.innerHTML = "HiManshU";

    let insatalogo = document.createElement("img");
    insatalogo.src = e.insatalogo;

    let insatgrmaNmae = document.createElement("h1");
    insatgrmaNmae.innerHTML = "Instagram";

    let paragra1insat = document.createElement("p");
    paragra1insat.innerHTML =
      "Its time to make these again- Garlic Chicken Cheese Balls! Best in taste and flavours! Yummmmm ???????? ";

    let logofoo = document.createElement("img");
    logofoo.src = e.logofoo;

    let nameOfood = document.createElement("h4");
    nameOfood.innerHTML = e.name;

    div2.append(image, image_name, insatalogo, insatgrmaNmae);
    div3.append(paragra1insat);
    div4.append(logofoo, nameOfood);
    div.append(img, div2, div3, div4);
    box.append(div);
  });
};

// <!------------------------------------------SLIDE---SHOW-------------------------------------------------------------------------------------!>

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidespages");
  let dots = document.getElementsByClassName("SlideShowdot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// <!---------------------------DATA APPEND FOR CART PAGE---------------------------------------------------------------------------!>

let CartDetials = JSON.parse(localStorage.getItem("CartDetails"));
console.log(CartDetials);

let stickeyImageCart = document.createElement("img");
stickeyImageCart.src = CartDetials[0].imgUrl;

let stickeyPriceCart = document.createElement("p");
stickeyPriceCart.innerHTML = CartDetials[0].name;

let stickeyMrpCart = document.createElement("p");
stickeyMrpCart.innerHTML = "MRP:";
let stickeyNmaecart = document.createElement("h1");
stickeyNmaecart.innerHTML = "₹" + CartDetials[0].price;

let stickeybuttonCart = document.createElement("button");
stickeybuttonCart.innerHTML = "Go To Cart";

stickeybuttonCart.addEventListener("click", () => {
  // alert("click");
  window.location.href ="../../../silly-authority-4051/Debasis/Pages/cartPage.html"
});

let stickeybikeLogo = document.createElement("img");
stickeybikeLogo.src = CartDetials[0].bikelogo;

let stickeybikecont = document.createElement("p");
stickeybikecont.innerHTML = CartDetials[0].bikeContnt;

let stickeydiv1 = document.createElement("div");
stickeydiv1.setAttribute("id", "stickeyCar1");
let sticketydiv2 = document.createElement("div");
sticketydiv2.setAttribute("id", "stickeyCart2");

stickeydiv1.append(
  stickeyImageCart,
  stickeyPriceCart,
  stickeyMrpCart,
  stickeyNmaecart,
  stickeybuttonCart
);

sticketydiv2.append(stickeybikeLogo, stickeybikecont);

document.getElementById("FloatCart_page").append(stickeydiv1, sticketydiv2);

// ----------------------------------D-A-T-A--A--P-P-E-N-D-F-O-R-A-D-D-T-O-C-A-R-T---------------------------------------------------------------

// CartDetials.forEach((ele) => {
//   let image = document.createElement("img");
//   image.src = ele.imgUrl;

//   let name = document.createElement("p");
//   name.innerHTML = ele.name;

//   let price = document.createElement("p");
//   price.innerHTML = ele.price;

//   let addTocart = document.createElement("button");
//   addTocart.innerHTML = "Add to Cart";

//   let div1 = document.createElement("div");
//   div1.setAttribute("id", "");

//   let div2 = document.createElement("div");
//   div2.setAttribute("id", "");

//   div1.append(image, name);

//   div2.append(addTocart);

//   // document.getElementById("FloatCart_page").append(div1,div2)
// });




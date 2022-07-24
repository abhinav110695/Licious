import navbar from "../../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
console.log(navbar())

var loginBtn = document.querySelector("#login")
loginBtn.addEventListener("click", loginOpen)
function loginOpen(){
    var cLogin = document.querySelector("#closeloginbtna")
    var loginArea = document.querySelector("#MainContentLogin")
    loginArea.classList.add("DisplayTheactivness")
    // var cLogin = document.querySelector("#clogin")
    cLogin.style.display = "block"

}
var cLogin = document.querySelector("#closeloginbtna")
cLogin.addEventListener("click", loginClose)
function loginClose(){
  
    var loginArea = document.querySelector("#MainContentLogin")
    loginArea.classList.remove("DisplayTheactivness")
    cLogin.style.display = "none"
}

// --------------------------CA--R--T-----P--A---A-G---E--------------------------------------------------------------

  var CartloginBtn = document.querySelector("#CartPage");
  CartloginBtn.addEventListener("click", cartpageopne);
  function cartpageopne() {
    var CloseCartBtn = document.querySelector("#CloseCartBtn");
    var CartPartArea = document.querySelector("#mainCartContantPagr");
    CartPartArea.classList.add("DisplayTheactivnessFrocart");
    // var CloseCartBtn = document.querySelector("#clogin")
    CloseCartBtn.style.display = "block";
  }
  var CloseCartBtn = document.querySelector("#CloseCartBtn");
  CloseCartBtn.addEventListener("click", CartPartClose);
  function CartPartClose() {
    var CartPartArea = document.querySelector("#mainCartContantPagr");
    CartPartArea.classList.remove("DisplayTheactivnessFrocart");
    CloseCartBtn.style.display = "none";
  }

// login functionality ........
  let signupData = document.getElementById("MobleNoInput").value;
  document.getElementById("MobleNoInput").addEventListener("submit", submitFunc);

  var userData =  [];

  function submitFunc(event){
    event.preventDefault();

    let data  = {
      Number: document.getElementById("MobleNoInput").value,
      otp: document.getElementById("OneTimePassword").value,
    };

    alert("sign-up is successful");
    window.location.reload();
    localStorage.setItem("userData", JSON.stringify(data));

   
  }
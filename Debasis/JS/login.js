


// var modal = document.getElementById('id01');



// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



//       // login functionality

//      // let students =[]

//      class User {
//         #password 
//         constructor(name, id) {
//           // this.name = name;
//           // this.id = id;
//         }
      
//         signup(username, password) {
//           // validation of username and password as per rule
      
//           let isValidated = false;
      
//           //validation username & validating password method
      
//           isValidated =
//             this.#validateUsername(username) && this.#validatePassword(password);
      
//           if (isValidated) {
//             this.username = username;
//             this.#password = password;
      
//             console.log("user Register success");
//             alert("User Register Success !!")
      
//           //   students.push(this)
      
//           } else {
//             console.log("Please follow username or password rules");
//           }
//         }
      
//         #validateUsername() {
//           //checking for rule
//           return true;
//         }
      
//         #validatePassword() {
//           //checking for rule
//           return true;
//         }
      
//         login(username, password) {
//           if (username === this.username && password === this.#password) {
//             console.log("login sucessfully");
//             alert("Login sucessfully");
//           } else {
//             console.log("Authentication failed");
//           }
//         }
//       }
//     //   let s1 = new User(name,password)
//       //   let s1 = new User("santosh", 1);
//       //   s1.signup("santosh", "password");
//       //   s1.login("santosh", "password");
//       //   console.log("s1:", s1);
      
//       //   create student class from user
      
//       // class Student extends User{
//       //   constructor(name,id){
      
//       //       // borrow properities from user
//       //       super(name,id)
//       //       this.numOfAsigement = 0;
//       //   }
//       //    submitAssigement(){
//       //       this.numOfAsigement++;
//       //    }
//       // }
      
//       // class Admin extends User{
//       //   constructor(name,id){
      
//       //       super(name ,id);
//       //   }
//       //   removeStudent(id){
//       //       // remove object from array
      
//       //      students = students.filter((el) =>{
//       //           return el.id !== id
//       //       })
      
//       //   }
//       // }
      
      
//       // let s1 = new Student('santosh', 7);
//       // let s2 = new Student('jai', 10);
//       // s1.signup('santosh','password')
//       // s2.signup('jai','password')
//       // console.log('s1:',s1)
      
//       // // s1.login('santosh','password')
//       // s2.login('jai','password')
//       // s1.submitAssigement();
      
      
      
      
      
//       // let n = new Admin('nurpul',3);
//       // n.removeStudent(7)
      
      
      
//       // console.log(students)
      
      
//             // ----------------------------------------------------------registor------------------------
//         var form1 = document.getElementById("sign_upForm");
//         function Register(event) {
//           event.preventDefault();
//           let sign_data = {
//             name: form1.name.value,
//             password: form1.password.value,
           
//           };
          
//            s1.signup(sign_data.name,sign_data.password);
//            console.log(s1);
      
        
   
      
//         }
      
//         //--------------------------------------------------------------------------login--------------------
      
//         let form2 = document.getElementById("login_form");
//         function Login(e) {
//           e.preventDefault();
//           let login_data = {
//             username: form2.username.value,
//             password: form2.password.value,
//           };
//           s1.login(login_data.username, login_data.password);
       
//         }



import navbar from "../component/navbar.js";

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

  // var CartloginBtn = document.querySelector("#CartPage");
  // CartloginBtn.addEventListener("click", cartpageopne);
  // function cartpageopne() {
  //   var CloseCartBtn = document.querySelector("#CloseCartBtn");
  //   var CartPartArea = document.querySelector("#mainCartContantPagr");
  //   CartPartArea.classList.add("DisplayTheactivnessFrocart");
  //   // var CloseCartBtn = document.querySelector("#clogin")
  //   CloseCartBtn.style.display = "block";
  // }
  // var CloseCartBtn = document.querySelector("#CloseCartBtn");
  // CloseCartBtn.addEventListener("click", CartPartClose);
  // function CartPartClose() {
  //   var CartPartArea = document.querySelector("#mainCartContantPagr");
  //   CartPartArea.classList.remove("DisplayTheactivnessFrocart");
  //   CloseCartBtn.style.display = "none";
  // }

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
document.getElementById("confirmLogin").addEventListener("click", function(){
  alert("sign-up successful");
  window.location.reload();
});



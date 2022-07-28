

import navbar from "../component/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

import footer from "../component/footer.js"

document.getElementById("footer").innerHTML = footer();


document.getElementById("form").addEventListener("submit", ganerateForm);
var addressdata = JSON.parse(localStorage.getItem(addressdata)) || [];
function ganerateForm(event) {
  event.preventDefault();
  var location = document.getElementById("location").value;
  var addres = document.getElementById("address").value;
  var landmark = document.getElementById("landmark").value;
  var city = document.getElementById("city").value;
  var mobileNo = document.getElementById("mobileNo").value;
  var addresobj = {
    location: location,
    addres: addres,
    landmark: landmark,
    city: city,
    mobileNo: mobileNo,
  };

  addressdata.push(addresobj);
  localStorage.setItem("addressdata", JSON.stringify(addressdata));
  document.getElementById("address").style.color = "green";
}
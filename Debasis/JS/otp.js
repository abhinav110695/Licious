
import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("verify").onclick = function () {
    alert('Payment Successfull')
    location.href = "\successfull.html";
 };
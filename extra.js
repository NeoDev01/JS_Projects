/*var a = document.querySelector("h1")

a.addEventListener("click", function() {
    a.innerHTML = "mai badal gya hu teri ex ki tarah"
    a.style.color = "yellow"
    a.style.backgroundColor = "#000"
})*/

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click", function() {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        console.log("clicked")
        flag = 1
        btn.innerHTML = "OFF"
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("again clicked")
        flag = 0
        btn.innerHTML = "ON"
    }
})
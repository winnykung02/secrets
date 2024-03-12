console.log("hello!!!");

//click on button changes background color, looped between pink & dark gray//

var box = document.querySelector("body")
var button = document.querySelector("button"),
    colors = ["pink", "rgb(30, 30, 35)"];

button.onclick = function () {
    boxColor = colors.shift();
    colors.push(boxColor);

    box.style.backgroundColor = boxColor;}



    


//click on background changes text color, looped between pink & dark gray//
// box.onclick = function () {
//     document.getElementById("textColor").style.color,
//     colors = ["pink", "rgb(30, 30, 35)"];
// box.onclick = function changeFontColor() {
//     if (color == "pink") { // if bg color is pink change it to gray otherwise change it to pink.
//         box.style.color = "rgb(30, 30, 35)";
//      } else {
//         box.style.color = "pink";

//     box.style.textDecorationColor = textColor;}
var inputText=document.querySelector("#txtarea");
var btn2=document.querySelector(".button2");
var txt=document.querySelector("p");
var btn1=document.querySelector(".button1");
var sec=document.querySelector("section");
var slider=document.querySelector("#slider");
console.log(btn2);

var url="https://api.funtranslations.com/translate/minion.json";
function displayAns(t){
    txt.innerText=t.contents.translated;
};
function Toggle(){
    if (sec.style.display === "none") {
        sec.style.display = "block";
        slider.style.display="none";
    } 
}
function doFetch(){
    var ul=url+"?"+"text="+inputText.value;
    fetch(ul)
    .then(Response=>Response.json())
    .then(json=>displayAns(json));
};
btn1.addEventListener("click",Toggle);

btn2.addEventListener("click",doFetch);



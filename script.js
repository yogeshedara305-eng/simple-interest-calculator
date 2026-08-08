var btn=document.querySelector(".btn button").addEventListener("click",btn_click)
var reset=document.querySelector(".reset").addEventListener("click",reset_btn)
function btn_click(){
    var p=document.querySelector('#pri').value
    var r=document.querySelector('#rate').value
    var t=document.querySelector('#time').value
    if(p==""||r==""||t==""){
        alert(" Please Enter Values")
    }
    else{
        para=document.querySelector("#result").textContent=`Interest is:${(p*r*t)/100}`
 }
}
function reset_btn(){
     var p=document.querySelector('#pri').innerHTML=""
    var r=document.querySelector('#rate').innerHTML=""
    var t=document.querySelector('#time').innerHTML=""
}


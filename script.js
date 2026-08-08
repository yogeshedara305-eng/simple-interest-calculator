var btn=document.querySelector(".btn button").addEventListener("click",btn_click)
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


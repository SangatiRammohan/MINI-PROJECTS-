let btn=document.getElementById("btn")
let input=document.getElementById("password")
let len=8

let CA="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let ca="abcdefghijklmnopqrstuvwxyz"
let num="0123456789"
let symbols="!@#$%^&*_-~+?"

let pswd=CA+ca+num+symbols

btn.addEventListener("click",()=>{
  
     let see=""
    see += CA[Math.floor(Math.random()*CA.length)]
    see += ca[Math.floor(Math.random()*ca.length)]
    see += num[Math.floor(Math.random()*num.length)]
    see += symbols[Math.floor(Math.random()*symbols.length)]
    
    while(len>see.length){
        see += pswd[Math.floor(Math.random()*pswd.length)]
    }
input.value= see
})
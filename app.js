const btn_sayi=document.querySelectorAll(".btn");
const btn_symbol=document.querySelectorAll(".btnS");
const input=document.getElementById("input");
const btn_c=document.getElementById("btn_c");
const btn_esit=document.getElementById("btn_esit");
const btn_nokta=document.getElementById("btn_nokta");
let press_symbol=false;
let result=0;
let opt="";

btn_sayi.forEach(element => {
    element.onclick=function(e){
    if(input.value=="0"|| press_symbol)
    {
        input.value="";
    }
     input.value+=this.textContent;
     press_symbol=false;
    }
});
btn_symbol.forEach(element => {
    element.onclick=function(e){
    press_symbol=true;
    switch(opt){
    case "+":input.value=sonuc+Number(input.value) ;break;
    case "-":input.value=sonuc-Number(input.value) ;break;
    case "*":input.value=sonuc*Number(input.value) ;break;
    case "/":input.value=sonuc/Number(input.value) ;break;
    }
    opt=this.textContent;
    sonuc=Number(input.value) ;
    }
});
btn_c.onclick=function(e){
    input.value="0";
    sonuc=0;
    opt="";
}
btn_esit.onclick=function(e){
    press_symbol=true;
    switch(opt){
    case "+":input.value=sonuc+Number(input.value) ;break;
    case "-":input.value=sonuc-Number(input.value) ;break;
    case "*":input.value=sonuc*Number(input.value) ;break;
    case "/":input.value=sonuc/Number(input.value) ;break;
    }
    sonuc=Number(input.value) ;
    input.value=sonuc;
    sonuc=0;
    opt="";
}
btn_nokta.onclick=function(e){
if((!press_symbol) && (!input.value.includes("."))){
    input.value+=".";
}else if(press_symbol){
    input.value="0";
}
if(!input.value.includes(".")){
    input.value+=".";
}
press_symbol=false;
}




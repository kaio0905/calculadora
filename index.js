function calcular(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var s = document.getElementById("S").value;
var res = document.getElementById("resultado")

    if(num1==="" || num2===""){
        res.innerHTML ="Digite um número"
        return;
    }

    if(s==="+"){
        res.innerHTML =parseInt(num1)+parseInt(num2)
    } else if(s==="-"){
        res.innerHTML =num1-num2;
    } else if(s==="*"){
        res.innerHTML =num1*num2;
    } else if(s==="/"){
        res.innerHTML =num1/num2;
    }    
}
tela=document.getElementById("resultado")
subtela=document.getElementById("subresultado")
function ButtonClick(Valor){
if(tela.innerHTML=="0"){
tela.innerHTML = ""+Valor
}else{
tela.innerHTML += ""+Valor
     }
}
function Calc(){
subtela.innerHTML = tela.innerHTML
tela.innerHTML = eval(tela.innerHTML)
}
function Clear(){
tela.innerHTML = "0"
}
function Back(){
tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length-1)

if(tela.innerHTML ==""){tela.innerHTML="0"}

}
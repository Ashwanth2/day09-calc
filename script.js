

function clicking(event){
    event.innerText
    parent=document.querySelector('.display')
    parent.innerText=parent.innerText+event.innerText
    console.log("button clicked");
}



window.addEventListener('keypress',(e)=>{
    operators=['-','+','/','*']
    key=e.key
    code=e.code
    if(code.includes('Digit') || operators.includes(key)){
        parent=document.querySelector('.display')
        parent.innerText=parent.innerText+key
        console.log('key is press')
        console.log(e)
    }
    
 else{
    console.log("error");
 }
})



const calculate=()=>{
    try{
 parent=document.querySelector('.display')
 data=parent.innerText
 outputOriginal=document.getElementById("output")
 var output=eval(data)
 outputOriginal.innerText=output
 console.log('calculated',(output).toFixed(2));
}
catch(err){
    alert("invalid")

}
}

function Clear(){
    parent=document.querySelector('.display')
    parent.innerText="";
}

function del(){
    parent=document.querySelector('.display')
    parent.innerText=parent.innerText.slice(0,-1);

}
document.onkeyup =e=>{
    if(e.key=="Enter"|| e.key =="Numenter"){
        parent=document.querySelector('.display')
    data=parent.innerText
    outputOriginal=document.getElementById("output")
    var output=eval(data)
    outputOriginal.innerText=output
 console.log('calculated',(output).toFixed(2))
    }


}


const modebtn=document.querySelector(".Theme");
const result=document.querySelector(".output");
const btn=document.getElementsByTagName("button");
let solved=false;
let currMode="Light";

modebtn.addEventListener("click",()=>{
    const  modetext=modebtn.children[0];
    const me=document.querySelector(".me");
    if(currMode=="Light"){
        currMode="Dark";
        document.body.style.backgroundColor="black";
        document.querySelector("h1").style.color="white";
        document.querySelector(".output").style.backgroundColor="rgba(14, 81, 190, 0.694)";
        document.querySelector(".output").style.color="white";
        modetext.style.color="white";
        me.style.color="white";
        modetext.innerText="Light Mode";
        modetext.style.fontweight="bold";
        result.style.borderColor="white";
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.borderColor = "white";
            btn[i].style.color="white";
        }
        
    }
    else {
        currMode="Light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("h1").style.color="black";
        document.querySelector(".output").style.color="black";
        modetext.style.color="black";
        modetext.innerText="Dark Mode"; 
        modetext.style.fontweight="bold"; 
        modetext.style.fontweight="bold";
        me.style.color="black";
        result.style.borderColor="white";
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.borderColor = "black";
            btn[i].style.color="black";
        }
    }
})
const oper=document.querySelectorAll(".operand");
oper.forEach(key => {
    key.addEventListener("click",()=>{
        newInput(key.innerText);
    })
});

const ac=document.querySelector(".ac");
ac.addEventListener("click",()=>{
    result.innerText="0";
    result.style.fontSize = "clamp(1.5rem, 4vw, 5vh)";
})

const equals=document.querySelector(".equals");
equals.addEventListener("click",()=>{
    solved=true;
    try {
        if (result.innerText !== "0") {
            let cleanEquation = result.innerText
                .replace(/\^/g, '**') 
                .replace(/[^-()\d/*+.]/g, '');
            result.innerText = eval(cleanEquation); 
        }
    } catch {
        result.innerText = "Error"; // Changed: Error handling for invalid equations
    }
    
})
const backspace=document.querySelector(".backspace");
backspace.addEventListener("click",()=>{
    if(result.innerText==0)return;
    result.innerText=result.innerText.slice(0,-1)||"0";
})


function newInput(value){
    if(solved){
        solved=false;
        ac.click();
    }   
    if(result.innerText=="0")
        result.innerText=value;
    else
        result.innerText+=value;
}
document.addEventListener("keydown",(event)=>{
    const keyValue = event.key;
    if(keyValue=="Enter")
        equals.click();
    else if(keyValue=="m"||keyValue=="M"){
        modebtn.click();
    }
    else if(event.ctrlKey&&keyValue=="Backspace"){
        event.preventDefault();
        ac.click();
    } 
    else if(keyValue=="Backspace"){
        backspace.click();
    }
       
    else{
        for(let i=0;i<oper.length;i++){
            if(oper[i].innerText==keyValue){
                oper[i].click();
            }
        }
    } 
    


});



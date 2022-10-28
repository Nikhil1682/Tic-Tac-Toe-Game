let aturn= new Audio("ting.mp3")
let pturn="X"
let isgameover=false;

const changeTurn = () =>{
    return pturn === "X"?"0" : "X"
}

const check_win=()=>{
let boxtext= document.getElementsByClassName("boxtext");
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won "
        isgameover=true;
        document.querySelector('.line').style.width="20vw"; 
        document.querySelector('.line').style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    }
})
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){  
            boxtext.innerText = pturn;
            pturn = changeTurn();           
            aturn.play();
            check_win();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText =" Turn for " + pturn;
            }
        
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
   pturn="X";
   isgameover=false;
   document.querySelector('.line').style.width="0"; 
   document.getElementsByClassName("info")[0].innerText =" Turn for " + pturn;
})
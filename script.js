let turn="X";
let player="Player-1"

let elements=document.querySelectorAll(".elem");

let elemarray=[...elements];

let gamecon=document.getElementById("gameContainer");
let winner=document.getElementById("winner")
let win=document.getElementById("win")

let changeturn=()=>{
    if(turn==="X"){
        turn="O"
    }else{
        turn="X"
    }
}
let changeplayer=()=>{
    if(player==="Player-1"){
        player="Player-2"
    }
    else{
        player="Player-1"
    }
    document.getElementById("player").innerHTML=player
}

let turning=()=>{
    document.getElementById("turning").innerHTML=turn
}
let checkwinning=()=>{
    let elmarray=[...document.querySelectorAll(".elem")];
    let array=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let tempo=true;
    let mean=true;
    array.forEach((arr)=>{
        if(elmarray[arr[0]].innerHTML!==""&& elmarray[arr[0]].innerHTML===elmarray[arr[1]].innerHTML && elmarray[arr[1]].innerHTML!==""&& elmarray[arr[1]].innerHTML===elmarray[arr[2]].innerHTML&& elmarray[arr[0]].innerHTML===elmarray[arr[2]].innerHTML ){
            if(turn==="X"){
                turn="O"
    
            }else{
                turn="X"
            }
            winner.innerText=`Winner is ${turn}`
            gamecon.style.display="none"
            win.style.display="block"
            return
        }
        else{
            elmarray.forEach((elem)=>{
                if(elem.innerHTML===""){
                    tempo=false;
                    
                    
                }
            })
        }
    })
    
    if(tempo){
        array.forEach((arr)=>{
            if(elmarray[arr[0]].innerHTML===elmarray[arr[1]].innerHTML && elmarray[arr[1]].innerHTML===elmarray[arr[2]].innerHTML && elmarray[arr[0]].innerHTML===elmarray[arr[2]].innerHTML){
                if(turn==="X"){
                    turn="O"
                
                }else{
                    turn="X"
                }
                changeturn();
                winner.innerText=`Winner is ${turn}`
                gamecon.style.display="none"
                win.style.display="block"
                
                document.getElementById("checked").style.display="block";
                mean=false;
                        
            }else if(mean){
                winner.innerText=`Draw !`
                gamecon.style.display="none"
                document.getElementById("checked").style.display="none";
                win.style.display="block"
                
            }
        })

    }
}

elemarray.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(box.innerHTML===""){
            box.innerHTML=turn
            changeturn()
            changeplayer();
            turning();
            checkwinning();
        }
    })

})


document.getElementById("reset").addEventListener("click",()=>{
    elemarray.forEach((num)=>{
        num.innerHTML=""
        document.getElementById("player").innerHTML="Player-1"
        turn="X"
        document.getElementById("turning").innerHTML=turn

    })
})

document.getElementById("restart").addEventListener("click",()=>{
    elemarray.forEach((num)=>{
        num.innerHTML=""
        document.getElementById("player").innerHTML="Player-1"
        turn="X"
        document.getElementById("turning").innerHTML=turn

    });
    document.getElementById("checked").style.display="block";
    gamecon.style.display="flex";
    win.style.display="none"
    

})



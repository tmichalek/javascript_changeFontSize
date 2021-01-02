
let textSize=0;
const liItems=document.querySelectorAll("li");
const btn=document.querySelector("button");
const changeSize=()=>{
        textSize+=1;
    liItems.forEach((item)=>
    {
        
        item.style.display="block";
        item.style.fontSize=textSize+"px";})}

    


// const changeSize=()=>
// {
//     textSize+=1;
//     for(let i=0; i<liItems.length; i++){
                

//                 liItems[i].style.display="block";
//                 liItems[i].style.fontSize=textSize+"px";
//     }

// }

btn.addEventListener("click", changeSize);
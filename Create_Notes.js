let btn=document.querySelector("button");
let div=document.querySelector(".div");
let notes_box=document.querySelector(".notes_box");


btn.addEventListener("click",function(){

    let para=document.createElement("p");
    para.className="notes_box";
    para.setAttribute("contenteditable","true");

    div.appendChild(para);

    // let img=document.createElement("img");
    // img.src="./image/trash.jpeg";

    // para.appendChild(img);
})

// let image=document.querySelector("img");
// let para=document.querySelector(".notes_box");

// div.addEventListener("click",function(event){
//     let para=document.querySelector(".notes_box");
    
//     if(event.target.children[0].tagName==="IMG"){
//         para.parentElement.remove();
//     }
// })


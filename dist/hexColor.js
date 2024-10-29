const box=document.querySelector("#box1");

box.onclick=randomChange;

let hexcolor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



function randomChange(){
    let hex='#'; 
for( let i=0; i<6; i++){
  let a= hex+=hexcolor[Math.floor(Math.random()*hexcolor.length)]; 
document.querySelector('#box1').style.backgroundColor=a;

}
return a;
}


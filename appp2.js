let input=document.querySelector('input');
let button= document.querySelector('button');
let text=document.querySelector('ul');
let main=document.querySelector('.main');
let del=document.createElement('button');
del.innerText='Delete';
del.classList.add('add');
del.classList.add('remove');
main.appendChild(del);

function events(){
    let li=document.createElement('li');   //creating a list for ul
    li.innerText=input.value;

    let btn=document.createElement('button');   // creating a delete button to delete a list
    btn.innerText="";
    btn.classList.add("delete");

    li.appendChild(btn);     // appending button in the list
    text.appendChild(li);   // appending list in the ul


    input.value='';
    text.style.display='block';      
    btn.addEventListener('click',function(){
    this.parentElement.classList.add('new');
    this.style.backgroundColor="rgb(207, 102, 102)";

    del.addEventListener('click',function(){
    li.remove();
      });
  });
}
function checkEmpty(){
    if (input.value.trim()=="")
    alert("your task is empty!!");
    else  events();
}
button.addEventListener('click',function(){
    checkEmpty();    
    }
);

input.addEventListener('keydown',function(event){
    if(event.code=='Enter'){
     ncheckEmpty();
    }}
);

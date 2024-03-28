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
<<<<<<< HEAD
=======

>>>>>>> 18ceb1e44adb3172764b923840e12bc6879bd3aa
    let btn=document.createElement('button');   // creating a delete button to delete a list
    btn.innerText="";
    btn.classList.add("delete");

    li.appendChild(btn);     // appending button in the list
<<<<<<< HEAD
     text.appendChild(li);   // appending list in the ul
=======
    text.appendChild(li);   // appending list in the ul
>>>>>>> 18ceb1e44adb3172764b923840e12bc6879bd3aa


    input.value='';
    text.style.display='block';      
    btn.addEventListener('click',function(){
<<<<<<< HEAD
      this.parentElement.classList.add('new');
      this.style.backgroundColor="rgb(207, 102, 102)";

      del.addEventListener('click',function(){
          li.remove();
      });
  });
}

=======
    this.parentElement.classList.add('new');
    this.style.backgroundColor="rgb(207, 102, 102)";

    del.addEventListener('click',function(){
    li.remove();
      });
  });
}
>>>>>>> 18ceb1e44adb3172764b923840e12bc6879bd3aa
function checkEmpty(){
    if (input.value.trim()=="")
    alert("your task is empty!!");
    else  events();
}
<<<<<<< HEAD

=======
>>>>>>> 18ceb1e44adb3172764b923840e12bc6879bd3aa
button.addEventListener('click',function(){
    checkEmpty();    
    }
);
<<<<<<< HEAD
input.addEventListener('keydown',function(event){
    if(event.code=='Enter'){
       checkEmpty();
    }}
);
// text.addEventListener('click',function(event){      we can simply use this method to remove an element.As we have to do it twice above.
//     if(event.target.nodeName=='BUTTON'){           // here event listener is applied on the parent element of button/list. And added a condition and at that condition i can remove the element.
//         event.target.parentElement.remove()        //nodeName gives the element due to which an event has occured like in this case if click is occured due to button press.
//     }                                              // here target will be that button as because of it the event has been triggered so we have removed its parent element
// });
=======

input.addEventListener('keydown',function(event){
    if(event.code=='Enter'){
      checkEmpty();
    }}
);
>>>>>>> 18ceb1e44adb3172764b923840e12bc6879bd3aa

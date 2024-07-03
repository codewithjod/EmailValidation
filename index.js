let downtext = document.getElementById("form-input");//blank space
let downlabel = document.getElementById("form-label");//email text
let downerror = document.getElementById("form-error");//error message
let logo = document.querySelector(".logo");

 function myFunction(){
   downtext.style.margin ="10px 0px 0px 0px";

   if(!downtext.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
   ){
downerror.innerHTML ="please enter a valid email";
downtext.style.borderBottomColor = "red";
return false;

}else
downerror.innerHTML = "";
logo.classList.add("logonone");
downtext.style.borderBottomColor = "green";
return true;

}

downerror .style.color ="red";



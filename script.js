const password=document.querySelector("#password");
const passwordConfirm=document.querySelector("#password-confirm");
const invalid=document.createElement("div");
const form=document.querySelector("form");
invalid.innerText="Passwords must match";
invalid.style.color="red";
invalid.style.fontSize="xsmall";
password.addEventListener("click",()=>{
    if(password.value!=passwordConfirm.value){
        form.appendChild(invalid);
        console.log("hi");
    }
    else{
        password.innerText="";
    }
})
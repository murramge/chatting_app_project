const friendName = document.querySelector(".friend-name");
const friendPlus = document.querySelector(".friend-plus");

const handlePlus = (event)=>{
    event.preventDefault();
    console.log("hi");
    const friendUserName=friendName.textContent;
    console.log(friendUserName);
    fetch("/api/search/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({friendUserName}),
    });
    friendUserName.value="";
}

friendPlus.addEventListener("click",handlePlus);
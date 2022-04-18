const friendName = document.querySelector(".friend-name");
const friendPlus = document.querySelector(".friend-plus");
const userid = document.querySelector("#user_id");

const handlePlus = (event)=>{
    event.preventDefault();
    console.log("hi");
    const friendUserName=friendName.textContent;
    const user_id = userid.value;
    console.log(friendUserName);
    fetch("/api/search/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({friendUserName}),
    });
    friendUserName.value="";
    // window.location.href=`/friend/${user_id}`; 
    location.reload(location.href=`/friend/${user_id}`);
}

friendPlus.addEventListener("click",handlePlus);
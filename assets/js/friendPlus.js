(()=>{var e=document.querySelector(".friend-name"),n=document.querySelector(".friend-plus"),o=document.querySelector("#user_id");n.addEventListener("click",(function(n){n.preventDefault(),console.log("hi");var t=e.textContent,r=o.value;console.log(t),fetch("/api/search/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({friendUserName:t})}),t.value="",location.reload(location.href="/friend/".concat(r))}))})();
document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);
  const logIn = fetch("http://127.0.0.1:8000/api/register",{
    method:"POST", body:formdata});
    let reqProcessing = logIn.then((response)=>response.json()
    ).then((data)=>{
      if(data.status=="Success") {

        localStorage.setItem("username", data.fname);
        localStorage.setItem("user_id", data.id);
        window.location.href = "./resturants.html";
      }else{
        alert("somthing went wrong")
      }
    })
  });

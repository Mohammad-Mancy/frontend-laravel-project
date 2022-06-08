document.getElementById("btn-login").addEventListener("click", function (){
  const form = document.querySelector('form');
  const formdata = new FormData(form);
  const logIn = fetch("http://127.0.0.1:8000/api/login",{
    method:"POST", body:formdata});
    let reqProcessing = logIn.then((response)=>response.json()
    ).then((data)=>{
      if(data.success=="success") {
      console.log(data)
      localStorage.setItem("username", data.name);
      localStorage.setItem("user_id", data.id);
      window.location.href = "./pages/resturants.html";
      }else{
        alert("wrong Email or Password")
      }
    })
  });
const resturantsList = document.getElementById("resturantsList")

document.getElementById("username").textContent = localStorage.getItem("username").toUpperCase()  

// try {
    const logIn = fetch("http://127.0.0.1:8000/api/all_restaurants",{
        method:"GET"});
        logIn.then((response)=>response.json()
        ).then((data)=>{
            console.log(data)
            for (let i = 0; i< data.restos.length; i++) {
                    
                      let dat = data.restos[i];
                      console.log(dat)
                  
                      let rest = document.createElement("div")
                      rest.className = "resturant"
                      rest.id = dat.id;
                      
                      let resProfileImg = document.createElement("div")
                      resProfileImg.className = "res_profile_img"
                      
                      let imgWrapper = document.createElement("div")
                      imgWrapper.className = "img-wrapper"
                  
                      let img = document.createElement("img")
                      img.src = "../assets/images/"+dat.profile_pic

                      imgWrapper.appendChild(img)
                      resProfileImg.appendChild(imgWrapper)
                    
                      let resAbout = document.createElement("div")
                      resAbout.className = "res-about"
                  
                      let resName = document.createElement("h3")
                      resName.innerText = dat.name
                      resName.className = "res_name"
                  
                      let describtion = document.createElement("p")
                      describtion.innerText = dat.description
                      describtion.className = "describtion"
                  
                      let resDetails = document.createElement("p")
                      resDetails.innerHTML = `<a href="#" id="resDirector">Learn More...</a>`
                      localStorage.setItem("resturant_id", i)
                      resDetails.className = "res_details"
                  
                      resAbout.appendChild(resName)
                      resAbout.appendChild(describtion)
                      resAbout.appendChild(resDetails)
                  
                      rest.appendChild(resProfileImg)
                      rest.appendChild(resAbout)
                  
                      resturantsList.appendChild(rest)
                
                    }
                  });
// TODO: add code here
window.addEventListener('load', function() {

  const container = document.getElementById("container");
  //let result = document.getElementById("container");

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())  //shortened using arrow function
    .then(data => {
        console.log(data); //shows the data = an array with 7 astronautObjects

        

        // Way #1
        let sortedAstronauts = data.sort(function(a, b) { //BONUS: sorting array of objects --> a & b will be astronautObjects
            return b.hoursInSpace - a.hoursInSpace;       //b-a for decending or a-b for ascending sort order
        }) 

        // let astronautCount = ` 
        //     <h3>Astronaut Count: ${sortedAstronauts.length}</h3>  
        // `
        container.innerHTML += ` <h3>Astronaut Count: ${sortedAstronauts.length}</h3>`; //astronautCount; //BONUS: adding the astronaut count underneath title of webpage
        
        // Way #2
        //data.sort(function(a, b) {  //BONUS: sort astronautObjects properties
        //     return a.hoursInSpace < b.hoursInSpace ? 1 : -1 //ternary operator-conditional branching
        // }); 


        sortedAstronauts.forEach(function(astronaut) { //replaced data with sortedAstronauts for Way #1
            container.innerHTML += ` <!-- use template literal -->
              <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li ${astronaut.active ? 'class="active"' : ""}>Active: ${astronaut.active}</li>  <!-- BONUS: ternary operator -->
                        <li>Skills: ${astronaut.skills.join(", ")}</li>  <!-- .join(" , ") -->
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
              </div> ` 
        });

        // Way #2
        //     for (let i = 0; i < data.length; i++) {
    //         //console.log(data[i]);
    //         let astronaut = data[i];
    //         let activeClass = 'class="green"'; //BONUS: make staus "Active: true" text green --> Class value in html must be inside " "
        
    //     container.innerHTML += ` <!-- use template literal -->
    //      <div class="astronaut">
    //       <div class="bio">
    //          <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //          <ul>
    //             <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //             <li class="active">Active: ${astronaut.active}</li>  <!-- BONUS -->
    //             <li>Skills: ${astronaut.skills.join(", ")}</li>  <!-- .join(" , ") -->
    //          </ul>
    //       </div>
    //       <img class="avatar" src="${astronaut.picture}">
    //    </div> `
    //     }


    })
});
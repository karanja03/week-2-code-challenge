document.addEventListener("DOMContentLoaded",()=>{
    
    const animalIds = [1,2,3,4,5];
const buttonText ='select contestant'

animalIds.forEach((id) => { //selecting each id
  const animalList = document.getElementById(id.toString());//grabbing elements by Id
  const btn = document.createElement('button'); //creating buttons
  btn.innerText = buttonText; //adding value name
  
  animalList.appendChild(btn);//Attaching the button to the names after creating some space
 
 
btn.addEventListener('click',(event) =>{
    
    const animalClicked=event.target.parentNode.id;
    console.log('Animal Clicked:',animalClicked);

    fetch(` http://localhost:3000/characters/${animalClicked}`)
    .then(response => response.json())
     .then(data => {
      console.log('Response:',data)
        const name = data.name;
          const image = data.image;
          let votes = data.votes;
           console.log(name, image, votes)

          const infoContainer = document.getElementById('infoContainer');
          infoContainer.innerHTML = `
            <h3>Name: ${name}</h3>
            <img src="${image}" alt="Animal Image">
            <p>Votes: ${votes}</p>
            
            
          `;
          const voteBtn=document.createElement('button');//creating the vote button
          voteBtn.innerText=`Vote for ${name}`;//the text to be in the button
          infoContainer.appendChild(voteBtn);

          voteBtn.addEventListener('click', ()=>{
            votes +=1;//once the button is clicked,the votes are inceremented

            infoContainer.innerHTML = `
            <h3>Name: ${name}</h3>
            <img src="${image}" alt="Animal Image">
            <p>Votes: ${votes}</p>
            `;//the new info to be displayed including the vote button and new votes
            fetch(`http://localhost:3000/character/${animalClicked}`,{
              method:'PUT',
              headers:{
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({votes: votes}),
            })
            
          })
          .then(response => response.json())
          .then(data => {
            console.log('Update Votes',data.votes)
          })

          
    })
        
    })
}
  
)

})


// const resetButton=document.createElement('button');
          // resetButton.innerText='Reset Votes';
          // infoContainer.appendChild(resetButton);//adding a reset button to the animal
          
          // resetButton.addEventListener('click', ()=>{
          //   fetch(`http://localhost:3000/characters/${animalClicked}`,{
          //     method:'PUT',
          //     headers:{
          //       'Content-Type':'application/json'
              
          //   },
          //   body: JSON.stringify({votes: 0})//setting all of the votes back to 0;

          //    })
          //    .then(response => response.json())
          //    .then(data =>{
          //     votes =data.votes;//updating the votes to 0
          //     infoContainer.innerHTML = `
          //   <h3>Name: ${name}</h3>
          //   <img src="${image}" alt="Animal Image">
          //   <p>Votes: ${votes}</p>`;//updating the new info in container
          //   console.log('Reset Votes: ', votes)


             //})


            //  document.addEventListener("DOMContentLoaded", () => {
            //   const animalIds = [1, 2, 3, 4, 5];
            //   const buttonText = 'select contestant';
            
            //   animalIds.forEach((id) => {
            //     const animalList = document.getElementById(id.toString());
            //     const btn = document.createElement('button');
            //     btn.innerText = buttonText;
            //     animalList.appendChild(btn);
            
            //     btn.addEventListener('click', (event) => {
            //       const animalClicked = event.target.parentNode.id;
            //       console.log('Animal Clicked:', animalClicked);
            
            //       fetch(`http://localhost:3000/characters/${animalClicked}`)
            //         .then(response => response.json())
            //         .then(data => {
            //           console.log('Response:', data);
            //           const name = data.name;
            //           const image = data.image;
            //           let votes = data.votes;
            
            //           const infoContainer = document.getElementById('infoContainer');
            //           infoContainer.innerHTML = `
            //             <h3>Name: ${name}</h3>
            //             <img src="${image}" alt="Animal Image">
            //             <p>Votes: ${votes}</p>
            //           `;
            
            //           const voteBtn = document.createElement('button');
            //           voteBtn.innerText = `Vote for ${name}`;
            //           infoContainer.appendChild(voteBtn);
            
            //           voteBtn.addEventListener('click', () => {
            //             votes += 1;
            //             infoContainer.innerHTML = `
            //               <h3>Name: ${name}</h3>
            //               <img src="${image}" alt="Animal Image">
            //               <p>Votes: ${votes}</p>
            //             `;
            
            //             fetch(`http://localhost:3000/characters/${animalClicked}`, {
            //               method: 'PUT',
            //               headers: {
            //                 'Content-Type': 'application/json',
            //               },
            //               body: JSON.stringify({ votes: n servervotes }),
            //             })
            //             .then(response => response.json())
            //             .then(data => {
            //               console.log('Updated Votes:', data.votes);
            //             })
                        
            //           });
            //         });
            //     });
            //   });
            // });
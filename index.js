
// const username = document.querySelector("#username");
// const email = document.querySelector("#email");

// const submit = document.querySelector("#submit");

// // console.log(username, email);
// function submitData() {
//   let formData = {
//     name: username.value,
//     email: email.value,
//   };
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/users", configObj)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object.id);
//       let p = document.createElement("p");
//       p.innerText = object.id;
//       document.body.appendChild(p);
//       return object;
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
// }

// submitData();

// submit.addEventListener("click",(e)=>{
//   e.preventDefault();

// })



// const username = document.querySelector("#username");
// const email = document.querySelector("#email");

// const submit = document.querySelector("#submit");

// // console.log(username, email);
// function submitData() {
//   let formData = {
//     name: username.value,
//     email: email.value,
//   };
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/users", configObj)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object.id);
//       let p = document.createElement("p");
//       p.innerText = object.id;
//       document.body.appendChild(p);
//       return object;
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
// }

// submitData();

// submit.addEventListener("click",(e)=>{
//   e.preventDefault();

// })




function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
// const button = document.querySelector("button");
// const axios = required("axios");
// const name = document.getElementById("name");
// const password = document.getElementById("password");
// const loginform = document.querySelector(".loginform");
// const userprofile = document.querySelector(".user-profile");

//   const request=fetch("https://bever-aca-assignment.azurewebsites.net/users")
//   const resp=request.then(response=>{
//     if(!response.ok){
//       throw Error("Errorr")
//   }
//     return response.json()
//   })

//   const data=resp.then(data=>{
//    console.log(data.value)
//    return data

//   })
//   .catch(error=>{
//     printError
//   })

// console.log(data)

// const form = {
//   name: document.getElementById("name"),
//   password: document.getElementById("password"),
//   button: document.querySelector(".btn"),
//   messages: document.getElementById(".message"),
// };

// const user = {
//   name: name.value,
//   password: password.value,
// };

// const onSubmit = form.button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(form);
//   const login = "https://bever-aca-assignment.azurewebsites.net/users";
//   localStorage.setItem("user", JSON.stringify(user));
//   console.log("asdas");
//   name.value = "";
//   password.value = "";

//   fetch(login, {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: form.name.value,
//       password: form.password.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.value);
//       // code here //
//       if (data.error) {
//         alert("Error Password or Username"); /*displays error message*/
//       } else {
//         window.open(
//           "target.html"
//         ); /*opens the target page while Id & password matches*/
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });

  // fetch("https://bever-aca-assignment.azurewebsites.net/users").then((resp) => {
  //   return resp
  //     .json()
  //     .then((data) => {
  //       data.value.forEach((el) => {
  //         console.log(el);
  //         if (el.Name === data1.name && el.Password === data1.password) {
  //           alert("Error Password or Username"); /*displays error message*/
  //           console.log(el.Name);
  //         } else if (data.error) {
  //           window.open(
  //             "target.html"
  //           ); /*opens the target page while Id & password matches*/
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
// });

// fetch(login, {
//       method: "POST",
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: form.name.value,
//         password: form.password.value,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.value);
//         // code here //
//         if (data.error) {
//           alert("Error Password or Username"); /*displays error message*/
//         } else {
//           window.open(
//             "target.html"
//           ); /*opens the target page while Id & password matches*/
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });

// let data = fetch("https://bever-aca-assignment.azurewebsites.net/users")
//     .then((response) => response.json())
//     .then(data => {
//         // do some stuff
//         console.log(data.value)
//         return data;
//     })
//     .catch(error => {
//         return error;
//     });

// const printUserProfile= () => {
//   const user=JSON.parse(localStorage.getItem("user"));
//   if(user){
//     loginform.style.display="none"
//     userprofile.style.display="block"

//     const ul=document.createElement("ul")
//     const liName=document.createElement("li")
//     const liPassword=document.createElement("li")

//     liName.textContent=`Name: ${user.name}`
//     liPassword.textContent=`Password: ${user.password}`

//     ul.appendChild(liName)
//     ul.appendChild(liPassword)
//     userprofile.appendChild(ul)

//   }

// }

// button.addEventListener("click", () => {
//   const user = {
//     name: name.value,
//     password: password.value,
//   };
//   localStorage.setItem("user", JSON.stringify(user));
//   name.value = "";
//   password.value = "";
//   printUserProfile();
// });

// window.addEventListener("load", printUserProfile);

// const printError=(error)=>{
//   const errorElement=document.createElement("div")
//   errorElement.textContent=error.message
//   container.appendChild(errorElement)
// }
// console.log()

// const apiBaseUrl="https://bever-aca-assignment.azurewebsites.net/invoices"

// const data2=fetch(`${apiBaseUrl}`)
// const items=data2.then((resp)=>{
//   return resp.json()
// })
// const newItem=items.then((res)=>{
//   return res.value
// })

// loginform.appendChild(newItem)
// const container=document.getElementById("container")

// const printInvoices=(items)=>{
//     items.forEach(element => {
//         const InvoicesName=document.createElement("div")
//         InvoicesName.textContent=element.Name
//         const InvoicesData=document.createElement("div")
//         InvoicesData.textContent=element.PaidDate
//         container.appendChild(InvoicesName)
//         container.appendChild(InvoicesData)
//     });

// }

// const fetchData=()=>{
//         fetch("https://bever-aca-assignment.azurewebsites.net/invoices")
//         .then(response=>{
//             if(!response.ok){
//                 throw Error("Errorr")
//             }
//             return response.json()
//         })
//         .then(data=>{
//           printInvoices(data.value)
//           console.log(data.value)
//         })
//         .catch(error=>{
//           printError
//         })
// }

// fetchData()

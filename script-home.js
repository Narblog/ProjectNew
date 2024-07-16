const TableBody = document.getElementById("myBody");
const isLogged_userName = document.getElementById("isLogged_userName");
const LogOutBtn = document.getElementById("LogOutBtn");
const service_lines = document.getElementById("service_lines");
const service_lines_body = document.getElementById("service_lines_body");
const userName = localStorage.getItem("userName");
const indexPath = "./index.html";
const baseURL = "https://bever-aca-assignment.azurewebsites.net/users";
const InvoiceUrl = "https://bever-aca-assignment.azurewebsites.net/invoices";
const InvoiceLinesUrl ="https://bever-aca-assignment.azurewebsites.net/invoicelines";
const ProductUrl = "https://bever-aca-assignment.azurewebsites.net/products";
let someData = [];
isLogged_userName.innerText = userName;


window.onload = function () {
  const tokenId = localStorage.getItem("token");
  fetch(baseURL, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then(({ value }) => {
      if (value) {
        const usersMap = new Map(value.map((user) => [user.UserId, user]));
        if (!usersMap.has(tokenId)) {
          window.location.replace(indexPath);
        }
      }
    });
};
const getData = (event) => {
  let myId;
  fetch(InvoiceUrl)
    .then((resp) => resp.json())
    .then((data) => {
      myId = data.value.filter((el) => el.Name === event.target.value);
      myId = myId[0].InvoiceId;
    })
    .then((a) => {
      fetch(InvoiceLinesUrl)
        .then((resp) => resp.json())
        .then((data) => {
          let totalAmount = 0;
          let mybigData;
          let filtered = data.value.filter((elem) => elem.InvoiceId === myId);
          service_lines_body.innerHTML = "";
          someData.length &&
            someData.forEach((el) => {
              let myData = filtered.filter(
                (elem) => el.ProductId === elem.ProductId
              );
              mybigData = myData;
              totalAmount += el.Price * myData[0].Quantity;
              let row = document.createElement("tr");
              row.innerHTML = `
              <td> ${el.Name} </td>
              <td> ${el.Price} </td>
              <td> ${myData[0].Quantity} </td>
              <td > ${el.Price * myData[0].Quantity}</td>
              `;
              service_lines_body.append(row);
            });
          const invoiceId = mybigData[0].InvoiceId;
          const totalTabelCell = document.getElementById(invoiceId);
          totalTabelCell.innerHTML = totalAmount;
        });
    });
};
//
///
///
////Invoice-i Total amount-y zut stacelem  Invoiclines Total amount gumaric

///
////
////
////InvoiceLines Total amount-y stacelem Price*Quantity
//
///
///
//
const printInvoices = () => {
  fetch(InvoiceUrl)
    .then((resp) => resp.json())
    .then(({ value }) => {
      if (value) {
        value.map((el) => {
          if (el.UserId === localStorage.getItem("token")) {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>
            <input type="radio" name="clickedInput" value="${el.Name}">
            </td>
            <td>${el.Name}</td>
            <td>${el.PaidDate}</td>
            <td id=${el.InvoiceId}>--</td>
          `;
            TableBody.appendChild(row);
          }
        });
        let inputs = Array.from(document.querySelectorAll("input"));
        inputs.forEach((el) => {
          service_lines.style.display = "flex";
          fetch(ProductUrl)
            .then((resp) => resp.json())
            .then((data) => {
              someData = data.value;
            });
          el.addEventListener("click", getData);
        });
      }
    });
};
printInvoices();

LogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace(indexPath);
});

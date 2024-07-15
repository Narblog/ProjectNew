const baseURL = "https://bever-aca-assignment.azurewebsites.net/users";

const homePath =
  "/C:/Users/ngrig/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/New%20folder%20(3)/home.html";
  const tokenId = localStorage.getItem("token");

const onSubmit = () => {
  const userName = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const dataToSend = {
    name: userName,
    password,
  };

  console.log(dataToSend);
  fetch(baseURL, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then(({ value }) => {
      if (value) {
        const usersMap = new Map(value.map((user) => [user.Name, user]));
        // const usersMapToken = new Map(value.map((user) => [user.UserId, user]));
        // if (usersMapToken.has(tokenId)) {
        //   window.location.replace(homePath);
        // }
        if (
          (usersMap.get(dataToSend.name) &&
            usersMap.get(dataToSend.name).Password === dataToSend.password) ||
          localStorage.getItem("token")
        ) {
          alert("Success fully");
          localStorage.setItem("token", usersMap.get(dataToSend.name).UserId);
          window.location.replace("home.html");
          if (localStorage.getItem("token")) {
            window.location.replace("home.html");
          }
        } else if (
          usersMap.get(dataToSend.name) !== undefined &&
          !usersMap.get(dataToSend.name).password
        ) {
          alert("password error");
          localStorage.clear("token");
        } else if (!usersMap.has(dataToSend.name)) {
          alert("login and password error");
          localStorage.clear("token");
        }
      }
    });
};

// window.onload = function () {

//   onSubmit();
// };


window.onload = function()  {
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
          if (usersMap.has(tokenId)) {
            window.location.replace(homePath)
          }
        }
      });
};

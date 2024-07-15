const indexPath =
  "/C:/Users/ngrig/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/New%20folder%20(3)/index.html";
  const baseURL = "https://bever-aca-assignment.azurewebsites.net/users";

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
          if (!usersMap.has(tokenId)) {
            window.location.replace(indexPath)
          }
        }
      });
};

// if (!localStorage.getItem("token")) {
//   window.location.replace(homePath);
// }



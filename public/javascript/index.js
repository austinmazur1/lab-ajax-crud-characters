const charactersAPI = new APIHandler("http://localhost:8000");

const display = document.querySelector(".character-info")

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        // const response = await charactersAPI.getFullList();
        // const allCharacters = response.data;
        // // console.log({ allCharacters });

        // display.innerHTML = "";

        // allCharacters.forEach((character) => {
        //   const characterEl = document.createElement("div");
        //   characterEl.innerHTML = character;
        //   characterContainer.appendChild(characterElement);
        //   console.log();
        // })

        display.innerHTML = ""

        const response = await charactersAPI.getFullList()
        response.data.forEach(element => {
          console.log(element.name);
          display.innerHTML += element.name
        });



        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        const response = await charactersAPI.getOneRegister()
      } catch (error) {
        
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});

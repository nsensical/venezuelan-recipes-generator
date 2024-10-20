/** @format */

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "abdtf489166e9o460ad2e43465ab3d66";
  let context =
    "You are a knowledgeable assistant with vast experience in international cuisine. Generate short and concise Venezuelan recipes making sure to follow the instructions, using basic HTML and separating each line with a <br />.";
  let prompt = `Instructions: Generate a Venezuelan recipe about ${instructionsInput.value}.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Wait a moment... Searching for a good recipe containing ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("get-joke");

jokeBtn.addEventListener("click", getJoke);

getJoke();

async function getJoke() {
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await jokeRes.json();

  jokeEl.textContent = joke.joke;
}

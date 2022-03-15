const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const { data } = await axios.get("https://icanhazdadjoke.com/", config);
    return data.joke;
  } catch (err) {
    console.log(err);
    return "No Jokes Available! Sorry :(";
  }
};

const joke = document.querySelector("#joke")

const addNewDadJoke = async () => {
  const newJoke = await getDadJoke();
  joke.innerHTML = newJoke
};

document.addEventListener("DOMContentLoaded", function() {
  addNewDadJoke()
})
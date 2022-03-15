const form = document.querySelector("#searchForm");
const 

const makeSearch = async (term) => {
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${term}`
    );

    return data;
  } catch (err) {
    return err.message;
  }
};

const makeMovieCards = data => {
  const temp = document.createElement("div")
  
}


form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchTerm = form.elements.searchTerm.value;
  const results = await makeSearch(searchTerm);
  
});

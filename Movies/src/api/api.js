const api_key = "ef8491ae3d502312194ce61f3c1ee1c9";
const api = "https://api.themoviedb.org/3/search/movie";

export async function searchMovies(query) {

    const url = `${api}?api_key=${api_key}&query=${encodeURIComponent(query)}&include_adult=false`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw Error("Error fetchin thid api");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching this"), error;
    return [];
  }
}
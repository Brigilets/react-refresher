import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7SBvMjWuC0rP0jeQzylxcrmYn17Q2Jkp02Rc50EoH7w",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

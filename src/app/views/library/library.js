import { getBooks } from "../../services/api.service";

const Library = {
  init: () => {
    console.log("klic getBooks: ", getBooks());
  }
};

export default Library;

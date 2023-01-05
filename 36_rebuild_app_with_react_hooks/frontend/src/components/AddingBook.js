import { useQuery, useMutation } from "@apollo/client";
import { GETAUTHORS, GETBOOKS, ADDBOOK_MUTATION } from "../queries/queries";
import { useState } from "react";
// import { flowRight as compose } from "lodash";
//--------------------------------------------------------

const DisplayAuthors = () => {
  const { loading, error, data } = useQuery(GETAUTHORS);
  if (error) {
    return <div>Error ...</div>;
  } else if (loading) {
    return <option disabled>Loading Books ...</option>;
  } else {
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }
};

function AddingBook(props) {
  const [newBook, setnewBook] = useState({
    title: "",
    genre: "",
    authorId: "",
    pages: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setnewBook({ ...newBook, [name]: value }); // gathering person data from inputs
  };

  const [addBook, { data, loading, error }] = useMutation(ADDBOOK_MUTATION, {
    refetchQueries: [{ query: GETBOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newBook = ", newBook);
    addBook({
      variables: {
        title: newBook.title,
        genre: newBook.genre,
        pages: Number(newBook.pages),
        authorId: newBook.authorId,
      },
    })
      .then(() => console.log("Success"))
      .catch((error) => console.log(error.message));
    setnewBook(() => ({ title: "", genre: "", authorId: "", pages: "" }));
  };
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">
          Title :
          <input type="text" id="title" name="title" onChange={handleChange} />
        </label>
      </div>

      <div className="field">
        <label htmlFor="genre">
          Genre :
          <input type="text" id="genre" name="genre" onChange={handleChange} />
        </label>
      </div>

      <div className="field">
        <label htmlFor="pages">
          Pages :
          <input
            type="number"
            id="pages"
            name="pages"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="field">
        <label htmlFor="authorId">Author : </label>
        <select name="authorId" id="authorId" onChange={handleChange}>
          <option value="">Select Author </option>
          <DisplayAuthors />
        </select>
      </div>

      <button>Add Book</button>
    </form>
  );
}
// using grahql to bind GETAUTHORS to AddBook component is no more necessary in v3
export default AddingBook;

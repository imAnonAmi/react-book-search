import React from "react";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book Title</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="Please enter a title to search for"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search</button>
      </div>
    </form>
  );
}
export default Form;
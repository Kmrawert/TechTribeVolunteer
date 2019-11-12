import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="EventTitle">Event Title</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="title"
            list="titles"
            type="text"
            className="form-control"
            placeholder="Enter Event Title here"
            id="EventTitle"
          />
          <datalist id="titles">
            {props.titles.map(title => (
              <option value={title} key={title} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
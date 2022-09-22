import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "./Search.css";
import { useDispatch } from "react-redux";

const Search = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    setCity(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_SEARCH_DATA",
      payload: city,
    });
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <div className="search-box">
        <SearchIcon />
        <input
          type="text"
          name="search_input"
          placeholder="Search for cities or countries..."
          className="form-input"
          onChange={inputHandler}
          value={city}
        />
      </div>
      <button type="submit" className="form-button">
        Search
      </button>
    </form>
  );
};

export default Search;

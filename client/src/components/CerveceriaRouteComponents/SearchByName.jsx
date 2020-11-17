import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CerveceriasAPI from "../../apis/CerveceriasAPI";

const SearchByName = ({ filterByName }) => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CerveceriasAPI.get(`/?name=${searchName}`);
      filterByName(response.data.data.cervecerias);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="h2" component="h2" align="left" justify-self="left">
        Buscar cervecerias
      </Typography>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          onChange={handleChange}
          value={searchName}
          name="searchName"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchByName;

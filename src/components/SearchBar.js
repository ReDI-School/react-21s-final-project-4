import React, { useContext } from "react";
import  { FilterListContext } from "../contexts/FilterListProvider";

function SearchBar() {
    const [search,setSearch]= useContext(FilterListContext);
    
    function handleChange(event){
        const value = event.target.value;
        setSearch(value);
        //console.log(search);
    }
    return(
        <input className="input" name='searchBar' onChange={handleChange} value={search} placeholder='Search by name / type'></input>
    );
}

export default SearchBar;
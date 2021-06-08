import React, { createContext, useState } from 'react';


export const FilterListContext = createContext();

const FilterListProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  
  return (
    <FilterListContext.Provider value={[search, setSearch]}>
      {children}
    </FilterListContext.Provider>
  );
};

export default FilterListProvider;
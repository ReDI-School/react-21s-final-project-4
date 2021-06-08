import React, { createContext, useState } from 'react';


export const FilterDataContext = createContext();

const FilterDataProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    
    pickup:false,
    delivery:false,
    open:false
  }
  );

  
  return (
    <FilterDataContext.Provider value={[filters, setFilters]}>
      {children}
    </FilterDataContext.Provider>
  );
};

export default FilterDataProvider;
    
    



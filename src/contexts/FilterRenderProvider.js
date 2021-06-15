import React, { createContext, useState } from 'react';


export const FilterRenderContext = createContext();

const FilterRenderProvider = ({ children }) => {
  const [isMap, setIsMap] = useState(false);

  
  return (
    <FilterRenderContext.Provider value={[isMap, setIsMap]}>
      {children}
    </FilterRenderContext.Provider>
  );
};

export default FilterRenderProvider;
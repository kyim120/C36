import React, { createContext, useContext } from "react";

const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
  return (
    <TooltipContext.Provider value={{}}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => {
  return useContext(TooltipContext);
};

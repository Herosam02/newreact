// FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const addFormData = (data) => {
    setFormData([...formData, data]);
  };

  const setBulkFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, addFormData, setBulkFormData }}>
      {children}
    </FormContext.Provider>
  );
};

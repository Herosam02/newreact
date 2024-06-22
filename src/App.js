import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import FormWithIcons from './Component/Form';
import TablePage from './Component/TablePage';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormWithIcons />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;

import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import * as XLSX from 'xlsx';
import './TablePage.css';

function TablePage() {
  const { formData, setBulkFormData } = useContext(FormContext);
  const fileInputRef = useRef(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFields, setEditFields] = useState({});

  // Function to handle downloading data
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(formData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'FormData');
    XLSX.writeFile(workbook, 'formData.xlsx');
  };

  // Function to handle uploading data
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setBulkFormData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  // Function to handle editing a row
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFields(formData[index]);
  };

  // Function to save edited row
  const handleSaveEdit = (index) => {
    const updatedData = [...formData];
    updatedData[index] = editFields;
    setBulkFormData(updatedData);
    setEditingIndex(null);
  };

  // Function to cancel edit mode
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  // Function to delete a row
  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setBulkFormData(updatedData);
  };

  // Function to handle input change in edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFields({ ...editFields, [name]: value });
  };

  return (
    <div className="table-container">
      <h2>Submitted Applications</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Shares Applied</th>
              <th>Amount Paid</th>
              <th>Title</th>
              <th>Surname</th>
              <th>First Name</th>
              <th>Other Names</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Next of Kin</th>
              <th>CHN Number</th>
              <th>CSCS Number</th>
              <th>Stockbroker</th>
              <th>Member Code</th>
              <th>Joint Title</th>
              <th>Joint Surname</th>
              <th>Joint First Name</th>
              <th>Joint Other Names</th>
              <th>Bank Name</th>
              <th>BVN</th>
              <th>Account Number</th>
              <th>Branch</th>
              <th>City/State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="sharesApplied"
                      value={editFields.sharesApplied || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.sharesApplied
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="amountPaid"
                      value={editFields.amountPaid || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.amountPaid
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="title"
                      value={editFields.title || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.title
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="surname"
                      value={editFields.surname || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.surname
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editFields.firstName || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.firstName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="otherNames"
                      value={editFields.otherNames || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.otherNames
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="address"
                      value={editFields.address || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.address
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="city"
                      value={editFields.city || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.city
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="state"
                      value={editFields.state || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.state
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="country"
                      value={editFields.country || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.country
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editFields.phoneNumber || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.phoneNumber
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="dob"
                      value={editFields.dob || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.dob
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="email"
                      value={editFields.email || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.email
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="nextOfKin"
                      value={editFields.nextOfKin || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.nextOfKin
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="chnNumber"
                      value={editFields.chnNumber || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.chnNumber
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="cscsNumber"
                      value={editFields.cscsNumber || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.cscsNumber
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="stockbroker"
                      value={editFields.stockbroker || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.stockbroker
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="memberCode"
                      value={editFields.memberCode || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.memberCode
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="jointTitle"
                      value={editFields.jointTitle || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.jointTitle
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="jointSurname"
                      value={editFields.jointSurname || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.jointSurname
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="jointFirstName"
                      value={editFields.jointFirstName || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.jointFirstName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="jointOtherNames"
                      value={editFields.jointOtherNames || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.jointOtherNames
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="bankName"
                      value={editFields.bankName || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.bankName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="bvn"
                      value={editFields.bvn || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.bvn
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="accountNumber"
                      value={editFields.accountNumber || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.accountNumber
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="branch"
                      value={editFields.branch || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.branch
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="cityState"
                      value={editFields.cityState || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    data.cityState
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button onClick={() => handleSaveEdit(index)} className="mb-2">Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)} className="mb-2">Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttons-container">
        <button onClick={handleDownload}>Download</button>
        <button onClick={() => fileInputRef.current.click()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleUpload}
          accept=".xlsx, .xls"
        />
      </div>
      <Link to="/" className="back-link">Go Back to Form</Link>
    </div>
  );
}

export default TablePage;
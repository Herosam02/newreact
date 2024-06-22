import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import './Form.css';

const ApplicationForm = () => {
  const { addFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const initialFormState = {
    sharesApplied: 1,
    amountPaid: '',
    title: '',
    surname: '',
    firstName: '',
    otherNames: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    dob: '',
    email: '',
    nextOfKin: '',
    chnNumber: '',
    cscsNumber: '',
    stockbroker: '',
    memberCode: '',
    jointTitle: '',
    jointSurname: '',
    jointFirstName: '',
    jointOtherNames: '',
    bankName: '',
    bvn: '',
    accountNumber: '',
    branch: '',
    cityState: '',
  };

  const [formState, setFormState] = useState(initialFormState);
  const [calculatedValue, setCalculatedValue] = useState(9.25);

  const handleCalculatorChange = (value) => {
    const calculatedAmount = value * 9.25; // Calculate amount based on sharesApplied
    setFormState({ ...formState, sharesApplied: value, amountPaid: calculatedAmount.toFixed(2) });
    setCalculatedValue(calculatedAmount);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formState); // Add form data to context
    setFormState(initialFormState); // Reset form after submission
    setCalculatedValue(9.25); // Clear calculated value if needed
    navigate('/table'); // Navigate to table page
  };

  return (
    <div className="form-container">
       <h2>Application Form</h2>
       <div className="calculator">
        <label>Enter Number of Shares: </label>
        <input
          type="range"
          min={1}
          max={100000}
          value={formState.sharesApplied}
          onChange={(e) => handleCalculatorChange(parseInt(e.target.value))}
          className='width'
        />
        <input
          type="text"
          min={1}
          max={100000}
          value={formState.sharesApplied}
          onChange={(e) => handleCalculatorChange(parseInt(e.target.value))}
          className='widt'
        />
        <p>Number of Shares: {formState.sharesApplied}</p>
        <p>Calculated Value: {calculatedValue.toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <div className="form-row">
          <div className="form-group">
            <label>Number of Shares Applied For</label>
            <input
              type="text"
              id="sharesApplied"
              name="sharesApplied"
              value={formState.sharesApplied}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Value of Shares Applied For / Amount Paid</label>
            <input
             type="text"
             id="amountPaid"
             name="amountPaid"
             value={formState.amountPaid} // Display amountPaid from formState
             readOnly
            />
          </div>
        </div>
        <div className="form-row">
        <div className="form-group">
          <label>Title</label>
          <select id="title" name="title" value={formState.title} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input type="text" id="surname" name="surname" value={formState.surname} onChange={handleChange} />
        </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" id="firstName" name="firstName" value={formState.firstName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Other Names</label>
          <input type="text" id="otherNames" name="otherNames" value={formState.otherNames} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Full Postal Address</label>
          <input type="text" id="address" name="address" value={formState.address} onChange={handleChange} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City/Town</label>
            <input type="text" id="city" name="city" value={formState.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" id="state" name="state" value={formState.state} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" id="country" name="country" value={formState.country} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formState.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formState.dob} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Next of Kin</label>
            <input type="text" id="nextOfKin" name="nextOfKin" value={formState.nextOfKin} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CHN Number</label>
            <input type="text" id="chnNumber" name="chnNumber" value={formState.chnNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CSCS Number</label>
            <input type="text" id="cscsNumber" name="cscsNumber" value={formState.cscsNumber} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Name of Your Stockbroker</label>
            <input type="text" id="stockbroker" name="stockbroker" value={formState.stockbroker} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Member Code</label>
            <input type="text" id="memberCode" name="memberCode" value={formState.memberCode} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Joint Applicant Title</label>
            <select id="jointTitle" name="jointTitle" value={formState.jointTitle} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Joint Applicant Surname</label>
            <input type="text" id="jointSurname" name="jointSurname" value={formState.jointSurname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Joint Applicant First Name</label>
            <input type="text" id="jointFirstName" name="jointFirstName" value={formState.jointFirstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Joint Applicant Other Names</label>
            <input type="text" id="jointOtherNames" name="jointOtherNames" value={formState.jointOtherNames} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Bank Name</label>
            <input type="text" id="bankName" name="bankName" value={formState.bankName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bank Verification Number</label>
            <input type="text" id="bvn" name="bvn" value={formState.bvn} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bank Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" value={formState.accountNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Branch of Bank</label>
            <input type="text" id="branch" name="branch" value={formState.branch} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>City/State</label>
            <input type="text" id="cityState" name="cityState" value={formState.cityState} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;

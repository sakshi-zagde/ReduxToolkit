import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updatePersonalInfo,
  setFormSent,
  setDataInput,
  resetForm,
} from './formSlice'; // Import your Redux actions

function FormInfo() {
  const personalInfo = useSelector((state) => state.form.personalInfo);
  const isSent = useSelector((state) => state.form.isSent);
  const dataInput = useSelector((state) => state.form.dataInput);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updatePersonalInfo({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      alert(`Please fill in this field.`);
    } else {
      alert('Form submitted successfully !!');
      dispatch(setFormSent());
    }
  };

  const handleDisplayData = () => {
    dispatch(setDataInput());
  };

  const handleResetForm = () => {
    dispatch(resetForm());
  };

  return (
    <div>
       {isSent ? (
            <div>
              <h1 class="my-5 mx-3">Thank You for Your Submission!!</h1>
    
              {dataInput ? (
                <div class="mx-3">
                <h2>Your Entered Personal Information Data</h2>
                <p>First Name: {personalInfo.firstName}</p>
                <p>Last Name: {personalInfo.lastName}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.mobile}</p>
                <p>Date of Birth: {personalInfo.dob}</p>
                <p>Address: {personalInfo.address}</p>
                </div>
              ) : null}
    
              {dataInput ? null : (
                <div>
                  <button
                    className="btn btn-danger mx-5" onClick={handleResetForm}
                   
                  >
                    Previous page
                  </button>
                  <button className="btn btn-danger" onClick={handleDisplayData}>
                    Display details
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div class="container">
              <h2 class="py-1">Personal Info Form </h2>
              <h6 class="py-3">Please fill all the required field</h6>
    
              <form class="row row-cols-md-2 row-cols-sm-1" onSubmit={handleSubmit}>
                <div class="mb-3 ">
                  <input
                    type="text"
                    class="form-control border-2 border-dark"
                    placeholder="Firstname*"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handleChange}
                    pattern="[A-Za-z]+"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control border-2 border-dark"
                    placeholder="Lastname*"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handleChange}
                    pattern="[A-Za-z]+"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control border-2 border-dark"
                    placeholder="Email*"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type=""
                    class="form-control border-2 border-dark"
                    placeholder="Phone*"
                    name="mobile"
                    value={personalInfo.mobile}
                    onChange={handleChange}
                    pattern="[0-9]*"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type=""
                    class="form-control border-2 border-dark"
                    placeholder="Date of Birth *"
                    name="dob"
                    value={personalInfo.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="address"
                    class="form-control border-2 border-dark"
                    placeholder="Address*"
                    name="address"
                    value={personalInfo.address}
                    onChange={handleChange}
                    required
                  />
                </div>
    
                <div class="form-check-md p-3">
                  <input
                    class="form-check-input p-3 m ms-sm-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label class="p-2" for="flexCheckDefault">
                    Above mention detainls are correct
                  </label>
                </div>
                <div class="m-1">
                  <button
                    type="submit"
                    class="btn btn-danger"
                    onsubmit={handleSubmit}
                  >
                    
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
  );
}

export default FormInfo;

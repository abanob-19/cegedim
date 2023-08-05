import React, { useState } from 'react';

const MedicalCenterHome = () => {
  const [organizationName, setOrganizationName] = useState('Medical Center XYZ');
  const [organizationLocation, setOrganizationLocation] = useState('Medical Center Location');
  const [patientData, setPatientData] = useState({
    name: '',
    location: '',
    diagnosis: '',
    number: '',
    insuranceNumber: '',
    request: '',
    organization: '',
  });
  const [organizations, setOrganizations] = useState([
    'Organization A',
    'Organization B',
    'Organization C',
  ]);

  const handleOrganizationInfoSubmit = (e) => {
    e.preventDefault();
    // Save organization information logic here
    console.log('Organization Name:', organizationName);
    console.log('Organization Location:', organizationLocation);
  };

  const handlePatientDataChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    // Save patient data logic here
    console.log('Patient Data:', patientData);
    // Clear the form after submission
    setPatientData({
      name: '',
      location: '',
      diagnosis: '',
      number: '',
      insuranceNumber: '',
      request: '',
      organization: '',
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    color: '#FFF',
    padding: '20px',
  };

  const headerStyle = {
    marginBottom: '20px',
    textAlign: 'center',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    height: '40px',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>{organizationName}</h2>
        <p>{organizationLocation}</p>
        <button style={buttonStyle}>Log Out</button>
      </div>

      {/* Log Out Button */}
      

      {/* Add Patient Form */}
      <div style={formContainerStyle}>
        <h3>Add Patient</h3>
        <form onSubmit={handleAddPatient}>
          <label style={labelStyle}>Name of Patient:</label>
          <input type="text" name="name" value={patientData.name} onChange={handlePatientDataChange} style={inputStyle} />

          <label style={labelStyle}>Location:</label>
          <input
            type="text"
            name="location"
            value={patientData.location}
            onChange={handlePatientDataChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Diagnosis:</label>
          <input
            type="text"
            name="diagnosis"
            value={patientData.diagnosis}
            onChange={handlePatientDataChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Number:</label>
          <input type="text" name="number" value={patientData.number} onChange={handlePatientDataChange} style={inputStyle} />

          <label style={labelStyle}>Insurance Number:</label>
          <input
            type="text"
            name="insuranceNumber"
            value={patientData.insuranceNumber}
            onChange={handlePatientDataChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Request:</label>
          <textarea name="request" value={patientData.request} onChange={handlePatientDataChange} style={inputStyle} />

          <label style={labelStyle}>Select Organization:</label>
          <select
            name="organization"
            value={patientData.organization}
            onChange={handlePatientDataChange}
            style={inputStyle}
          >
            <option value="">Select an organization</option>
            {organizations.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>

          <button type="submit" style={buttonStyle}>
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicalCenterHome;

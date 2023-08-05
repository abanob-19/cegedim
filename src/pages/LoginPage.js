import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('organization');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here, e.g., send login request to the server
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);

    // Redirect to medical center home page after login
    if (userType === 'medical_center') {
        navigate('/medicalCenterHome');// Replace with the actual route for the medical center home page
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
  };

  const inputStyle = {
    width: '250px',
    height: '30px',
    marginBottom: '10px',
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '250px',
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
      <h2 style={{ color: '#FFF' }}>Login</h2>
      <div>
        <label style={{ color: '#FFF' }}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ color: '#FFF' }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ color: '#FFF' }}>User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)} style={inputStyle}>
          <option value="organization">Organization</option>
          <option value="medical_center">Medical Center</option>
        </select>
      </div>
      <button onClick={handleLogin} style={buttonStyle}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;

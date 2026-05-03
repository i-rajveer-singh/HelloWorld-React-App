import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState('');
  
  let logoUrl = "https://bridgelabz.com/wp-content/uploads/2021/08/BridgeLabz-Logo.png";
  let bridgeLabzUrl = "https://www.bridgelabz.com";

  const onClickUrl = () => {
    window.open(bridgeLabzUrl, "_blank");
  };

  const onNameChange = (event) => {
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
    if (nameRegex.test(event.target.value) || event.target.value === '') {
      setUserName(event.target.value);
      setNameError('');
    } else {
      setUserName(event.target.value);
      setNameError('Name is Incorrect. Must start with a capital letter and be at least 3 characters long.');
    }
  };
  
  return (
    <div className="app-container">
      <h1>Hello {userName} from BridgeLabz</h1>
      <img src={logoUrl} alt="BridgeLabz Logo" onClick={onClickUrl} style={{cursor: 'pointer'}} />
      <div style={{marginTop: '20px'}}>
        <input type="text" placeholder="Enter your name" onChange={onNameChange} />
        <br />
        <span style={{color: 'red', fontSize: '12px'}}>{nameError}</span>
      </div>
    </div>
  );
}

export default App;

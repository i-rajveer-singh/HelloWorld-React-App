import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  let logoUrl = "https://bridgelabz.com/wp-content/uploads/2021/08/BridgeLabz-Logo.png";
  let bridgeLabzUrl = "https://www.bridgelabz.com";

  const onClickUrl = () => {
    window.open(bridgeLabzUrl, "_blank");
  };

  const onNameChange = (event) => {
    setUserName(event.target.value);
  };
  
  return (
    <div className="app-container">
      <h1>Hello {userName} from BridgeLabz</h1>
      <img src={logoUrl} alt="BridgeLabz Logo" onClick={onClickUrl} style={{cursor: 'pointer'}} />
      <div style={{marginTop: '20px'}}>
        <input type="text" placeholder="Enter your name" onChange={onNameChange} />
      </div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  let title = "Hello from BridgeLabz";
  let logoUrl = "https://bridgelabz.com/wp-content/uploads/2021/08/BridgeLabz-Logo.png";
  let bridgeLabzUrl = "https://www.bridgelabz.com";

  const onClickUrl = () => {
    window.open(bridgeLabzUrl, "_blank");
  };
  
  return (
    <div className="app-container">
      <h1>{title}</h1>
      <img src={logoUrl} alt="BridgeLabz Logo" onClick={onClickUrl} style={{cursor: 'pointer'}} />
    </div>
  );
}

export default App;

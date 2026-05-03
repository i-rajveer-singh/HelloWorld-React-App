import './App.css';

function App() {
  let title = "Hello from BridgeLabz";
  let logoUrl = "https://bridgelabz.com/wp-content/uploads/2021/08/BridgeLabz-Logo.png";
  
  return (
    <div className="app-container">
      <h1>{title}</h1>
      <img src={logoUrl} alt="BridgeLabz Logo" />
    </div>
  );
}

export default App;

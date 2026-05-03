import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to BridgeLabz</h1>
        <p style={{marginBottom: '30px', color: '#ccc'}}>Click below to view the Hello World App</p>
        <Link to="/helloworld" style={{
          background: '-webkit-linear-gradient(#ff8a00, #e52e71)',
          padding: '12px 24px',
          borderRadius: '30px',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'transform 0.3s ease'
        }}>
          Go to Hello World
        </Link>
      </div>
    </div>
  );
}

export default Home;

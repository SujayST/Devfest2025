import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to Hack Karnataka</h1>
        <p>Innovate. Collaborate. Build the Future.</p>
        <button className="cta-button">Register Now</button>
      </header>
    </div>
  );
}

export default App;

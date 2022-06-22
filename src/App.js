import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header> <br/><br/><br/>
      <Hello name="David" /><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default App;

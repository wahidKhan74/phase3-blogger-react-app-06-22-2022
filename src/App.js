import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { SideNav } from './components/SideNav';
import Products from './components/Products';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Navbar />
      <SideNav />
      <Products
       />
      <Footer />
    </div>
  );
}

export default App;

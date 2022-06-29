import Footer from './components/Footer';
import Products from './components/Products';
import Layout from './components/Layout';
import About from './components/About';
import { Users }from './components/Users';
import { Contact } from './components/Contact';
import { Blogs } from './components/Blogs';
import Notfoud from './components/NotFound';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
     
      <BrowserRouter>
        <Routes> 
        <Route path="/"  element={ <Layout />} >
          <Route index element={<Products />} />
          <Route path="blogs" element={< Blogs /> } />
          <Route path="contact" element={< Contact /> } />
          <Route path="products" element={< Products /> } />
          <Route path="users" element={< Users /> } />
          <Route path="about" element={< About /> } />
          <Route path="*" element={< Notfoud /> } />
        </Route>
        </Routes>
      </BrowserRouter>


      {/* <Products /> */} 
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default App;

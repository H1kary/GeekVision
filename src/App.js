import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Advantages from './components/Advantages/Advantages';
import Partners from './components/Partners/Partners';
import CallUs from './components/CallUs/CallUs';
import Cases from './components/Cases/Cases';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privacy from './components/Privacy/Privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/" element={
            <>
              <Main />
              <AboutUs />
              <Advantages />
              <Partners />
              <CallUs />
              <Cases />
              <Contacts />
              <Form />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

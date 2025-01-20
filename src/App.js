import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Advantages from './components/Advantages/Advantages';
// import Partners from './components/Partners/Partners';
import CallUs from './components/CallUs/CallUs';
import Cases from './components/Cases/Cases';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
      <Main />
      <AboutUs />
      <Advantages />
      {/* <Partners /> */}
      <CallUs />
      <Cases />
      <Contacts />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rutas from './routes/Routes';

function App() {
  return (
    <>
      <Rutas/>
      <ToastContainer className='inv' />
    </>
  );
}

export default App;

import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Scanner from './Scanner';
import OrderForm from './pages/OrderForm';

function App() {
  // const [camera, setCamera] = useState(false);

  // const toggleCam = () => {
  //   setCamera(!camera);
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<div className="App">
          {camera && <Scanner />}
          <br />
          <button onClick={toggleCam}>{camera ? 'Stop' : 'Start'} Webcam</button>
          <br />
        </div>} /> */}
        <Route exact path='/' element={<OrderForm />} />
        <Route path='*' element={ <div>Page Not Found</div> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

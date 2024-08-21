import './App.css';
import Applyform from './applyform-page/Applyform';
import Detail from './detail-page/Detail';
import Vacancy from './vacancy-page/Vacancy';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes basename='/'>
      <Route path="/" element={<Vacancy />} />
      <Route path="/vacancy-detail/:id" element={<Detail/>} />
      <Route path="/apply-form/:id" element={<Applyform/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

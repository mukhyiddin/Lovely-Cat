import Navbars from '../layouts/Navbars';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Footers from '../layouts/Footers';
import Homepage from '../page/HomePage';
import Konsultasi from '../page/Konsultasi'
import NotFound from "../page/NotFound";
import { Route, Routes } from 'react-router';
import CatShop from '../page/CatShop'
import Checkout from '../page/Checkout'
import Login from '../page/Login'
import News from '../page/News'

function App() {

  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/catshop" element={<CatShop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footers />
    </div>
  );
}


export default App;

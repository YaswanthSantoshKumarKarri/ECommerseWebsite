import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import ProductInfo from './Pages/ProductInfoPage/ProductInfo';
import CompareProds from './Components/CompareProds';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
          <Route path="/prodInfo" element={<ProductInfo />} />
          <Route path="/compareProds" element={<CompareProds />} />
          <Route path="*" element={("null")} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Eclablockchain from './components/pages/Eclablockchain';
import EclaEcosystem from './components/pages/EclaEcosystem';
import EclaReality from './components/pages/EclaReality';
import Landingpage from './components/pages/Landingpage';
import MarketPlace from './components/pages/MarketPlace';
import Swappage from './components/pages/Swappage';
import {createStore} from "redux"
import coinReducer from './store/Store';
import {Provider} from "react-redux";
const coinStore = createStore(coinReducer)
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/swap' element={<Provider store={coinStore}><Swappage/></Provider>}></Route>
        <Route path='/swaplanding' element={<Landingpage/>}></Route>
        <Route path='/' element={<Eclablockchain/>}></Route>
        <Route path='/eclareality' element={<EclaReality/>}></Route>
        <Route path='/eclamarket' element={<MarketPlace/>}></Route>
        <Route path='/eclaecosystem' element={<EclaEcosystem/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}
export default App;
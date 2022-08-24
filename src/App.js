import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Eclablockchain from './components/pages/Eclablockchain';
import EclaEcosystem from './components/pages/EclaEcosystem';
import EclaReality from './components/pages/EclaReality';
import Landingpage from './components/pages/Landingpage';
import MarketPlace from './components/pages/MarketPlace';
import Swappage from './components/pages/Swappage';
import {createStore} from "redux"
import coinReducer from './store/Store';
import {Provider} from "react-redux";
import EclaBuy from './components/pages/EclaBuy';
import PrivateSales from './components/pages/PrivateSales';
import Eclacommerce from './components/pages/Eclacommerce';
import Agriculture from './components/pages/Agriculture';
import AgricultureProduct from './components/pages/AgricultureProduct';
import Realestate from './components/pages/Realestate';
import RealEstateProduct from './components/pages/RealEstateProduct';
import DigitalAccessMarket from './components/pages/DigitalAccessMarket';
import DigitalAccessProduct from './components/pages/DigitalAccessProduct';
import UserDashboard from './components/pages/UserDashboard';
const coinStore = createStore(coinReducer)
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/swap' element={<Provider store={coinStore}><Swappage/></Provider>}></Route>
        <Route path='/privatesales' element={<Provider store={coinStore}><PrivateSales/></Provider>}></Route>
        <Route path='/swaplanding' element={<Provider store={coinStore}><Landingpage/></Provider>}></Route>
        {/* <Route path='/' element={<Eclablockchain/>}></Route> */}
        <Route path='/eclareality' element={<Provider store={coinStore}><EclaReality/></Provider>}></Route>
        <Route path='/eclamarket' element={<Provider store={coinStore}><MarketPlace/></Provider>}></Route>
        <Route path='/' element={<Provider store={coinStore}><EclaEcosystem/></Provider>}></Route>
        <Route path='/buyecla' element={<Provider store={coinStore}><EclaBuy/></Provider>}></Route>
        <Route path='/eclacommerce' element={<Provider store={coinStore}><Eclacommerce/></Provider>}></Route>
        <Route path='/agriculture' element={<Provider store={coinStore}><Agriculture/></Provider>}></Route>
        <Route path='/real-estate' element={<Provider store={coinStore}><Realestate/></Provider>}></Route>
        <Route path='/digital-access-management' element={<Provider store={coinStore}><DigitalAccessMarket/></Provider>}></Route>
        <Route path='/agricproduct/:id' element={<Provider store={coinStore}><AgricultureProduct/></Provider>}></Route>
        <Route path='/realestate/:id' element={<Provider store={coinStore}><RealEstateProduct/></Provider>}></Route>
        <Route path='/digital-access-market/:id' element={<Provider store={coinStore}><DigitalAccessProduct/></Provider>}></Route>
        <Route path='/user-dashboard' element={<Provider store={coinStore}><UserDashboard/></Provider>}></Route>
      </Routes>
   </BrowserRouter>
  );
}
export default App;
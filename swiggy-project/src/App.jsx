import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home';
import RestaurantsOptions from './Components/RestaurantsOptions';
import RestaurantMenu from './Components/RestaurantMenu';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchFood from './Components/SearchFood';
import ComingSoonCard from './Components/ComingSoonCard';
import SecondaryHome from './Components/SecondaryHome';
import {store} from './Stored/Stores';
import {Provider} from "react-redux";
import Checkout from './Components/Checkout';

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route> 
    
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<RestaurantsOptions></RestaurantsOptions>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>

        <Route path="/instamart" element={<ComingSoonCard />}/>
        <Route path="/dineout" element={<ComingSoonCard />}/>
        <Route path="/Checkout" element= {<Checkout></Checkout>}/>
      </Routes>
      </BrowserRouter>
     </Provider> 
    </>
  )
}

export default App

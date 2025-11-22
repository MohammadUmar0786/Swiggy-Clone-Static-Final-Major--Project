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

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route> 
        <Route path="/restaurant" element={<RestaurantsOptions></RestaurantsOptions>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        <Route path="/instamart" element={<ComingSoonCard />} />
        <Route path="/dineout" element={<ComingSoonCard />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

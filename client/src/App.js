
import './App.css';
import ADD from "./components/ADD"
import Dashboard from './components/Dashboard';
import Sidescroll from "./components/Sidescroll";
import Topbar from './components/Topbar';
// import Addproduct from './components/Addproduct';
import { useEffect } from 'react';
import Form from "./components/Form"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashpage from './components/Dashpage';
import Popup from "./components/Popup"
import { useState } from 'react';
import Sales from './components/Sales';


function App() {
  
  return (
    <div className="App">

<div className="container mx-auto">


    </div>






      {/* app */}
    
      {/* <Routes>
        <Route path='/login' element={<Form/>}/>
      
        <Route 

      element={
        <PrivateRoute>
          <Dashboard />
        
        </PrivateRoute>
      }
    >
       
       <Route path="/dashboard" element={<Dashboard />}/>
       </Route>
       <Route 

element={
  <PrivateRoute>
    <ADD />
  
  </PrivateRoute>
}
>
       <Route path="/dashboard/add" element={<ADD />} />
          </Route>
         
         </Routes> */}
       
      
    

<Dashboard/>
    </div>
  );
}

export default App;

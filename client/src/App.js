
import './App.css';
import ADD from "./components/ADD"
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import Form from "./components/Form"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


function App() {
  
  
  return (
    <div className="App">
      app
    
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
          <Route path="/add" element={<ADD />} />
          <Route path="/form" element={<Form />} />
          </Route>
         </Routes>
        */}
      
    <ADD/>


    </div>
  );
}

export default App;


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
    
      <Routes>
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
         
         </Routes>
       
      
   


    </div>
  );
}

export default App;

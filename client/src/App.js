import "./App.css";
import ADD from "./components/ADD";

import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashpage from "./components/Dashpage";

import Sales from "./components/Sales";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto"></div>

      {/* app */}

      <Routes>
        <Route path="/login" element={<Form />} />

        <Route
          element={
            <PrivateRoute>
              <Dashpage />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashpage />} />
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
        <Route
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/category" element={<Category />} />
        </Route>
        <Route
          element={
            <PrivateRoute>
              <Sales />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/sale" element={<Sales />} />
        </Route>
      </Routes>
     
    </div>

   
  );
}

export default App;

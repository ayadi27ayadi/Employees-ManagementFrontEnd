import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import {AuthProvider} from './Context/Context';
import { Routes, Route } from "react-router-dom";
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Accueil from './pages/Accueil/Accueil';
import routes from './routes';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Routes>
    {
      routes.map(({element: Element,path, routeKey})=> <Route key={routeKey}
      element={<Element />} path={path} />
      )
    }
  </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

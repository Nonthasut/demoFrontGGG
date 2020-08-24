import React,{useState} from 'react';
import './App.css';
import PrivateRoutes from './containers/private-routes/PrivateRoutes';
import LocalStorageService from './config/service'

function App() {
  const [role,setRole] =useState(LocalStorageService.getRole())
  return (
    <div className="App">
       <PrivateRoutes role={role} setRole={setRole}/>
    </div>
  );
}

export default App;

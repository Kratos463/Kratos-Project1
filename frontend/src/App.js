import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { registerCharts } from './Components/Charts/registerCharts';
import AdminSidebar from './Components/GeneralScreens/AdminSidebar';
import RegisterUser from './Components/AuthScreens/RegisterUser';
import LoginUser from './Components/AuthScreens/LoginUser';

registerCharts()

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact element={<RegisterUser />} path='/'></Route>
          <Route element={<LoginUser />} path='/login'></Route>
        </Routes>
        <AdminSidebar />
      </BrowserRouter>

    </div>
  );
}

export default App;

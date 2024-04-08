import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { registerCharts } from './Components/Charts/registerCharts';
import LoginUser from './Pages/Admin/AuthScreens/LoginUser';
import RegisterUser from './Pages/Admin/AuthScreens/RegisterUser';
import AdminSidebar from './Components/SideBar/AdminSidebar';
import { AdavancedCrudContextProvider } from './Context/AdvancedCrud';
import MetaFV from './Components/App/MetaFV';

registerCharts()

const App = () => {
  return (
    <div className="App">
      <AdavancedCrudContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<LoginUser />} path="/login" />
            <Route element={<RegisterUser />} path="/" />
            <Route element={<MetaFV />} path="/back-office/*" />
            <Route element={<AdminSidebar />} path="/admin/*" />
          </Routes>
        </BrowserRouter>
      </AdavancedCrudContextProvider>
    </div>
  );
}

export default App;

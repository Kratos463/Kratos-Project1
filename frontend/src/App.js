import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { registerCharts } from './Components/Charts/registerCharts';
import AdminSidebar from './Components/GeneralScreens/AdminSidebar';

registerCharts()

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AdminSidebar />
      </BrowserRouter>

    </div>
  );
}

export default App;

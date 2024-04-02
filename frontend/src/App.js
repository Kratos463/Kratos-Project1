import './App.css';
import { BrowserRouter} from 'react-router-dom'
import AdminSidebar from './Components/Dashboard/AdminSidebar';
import { registerCharts } from './Components/Charts/registerCharts';

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

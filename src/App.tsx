import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import NotFound from './pages/404';
import Visits from "./pages/visits";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import VeryNew2 from './pages/1122'
import Tsf from './pages/Tsf'

function App() {
 
  return (
    
    <Router>
      <div className="App">
        <Routes>
       


          <Route path = "/engmed-tsf" element = {<Tsf/>} />
          
         

          <Route path = "/" element = {<VeryNew2 />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />

       

          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

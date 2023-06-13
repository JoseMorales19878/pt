import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Administrador from "./moduloAdministrador/Administrador"
import registrarUsuario from "./moduloAdministrador/registrarUsuario"


function App() {
  return (
    
	         <Router>
                <Routes>
                  
				   <Route 
				    path="/Moduloadministrador" 
				     element={<Administrador />} 
					 />
					 
					<Route 
				    path="/Moduloadministrador/registrarUsuario" 
				     element={<registrarUsuario />} 
					 /> 
					 
			    </Routes>
			 </Router>	
  );
}

export default App;

import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/jquery.animatedheadline.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/nice-select.css'
import './assets/css/odometer.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Routes } from "react-router-dom"
import renderRoutes from './routes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

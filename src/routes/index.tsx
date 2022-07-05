import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Home from '../views/Home/index';
import UserDetails from '../components/Table/userDetails';



export const Routes = () => {
  return (
    <BrowserRouter>

      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;

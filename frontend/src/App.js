import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Employee from "./components/employee";
import Department from "./components/departments"
import Company from "./components/companies"
import Manage from "./components/Manage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      <div className="container">
       <div className="row">
        <div className="col 12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/crud2" element={<Department />} />
          <Route path="/crud1" element={<Company />} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
        </div>
       </div>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
/*import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';



const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Talent Verify
        </Navbar.Brand>
    </Navbar>
    </div>
  );
};

export default Navigation;
        /*
        <aside className="sidenav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </aside>

        <main>
          {/* page content *//*}
        </main>
      </div>
    </Router>
  );
}

export default App;
*/




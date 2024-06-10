
import Nav from '../partials/Nav';
import SideBar from '../partials/SideBar';
import Footer from '../partials/Footer';
import { Outlet } from 'react-router-dom';

const Master = () => {
  return (
    <>
      <Nav />
      <div id="layoutSidenav">
        <SideBar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Master

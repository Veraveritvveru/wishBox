import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './header';

const Layout = () => {
  return (
    <div className="wrapper max-w-7xl mx-auto">
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

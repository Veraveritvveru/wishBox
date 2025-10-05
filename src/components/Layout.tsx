import { Outlet } from 'react-router-dom';
import NavBar from './UI/NavBar/NavBar';
import Header from './Header';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <Header />
      <div className="flex flex-1 gap-4">
        <NavBar />
        <main className="flex-1 p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

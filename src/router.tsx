import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        {/* <Home /> */}
      </>
    ),
  },
  {
    path: '/gifts-ideas',
    element: (
      <>
        <NavBar />
        {/* <Gifts/> */}
      </>
    ),
  },
  {
    path: '/settings',
    element: (
      <>
        <NavBar />
        {/* <Settings /> */}
      </>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

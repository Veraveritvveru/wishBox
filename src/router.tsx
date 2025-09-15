import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'gifts', element: <Gifts /> },
      // { path: 'plans', element: <Plans /> },
      // { path: 'settings', element: <Settings /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

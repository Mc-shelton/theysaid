import { lazy } from 'react';
import MainLayout from '../layout/main';
import Dashboard from '../pages/dashboard';

// const DashboardDefault = Loadable(lazy(() => import('@/pages/dashboard')));


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element:<Dashboard/>
    }
  ]
};

export default MainRoutes;

import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./pages/dashboard/index.tsx'),
  route('about', './pages/about/index.tsx'),
] satisfies RouteConfig;

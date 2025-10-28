import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SplashPage from './pages/SplashPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WorkPage from './pages/WorkPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import Blog from './pages/Blog.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {path:"/", element:<SplashPage/>},
    {path:"/work", element: <WorkPage/>},
    {path:"/project/:id", element:<ProjectPage/>},
    {path:"/blog", element: <Blog/>},
    {path:"*", element:<NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

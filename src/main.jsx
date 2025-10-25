import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyProjectsPage from './pages/MyProjectsPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {path:"/", element:<App/>},
    {path:"/my-projects", element: <MyProjectsPage/>},
    {path:"/project/:id", element:<ProjectPage/>},
    {path:"*", element:<NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

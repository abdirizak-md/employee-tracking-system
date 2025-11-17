import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.scss';
import './index.css';
import Attendance from './pages/attendance.jsx';
import Employee from './pages/employee.jsx';
import Project from './pages/project.jsx';
import Report from './pages/report.jsx';
import Settings from './pages/settings.jsx';
import Task from './pages/tesk.jsx';
import TimeTacking from './pages/timeTacking.jsx';
import Dashboard from './pages/Dashboard.jsx';

const routers = createBrowserRouter([

  { path: '/',
  element: <App/>,
children:[
{
  path:'/dashboard',
element:<Dashboard />
},
{
  path:'/employee',
element:<Employee />
},
{
  path:'/projects',
element:<Project />
},
{
  path:'/tasks',
element:<Task />
},
{
  path:'/attendance',
element:<Attendance />
},
{
  path:'/timeTacking',
element:<TimeTacking />
},
{
  path:'/report',
element:<Report />
},
{
  path:'/settings',
element:<Settings />
},

]
}

  
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)

import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/dashboard.jsx';
import Employee from './pages/employee.jsx';
import Project from './pages/project.jsx';
import Task from './pages/tesk.jsx';
import Attendance from './pages/attendance.jsx';
import TimeTacking from './pages/timeTacking.jsx';
import Report from './pages/report.jsx';
import Settings from './pages/settings.jsx';

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

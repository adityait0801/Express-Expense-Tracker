import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './components/Body';

const AppLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




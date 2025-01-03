import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/styles.css'
import { RouterProvider } from 'react-router-dom';
import ProjectRouter from './components/router/ProjectRouter';
import { useState } from 'react';
import PublicRouter from './components/router/PublicRouter';
import { useEffect } from 'react';

function App() {

  const [auth, setAuth] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true)
    } else {
      console.log('Token is null');
    }
  }, []);

  return (
    <>
      {auth ? <RouterProvider router={ProjectRouter} /> : <RouterProvider router={PublicRouter} />}

    </>
  )
}

export default App

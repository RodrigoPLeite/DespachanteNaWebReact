import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './index.css'
import App from './App'
import PaginaInicial from './pages/home/paginaInicial'
import RecuperarSenha from './pages/home/recuperarSenha'
import Processos from './pages/processos/processos'
import Home from './pages/home/home'

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <PaginaInicial /> },
    { path: "/home", element: <Home /> },
    { path: "/processos", element: <Processos /> },
    { path: "/recuperar-senha", element: <RecuperarSenha /> },
  ]);

  return routes;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

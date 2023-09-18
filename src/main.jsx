import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Routes/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PokemonDetails from './Routes/PokemonDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"pokemon/:pokemonid",
    element: <PokemonDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

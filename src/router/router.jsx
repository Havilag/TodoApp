import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { Todo } from "../todo/todo";
import { ListaPendiente } from "../page/lista-pendiente/lista-pendiente";
import { ListaRealizada } from "../page/lista-realizada/lista-realizada";
import { Home } from "../page/home/home";
import { Pokemon } from "../app/pokemon/page/pokemon";
import { Login } from "../app/login/login";
import { ProtectedRouter } from "./protected-router";


export const router = createBrowserRouter([

  {
    path: "/Login",
    Component: Login
  },


  {
    element: <ProtectedRouter />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "todo",
            element: <Todo />,
          },
          {
            path: "Lista",
            element: <ListaPendiente />,
          },
          {
            path: "Lista Terminada",
            element: <ListaRealizada />,
          },
          {
            path: "Pokemon",
            element: <Pokemon />
          },
        ]
      },

    ],
  },
], {
  basename: "/TodoApp",
});


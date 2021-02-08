import { routes as documento } from "../documento";

export default [
  {
    path: "/home",
    name: "Inicial",
    component: () => import("./pages/Inicial"),
    children: [
      ...documento,
      {
        path: "/",
        name: "Home",
        component: () => import("./pages/Home")
      },
      {
        path: "/configuracoes",
        name: "Configuracoes",
        component: () => import("../configuracoes/pages/Configuracoes")
      }
    ]
  }
];

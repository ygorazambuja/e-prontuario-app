import { routes as documento } from "../documento";
import { routes as paciente} from '../paciente'

export default [
  {
    path: "/home",
    name: "Inicial",
    component: () => import("./pages/Inicial"),
    children: [
      ...documento,
      ...paciente,
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

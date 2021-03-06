export default [
  // {
    // path: "documento",
    // name: "Documento",
    // component: () => import("./pages/Documento")
  // },
  {
    path: "documento",
    name: "Documento",
    component: () => import("./pages/Documento")
  },{
    path: 'novoDocumento',
    name: "NovoDocumento",
    component: () => import('./pages/NovoDocumento')
  },{
    path: 'documento/:titulo',
    name: 'PreencherDocumento',
    component: () => import('./pages/PreencherDocumento')
  }
];

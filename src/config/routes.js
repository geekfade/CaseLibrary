import HomePage from '@/layouts/HomePage';
import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
import Web from '@/pages/Web';

const routerConfig = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/Vue',
    component: HeaderAsideLayout,
    children: [
      { path: '/Vue/animation', component: NotFound },
      { path: '/Vue/Specialeffects', component: NotFound },
    ],
  },
  {
    path: '/',
    component: HeaderAsideLayout,
    children: [
      { path: '/Web/Css', component: Web },
      { path: '/Web/Js', component: NotFound },
      { path: '/Web/Jq', component: NotFound },
      { path: '/Web/3D', component: NotFound },
      { path: '/Web/Three', component: NotFound },
      { path: '/Web/Gasp', component: NotFound },
    ],
  },
  { path: '*', component: NotFound },
];

export default routerConfig;

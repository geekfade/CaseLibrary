import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
import Web from '@/pages/Web';

const routerConfig = [
  {
    path: '/Vue',
    component: HeaderAsideLayout,
    children: [
      { path: '/Vue/basic', component: NotFound },
      { path: '/Vue/fixed', component: NotFound },
    ],
  },
  {
    path: '/form',
    component: HeaderAsideLayout,
    children: [
      { path: '/form/basic', component: NotFound },
      { path: '/form/signup', component: NotFound },
    ],
  },
  {
    path: '/charts',
    component: HeaderAsideLayout,
    children: [
      { path: '/charts/line', component: NotFound },
      { path: '/charts/histogram', component: NotFound },
      { path: '/charts/bar', component: NotFound },
    ],
  },
  {
    path: '/profile',
    component: HeaderAsideLayout,
    children: [
      { path: '/profile/success', component: NotFound },
      { path: '/profile/fail', component: NotFound },
    ],
  },
  {
    path: '/result',
    component: HeaderAsideLayout,
    children: [
      { path: '/result/success', component: NotFound },
      { path: '/result/fail', component: NotFound },
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

import loadView from './_loader';

import hauntsRoutes from './haunts';

export default [
  /* system pages */
  {
    path: '*', redirect: { name: 'home' },
  },

  /* view pages */
  {
    path: '/', name: 'home', component: loadView('home'),
  },
  {
    path: '/events', name: 'events', component: loadView('events'), meta: { title: '事件' },
  },
  {
    path: '/items', name: 'items', component: loadView('items'), meta: { title: '道具' },
  },
  {
    path: '/omens', name: 'omens', component: loadView('omens'), meta: { title: '預兆' },
  },
  {
    path: '/haunts', name: 'haunts', component: loadView('haunts'), meta: { title: '作祟' },
  },
  ...hauntsRoutes,
];

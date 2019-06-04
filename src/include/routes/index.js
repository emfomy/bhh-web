import loadView from './_loader';

import hauntsRoutes from './haunts';

export default [
  /* system pages */
  {
    path: '*', redirect: '/',
  },

  /* view pages */
  {
    path: '/', component: loadView('home'),
  },
  {
    path: '/events',
    component: loadView('cards'),
    meta: { title: '事件' },
    props: { path: 'events', title: '事件列表' },
    children: [
      { path: '', redirect: '/events/bhh' },
      { path: 'bhh', component: loadView('events/bhh'), meta: { title: 'BHH' } },
      { path: 'bww', component: loadView('events/bww'), meta: { title: 'BWW' } },
    ],
  },
  {
    path: '/items',
    component: loadView('cards'),
    meta: { title: '道具' },
    props: { path: 'items', title: '道具列表' },
    children: [
      { path: '', redirect: '/items/bhh' },
      { path: 'bhh', component: loadView('items/bhh'), meta: { title: 'BHH' } },
      { path: 'bww', component: loadView('items/bww'), meta: { title: 'BWW' } },
    ],
  },
  {
    path: '/omens',
    component: loadView('cards'),
    meta: { title: '預兆' },
    props: { path: 'omens', title: '預兆列表' },
    children: [
      { path: '', redirect: '/omens/bhh' },
      { path: 'bhh', component: loadView('omens/bhh'), meta: { title: 'BHH' } },
      { path: 'bww', component: loadView('omens/bww'), meta: { title: 'BWW' } },
    ],
  },
  {
    path: '/haunts', component: loadView('haunts'), meta: { title: '作祟' },
  },
  ...hauntsRoutes,
];

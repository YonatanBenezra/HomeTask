import React from 'react';

const Ludus = React.lazy(() => import('./views/hometask/ludus.js'));
const Vimeo = React.lazy(() => import('./views/hometask/vimeo.js'));
const Xing = React.lazy(() => import('./views/hometask/xing.js'));
const Flickr = React.lazy(() => import('./views/hometask/flickr.js'));
const Github = React.lazy(() => import('./views/hometask/github.js'));
const Linkedin = React.lazy(() => import('./views/hometask/linkedin.js'));
const Pinterest = React.lazy(() => import('./views/hometask/pinterest.js'));
const Reddit = React.lazy(() => import('./views/hometask/reddit.js'));
const Stackoverflow = React.lazy(() => import('./views/hometask/stackoverflow.js'));
const HomeTask = React.lazy(() => import('./views/hometask/HomeTask.js'));
const Explanation = React.lazy(() => import('./views/hometask/explanation.js'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: HomeTask },
  { path: '/hometask', name: 'HomeTask', component: HomeTask },
  { path: '/explanation', name: 'Explanation', component: Explanation },
  { path: '/ludus', name: 'Ludus', component: Ludus },
  { path: '/vimeo', name: 'Vimeo', component: Vimeo },
  { path: '/xing', name: 'Xing', component: Xing },
  { path: '/flickr', name: 'Flickr', component: Flickr },
  { path: '/github', name: 'Github', component: Github },
  { path: '/linkedin', name: 'Linkedin', component: Linkedin },
  { path: '/pinterest', name: 'Pinterest', component: Pinterest },
  { path: '/reddit', name: 'Reddit', component: Reddit },
  { path: '/stackoverflow', name: 'Stackoverflow', component: Stackoverflow },

];

export default routes;

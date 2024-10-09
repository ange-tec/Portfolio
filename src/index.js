import Router from './router';
import Home from './controllers/Home';

import './output.css';
import Projects from './controllers/Projects';
import Contact from './controllers/Contact';

const routes = [{
  url: '/',
  controller: Home
},
{
  url: '/home',
  controller: Home
},
{
  url: '/projects',
  controller: Projects
},
{
  url: '/contact',
  controller: Contact
}
];

new Router(routes);

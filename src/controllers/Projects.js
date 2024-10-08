import viewProjects from '../views/Projects_view';
import viewNav from '../views/Home_views.js/Nav_view';
import viewFooter from '../views/Home_views.js/Footer_view';

const Projects = class Projects {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  render() {
    return `
    <div>${viewNav()}</div>
    <div>${viewProjects()}</div>
    <div>${viewFooter()}</div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Projects;

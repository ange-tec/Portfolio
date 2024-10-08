import ViewNav from '../views/Home_views.js/Nav_view';
import ViewMain from '../views/Home_views.js/Main_view';
import ViewFooter from '../views/Home_views.js/Footer_view';

const Home = class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    <div> ${ViewNav()} </div>
    <div> ${ViewMain()}</div>
    <div> ${ViewFooter()}</div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Home;

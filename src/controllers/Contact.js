import viewNav from '../views/Home_views.js/Nav_view';
import viewContact from '../views/Contact_view';

const Contact = class Contact {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  render() {
    return `
    <div>${viewNav()}</div>
    <div>${viewContact()}</div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Contact;

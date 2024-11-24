import {createElement} from '../render.js'

const createFoterStatisticTemplate = ()=>{
  return `  <section class="footer__statistics"> <p>130 291 movies inside</p> </section>`
}

export default class FooterStatisticView {
  getTemplate() {
    return createFoterStatisticTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
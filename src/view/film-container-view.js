import {createElement} from '../render.js'

const createFilmListContainerTemplate = ()=>{
  return `<section class="films"></section>`
}

export default class FilmContainerView {
  getTemplate() {
    return createFilmListContainerTemplate();
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
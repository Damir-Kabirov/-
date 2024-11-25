import {createElement} from '../render.js'
import {getYearfromDate,humanizeRuntime,trimText} from '../utils/utils.js'
const createFilmCardTemplate = (film)=>{
  const {title,total_rating,poster,release,runtime,genre,description} = film.film_info
  const generList = genre.join('');
  const commentsCount = film.comments.length;
  const yearDate = getYearfromDate(release.date)
  const time = humanizeRuntime(runtime)
  const shortDescription = trimText(description,140)+'...'
  return `
  <article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${total_rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${yearDate}</span>
      <span class="film-card__duration">${time}</span>
      <span class="film-card__genre">${generList}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <span class="film-card__comments">${commentsCount} comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>
      `
}

export default class FilmCardView {
  constructor(task) {
    this.task = task;
  }
  getTemplate() {
    return createFilmCardTemplate(this.task);
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
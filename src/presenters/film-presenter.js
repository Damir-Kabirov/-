import FilmContainerView from '../view/film-container-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreBtnView from '../view/show-more-btn-view.js';
import SortView from '../view/sort-view.js';
import FilterView from '../view/filter-view.js';
import FilmDetailView from '../view/film-detail-view.js'
import FilmListContainerView from '../view/film-list-container-view.js'
import { render } from '../render.js';


export default class FilmPresenter{
  filmContainerComopnent = new FilmContainerView();
  filmListComopnent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView()
  sortComopnent = new SortView();
  filterComponent = new FilterView();
  ShowMoreBtnComponent = new ShowMoreBtnView();
 

  init = (container,filmModel)=>{
    this.filmModel = filmModel;
    this.boardFilms = [...this.filmModel.getFilms()]
    this.container = container;
    render(this.filterComponent,this.container);
    render(this.sortComopnent,this.container);
    render(this.filmContainerComopnent,this.container);
    render(this.filmListComopnent,this.filmContainerComopnent.getElement());
    render (this.filmListContainerComponent,this.filmListComopnent.getElement())
    for(let i=0;i<this.boardFilms.length;i++){
      render (new FilmCardView(this.boardFilms[i]),this.filmListContainerComponent.getElement());
    }
    render(this.ShowMoreBtnComponent,this.filmListComopnent.getElement());
    render (new FilmDetailView(this.boardFilms[1]),this.container.parentElement);
  }

}
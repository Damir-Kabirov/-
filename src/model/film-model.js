import {generateFilm} from '../mock/film.js'

export default class FilmModel {
   constructor(comment) {
      this.comment = comment; 
      this.films = Array.from({length:5},()=>generateFilm(this.comment))
    }
   
   getFilms(){
    return this.films
   }
}


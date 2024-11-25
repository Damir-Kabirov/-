import {getRandomNumber,addRandomElementArray,getRandomSentences,getRandomElement} from '../utils/utils.js'
import {actors,writers,description,imgSrc} from './const.js'


const generateFilm = ()=>{
  return {
    id: "0",
    comments: [
      1,2,3
    ],
    film_info: {
      title: "A Little Pony Without The Carpet",
      alternative_title: "Laziness Who Sold Themselves",
      total_rating: 5.3,
      poster:getRandomElement(imgSrc) ,
      age_rating: 0,
      director: "Tom Ford",
      writers: addRandomElementArray(getRandomNumber(writers.length-1,0),writers,[]),
      actors:  addRandomElementArray(getRandomNumber(actors.length-1,0),actors,[]),
      release: {
        date: "2019-05-11T00:00:00.000Z",
        release_country: "Finland"
      },
      runtime: 77,
      genre: [
        "Comedy",
        "Horor"
      ],
      description: getRandomSentences(description,getRandomNumber(6,2))
    },
    user_details: {
      watchlist: false,
      already_watched: true,
      watching_date: "2019-04-12T16:12:32.554Z",
      favorite: false
    }
  }
}


export {generateFilm}


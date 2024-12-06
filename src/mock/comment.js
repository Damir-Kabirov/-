import {getRandomElement} from '../utils/utils.js'
import {commentEmotion} from './const.js'
let commentsLength =0
const generateComment = ()=>{
    commentsLength++
    return {
        id: commentsLength,
        author: "Ilya O'Reilly",
        comment: "a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.",
        date: "2019-05-11T16:12:32.554Z",
        emotion: getRandomElement(commentEmotion)
      }
}

export {generateComment} 
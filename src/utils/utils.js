import dayjs from 'dayjs';

const getRandomNumber = (maxNum,minNum)=>{
  return Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
}

const createRandomComent = (count,coment)=>{
  const text = coment.split(/[.!?]\s/)
  const messageString = [];
  for (let i=0;i<count;i++){
    messageString.push(text[createRandomNumber(0,text.length-1)]);
  }
  return messageString.join('.')
}

const getRandomElement = (array)=>{
  return array[getRandomNumber(array.length-1,0)];
}

const addRandomElementArray = (count,sourceArray,targetArray)=>{
  for (let i = 0; i < count; i++) {
    const randomElement = getRandomElement(sourceArray);
    targetArray.push(randomElement);
}
return [...targetArray]
}

const getRandomSentences = (text, count)=>{
  const sentences = text.match(/[^.!?]+[.!?]/g);
  if (sentences.length < count) {
      return text;
  }
  const randomSentences = [];
  while (randomSentences.length < count) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const randomSentence = sentences[randomIndex];
      if (!randomSentences.includes(randomSentence)) {
          randomSentences.push(randomSentence);
      }
  }
  return randomSentences.join(' ');
}

const trimText = (text,countSymbol) => text.slice(0,countSymbol);
 
const getYearfromDate = (date) =>dayjs(date).format('YYYY');

const humanizeRuntime = (time)=>{
  if(time<60){
    return `${time}m`
  }
  else {
    let hour = Math.floor(time/60)
    let minute = time%60
    return `${hour}h ${minute}m`
  }
}

const humanizeFilmDate = (date)=>dayjs(date).format('D MMMM YYYY');
  

export {getRandomNumber,addRandomElementArray,getRandomElement,getYearfromDate,humanizeRuntime,humanizeFilmDate,getRandomSentences,trimText}
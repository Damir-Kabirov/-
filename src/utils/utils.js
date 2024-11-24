
const randomNumber = (maxNum,minNum)=>{
  return Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
}

function createRandomComent (count,coment){
  const text = coment.split(/[.!?]\s/)
  const messageString = [];
  for (let i=0;i<count;i++){
    messageString.push(text[createRandomNumber(0,text.length-1)]);
  }
  return messageString.join('.')
}
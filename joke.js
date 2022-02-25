function mouseOver(){

fetch("https://icanhazdadjoke.com/slack")
  .then(data => data.json())
  .then(jokeData => {
      const jokeText = jokeData.attachments[0].text;
      const joke = document.getElementById("jokes");
      joke.innerHTML=jokeText;
  });
}
function mouseOut(){
    document.getElementById("jokes").innerHTML="LOL";
    document.getElementById("jokes").style.color="white";

}
document.getElementById("jokes").addEventListener("mouseover", mouseOver);
document.getElementById("jokes").addEventListener("mouseout", mouseOut);


let rnum = Math.floor(Math.random() * 1600);
fetch("https://type.fit/api/quotes")
  .then(data => data.json())
  .then(quoteData => {
      const quoteText = quoteData[rnum].text;
      const authorText = quoteData[rnum].author;
      console.log(quoteData);
      
      const quote = document.getElementById("quotes");
      const author = document.getElementById("author");
      
      quote.innerHTML=quoteText;
      author.innerHTML=authorText;
  });



 

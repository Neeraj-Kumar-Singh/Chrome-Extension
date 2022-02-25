function doTime(){
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("time").innerHTML = time;

  
}
  setInterval(doTime, 1000);
  if (new Date().getHours() < 10) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  }
  else if (new Date().getHours() < 16) {
    document.getElementById("greeting").innerHTML = "Good Day!";
  }
  else {
    document.getElementById("greeting").innerHTML = "Good Evening!";
  }

  const numImagesAvailable = 982  //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const collectionID = 11649432  //the collection ID from the original url
// const collectionID = 167470  //the collection ID from the original url
const galleryContainer = document.querySelector('.gallery-container')
function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
      console.log(response.url)
      document.body.style.backgroundImage = `url(${response.url})`;
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundPosition = "top center"
      document.body.style.backgroundSize = "cover"
    })
  }
  for(let i=0; i < numItemsToGenerate; i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
renderGalleryItem(randomImageIndex);
  }

//   const quotesApi = "https://type.fit/api/quotes";

// fetch((quotesApi) => {
//     then(response =>{
//       return response.JSON();
//     })
//     then(data =>{
//      const quoteText=response.text[0];
//      console.log("quoteText");
//      const quote=document.getElementById("quotes");
//      quote.innerText='${quoteText}';
//     })

// })
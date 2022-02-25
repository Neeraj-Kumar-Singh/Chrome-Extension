fetch("https://type.fit/api/quotes").then((response) => {
    console.log('resolved', response);
    return response.json();

}).then(data => {
    // console.log(data);
    const quotes=document.getElementById("quotes");
     quotes.innerHTML=data.text();
}).catch((err) => {
    console.log('rejected', err);
});
// let file = "https://type.fit/api/quotes"

// fetch (file)
// .then(x => x.json)
// .then(y => document.getElementById("quotes").innerHTML = y);

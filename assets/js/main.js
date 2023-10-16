//const apiKey= ;

const btnSearch= document.querySelector("#search");
btnSearch.addEventListener("click" , () =>{
    const keyWord = document.querySelector("#key-word").value;
    const langueage= document.querySelector("#langueageOptions").value;
    const sortby= document.querySelector("#sort-variant");
    const resultSection= document.querySelector(".result-news");
    resultSection.innerHTML= null;
    var url = `https://newsapi.org/v2/everything?q=${keyWord}&language=${langueage}&sortBy=${sortby}&apiKey=${apiKey}`;
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("data" , data);
        const news = data.articles;
        news.forEach((singleNews) => {
            let title= singleNews.title;
            let description= singleNews.description;
            let img= singleNews.urlToImage;
            let url= singleNews.url;

            resultSection.innerHTML += `<div class="divNews">
                <h2>${title}</h2>
                <p>${description}</p>
                <img src="${img}">
                <a href="${url} target="_blank"">Show More</a>
            </div>`
        });
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
    });
})
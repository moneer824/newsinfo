let parent = document.getElementById('parent')

async function searchNews() {
    let inp = localStorage.getItem('search')
    let res = await fetch(`https://newsapi.org/v2/everything?sources=techcrunch&q=${inp}&language=en&apiKey=48d5c5fdc1c6409d9f4d29b4b9e78c8d`)
    let data = await res.json()
    console.log(data.articles)
    show(data.articles)
}

searchNews()



function show(data) {
    data.forEach(function (news) {

        // console.log(news)
        // console.log(news.author)
        let div = document.createElement('div')
        let div_info = document.createElement('div')
        let div_des = document.createElement('div')
        let div_img = document.createElement('div')
        let title = document.createElement('p')
        title.innerText = news.title
        let publishedAt = document.createElement('p')
        publishedAt.innerText = news.publishedAt
        let description = document.createElement('p')
        description.innerText = news.description

        // console.log(news.description.length)
        let author = document.createElement('p')
        author.innerText = news.author

        let img = document.createElement('img')
        img.src = news.urlToImage
        div.onclick = function () {
            localStorage.setItem('newstitle', JSON.stringify(news))
            window.location.href = 'news.html'
        }
        div.style.cursor = 'pointer'

        div_info.append(title, author, publishedAt)
        div_des.append(description)
        div_img.append(img)
        div.append(div_info, div_des, div_img)
        parent.append(div)


    });
}

let btn = document.getElementById('btn')


btn.onclick = function () {
    let inp = document.getElementById('inp').value
    localStorage.setItem("search", JSON.stringify(inp))
    window.location.href = "search.html"
}
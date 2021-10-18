var parent = document.getElementById('parent')
var news = JSON.parse(localStorage.getItem('newstitle'))

function showNews() {
    console.log(news)
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

    let author = document.createElement('p')
    author.innerText = news.author

    let img = document.createElement('img')
    img.src = news.urlToImage
    

    div_info.append(title, author, publishedAt)
    div_des.append(description)
    div_img.append(img)
    div.append(div_info,div_img, div_des)
    parent.append(div)
}

showNews()
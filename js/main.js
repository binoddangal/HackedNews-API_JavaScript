fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.map(id => {
            const newsId = id;
            fetch('https://hacker-news.firebaseio.com/v0/item/'+newsId+'.json?print=pretty')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const newsdata = document.createElement('a')
                newsdata.innerHTML = data.title;
                newsdata.style.width = '100%';
                newsdata.style.height = '50px';
                newsdata.href = data.url;
                newsdata.style.display = 'flex';
                newsdata.style.padding = '10px';
                newsdata.style.alignItems = 'center';
                newsdata.style.width = '40%';
                newsdata.style.margin = '1px auto';
                newsdata.style.backgroundColor = '#d4f8e8'
                document.body.appendChild(newsdata)
            })
        })
    })

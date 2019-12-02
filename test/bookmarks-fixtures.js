function makeBookmarksArray() {
    return [
        {
            id: uuid(),
            title: 'Bookmark One',
            url: 'https://www.yahoo.com',
            description: 'Yahoo, Yahoo, and more Yahoo',
            rating: 4
        },
        {
            id: uuid(),
            title: 'Bookmark Two',
            url: 'https://www.cnn.com',
            description: 'News, news, and more news',
            rating: 2
        },
        {
            id: uuid(),
            title: 'Bookmark Three',
            url: 'https://www.espn.com',
            description: 'Sports, sports, and more sports',
            rating: 5
        },
        {
            id: uuid(),
            title: 'Bookmark Four',
            url: 'https://www.google.com',
            description: 'Search, search, and more search',
            rating: 3
        },
        {
            id: uuid(),
            title: 'Bookmark Five',
            url: 'https://www.bing.com',
            description: 'Welcome, welcome, and more welcome',
            rating: 1
        }
    ]
}

module.exports = {
    makeBookmarksArray
}
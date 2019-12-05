function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'Yahoo',
            url: 'https://www.yahoo.com',
            description: 'Yahoo, Yahoo, and more Yahoo',
            rating: 4,
        },
        {
            id: 2,
            title: 'CNN',
            url: 'https://www.cnn.com',
            description: 'News, news, and more news',
            rating: 2,
        },
        {
            id: 3,
            title: 'ESPN',
            url: 'https://www.espn.com',
            description: 'Sports, sports, and more sports',
            rating: 5,
        },
        {
            id: 4,
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Search, search, and more search',
            rating: 3,
        },
        {
            id: 5,
            title: 'Bing',
            url: 'https://www.bing.com',
            description: 'Welcome, welcome, and more welcome',
            rating: 1,
        },
    ]
}

function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
}
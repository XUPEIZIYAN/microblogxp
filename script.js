const posts = [
    {
        date: '2023-05-01',
        content: '今天的思考: 生活就像一杯茶,不是甜的就是苦的,关键在于如何品味。',
        image: 'path/to/image1.jpg'
    },
    {
        date: '2023-05-02',
        content: '阅读是一种习惯,一旦养成,终生受益。',
    },
    // 添加更多帖子...
];

function createPostElement(post) {
    const postElement = document.createElement('article');
    postElement.className = 'post';

    const dateElement = document.createElement('div');
    dateElement.className = 'post-date';
    dateElement.textContent = post.date;

    const contentElement = document.createElement('div');
    contentElement.className = 'post-content';
    contentElement.textContent = post.content;

    postElement.appendChild(dateElement);
    postElement.appendChild(contentElement);

    if (post.image) {
        const imageElement = document.createElement('img');
        imageElement.className = 'post-image';
        imageElement.src = post.image;
        imageElement.alt = '帖子图片';
        postElement.appendChild(imageElement);
    }

    return postElement;
}

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', renderPosts);
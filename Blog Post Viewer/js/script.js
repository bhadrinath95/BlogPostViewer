const get_posts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postsData = await response.json()
    return postsData
}

const get_comments = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const commentsData = await response.json()
    return commentsData
}

async function fetchPostsAndComments() {

    const posts = await get_posts();
    const comments = await get_comments();

    const commentsByPost = comments.reduce((acc, comment) => {
        if (!acc[comment.postId]) {
          acc[comment.postId] = [];
        }
        acc[comment.postId].push(comment);
        return acc;
      }, {});

    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;

        const postComments = commentsByPost[post.id];

        if (postComments && postComments.length > 0) {
            const commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments');
            commentsDiv.innerHTML = '<h3>Comments:</h3>';
            postComments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                    <p class="author">${comment.name}</p>
                    <p>${comment.body}</p>
                `;
                commentsDiv.appendChild(commentDiv);
            });
            postDiv.appendChild(commentsDiv);
        }
        postsContainer.appendChild(postDiv);
    })
}

fetchPostsAndComments()
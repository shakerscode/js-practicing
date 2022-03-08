// function loadingPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }

// loadingPost();

// function displayPost(posts){
//     const postContainer = document.getElementById('post-sec');
//     for(const post of posts){
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//         <h1>${post.tittle}</h1>
//         <p>${post.body}
//         `;
//         postContainer.appendChild(div);
//     }

// }

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);
   
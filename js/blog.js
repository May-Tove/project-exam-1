const baseUrl = "https://mayth.one/project-exam/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".post-container");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    postContainer.innerHTML = "";
    console.log(posts);

    posts.forEach(function (post) {
      postContainer.innerHTML += `<div class="post">   
                                    <div style="background-image: linear-gradient(rgba(0 ,0,0,0), rgba(0,0,0,0.5)), url(${post._embedded["wp:featuredmedia"][0].source_url})" class="featured-img">
                                    <a href="post.html?id=${post.id}">
                                    <h2>${post.title.rendered}</h2>
                                    <p>${post.excerpt.rendered}</p>
                                    <p>Read More</p>
                                    </a>
                                    </div>
                                    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts(baseUrl);

/*<img src=${post._embedded["wp:featuredmedia"][0].source_url} alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="product-img"/>*/

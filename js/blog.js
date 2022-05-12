const baseUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations?acf_format=standard";
const postContainer = document.querySelector(".post-container");
const viewMore = document.querySelector(".view-more-btn");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    postContainer.innerHTML = "";
    console.log(posts);

    posts.forEach(function (post) {
      postContainer.innerHTML += `<div class="post ${post.slug}">
                                    <a href="post.html?id=${post.id}">   
                                    <div style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${post.acf.featured_image})" class="featured-img">
                                    <h2>${post.title.rendered}</h2>
                                    </div>
                                    </a>
                                    </div>`;
    });
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = displayError("An error occurred");
  }
}
getPosts(baseUrl);

// when vie more button is clicked, view more posts
viewMore.onclick = function () {
  const newUrl = baseUrl + `&per_page=12`;
  viewMore.style.display = "none";
  getPosts(newUrl);
};

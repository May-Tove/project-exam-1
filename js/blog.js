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
                                    <div style="background-image: linear-gradient(rgba(0 ,0,0,0), rgba(0,0,0,0.7)), url(${post._embedded["wp:featuredmedia"][0].source_url})" class="featured-img">
                                    <h2>${post.title.rendered}</h2>
                                    <p>${post.excerpt.rendered}</p>
                                    <a href="post.html?id=${post.id}">Read More</a>
                                    </div>
                                    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts(baseUrl);

const categories = document.querySelector(".category-select");
categories.onchange = function () {
  let newUrl;
  const categoryChosen = categories.value;
  if (categories.id === "all") {
    newUrl = baseUrl;
  } else {
    newUrl = baseUrl + `&category=${categories.value}`;
  }
  postContainer.innerHTML = "";
  getPosts(newUrl);
};

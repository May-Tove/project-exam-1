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
      postContainer.innerHTML += `<div class="post ${post.title.rendered}">
                                    <a href="post.html?id=${post.id}">   
                                    <div style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2)), url(${post.acf.featured_image})" class="featured-img">
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

//categories
const categories = document.querySelector(".continent-select");
const continentUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations";

categories.onchange = function () {
  let newUrl;
  const continentChosen = categories.value;
  if (categories.value === "10") {
    newUrl = baseUrl;
    viewMore.style.display = "block";
  } else {
    newUrl =
      continentUrl + `?categories=${continentChosen}&acf_format=standard`;
    viewMore.style.display = "none";
  }
  postContainer.innerHTML = "";
  getPosts(newUrl);
};

// order by
const order = document.querySelector(".order-select");

order.onchange = function (event) {
  const newUrl = baseUrl + `&order=${event.target.value}`;
  postContainer.innerHTML = "";
  getPosts(newUrl);
};

// search for posts
const searchBtn = document.querySelector(".search-btn");

searchBtn.onclick = function () {
  const searchInput = document.querySelector("#search-input").value;
  const newUrl = baseUrl + `&search=${searchInput}`;
  postContainer.innerHTML = "";
  viewMore.style.display = "none";
  getPosts(newUrl);
};

// when view more button is clicked, view more posts
viewMore.onclick = function () {
  const newUrl = baseUrl + `&per_page=12`;
  viewMore.style.display = "none";
  getPosts(newUrl);
};

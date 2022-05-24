// fetching posts
const baseUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations?acf_format=standard";
const postContainer = document.querySelector(".post-container");
const viewMore = document.querySelector(".view-more-btn");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    postContainer.innerHTML = "";

    posts.forEach(function (post) {
      postContainer.innerHTML += `<div class="post ${post.title.rendered}">
                                    <a href="post.html?id=${post.id}">   
                                    <div style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${post.acf.featured_image})" class="featured-img">
                                    <h2>${post.title.rendered}</h2>
                                    </div>
                                    </a>
                                    </div>`;
    });
  } catch (error) {
    postContainer.innerHTML = displayError("an error occurred");
  }
}
getPosts(baseUrl);

//categories
const continents = document.querySelectorAll(".post-nav button");
const continentUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations";

// filter on category
continents.forEach(function (continent) {
  continent.onclick = function (event) {
    let newUrl;
    const continentChosen = event.target.value;
    if (event.target.id === "all") {
      newUrl = baseUrl;
      viewMore.style.display = "block";
    } else {
      newUrl =
        continentUrl + `?categories=${continentChosen}&acf_format=standard`;
      viewMore.style.display = "none";
    }

    getPosts(newUrl);
  };
});

// add active class to continent-button that is clicked and remove it from all others
continents.forEach((button) => {
  button.addEventListener("click", function () {
    continents.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

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

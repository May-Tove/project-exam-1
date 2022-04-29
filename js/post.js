const postContainer = document.querySelector(".detail-container");
const heroContainer = document.querySelector(".post-hero");
const postActiveLink = document.querySelector(".post-detail");
const postTitle = document.querySelector(".post-title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://mayth.one/project-exam/wp-json/wp/v2/posts/" + id + "?_embed";

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    heroContainer.innerHTML = "";
    postContainer.innerHTML = "";
    console.log(details);
    displayPost(details);
  } catch (error) {
    console.log(error);
  }
}
getPost();

function displayPost(details) {
  postTitle.innerHTML = `My Travel Blog | ${details.title.rendered}`;

  postActiveLink.innerHTML = `${details.title.rendered}`;

  heroContainer.innerHTML = `<div style="background-image: linear-gradient(rgba(0 ,0,0,0.3), rgba(0,0,0,0)), url(${details._embedded["wp:featuredmedia"][0].source_url})" class="featured-img">
                                <h1>${details.title.rendered}</h1>
                            </div>`;

  postContainer.innerHTML = `<p>${details.content.rendered}</p>`;
}

const postContainer = document.querySelector(".detail-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://mayth.one/project-exam/wp-json/wp/v2/posts/" + id;

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    postContainer.innerHTML = "";
    console.log(details);
    displayPost(details);
  } catch (error) {
    console.log(error);
  }
}
getPost();

function displayPost(details) {
  postContainer.innerHTML = `<p>${details.content.rendered}</p>`;
}

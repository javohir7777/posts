const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

const navIcons = document.querySelector(".nav__icons");
const navMenuFlex = document.querySelector(".nav-menu__flex");
const blogPost = document.querySelector(".blogPost");

navIcons.addEventListener("click", () => {
  navMenuFlex.classList.toggle("active");
  console.log("hi");
});

function getBlogPost(response) {
  let str = "";
  str += `
    <img
          src="${response.data.img}"
          alt=""
        />
        <p>Id: ${response.data.id}</p>
        <h1 class="blogPost-title">
        ${response.data.title}
        </h1>
        <p class="blogPost-body">
        ${response.data.body}
        </p>
    `;
  blogPost.innerHTML = str;
}
async function getPost() {
  try {
    let postId = JSON.parse(localStorage.getItem("Id"));
    console.log(postId);

    let response = await axios.get(`${url}/${postId}`);
    console.log(response.data);
    getBlogPost(response);
  } catch (err) {
    console.log(err);
  }
}
getPost();

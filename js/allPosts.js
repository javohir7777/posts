const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

const navIcons = document.querySelector(".nav__icons");
const navMenuFlex = document.querySelector(".nav-menu__flex");

navIcons.addEventListener("click", () => {
  navMenuFlex.classList.toggle("active");
});

function getAllPosts(response) {
  let str = "";
  const posts = document.querySelector(".posts");
  response.data.forEach((post) => {
    str += `
       <a onclick="setAllPosts(${post.id})" href="../pages/blogPost.html">
       <div class="post">
       <div class="post__img">
         <img
           src="${post.img}"
           alt="post-img"
         />
       </div>
       <div class="post__content">
         <h6>${post.category} | Id: ${post.id}</h6>
         <h1>${post.title}</h1>
         <p>
         ${post.body}
         </p>
       </div>
     </div>
       </a>
        `;
    posts.innerHTML = str;
  });
}

async function getPost() {
  try {
    let response = await axios.get(url);
    console.log(response);
    getAllPosts(response);
  } catch (err) {
    console.log(err);
  }
}
getPost();

function setAllPosts(id) {
  localStorage.setItem("Id", id);
}

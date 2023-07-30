const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

const navIcons = document.querySelector(".nav__icons");
const navMenuFlex = document.querySelector(".nav-menu__flex");

navIcons.addEventListener("click", () => {
  navMenuFlex.classList.toggle("active");
  console.log("hi");
});

function getDate(response) {
  let str = "";
  let date = new Date(
    `${response.data[response.data.length - 1].createdDate}`
  ).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const img = document.querySelector(".bg-img");
  img.style.backgroundImage = `url(${
    response.data[response.data.length - 1].img
  })`;
  str += `
    <div class="container">
    <div class="bg-text">
      <p class="bg-title">Posted on <b>${
        response.data[response.data.length - 1].category
      }</b></p>
      <h3 class="bg-text__h3">
      ${response.data[response.data.length - 1].title}
      </h3>
      <p class="bg-yellow">By <span>Javohir Zafar </span>| ${date}</p>
      <p class="bg-texts">
      ${response.data[response.data.length - 1].body}
      </p>
      <a class="btn btn-outline bg-btn" href="../pages/allPosts.html">Read More > </a>
    </div>
  </div>
    `;
  img.innerHTML = str;
}

function getCards(response) {
  const a = response.data.sort((a, b) => b.rating - a.rating);
  let str = "";
  for (let i = 0; i <= 2; i++) {
    const date = new Date(a[i].createdDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const row = document.querySelector(".row");
    str += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <img
        src="${a[i].img}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-date">
          By <span>Jahongir Zafar </span> | ${date} | Rating : ${a[i].rating}
        </p>
        <h5 class="card-title"> ${a[i].title}</h5>
        <p class="card-text">
        ${a[i].body}
        </p>
      </div>
    </div>
  </div>
    `;
    row.innerHTML = str;
  }
}

function getCategory(response) {
  let str = "";
  const rowCol = document.querySelector(".row__col");
  for (let i = 0; i < 4; i++) {
    // let a = response.data[i].id;
    str += `
      <div class="col-12 col-md-6 col-lg-3">
     <a onclick="getCategoryId(${response.data[i].id})" href="../pages/id.html" style="text-decoration: none;">
     <div class="card">
     <div class="card-body">
       <div class="card-img">
         <img src="../img/Icon.png" alt="" />
       </div>
       <h5 class="card-title">${response.data[i].category}</h5>
       <p class="card-text">
       ${response.data[i].title}
       </p>
     </div>
   </div>
     </a>
    </div>
      `;
    rowCol.innerHTML = str;
  }
}

async function getPost() {
  try {
    let response = await axios.get(url);
    console.log(response.data);
    getDate(response);
    getCards(response);
    getCategory(response);
  } catch (err) {
    console.log(err);
  }
}
getPost();

function getCategoryId(id) {
  localStorage.setItem("Id", JSON.stringify(id));
}

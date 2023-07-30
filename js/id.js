url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

const navIcons = document.querySelector(".nav__icons");
const navMenuFlex = document.querySelector(".nav-menu__flex");
const business = document.querySelector(".business");
const rowBusiness = document.querySelector(".rowBusiness");

navIcons.addEventListener("click", () => {
  navMenuFlex.classList.toggle("active");
  console.log("hi");
});

function getBusiness(response) {
  let str = "";
  str += `
    <h1 class="business-h1">Category: ${response.data.category}, Id: ${response.data.id}</h1>
        <p class="business-p">
        ${response.data.title}
        </p>
        <a href="#" class="business-text">Blog > ${response.data.category}</a>
    `;
  business.innerHTML = str;
}

function getRowBusiness(response) {
  let str = "";
  str += `
    <div class="colBusiness" id="businessCol">
    <div class="colImg">
      <img
        src="${response.data.img}"
        alt=""
      />
    </div>
    <div class="colText">
      <h6 class="colBusniss">${response.data.category}</h6>
      <p class="colTop">${response.data.title}</p>
      <p class="colP">
      ${response.data.body}
      </p>
    </div>
  </div>
      `;
  rowBusiness.innerHTML = str;
}

async function getPost() {
  try {
    let postId = JSON.parse(localStorage.getItem("Id"));
    console.log(postId);

    let response = await axios.get(`${url}/${postId}`);
    console.log(response.data);
    getBusiness(response);
    getRowBusiness(response);
  } catch (err) {
    console.log(err);
  }
}
getPost();

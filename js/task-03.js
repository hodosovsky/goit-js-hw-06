const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const parrent = document.querySelector(".gallery");
// 1-ий спосіб
const makePhoto = (image) => {
  const { url, alt } = image;

  return `<li>
  <img src=${url} alt=${alt} width = 380>
</li>`;
};

const makeGallery = images.map(makePhoto).join(" ");
parrent.insertAdjacentHTML("beforeend", makeGallery);

// const style = document.querySelector("head");
// const styleEl = `<style>
//       .gallery {
//         display: flex;
//         justify-content: center;
//         gap: 30px;
//         list-style: none;
//         margin-top: 0;
//         margin-bottom: 0;
//       }
//       .gallery img {
//         display: block;
//       }
//     </style>`;
// style.insertAdjacentHTML("beforeend", styleEl);

// 2-ий спосіб
// parrent.style.display = "flex";
// parrent.style.gap = "30px";
// parrent.style.listStyle = "none";
// const gallery = images.map((item) => {
//   const liEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   parrent.appendChild(liEl);
//   liEl.appendChild(imgEl);
//   // liElement.classList.add("item");
//   // liElement.textContent = item;
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   imgEl.width = 320;
//   // console.log(liElement);
//   return liEl;
// });

// parrent.append(...gallery);

// 3-ий спосіб
// parrent.style.display = "flex";
// parrent.style.gap = "30px";
// parrent.style.listStyle = "none";
// const makeElement = (item) => {
//   const liEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   parrent.appendChild(liEl);
//   liEl.appendChild(imgEl);
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   imgEl.width = 380;

//   return liEl;
// };

// const makeList = images.map(makeElement);

// parrent.append(...makeList);

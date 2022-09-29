const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const parrent = document.querySelector("#ingredients");

// const productList = ingredients.map((item) => {
//   const liElement = document.createElement("li");
//   liElement.classList.add("item");
//   liElement.textContent = item;
//   console.log(liElement);
//   return liElement;
// });

// parrent.append(...productList);

// const makelist = (array) => {
//   return array.map((item) => {
//     const liElement = document.createElement("li");
//     liElement.classList.add("item");
//     liElement.textContent = item;
//     console.log(liElement);
//     return liElement;
//   });
// };

// parrent.append(...makelist(ingredients));

const makeElement = (item) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = item;
  return liElement;
};

const makeList = ingredients.map(makeElement);

parrent.append(...makeList);

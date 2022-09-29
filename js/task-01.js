const navEl = document.querySelector("#categories");
const navCategory = navEl.querySelectorAll("ul");

console.log("Number of categories:", navCategory.length);

const categoryGroup = document.querySelectorAll(".item ul");
const title = document.querySelectorAll(".item h2");

for (let i = 0; i < navCategory.length; i += 1) {
  console.log("Category: ", title[i].textContent);
  console.log("Elements: ", categoryGroup[i].childElementCount);
}

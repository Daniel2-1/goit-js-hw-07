const categories = document.querySelector("#categories");
//console.log(categories);

const categoriesL = categories.querySelectorAll(".item");
console.log("Number of categories:", categoriesL.length);

categoriesL.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsNumber = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsNumber}`);
});

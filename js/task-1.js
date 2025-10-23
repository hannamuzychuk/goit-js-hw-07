// const categoriesItem = document.querySelectorAll("ul#categories  li.item");
// const numberOfCategories = categoriesItem.length;
// console.log('Number of categories:', numberOfCategories);

// categoriesItem.forEach(item => {
//     const title = item.querySelector("h2").textContent;
//     const numberOfItems = item.querySelectorAll("ul li").length;
//     console.log(`Category: ${title}`);
//     console.log(`Elements: ${numberOfItems}`);
// });

const categoryItem = document.querySelectorAll("ul#categories li.item");
const countCategoryItem = categoryItem.length;
console.log(`Number of categories: ${countCategoryItem}`);

categoryItem.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const countItem = item.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${countItem}`);
})
const categoryItem = document.querySelectorAll("ul#categories li.item");
const countCategoryItem = categoryItem.length;
console.log(`Number of categories: ${countCategoryItem}`);

categoryItem.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const countItem = item.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${countItem}`);
})
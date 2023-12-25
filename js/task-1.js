const categoriesList = document.querySelectorAll('ul#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const categoryItems = category.querySelectorAll('li');
  console.log(`Elements: ${categoryItems.length}`);
});

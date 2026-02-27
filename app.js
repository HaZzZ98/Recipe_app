const recipes = [
  { name: "Омлет", ingredients: ["яйцо"] },
  { name: "Сырный тост", ingredients: ["хлеб", "сыр"] },
  { name: "Салат", ingredients: ["помидор", "сыр"] }
];

function findRecipes() {

  const checked = Array.from(
    document.querySelectorAll("input:checked")
  ).map(el => el.value);

  const results = document.getElementById("results");
  results.innerHTML = "";

  const availableRecipes = recipes.filter(recipe =>
    recipe.ingredients.every(i => checked.includes(i))
  );

  if (availableRecipes.length === 0) {
    results.innerHTML = "Нет доступных рецептов";
    return;
  }

  availableRecipes.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe";
    div.textContent = r.name;
    results.appendChild(div);
  });
}
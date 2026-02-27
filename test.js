// Простейший тест логики рецептов

function canCook(userIngredients, recipeIngredients) {
    return recipeIngredients.every(ing =>
        userIngredients.includes(ing)
    );
}

// Тестовые данные
const user = ["egg", "cheese", "tomato"];
const recipe = ["egg", "cheese"];

// Проверка
if (canCook(user, recipe)) {
    console.log("TEST PASSED");
    process.exit(0);
} else {
    console.log("TEST FAILED");
    process.exit(1);
}
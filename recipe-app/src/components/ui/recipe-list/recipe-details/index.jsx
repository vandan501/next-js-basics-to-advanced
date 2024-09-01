export default function RecipeDetailsComponent({ recipeDetails }) {
  console.log("details", recipeDetails);
  return (
    <div className="w-[100%] h-[100vh]  bg-white-100">
      <h1 className="text-lg font-bold underline text-blue-700 text-center">
        This is recipe Details page
      </h1>
      <div className=" p-[30px]  flex gap-16 bg-white  justify-center items-start m-auto  shadow-md">
        <div className="h-[100%] flex flex-col w-[40%]">
          <img src={recipeDetails.image} className="w-[250px] h-[250px]" />
          <h2 className="font-bold mt-5">Instructions</h2>
          {recipeDetails.instructions.map((el) => (
            <p>{el}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-red-600 font-bold">
            {recipeDetails.name}
          </h1>
          <h3 className="font-extrabold">Details...</h3>
          <p>
            <b> PrepTimeMinutes :</b>
            {recipeDetails.prepTimeMinutes}
          </p>
          <p>
            <b>CookTimeMinutes :</b>
            {recipeDetails.cookTimeMinutes}
          </p>
          <p>
            <b>Servings :</b>
            {recipeDetails.servings}
          </p>
          <p>
            <b> Difficulty :</b>
            {recipeDetails.difficulty}
          </p>
          <p>
            <b>Cuisine :</b>
            {recipeDetails.cuisine}
          </p>
          <p>
            <b>CaloriesPerServing :</b>
            {recipeDetails.caloriesPerServing}
          </p>
          <p>
            <b>ReviewCount :</b>
            {recipeDetails.reviewCount}
          </p>
          <p>
            <b> MealType : </b>
            {recipeDetails.mealType}
          </p>
          <p>
            <b>Rating: </b>
            {recipeDetails.rating}
          </p>
          <b>Ingredients</b>
          <ul className="">
            {recipeDetails.ingredients.map((i, index) => (
              <li
                key={index}
                className="relative pl-5 before:content-['\2192'] before:absolute before:left-0 before:text-gray-500"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

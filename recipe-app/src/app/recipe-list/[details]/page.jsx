// server side data fetch
import RecipeDetailsComponent from "@/components/ui/recipe-list/recipe-details";
async function fetchrecipedetails(currentRecipeId)
    {
    try {
        const apiResponse=await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const data=await apiResponse.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
    }
export default async function recipeDetails({params})
{
    const recipeDetails=await fetchrecipedetails(params?.details)
    console.log("Params recipe Details",recipeDetails)
    return (
        <RecipeDetailsComponent  recipeDetails={recipeDetails}/>
    )
}
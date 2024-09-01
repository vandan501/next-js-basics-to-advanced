// server side code here i will fetch the data first
import Recipelist from "@/components/ui/recipe-list";
async function fetchrecipedata()
    {
    try {
        const apiResponse=await fetch("https://dummyjson.com/recipes");
        const result=await apiResponse.json();

        return result?.recipes;
    } catch (error) {
        throw new Error(error);
    }
    }
   
export default async function recipeList()
{ 
    const recipeData=await fetchrecipedata();
return( <Recipelist recipeData={recipeData}/>
)
}
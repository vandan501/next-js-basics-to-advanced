"use client"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Link from "next/link"  // Corrected the import
  
export default function Recipelist({recipeData}) {
    console.log("data-->", recipeData.length)
    
    return (
        <div className="w-full min-h-screen bg-white-200">
            <h2 className="text-2xl text-center underline">Recipe List</h2>
            <div className="w-[100%] grid rounded-md grid-cols-1 sm:grid-cols-2 
                md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {recipeData && recipeData.length > 0 ? (
                    recipeData.map(recipe => (
                        <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                            <Card className="bg-white  rounded-md shadow-md overflow-hidden cursor-pointer hover:text-black md:hover:scale-[0.9] duration-200 transition-all hover:bg-gray-100">
                                <CardContent >
                                    <img 
                                        src={recipe.image}
                                        alt={recipe.name} 
                                        className="object-cover  md:w-full md:h-full"
                                    />
                                    <h3 className="p-3 font-bold text-lg text-red-900  text-center ">{recipe.name}</h3>
                                    <div className="flex justify-between items-center">
                                    <h4 className="p-1 font-bold text-lg text-red-900  text-center ">Rating:{recipe.rating}</h4>
                                    <p>{ recipe.cuisine}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <h1>Data is not available</h1>
                )}
            </div>
        </div>
    )
}

import { NextResponse } from "next/server";
import Blog from "@/app/models/blog";
import connectToDb from "../../../..";

export async function GET() {
    try {
        await connectToDb();
        const getAllBlogData=await Blog.find({});
        if(getAllBlogData){
            return NextResponse.json({
                success:true,
                data:getAllBlogData
            })
        }else{
            return NextResponse.json({
                success:false,
                message:"Something went wrong"
            })
        }        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Something went wrong !"
        })
    }
}
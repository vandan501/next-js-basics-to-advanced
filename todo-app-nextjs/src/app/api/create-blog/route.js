  import { NextResponse } from "next/server";
  import connectToDb from "../../../..";
  import Joi  from "joi";//for validation purpose
  import Blog from "@/app/models/blog";//model which i have created
  //here i am getting the title and descriptiom 
  const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  export async function POST(req) {
    try {
      await connectToDb();
  
      const extractBlogData = await req.json();
      const { title, description } = extractBlogData;
      const { error } = AddNewBlog.validate({ title, description });
  
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
  
      const createdBlog = await Blog.create(extractBlogData);
  
      if (createdBlog) {
        return NextResponse.json({
          success: true,
          message: "Your blog has been created successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to create the blog. Please try again.",
        });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later.",
      });
    }
  }

import { NextResponse } from "next/server";
import connectToDb from "../../../..";  // Ensure correct relative path to the DB connection
import Blog from "@/app/models/blog";

export async function DELETE(req) {
  try {
    // Connect to the database
    await connectToDb();

    // Get the blog ID from the request URL query parameters
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    // Check if the blog ID is provided
    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog ID not provided",
      });
    }

    // Attempt to delete the blog by its ID
    const deleteBlogById = await Blog.findByIdAndDelete(getCurrentBlogId);

    // Check if the blog was successfully deleted
    if (deleteBlogById) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    // Handle any errors
    return NextResponse.json({
      success: false,
      message: "Something went wrong while deleting the blog",
      error: error.message, // Include the error message for debugging
    });
  }
}

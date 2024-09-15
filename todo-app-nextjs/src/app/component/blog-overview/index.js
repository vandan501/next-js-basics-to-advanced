"use client";
// import { GET } from "@/app/api/get-blog/route";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
export default function BlogOverview() {
  const initialBlogFormData = {
    title: "",
    description: "",
  };
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [data, setData] = useState([]);
  let count = 1;
  const handleCreateBlogData = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("/api/create-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });

      const result = await apiResponse.json();
      console.log("result of POST request", result);

      if (result?.success === true) {
        setBlogFormData(initialBlogFormData); // Reset form data
        setOpenBlogDialog(false);
        setLoading(false);
        handleGetBlogs();
        // router.refresh();
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleGetBlogs = async () => {
    try {
      setLoading(true)
      const apiResponse = await fetch("/api/get-blog", {
        method: "GET",
      });

      const result = await apiResponse.json();
      console.log("result of GET request", result?.data);

      if (result?.data) {
        setData(result?.data); 
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog=async ()=>{
    try {
      
    } catch (error) {
      console.error("error",error)
    }
  }

  useEffect(() => {
    handleGetBlogs(); // Fetch blogs on component mount
  }, []);

  return (
    <div className="bg-blue-600 w-full min-h-screen overflow-hidden flex flex-col gap-10">
      <div className="w-full h-[10vh] flex justify-center items-center">
        <Button
          variant="outline"
          className="w-[150px]"
          onClick={() => setOpenBlogDialog(true)}
        >
          Add New Blog
        </Button>
        <Dialog
          open={openBlogDialog}
          onOpenChange={() => {
            setOpenBlogDialog(false);
            setBlogFormData(initialBlogFormData);
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Blog</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter Blog Title"
                  className="col-span-3"
                  required
                  value={blogFormData.title}
                  onChange={(event) => {
                    setBlogFormData({
                      ...blogFormData,
                      title: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  required
                  placeholder="Enter Blog Description"
                  className="col-span-3"
                  value={blogFormData.description}
                  onChange={(event) => {
                    setBlogFormData({
                      ...blogFormData,
                      description: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCreateBlogData}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full flex flex-col pl-5 overflow-auto h-[100%] gap-5">
        <h1 className="text-yellow-200  font-bold text-3xl">
          Blog List Section
        </h1>
        <div className="flex flex-col gap-5 w-full justify-center items-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data?.map((blog, index) => (
              <div
                key={index}
                className="bg-white w-[90%] p-4 rounded-md shadow"
              > 
                <h2 className="text-xl font-bold"> {count++} :- {blog.title}</h2>
                <p>{blog.description}</p>
                <div className="flex justify-between w-full mt-5">
                  <button className="bg-green-500 text-white w-[100px] rounded-md p-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white w-[100px] rounded-md p-2">
                    delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

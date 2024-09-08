"use client";
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
import { useState } from "react";

export default function BlogOverview() {
  const initialBlogFormData = {
    title: "",
    description: "",
  };
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  const handleCreateBlogData = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("/api/create-blog",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });

      const result = await apiResponse.json();
      console.log("result of POST request", result);

      if (result?.success) {
        setBlogFormData(initialBlogFormData); // Reset form data
        setOpenBlogDialog(false);
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
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
      </div>
    </div>
  );
}
